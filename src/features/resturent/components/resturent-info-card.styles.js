import styled from "styled-components/native";
import { Card } from 'react-native-paper';
export const Info = styled.View`
       flex-direction: column;
     justify-content: space-between;
     padding: ${(props) => props.theme.space[2]};
`;

export const Rating = styled.View`
flex-direction: row;
padding-top: ${(props) => props.theme.space[1]};
padding-bottom: ${(props) => props.theme.space[1]};
`
export const Section = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const SecondSection = styled.View`
flex-direction: row;
align-items: center;
`

export const ResturentCard = styled(Card)`
    margin-bottom: ${(props) => props.theme.space[3]};
`