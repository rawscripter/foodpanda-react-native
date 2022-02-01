import React from 'react';
import { StatusBar, SafeAreaView, View } from "react-native";
import { Searchbar } from 'react-native-paper';
import { ResturentInfoComponentCard } from '../components/resturent-info-card.component';
import styled from 'styled-components/native';

const SearchView = styled(View)`
        padding: 16px;
        ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px `};
`;
const ResturentView = styled(View)`
        padding: 16px;
        flex:1;
`;
const SafeContainer = styled(SafeAreaView)`
        flex:1;
`;


export const ResturentScreen = () => {
    return (
        <>
            <SafeContainer >
                <SearchView >
                    <Searchbar />
                </SearchView>
                <ResturentView>
                    <ResturentInfoComponentCard />
                </ResturentView>
            </SafeContainer>
        </>
    );
}
