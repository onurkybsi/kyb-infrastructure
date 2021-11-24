const EMPTY_STRING: string = "";

/**
 * Provides various functionalities for string operations
 */
class StringHelper {
    /**
     * Checks string typed value has valid value or not
     * @param value Any string value
     * @returns true if value is valid
     */
    public isValid = (value: string): boolean => {
        if (!value)
            return false;
        if (value === EMPTY_STRING)
            return false;
        return true;
    }
}

/**
 * Instance of StringHelper
 */
const instance: StringHelper = new StringHelper();

export default instance;