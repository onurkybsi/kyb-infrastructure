const kybInfrastructure = require("../../src/index");

let typeHandler;
if (kybInfrastructure) {
  typeHandler = kybInfrastructure.typeHandler;
} else {
  throw new Error("typeHandler couldn't be loaded!");
}

//#region getType tests
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
//#endregion

//#region getDefaultValue tests (There are some missing test should be added!!)
test("getDefaultValue_Returns_Empty_String_If_Type_Name_Is_String", () => {
  expect(typeHandler.getDefaultValue(typeHandler.TypeNames.String)).toBe("");
});

test("getDefaultValue_Returns_False_If_Type_Name_Is_Boolean", () => {
  expect(typeHandler.getDefaultValue(typeHandler.TypeNames.Boolean)).toBe(
    false
  );
});

test("getDefaultValue_Returns_Zero_If_Type_Name_Is_Number", () => {
  expect(typeHandler.getDefaultValue(typeHandler.TypeNames.Number)).toBe(0);
});

test("getDefaultValue_Returns_Null_If_Type_Name_Is_Object", () => {
  expect(typeHandler.getDefaultValue(typeHandler.TypeNames.Object)).toBe(null);
});

test("getDefaultValue_Returns_Undefined_If_Type_Name_Is_Undefined", () => {
  expect(typeHandler.getDefaultValue(typeHandler.TypeNames.Undefined)).toBe(
    undefined
  );
});
//#endregion

//#region hasDefaultValue (There are some missing test should be added!!)
test("hasDefaultValue_Returns_True_If_Value_Is_Empty_String", () => {
  expect(typeHandler.hasDefaultValue("")).toBe(true);
});

test("hasDefaultValue_Returns_False_If_Value_Is_Different_From_Empty_String", () => {
  expect(typeHandler.hasDefaultValue("-")).toBe(false);
});

test("hasDefaultValue_Returns_True_If_Value_Is_False", () => {
  expect(typeHandler.hasDefaultValue(false)).toBe(true);
});

test("hasDefaultValue_Returns_False_If_Value_Is_Different_From_False", () => {
  expect(typeHandler.hasDefaultValue(true)).toBe(false);
});

test("hasDefaultValue_Returns_True_If_Value_Is_Zero", () => {
  expect(typeHandler.hasDefaultValue(0)).toBe(true);
});

test("hasDefaultValue_Returns_False_If_Value_Is_Different_From_Zero", () => {
  expect(typeHandler.hasDefaultValue(1)).toBe(false);
});

test("hasDefaultValue_Returns_True_If_Value_Is_Null", () => {
  expect(typeHandler.hasDefaultValue(null)).toBe(true);
});

test("hasDefaultValue_Returns_False_If_Value_Is_Different_From_Null", () => {
  expect(typeHandler.hasDefaultValue({})).toBe(false);
});

test("hasDefaultValue_Returns_True_If_Value_Is_Undefined", () => {
  expect(typeHandler.hasDefaultValue(undefined)).toBe(true);
});

test("hasDefaultValue_Returns_False_If_Value_Is_Different_From_Undefined", () => {
  expect(typeHandler.hasDefaultValue({})).toBe(false);
});
//#endregion
