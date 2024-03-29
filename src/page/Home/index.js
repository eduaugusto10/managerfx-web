import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {
    Container,
    Cards,
    Box,
    Title,
    Title2,
    Input,
    CircleButton,
    Button,
    ImageLogo,
    Text,
    List,
    ContentList,
} from "./style";
import Change from "../../assets/change.png";
import Xis from "../../assets/xis.png";
import AuthContext from "../../context/auth";

export default function Home() {
    const history = useNavigate();
    const { idsMT5, name, lastName, newUserID } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [usersAtivated, setUsersAtivated] = useState(0);

    function Redirect(e) {
        newUserID(e);
        history("/user");
    }
    useEffect(() => {
        async function queryUsers() {
            try {
                api.get(`/users/${idsMT5}`).then((result) => {
                    setUsers(result.data.user);
                    setUsersAtivated(result.data.userActivated.length);
                });
            } catch (err) {
                console.log(err);
            }
        }
        queryUsers();
    }, []);

    async function UpdateUser(ids, ativateds) {
        const data = new FormData();
        data.append("ativated", ativateds === "1" ? "0" : "1");
        data.append("_method", "PUT");
        try {
            await api.put(`/users/${ids}`, data).then((result) => {
                try {
                    api.get(`/users/${idsMT5}`).then((result) => {
                        setUsers(result.data.user);
                        setUsersAtivated(result.data.userActivated.length);
                    });
                } catch (err) {
                    console.log(err);
                }
            });
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Container>
            <Cards>
                <Box style={{ textAlign: "left", paddingLeft: "30px" }}>
                    <Title>{name + " " + lastName}</Title>
                    <br />
                    <Title2>
                        Conta PAMM:{" "}
                        <span style={{ color: "#245CA0CC" }}>{idsMT5}</span>
                    </Title2>
                </Box>
                <Box>
                    <Title>Usuários ativos</Title>
                    <br />
                    <Title>
                        {users === undefined
                            ? 0
                            : usersAtivated + "/" + users.length}
                    </Title>
                </Box>
            </Cards>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
                <Title style={{ color: "#F7941D", paddingLeft: "40px" }}>
                    Usuários
                </Title>
                <Input placeholder="Pesquisar" />
            </Box>
            <div style={{ textAlign: "center", backgroundColor: "#FFFFFF" }}>
                {users &&
                    users.map((user, index) => (
                        <List key={index}>
                            <ContentList>
                                <Text>{user.id_metatrader} </Text>
                                <br />
                                ID usuário
                            </ContentList>
                            <ContentList>
                                <Text>
                                    {user.first_name + " " + user.second_name}
                                </Text>
                                <br />
                                Nome
                            </ContentList>
                            <ContentList>
                                <Text>{user.email}</Text>
                                <br />
                                E-mail
                            </ContentList>
                            <ContentList>
                                <Text>{user.performance}</Text>
                                <br />
                                Plano
                            </ContentList>
                            <ContentList>
                                {user.ativated === "1" ? (
                                    <Button
                                        onClick={() =>
                                            UpdateUser(user.id, user.ativated)
                                        }
                                    >
                                        Ativo
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() =>
                                            UpdateUser(user.id, user.ativated)
                                        }
                                        style={{
                                            backgroundColor: "#DADEE3",
                                            color: "#595959",
                                        }}
                                    >
                                        Inativo
                                    </Button>
                                )}
                            </ContentList>
                            <ContentList>
                                <CircleButton onClick={() => Redirect(user.id)}>
                                    <ImageLogo src={Change} />
                                </CircleButton>
                            </ContentList>
                            <ContentList>
                                <CircleButton>
                                    <ImageLogo src={Xis} />
                                </CircleButton>
                            </ContentList>
                        </List>
                    ))}
            </div>
        </Container>
    );
}
