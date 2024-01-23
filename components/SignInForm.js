import React from "react";
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';

const SignInForm = () => {

    return (
            <>
                <Input
                    label="Email"
                    icon="email-outline"
                    iconPack={MaterialCommunityIcons} />
                <Input
                    label="Password"
                    icon="key"
                    iconPack={Octicons} />
                <SubmitButton 
                    title="Sign In" 
                    onPress={() => console.log("Button Pressed")}
                    disabled={true}
                    style={{ marginTop: 20 }}  />
            </>
    )
};

export default SignInForm;