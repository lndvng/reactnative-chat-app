import React, { useCallback, useReducer } from "react";
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";
import { signUp } from "../utils/actions/authActions";

const initialState = {
    inputValues: {
        email: "",
        password: "",
    },
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false
}

const SignInForm = () => {

    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result, inputValue })
    }, [dispatchFormState]);

    const authHandler = () => {
        signUp(
            formState.inputValues.email,
            formState.inputValues.password,
            )
    }

    return (
            <>
                <Input
                    id="email"
                    label="Email"
                    icon="email-outline"              
                    autoCapitalize="none"
                    keyboardType="email-address"
                    iconPack={MaterialCommunityIcons}
                    onInputChanged={inputChangedHandler}
                    errorText={formState.inputValidities["email"]} />
                <Input
                    id="password"
                    label="Password"
                    icon="key"                    
                    autoCapitalize="none"
                    secureTextEntry
                    iconPack={Octicons}                     
                    onInputChanged={inputChangedHandler}
                    errorText={formState.inputValidities["password"]}  />
                <SubmitButton 
                    title="Sign In" 
                    onPress={authHandler}
                    disabled={!formState.formIsValid}
                    style={{ marginTop: 20 }}  />
            </>
    )
};

export default SignInForm;