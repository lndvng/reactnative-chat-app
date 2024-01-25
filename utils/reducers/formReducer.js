export const reducer = (state, action) => {
    const { validationResult, inputId } = action

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
        inputValidities: updatedValidities,
        formIsValid: updatedFormisValid
    };
}