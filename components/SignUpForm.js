import React from "react";
import { FontAwesome5, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { validateInput } from "../utils/actions/formActions";

const SignUpForm = () => {

    const inputChangedHandler = (inputId, inputValue) => {
        console.log(validateInput(inputId, inputValue));
    }

    return (
            <>
                <Input
                    id="firstName"
                    label="First Name"
                    icon="user"
                    autoCapitalize="none"
                    iconPack={FontAwesome5} 
                    onInputChanged={inputChangedHandler} />
                <Input
                    id="lastName"
                    label="Last Name"
                    icon="user"
                    autoCapitalize="none"
                    iconPack={FontAwesome5} 
                    onInputChanged={inputChangedHandler} />
                <Input
                    id="email"
                    label="Email"
                    icon="email-outline"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    iconPack={MaterialCommunityIcons} 
                    onInputChanged={inputChangedHandler} />
                <Input
                    id="password"
                    label="Password"
                    icon="key"
                    autoCapitalize="none"
                    secureTextEntry
                    iconPack={Octicons} 
                    onInputChanged={inputChangedHandler} />
                <SubmitButton 
                    title="Sign Up" 
                    onPress={() => console.log("Button Pressed")}
                    disabled={true}
                    style={{ marginTop: 20 }}  />
            </>
    )
};

export default SignUpForm;