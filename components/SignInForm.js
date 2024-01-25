import React, { useCallback, useReducer } from "react";
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";

const initialState ={
    inputValidities:{
        email: false,
        password: false,
    },
    formIsValid: false
}

const SignInForm = () => {

    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result })
    }, [dispatchFormState]);

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
                    onPress={() => console.log("Button Pressed")}
                    disabled={!formState.formIsValid}
                    style={{ marginTop: 20 }}  />
            </>
    )
};

export default SignInForm;