import { CardContainer, CardImage, CardTitle, Price, Content, Offer, FavoriteButton} from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
export function Card(){
    return(
        <CardContainer>
            <CardImage source={require("../../../assets/R.jpeg")}/>
            <Content>
                <CardTitle>Black noir</CardTitle>
                <Price>3420,00</Price>
                <Offer>4000,00</Offer>
            </Content>
            <FavoriteButton>
                <Icon name = "heart" size = {16} color = "#616161"/>
            </FavoriteButton>
        </CardContainer>
    );
}