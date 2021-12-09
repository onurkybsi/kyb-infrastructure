/**
 * Provides various functionalities for string operations
 * @author Onur Kayabasi
 */

const EMPTY_STRING: string = "";

/**
 * Checks string typed value has valid value or not
 * @param value Any string value
 * @returns true if value is valid
 */
const isValid = (value: string | null | undefined): boolean => {
    if (!value)
        return false;
    if (value.trim() === EMPTY_STRING)
        return false;
    return true;
}

export { isValid }