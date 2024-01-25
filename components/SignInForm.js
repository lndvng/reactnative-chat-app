import React from "react";
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { validateEmail, validatePassword } from "../utils/validationConstraints";

const SignInForm = () => {

    const inputChangedHandler = (inputId, inputValue) => {
        if (inputId === "email") {
            console.log(validateEmail(inputId, inputValue))
        }
        else if (inputId === "password") {
            console.log(validatePassword(inputId, inputValue))
        }
    }

    return (
            <>
                <Input
                    id="email"
                    label="Email"
                    icon="email-outline"              autoCapitalize="none"
                    keyboardType="email-address"
                    iconPack={MaterialCommunityIcons}
                    onInputChanged={inputChangedHandler} />
                <Input
                    id="password"
                    label="Password"
                    icon="key"                    autoCapitalize="none"
                    secureTextEntry
                    iconPack={Octicons}                     onInputChanged={inputChangedHandler} />
                <SubmitButton 
                    title="Sign In" 
                    onPress={() => console.log("Button Pressed")}
                    disabled={true}
                    style={{ marginTop: 20 }}  />
            </>
    )
};

export default SignInForm;