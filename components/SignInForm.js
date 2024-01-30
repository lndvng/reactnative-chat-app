import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ActivityIndicator, Alert } from "react-native";
import { useDispatch } from "react-redux";

import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";
import { signIn } from "../utils/actions/authActions";
import colors from "../constants/colors";

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

    const dispatch = useDispatch();

    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result, inputValue })
    }, [dispatchFormState]);

    useEffect(() => {
        if (error) {
            Alert.alert("Error", error);
        }
    }, [error])

    const authHandler = useCallback(async () => {
        try {
            setIsLoading(true);

            const action = signIn(
                formState.inputValues.email,
                formState.inputValues.password,
            );
            setError(null);
            await dispatch(action);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }, [dispatch, formState]);

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
                {           
                    isLoading ?
                    <ActivityIndicator size={"small"} color={colors.primary} style={{ marginTop: 10 }}/> :      
                    <SubmitButton 
                        title="Sign Up" 
                        onPress={authHandler}
                        disabled={!formState.formIsValid}
                        style={{ marginTop: 20 }}  />
                }
            </>
    )
};

export default SignInForm;