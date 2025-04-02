export abstract class DynamicForm<T> {
  constructor(
    protected _fields: T[] = [],
    protected _minFields = 1,
    protected _maxFields = 1,
  ) {}

  abstract addFields(): void;
  abstract removeFields(number?: number): void;
  abstract removeAllFields(): void;

  get fields() {
    return this._fields;
  }

  get minFields() {
    return this._minFields;
  }

  get maxFields() {
    return this._maxFields;
  }

  get fieldLength() {
    return this._fields.length;
  }
}
