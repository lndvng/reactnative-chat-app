import React, { useCallback, useReducer, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import PageTitle from '../components/PageTitle';
import PageContainer from '../components/PageContainer';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';
import Input from '../components/Input';
import colors from '../constants/colors';
import SubmitButton from '../components/SubmitButton';

const SettingScreen = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const userData = useSelector(state => state.auth.userData);

    const initialState = {
        inputValues: {
            firstName: userData.firstName || "",
            lastName: userData.lastName || "",
            email: userData.email || "",
            about: userData.about || "",
        },
        inputValidities: {
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            about: undefined,
        },
        formIsValid: false
    }

    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result, inputValue })
    }, [dispatchFormState]);

    const saveHandler = () => {

    }

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

        {
            isLoading ?
            <ActivityIndicator size={"small"} color={colors.primary} style={{ marginTop: 10 }} /> :
            <SubmitButton
                title="Save"
                onPress={saveHandler}
                disabled={!formState.formIsValid}
                style={{ marginTop: 20 }} />
        }
    </PageContainer>
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default SettingScreen;