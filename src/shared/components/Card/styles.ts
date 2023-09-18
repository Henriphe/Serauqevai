import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
    width: 100%;
    height: 50%;
    border-radius: 5px;
    background-color: #aaa;
    padding: 5px;
    flex-direction: row;
`;

export const CardImage = styled.Image.attrs({
    resizeMode: "contain"
})`
    height: 100%;
    width: 40%;
`

export const CardTitle = styled.Text`
    color: purple;
    font-size: 16px;
    font-weight: 600;
    flex-shrink: 1;
    margin-bottom: 5%;
`

export const Price = styled.Text`
    color: orangered;
    font-size: 16px;
    font-weight: 600;
`

export const Offer = styled.Text`
    color: gray;
    font-size: 10px;
    font-weight: 600;
    text-decoration-line: line-through;
`
export const Content = styled.View`
    flex: 1;
    justify-content: center;
`
export const FavoriteButton = styled.TouchableOpacity`
    width: 10%;
    height: 15%;
    position: absolute;
    top: 2%;
    right: 2%;
`