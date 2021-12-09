"use strict";
/**
 * Provides various functionalities for string operations
 * @author Onur Kayabasi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = void 0;
const EMPTY_STRING = "";
/**
 * Checks string typed value has valid value or not
 * @param value Any string value
 * @returns true if value is valid
 */
const isValid = (value) => {
    if (!value)
        return false;
    if (value.trim() === EMPTY_STRING)
        return false;
    return true;
};
exports.isValid = isValid;
