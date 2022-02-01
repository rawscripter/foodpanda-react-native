import React from 'react';
import { View, Text } from 'react-native';
import { Card, Paragraph, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';

const CardTitle = styled.Text`
    color: #000;
    padding: 15px;
`

export const ResturentInfoComponentCard = ({ resturent = {} }) => {
    const {
        name = 'Tata Motors',
        icon = 'abc',
        photos = [
            'https://www.outlookindia.com/outlooktraveller//public/uploads/2017/07/OSIX-Co-MOSAIC-Random-1.jpg'
        ],
        address = 'Stantinagor,Joypurhat',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = false

    } = resturent;
    return (
        <>
            <Card>
                <Card.Cover source={{ uri: photos[0] }} />
                {/* <Card.Title title={name} /> */}
                <CardTitle>{name}</CardTitle>
            </Card>
        </>
    );
}
