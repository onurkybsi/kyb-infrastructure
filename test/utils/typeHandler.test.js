const kybInfrastructure = require("../../src/index");

let typeHandler;
if (kybInfrastructure) {
  typeHandler = kybInfrastructure.typeHandler;
} else {
  throw new Error("typeHandler couldn't be loaded!");
}

test("getType_Returns_String_If_Type_Of_Value_Is_String", () => {
  expect(typeHandler.getType("string")).toBe(typeHandler.TypeNames.String);
});

test("getType_Returns_Boolean_If_Type_Of_Value_Is_Boolean", () => {
  expect(typeHandler.getType(true)).toBe(typeHandler.TypeNames.Boolean);
});

test("getType_Returns_Function_If_Type_Of_Value_Is_Function", () => {
  expect(
    typeHandler.getType(() => {
      throw new Error("Implementation is not required!");
    })
  ).toBe(typeHandler.TypeNames.Function);
});

test("getType_Returns_Number_If_Type_Of_Value_Is_Number", () => {
  expect(typeHandler.getType(1)).toBe(typeHandler.TypeNames.Number);
});

test("getType_Returns_Object_If_Type_Of_Value_Is_Null", () => {
  expect(typeHandler.getType(null)).toBe(typeHandler.TypeNames.Object);
});

test("getType_Returns_Object_If_Value_Object", () => {
  expect(typeHandler.getType({})).toBe(typeHandler.TypeNames.Object);
});

test("getType_Returns_Symbol_If_Value_Symbol", () => {
  expect(typeHandler.getType(Symbol())).toBe(typeHandler.TypeNames.Symbol);
});

test("getType_Returns_Undefined_If_Value_Undefined", () => {
  expect(typeHandler.getType(undefined)).toBe(typeHandler.TypeNames.Undefined);
});

test("getType_Returns_NameOfConstructor_If_Value_Has_A_Constructor", () => {
  function Class(prop) {
    this.prop = prop;
  }
  let object = new Class(0);
  expect(typeHandler.getType(object)).toBe("Class");
});