import { StringUtilities } from "../../src/index";

it('isValid returns false if the given value is undefined', () => {
    // Arrange
    let value = undefined;
    // Act 
    let actual = StringUtilities.isValid(value);
    // Assert
    expect(actual).toBe(false);
})

it('isValid returns false if the given value is null', () => {
    // Arrange
    let value = null;
    // Act 
    let actual = StringUtilities.isValid(value);
    // Assert
    expect(actual).toBe(false);
})

it('isValid returns false if the given value is empty string', () => {
    // Arrange
    let value: string = " ";
    // Act 
    let actual = StringUtilities.isValid(value);
    // Assert
    expect(actual).toBe(false);
})

it('isValid returns true if the given value has any nonempty value', () => {
    // Arrange
    let value: string = "nonEmptyValue";
    // Act 
    let actual = StringUtilities.isValid(value);
    // Assert
    expect(actual).toBe(true);
})