import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background: linear-gradient(
        180deg,
        rgba(36, 92, 160, 0) 0%,
        rgba(36, 92, 160, 1) 100%
    );

`;

export const ImageLogo = styled.img`
    margin-top: 30px;
    margin: 20px;
    @media screen and (max-width: 800px) {
        width: 20%;
    }
`;
export const ImageLogos = styled.img`
    margin-top: 30px;
    margin: 20px;

`;
export const ImageCheck = styled.img`
    width: 42px;
    height: 32px;
    margin-bottom: 50px;
    margin-right: 24px;
`;
export const CardII = styled.div`
    background-color: #ffffff;
    margin-top: 30px;
`;

export const Text = styled.text`
    color: #ffffff;
    font-size: 20px;
`;
export const Title = styled.text`
    color: #245ca0;
    font-size: 40px;
`;
export const TitleII = styled.text`
    color: #f7941d;
    font-size: 30px;
`;
export const Div = styled.div``;

export const Card = styled.div`
    display: grid;
    grid-template-columns: 30% 60%;
    align-items: center;
    text-align: center;
    justify-content: center;
    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Columns = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    align-items: center;
    text-align: center;
    justify-content: center;
    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Subtitle = styled.text`
    color: #000000;
    font-size: 22px;
    margin-left: 12px;
`;
export const Description = styled.text`
    color: #00000099;
    font-size: 16px;
    margin: 25px 12px;
`;

export const SquadOrange = styled.div`
    border: 3px solid #f7941d;
    width: 80px;
    height: 80px;
`;

export const Button = styled.button`
    width: 267px;
    height: 59px;
    color: #ffffff;
    background-color: #f7941d;
    font-size: 30px;
    border-radius: 30px;
    margin: 30px;
`;
