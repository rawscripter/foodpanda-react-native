import React from 'react';
import { StatusBar, SafeAreaView, View, FlatList } from "react-native";
import { Searchbar } from 'react-native-paper';
import { ResturentInfoComponentCard } from '../components/resturent-info-card.component';
import styled from 'styled-components/native';

const SearchView = styled(View)`
        padding: ${(props) => props.theme.space[3]};
        ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px `};
`;
const ResturentView = styled(View)`
        padding: ${(props) => props.theme.space[3]};
        flex:1;
`;
const SafeContainer = styled(SafeAreaView)`
       flex:1;
`;

const ResuturentList = styled(FlatList).attrs({
    contentContainerStyle: { padding: 16 }
})`

`;



export const ResturentScreen = () => {
    return (
        <>
            <SafeContainer >
                <SearchView >
                    <Searchbar />
                </SearchView>
                <ResuturentList
                    data={[
                        { name: 1 },
                        { name: 2 },
                        { name: 3 },
                        { name: 4 },
                        { name: 5 },
                        { name: 6 },
                        { name: 7 },
                        { name: 8 },
                        { name: 9 },
                        { name: 10 },
                    ]}
                    renderItem={({ item }) => <ResturentInfoComponentCard />}
                    keyExtractor={(item, index) => index.toString()}

                />


            </SafeContainer>
        </>
    );
}
