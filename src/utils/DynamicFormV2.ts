export abstract class DynamicForm<T> {
  constructor(
    protected _fields: T[] = [],
    protected _minFields = 1,
    protected _maxFields = 1,
  ) {}

  abstract addFields(template: T): void;
  abstract removeFields(index: number): void;
  abstract removeAllFields(): void;

  get fields(): T[] {
    return this._fields;
  }

  get minFields(): number {
    return this._minFields;
  }

  get maxFields(): number {
    return this._maxFields;
  }

  get fieldLength(): number {
    return this._fields.length;
  }
}
