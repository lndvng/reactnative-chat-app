import React, { useCallback, useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import PageTitle from '../components/PageTitle';
import PageContainer from '../components/PageContainer';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';
import Input from '../components/Input';

const initialState = {
    inputValues: {
        firstName: "",
        lastName: "",
        email: "",
        about: "",
    },
    inputValidities: {
        firstName: false,
        lastName: false,
        email: false,
        about: false,
    },
    formIsValid: false
}

const SettingScreen = (props) => {

    const userData = useSelector(state => state.auth.userData);

    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result, inputValue })
    }, [dispatchFormState]);

    return <PageContainer style={styles.container}>
        <PageTitle text="Settings" />

        <Input
            id="firstName"
            label="First Name"
            icon="user"
            autoCapitalize="none"
            iconPack={FontAwesome5} 
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities["firstName"]} 
            initialValue={userData.firstName} />
        <Input
            id="lastName"
            label="Last Name"
            icon="user"
            autoCapitalize="none"
            iconPack={FontAwesome5} 
            onInputChanged={inputChangedHandler} 
            errorText={formState.inputValidities["lastName"]}
            initialValue={userData.lastName} />
        <Input
            id="email"
            label="Email"
            icon="email-outline"
            autoCapitalize="none"
            keyboardType="email-address"
            iconPack={MaterialCommunityIcons} 
            onInputChanged={inputChangedHandler} 
            errorText={formState.inputValidities["email"]}
            initialValue={userData.email} />
        <Input
            id="about"
            label="About"
            icon="user"
            autoCapitalize="none"
            iconPack={FontAwesome5} 
            onInputChanged={inputChangedHandler} 
            errorText={formState.inputValidities["about"]}
            initialValue={userData.about} />
    </PageContainer>
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default SettingScreen;