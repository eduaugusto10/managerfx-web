import styled from "styled-components";

export const Container = styled.div``;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
    background-color: #ffffff;
    padding: 10px;
`;

export const Box = styled.div`
    background-color: #ffffff;
    padding: 20px 0;
    font-size: 18px;
`;

export const Title = styled.text`
    color: #245ca0;
    font-size: 40px;
`;

export const Button = styled.button`
    width: 168px;
    height: 37px;
    background-color: #245ca0;
    color: #ffffff;
    border-radius: 30px;
    font-size: 20px;
    margin: 25px;
    cursor: pointer;
`;
export const ButtonGreen = styled.button`
    width: 168px;
    height: 37px;
    background-color: #009a00;
    color: #ffffff;
    border-radius: 30px;
    font-size: 20px;
    margin: 25px;
    cursor: pointer;
`;

export const Input = styled.input`
    width: 330px;
    height: 41px;
    background-color: #edf0f4;
    border-radius: 10px;
    font-size: 18px;
    margin: 15px;
    padding-left: 15px;
    box-shadow: 4px 4px #00000040;
    border: 1px solid #245ca0;
`;
