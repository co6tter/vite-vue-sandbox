import { defineStore } from "pinia";

import { DynamicForm } from "@/utils/DynamicForm.ts";

interface FormFields {
  id: number;
  input: string;
  radio: string;
  checkbox: boolean;
  select: string;
}

class FormManager extends DynamicForm<FormFields> {
  private _availableNumbers: number[] = [];
  constructor(maxFields = 1) {
    super([], 1, maxFields);
    this.initAvailableNumbers(maxFields);
  }

  get availableNumbers() {
    return this._availableNumbers;
  }

  initAvailableNumbers(maxFields: number) {
    this._availableNumbers = Array.from({ length: maxFields }, (_, i) => i + 1);
  }

  addFields() {
    if (this.fieldLength >= this.maxFields) {
      return;
    }
    const nextAvailableNumber = this._availableNumbers.shift();
    if (nextAvailableNumber !== undefined) {
      this._fields.push({
        id: nextAvailableNumber,
        input: "",
        radio: "",
        checkbox: false,
        select: "",
      });
    }
  }

  removeFields(id: number) {
    if (this.fieldLength <= this.minFields) {
      return;
    }
    const index = this._fields.findIndex((field) => field.id === id);
    if (index !== -1) {
      this._fields.splice(index, 1);
      this.availableNumbers.push(id);
      this.availableNumbers.sort();
    }
  }

  removeAllFields() {
    this._fields = [];
    this.initAvailableNumbers(this.maxFields);
  }
}

export const useFormStore = defineStore("formStore", {
  state: () => ({
    formManager: new FormManager(5),
  }),

  getters: {
    fields: (state) => state.formManager.fields,
    fieldLength: (state) => state.formManager.fieldLength,
    availableNumbers: (state) => state.formManager.availableNumbers,
  },

  actions: {
    addForm() {
      this.formManager.addFields();
    },
    removeForm(number: number) {
      this.formManager.removeFields(number);
    },
    removeAllForms() {
      this.formManager.removeAllFields();
    },
  },
});
