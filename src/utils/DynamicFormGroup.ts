import { nanoid } from "nanoid";

import { DynamicForm } from "./DynamicFormV2";
// import { makeArrayPathString } from "./helper";

export interface SubFieldConfig {
  label: string;
  name?: string;
  fieldName: string;
  type: "text" | "checkbox" | "number" | "select" | "date";
  validationName: string;
  validationType: "string" | "number" | "boolean" | "date" | "array" | "object";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validations: any[];
  validationDependencies?: string[];
}

export interface FieldConfig {
  name: string;
  subFields: SubFieldConfig[];
}

export class DynamicFormGroup extends DynamicForm<FieldConfig> {
  constructor(min = 1, max = 10) {
    super([], min, max);
  }

  addFields(template: FieldConfig | ((index: number) => FieldConfig)): void {
    if (this.fieldLength >= this._maxFields) {
      return;
    }

    const index = this.fieldLength;
    const t = typeof template === "function" ? template(index) : template;
    const baseName = t.name;

    const subFields: SubFieldConfig[] = t.subFields.map((sf) => ({
      ...sf,
      // name: makeArrayPathString(baseName, index, sf.fieldName),
      name: `${baseName}_${sf.fieldName}_${nanoid(4)}`,
    }));

    const newField: FieldConfig = {
      name: baseName,
      subFields,
    };

    this._fields.push(newField);
  }

  removeFields(index: number): void {
    if (this._fields.length <= this._minFields) {
      return;
    }

    this._fields.splice(index, 1);
  }

  removeAllFields(): void {
    this._fields.splice(0, this._fields.length);
  }
}
