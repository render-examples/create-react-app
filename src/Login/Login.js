import React from "react";
import styled from "styled-components";
import { Typography, Form, Input, Button, notification } from "antd";
import {useForm, Controller} from "react-hook-form";

import { Logo } from "../common";
import {useMutation} from "react-query";
import {login} from "../api/login";
import {useNavigate} from "react-router-dom";

const { Text } = Typography;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledForm = styled(Form)`
    width: 44vw;
    margin-top: 10px;
`;

const CreateAccountText = styled(Text)`
    margin-top: 40px;
    cursor: pointer;
`;

function Login() {
    const {
        control,
        handleSubmit,
    } = useForm();

    const { mutate, isLoading, data, error } = useMutation(login);

    const [notificationApi, contextHolder] = notification.useNotification();

    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isLoading && data) {
            localStorage.setItem("user", JSON.stringify(data));
            const exists = data["exists"];
            const notifyMethod = exists ? notificationApi.success : notificationApi.error;
            notifyMethod({
                message: exists ? "Successfully logged in! Redirecting to user's page..." :
                    "User doesn't unfortunately exist",
                showProgress: true,
                onClose: () => {
                    navigate("/user");
                },
                duration: 5
            });
        }
        else if (error) {
            notificationApi.error({
                message: "An error has unfortunately occurred",
                showProgress: true
            });
        }
    }, [isLoading, data, navigate, error]);

    return <>
        {contextHolder}
        <Wrapper>
            <Logo />
            <StyledForm layout="vertical">
                <Form.Item label="Enter your username/email">
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) =>(
                            <Input
                                {...field}
                                placeholder="Email address/username"
                            />
                        )}
                    />
                </Form.Item>
                <Form.Item label="Enter your password">
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) =>(
                            <Input.Password
                                {...field}
                                placeholder="Password"
                            />
                        )}
                    />
                </Form.Item>
            </StyledForm>
            <Button onClick={handleSubmit(mutate)} loading={isLoading}>
                {isLoading ? "Loading..." : "Login"}
            </Button>
            <CreateAccountText>Don't have an account yet? Create a new one! 😊</CreateAccountText>
        </Wrapper>
    </>;
}

export default Login;