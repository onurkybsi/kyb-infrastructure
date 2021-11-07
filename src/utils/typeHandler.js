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

module.exports = {
  TypeNames,
  getType,
};