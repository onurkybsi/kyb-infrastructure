const TypeNames = {
  String: "string",
  Boolean: "boolean",
  Function: "function",
  Number: "number",
  Object: "object",
  Symbol: "symbol",
  Undefined: "undefined",
};

const getType = (value) => {
  let type = typeof value;
  if (type !== TypeNames.Object) return type;
  if (value === null) return TypeNames.Object;
  if (value.constructor.name.toLowerCase() !== TypeNames.Object)
    return value.constructor.name;
  return TypeNames.Object;
};

const getDefaultValue = (typeName) => {
  if (getType(typeName) !== TypeNames.String)
    throw new Error("typeName must be a string!");

  if (typeName === TypeNames.String) return "";
  if (typeName === TypeNames.Boolean) return false;
  if (typeName === TypeNames.Function) return Function();
  if (typeName === TypeNames.Number) return 0;
  if (typeName === TypeNames.Object) return null;
  if (typeName === TypeNames.Symbol) return Symbol();
  if (typeName === TypeNames.Undefined) return undefined;
  // TO-DO: new Class() default value will be added
  throw new Error("typeName is unknown!");
};

const hasDefaultValue = (value) => {
  let typeOfValue = getType(value);
  return value === getDefaultValue(typeOfValue);
};

module.exports = {
  TypeNames,
  getType,
  getDefaultValue,
  hasDefaultValue,
};
