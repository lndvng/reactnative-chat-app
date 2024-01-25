import React from "react";
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { validateInput } from "../utils/actions/formActions";

const SignInForm = () => {

    const inputChangedHandler = (inputId, inputValue) => {
        console.log(validateInput(inputId, inputValue));
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