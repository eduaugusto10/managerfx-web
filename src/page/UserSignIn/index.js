import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {
    Container,
    Box,
    Title,
    Button,
    Input,
    ButtonGreen,
    Cards,
    LastBlock,
} from "./style";
import AuthContext from "../../context/auth";

export default function UserSignIn() {
    const { userID } = useContext(AuthContext);
    const history = useNavigate();
    const [emails, setEmails] = useState();
    const [names, setNames] = useState();
    const [idMetatrader, SetIDMetatrader] = useState();
    const [performance, setPerformance] = useState();

    useEffect(() => {
        queryUsers();
    }, []);
    async function queryUsers() {
        try {
            await api.get(`/userss/${userID}`).then((result) => {
                setEmails(result.data[0].email);
                setNames(result.data[0].first_name);
                SetIDMetatrader(result.data[0].id_metatrader);
                setPerformance(result.data[0].performance);
            });
        } catch (err) {
            console.log(err);
        }
    }

    async function UpdateUser() {
        const data = new FormData();
        data.append("first_name", names);
        data.append("email", emails);
        data.append("id_metatrader", idMetatrader);
        data.append("performance", performance);
        data.append("_method", "PUT");
        try {
            api.put(`/users/${userID}`, data).then((result) => {
                queryUsers();
                Redirect();
            });
        } catch (err) {
            console.log(err);
        }
    }

    function Redirect() {
        history("/admin");
    }

    return (
        <Container>
            <Title>Cadastro de Usuários</Title>
            <Cards>
                <Box style={{ textAlign: "right" }}>
                    <Input
                        value={names}
                        onChange={(e) => setNames(e.target.value)}
                    />
                    <Input
                        value={emails}
                        onChange={(e) => setEmails(e.target.value)}
                    />
                </Box>
                <Box style={{ textAlign: "left" }}>
                    <Input
                        value={idMetatrader}
                        onChange={(e) => SetIDMetatrader(e.target.value)}
                    />
                    <Input
                        value={performance}
                        onChange={(e) => setPerformance(e.target.value)}
                    />
                </Box>
            </Cards>
            <LastBlock>
                <ButtonGreen onClick={() => Redirect()}>Voltar</ButtonGreen>
                <Button onClick={() => UpdateUser()}>Salvar</Button>
            </LastBlock>
        </Container>
    );
}
