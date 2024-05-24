import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기

const Container = styled.div`
    background-color: #007bff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
`;

const Title = styled.h2`
    margin-bottom: 20px;
`;

const Form = styled.form`
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    width: 600px;
    padding: 10px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 5px;

    &[type="submit"] {
        background-color: #000;
        color: white;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
`;

const LabelError = styled.label`
    display: none;
    color: red;
`;

const SignupPage = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        age: "",
        password: "",
        confirm_password: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        age: "",
        password: "",
        confirm_password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = {};

        if (!inputs.name.trim()) {
            newErrors.name = "필수 입력 항목입니다!";
            isValid = false;
        } else {
            newErrors.name = "멋진 이름이네요!";
        }

        if (!inputs.email.includes("@")) {
            newErrors.email = "올바른 이메일 형식이 아닙니다!";
            isValid = false;
        } else {
            newErrors.email = "올바른 이메일 형식입니다!";
        }

        const age = parseInt(inputs.age, 10);
        if (!inputs.age || isNaN(age) || age < 19) {
            newErrors.age = "올바른 나이 형식이 아닙니다!";
            isValid = false;
        } else {
            newErrors.age = "올바른 나이 형식입니다!";
        }

        if (inputs.password.length < 4 || inputs.password.length > 12) {
            newErrors.password =
                "비밀번호는 4자리 이상, 12자리 이하이어야 합니다.";
            isValid = false;
        } else {
            newErrors.password = "올바른 비밀번호입니다!";
        }

        if (
            inputs.confirm_password !== inputs.password ||
            inputs.confirm_password.length == 0
        ) {
            newErrors.confirm_password = "비밀번호가 일치하지 않습니다.";
            isValid = false;
        } else {
            newErrors.confirm_password = "비밀번호가 일치합니다.";
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("입력 받은 데이터:", inputs);
            alert("회원 가입이 완료되었습니다!");
            navigate("/"); // MainPage로 이동
        }
    };

    return (
        <Container>
            <Title>회원 가입</Title>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="name">이름</label>
                <br />
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                />
                <br />
                <LabelError
                    style={{
                        display: errors.name ? "block" : "none",
                        color: errors.name.startsWith("멋진") ? "green" : "red",
                    }}
                >
                    {errors.name}
                </LabelError>
                <br />

                <label htmlFor="email">이메일</label>
                <br />
                <Input
                    type="text"
                    id="email"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                />
                <br />
                <LabelError
                    style={{
                        display: errors.email ? "block" : "none",
                        color: errors.email.startsWith(
                            "올바른 이메일 형식입니다!"
                        )
                            ? "green"
                            : "red",
                    }}
                >
                    {errors.email}
                </LabelError>
                <br />

                <label htmlFor="age">나이</label>
                <br />
                <Input
                    type="text"
                    id="age"
                    name="age"
                    value={inputs.age}
                    onChange={handleChange}
                />
                <br />
                <LabelError
                    style={{
                        display: errors.age ? "block" : "none",
                        color: errors.age.startsWith("올바른 나이 형식입니다!")
                            ? "green"
                            : "red",
                    }}
                >
                    {errors.age}
                </LabelError>
                <br />

                <label htmlFor="password">비밀번호</label>
                <br />
                <Input
                    type="password"
                    id="password"
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
                />
                <br />
                <LabelError
                    style={{
                        display: errors.password ? "block" : "none",
                        color: errors.password.startsWith(
                            "올바른 비밀번호입니다!"
                        )
                            ? "green"
                            : "red",
                    }}
                >
                    {errors.password}
                </LabelError>
                <br />

                <label htmlFor="confirm_password">비밀번호 확인</label>
                <br />
                <Input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    value={inputs.confirm_password}
                    onChange={handleChange}
                />
                <br />
                <LabelError
                    style={{
                        display: errors.confirm_password ? "block" : "none",
                        color: errors.confirm_password.startsWith(
                            "비밀번호가 일치합니다."
                        )
                            ? "green"
                            : "red",
                    }}
                >
                    {errors.confirm_password}
                </LabelError>
                <br />

                <Input type="submit" value="가입하기" />
            </Form>
        </Container>
    );
};

export default SignupPage;
