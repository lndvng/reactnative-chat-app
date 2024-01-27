import React, { useCallback, useEffect, useReducer, useState } from "react";
import { FontAwesome5, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ActivityIndicator, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";
import { signUp } from "../utils/actions/authActions";
import colors from "../constants/colors";



const initialState = {
    inputValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    },
    inputValidities: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    },
    formIsValid: false
}

const SignUpForm = () => {

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

    const authHandler = async () => {
        try {
            setIsLoading(true);

            const action = signUp(
                formState.inputValues.firstName,
                formState.inputValues.lastName,
                formState.inputValues.email,
                formState.inputValues.password,
            );
            dispatch(action);
            setError(null);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    }

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

export default SignUpForm;