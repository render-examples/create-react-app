import React from "react";
import styled from "styled-components";
import { Typography, Form, Input, Button } from "antd";
import {useForm, Controller} from "react-hook-form";

import { Logo } from "../common";

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
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);

    return <Wrapper>
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
        <Button onClick={handleSubmit(onSubmit)}>Login</Button>
        <CreateAccountText>Don't have an account yet? Create a new one! 😊</CreateAccountText>
    </Wrapper>;
}

export default Login;