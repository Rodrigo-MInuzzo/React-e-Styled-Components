
import { Container, Title, Text } from './style'


interface ParagrafoProps {
    title: string;
    text: string;
}


export function Paragrafo(props: ParagrafoProps){
    return(
       <Container>
         <Title>{props.title}</Title>
         <Text>{props.text}</Text>
       </Container>
    )
}