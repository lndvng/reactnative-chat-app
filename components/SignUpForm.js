import React, { useCallback, useReducer } from "react";
import { FontAwesome5, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";

const initialState ={
    inputValidities:{
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    },
    formIsValid: false
}

const SignUpForm = () => {

    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result })
    }, [dispatchFormState]);

    return (
            <>
                <Input
                    id="firstName"
                    label="First Name"
                    icon="user"
                    autoCapitalize="none"
                    iconPack={FontAwesome5} 
                    onInputChanged={inputChangedHandler}
                    errorText={formState.inputValidities["firstName"]}  />
                <Input
                    id="lastName"
                    label="Last Name"
                    icon="user"
                    autoCapitalize="none"
                    iconPack={FontAwesome5} 
                    onInputChanged={inputChangedHandler} 
                    errorText={formState.inputValidities["lastName"]} />
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
                    title="Sign Up" 
                    onPress={() => console.log("Button Pressed")}
                    disabled={!formState.formIsValid}
                    style={{ marginTop: 20 }}  />
            </>
    )
};

export default SignUpForm;