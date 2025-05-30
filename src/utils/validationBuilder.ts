/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from "yup";

const generateSchema = (schema: any, field: any) => {
  const {
    validationName,
    validationType,
    validationTypeError,
    validations = [],
    validationDependencies,
  } = field;

  if (!(validationName && validationType)) {
    return schema;
  }
  const isObject = validationName && validationName.indexOf(".") >= 0;

  if (!(yup as any)[validationType]) {
    return schema;
  }

  let validator = (yup as any)
    [validationType]()
    .typeError(validationTypeError || "");
  validations.forEach((validation: any) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    if (params?.length) {
      validator = validator[type](...params);
    } else {
      validator = validator[type]();
    }
  });

  if (!isObject) {
    return schema.concat(
      yup
        .object()
        .shape(
          { [validationName as string]: validator },
          validationDependencies as readonly [string, string][],
        ),
    );
  }

  const reversePath = validationName?.split(".").reverse();
  const nestedObject = reversePath?.slice(1).reduce(
    (yupObj: any, path: any) => {
      if (!isNaN(Number.parseInt(path))) {
        return { array: yup.array().of(yup.object().shape(yupObj)) };
      }
      if (yupObj.array) {
        return { [path]: yupObj.array };
      }
      return { [path]: yup.object().shape(yupObj) };
    },
    { [reversePath[0]]: validator },
  );
  if (nestedObject) {
    const newSchema = yup.object().shape(nestedObject);
    return schema.concat(newSchema);
  }
};

export const createSchema = (fields: any[]) => {
  let mainSchema: any = yup.object();
  fields.forEach((field) => {
    const subSchema = yup
      .array()
      .of(field.subFields.reduce(generateSchema, yup.object().shape({})));

    mainSchema = mainSchema.shape({
      ...mainSchema.fields,
      [field.name]: subSchema,
    });
  });

  return mainSchema;
};
