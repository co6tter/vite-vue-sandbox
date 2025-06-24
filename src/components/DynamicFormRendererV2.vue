<script setup lang="ts">
import { useForm } from "vee-validate";
import { computed } from "vue";

import InputField from "./InputField.vue";

import { useFormStore } from "@/stores/formStoreV2";
import type { FieldConfig } from "@/utils/DynamicFormGroup";

const store = useFormStore();

// const baseField: FieldConfig = {
//   name: "contact",
//   subFields: [
//     {
//       label: "First Name",
//       name: "",
//       fieldName: "fname",
//       type: "text",
//       validationName: "fname",
//       validationType: "string",
//       validations: [{ type: "required" }, { type: "min", params: [3] }],
//     },
//     {
//       label: "Last Name",
//       name: "",
//       fieldName: "lname",
//       type: "text",
//       validationName: "lname",
//       validationType: "string",
//       validations: [{ type: "required" }],
//     },
//   ],
// };

const createBaseField = (index: number): FieldConfig => ({
  name: "contact",
  subFields: [
    {
      label: "First Name" + index,
      name: "",
      fieldName: "fname",
      type: "text",
      validationName: "fname",
      validationType: "string",
      validations: [{ type: "required" }, { type: "min", params: [3] }],
    },
    {
      label: "Last Name",
      name: "",
      fieldName: "lname",
      type: "text",
      validationName: "lname",
      validationType: "string",
      validations: [{ type: "required" }],
    },
  ],
});

if (!store.form.fieldLength) {
  // store.init(baseField);
  store.init(createBaseField);
}

const schema = computed(() => store.schema);
const fields = computed(() => store.form.fields);
const fieldLength = computed(() => store.form.fieldLength);

const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: store.formValues,
});

const invalidSubmit = (values: unknown) => {
  console.log("invalidSubmit: ", values);
};
const onSubmit = handleSubmit((validated) => {
  console.log("validated values: ", validated);
}, invalidSubmit);

function add() {
  // store.addField(baseField);
  store.addField(createBaseField);
}
function remove(idx: number) {
  store.removeField(idx);
}
</script>

<template>
  <div>
    <form class="flex flex-col gap-4" @submit="onSubmit">
      <template v-for="(field, fi) in fields" :key="field.name">
        <div class="p-5 border rounded-lg relative">
          <button
            v-if="fieldLength > 1"
            class="absolute top-1 right-1 text-red-600"
            type="button"
            @click="remove(fi)"
          >
            ✕
          </button>

          <div class="flex flex-col gap-4">
            <InputField
              v-for="sub in field.subFields"
              :key="sub.name"
              :sub="sub"
              :field-path="`${field.name}[${fi}].${sub.fieldName}`"
              :model-value="store.formValues[fi][sub.fieldName]"
              @update:model-value="
                (v) => (store.formValues[fi][sub.fieldName] = v)
              "
            />
          </div>
        </div>
      </template>

      <div class="flex gap-4">
        <button
          type="button"
          class="rounded-lg p-2 bg-pink-600 text-white"
          @click="add"
        >
          Add Field Group
        </button>
        <button type="submit" class="rounded-lg p-2 bg-emerald-600 text-white">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
