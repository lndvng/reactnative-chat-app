import React, { useCallback, useReducer, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import PageTitle from '../components/PageTitle';
import PageContainer from '../components/PageContainer';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';
import Input from '../components/Input';
import colors from '../constants/colors';
import SubmitButton from '../components/SubmitButton';
import { updateSignedInUserData, userLogout } from '../utils/actions/authActions';
import { updateLoggedInUserData } from '../store/authSlice';

const SettingScreen = (props) => {

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const userData = useSelector(state => state.auth.userData);

    const firstName = userData.firstName || "";
    const lastName = userData.lastName || "";
    const email = userData.email || "";
    const about = userData.about || "";

    const initialState = {
        inputValues: {
            firstName,
            lastName,
            email,
            about,
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

    const saveHandler = useCallback(async () => {
        const updatedValues = formState.inputValues;

        try {
            setIsLoading(true);
            await updateSignedInUserData(userData.userId, updatedValues);
            dispatch(updateLoggedInUserData({ newData: updatedValues }));

            setShowSuccessMessage(true);

            // set success message to disappear after 3 seconds 
            setTimeout(() => {
                setShowSuccessMessage(false)
            }, 3000);
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }, [formState, dispatch]);

    const hasChanges = () => {
        const currentValues = formState.inputValues;

        return currentValues.firstName != firstName || 
        currentValues.lastName != lastName || 
        currentValues.email != email || 
        currentValues.about != about;

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
        <View style={{ marginTop: 20 }}>
            {
                showSuccessMessage && <Text>Saved!</Text>
            }

            {
                isLoading ?
                    <ActivityIndicator size={"small"} color={colors.primary} style={{ marginTop: 10 }} /> :
                    hasChanges() && <SubmitButton
                        title="Save"
                        onPress={saveHandler}
                        disabled={!formState.formIsValid}
                        style={{ marginTop: 20 }} />
            }
        </View>

        <SubmitButton
            title="Logout"
            onPress={() => dispatch(userLogout())}
            style={{ marginTop: 20 }}
            color={colors.red} />

    </PageContainer>
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default SettingScreen;