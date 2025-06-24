import { defineStore } from "pinia";

import type { FieldConfig } from "@/utils/DynamicFormGroup";
import { DynamicFormGroup } from "@/utils/DynamicFormGroup";
import { createSchema } from "@/utils/validationBuilder";

export const useFormStore = defineStore("formStoreV2", {
  state: () => ({
    form: new DynamicFormGroup(1, 10),
    formValues: [] as Record<string, unknown>[],
    schema: {} as ReturnType<typeof createSchema>,
  }),
  actions: {
    init(templateField: FieldConfig | ((index: number) => FieldConfig)) {
      this.form.addFields(templateField);
      this.updateFormValues();
      this.updateSchema();
    },
    addField(templateField: FieldConfig | ((index: number) => FieldConfig)) {
      this.form.addFields(templateField);
      this.updateFormValues();
      this.updateSchema();
    },
    removeField(index: number) {
      this.form.removeFields(index);
      this.formValues.splice(index, 1);
      this.updateSchema();
    },
    removeAll() {
      this.form.removeAllFields();
      this.formValues = [];
      this.updateSchema();
    },
    updateFormValues() {
      const lastGroup = this.form.fields[this.form.fieldLength - 1];
      const bag: Record<string, unknown> = {};
      lastGroup.subFields.forEach((sf) => {
        bag[sf.fieldName] = sf.type === "checkbox" ? false : "";
      });
      this.formValues.push(bag);
    },
    updateSchema() {
      this.schema = createSchema(this.form.fields);
    },
  },
});
