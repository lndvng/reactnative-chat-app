export const reducer = (state, action) => {
    const { validationResult, inputId, inputValue } = action

    const updatedValues = {
        ...state.inputValues,
        [inputId]: inputValue
    };

    const updatedValidities = {
        ...state.inputValidities,
        [inputId]: validationResult
    };

    let updatedFormisValid = true;

    for (const key in updatedValidities) {
        if (updatedValidities[key] !== undefined) {
            updatedFormisValid = false;
            break;
        }
    }

    return {
        inputValues: updatedValues,
        inputValidities: updatedValidities,
        formIsValid: updatedFormisValid
    };
}