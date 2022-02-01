import React from 'react';
import { View } from 'react-native';
import { Card, Paragraph, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import { starsvg } from '../../../../assets/star';
import { opensvg } from '../../../../assets/opensvg';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import {
    Info,
    Rating,
    Section,
    SecondSection,
    ResturentCard
} from './resturent-info-card.styles';

export const ResturentInfoComponentCard = ({ resturent = {} }) => {
    // random true or false
    let isOpen = Math.random() >= 0.5;

    const {
        name = 'Tata Motorssss',
        icon = 'abc',
        photos = [
            'https://www.outlookindia.com/outlooktraveller//public/uploads/2017/07/OSIX-Co-MOSAIC-Random-1.jpg'
        ],
        address = 'Stantinagor,Joypurhat',
        isOpenNow = isOpen,
        rating = 4,
        isClosedTemporarily = !isOpen

    } = resturent;

    const ratingArray = Array.from(new Array(Math.ceil(rating)), (val, index) => index);


    return (
        <>
            <ResturentCard>
                <Card.Cover source={{ uri: photos[0] }} />
                <Info>
                    <Text variant="label">{name}</Text>
                    <Spacer position="top" />
                    <Section>
                        <SecondSection>
                            <Rating>
                                {ratingArray.map((val, index) => (
                                    <SvgXml key={index} xml={starsvg} width="20" height="20" />
                                ))}
                            </Rating>
                        </SecondSection>
                        <SecondSection>
                            {isOpenNow && <SvgXml xml={opensvg} width="30" height="30" />}
                            {isClosedTemporarily && <Text variant="error"> Temporary Closed </Text>}
                        </SecondSection>
                    </Section>
                    <Spacer position="top" />
                    <Text variant="caption">{address}</Text>
                </Info>
            </ResturentCard>
        </>
    );
}
