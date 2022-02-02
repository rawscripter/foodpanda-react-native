import React from 'react';
import { StatusBar, View, SafeAreaView } from "react-native";
import styled from 'styled-components/native';
import { Text } from '../../../components/typography/text.component';


const SafeContainer = styled(SafeAreaView)`
       flex:1;
`;

export const SettingsScreen = () => {
    return (
        <>
            <SafeContainer >
                <Text variant="body"> Maps Screen</Text>
            </SafeContainer>
        </>
    );
}
