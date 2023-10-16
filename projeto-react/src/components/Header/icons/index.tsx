import React from 'react';


import { Container,IconContainer, Title, Frase} from './style';

interface IIconWithText{
    icon: React.ReactNode;
    title: string;
    text: string;
}

export function IconWithText(props: IIconWithText){
    return(
        <Container>
            <IconContainer>{props.icon}</IconContainer>
            <Title>{props.title}</Title>
            <Frase>{props.text}</Frase>
        </Container>
    )
}
    
