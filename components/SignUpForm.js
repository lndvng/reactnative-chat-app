import React from "react";
import { FontAwesome5, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';

const SignUpForm = () => {

    const inputChangedHandler = (inputId, inputValue) => {
        console.log("InputId" + inputId)
        console.log("InputValue" + inputValue)
    }

    return (
            <>
                <Input
                    id="firstName"
                    label="First Name"
                    icon="user"
                    iconPack={FontAwesome5} 
                    onInputChanged={inputChangedHandler} />
                <Input
                    id="lastName"
                    label="Last Name"
                    icon="user"
                    iconPack={FontAwesome5} 
                    onInputChanged={inputChangedHandler} />
                <Input
                    id="email"
                    label="Email"
                    icon="email-outline"
                    iconPack={MaterialCommunityIcons} 
                    onInputChanged={inputChangedHandler} />
                <Input
                    id="password"
                    label="Password"
                    icon="key"
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