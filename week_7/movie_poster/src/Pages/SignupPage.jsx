// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

// const Container = styled.div`
//     background-color: #007bff;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     margin: 0;
//     font-family: Arial, sans-serif;
// `;

// const Title = styled.h2`
//     margin-bottom: 20px;
//     color: #fff;
// `;

// const Form = styled.form`
//     background-color: #f0f0f0;
//     padding: 20px;
//     border-radius: 10px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     max-width: 400px;
// `;

// const Input = styled.input`
//     width: 100%;
//     padding: 10px;
//     margin: 8px 0;
//     display: inline-block;
//     border: 1px solid #ccc;
//     box-sizing: border-box;
//     border-radius: 5px;

//     &[type="submit"] {
//         background-color: #000;
//         color: white;
//         cursor: pointer;

//         &:hover {
//             opacity: 0.8;
//         }
//     }
// `;

// const LabelError = styled.label`
//     display: none;
//     color: red;
//     width: 100%;
//     text-align: left;
//     margin-bottom: 8px;
// `;

// const Label = styled.label`
//     width: 100%;
//     text-align: left;
//     margin-top: 8px;
// `;

// const LinkText = styled.span`
//     color: #ffffff;
//     cursor: pointer;
//     &:hover {
//         text-decoration: underline;
//     }
// `;

// const SignupPage = () => {
//     const navigate = useNavigate();
//     const [inputs, setInputs] = useState({
//         name: "",
//         username: "",
//         email: "",
//         age: "",
//         password: "",
//         confirm_password: "",
//     });

//     const [errors, setErrors] = useState({
//         name: "",
//         username: "",
//         email: "",
//         age: "",
//         password: "",
//         confirm_password: "",
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setInputs((prev) => ({ ...prev, [name]: value }));
//     };

//     const validateForm = () => {
//         let isValid = true;
//         let newErrors = {};

//         if (!inputs.name.trim()) {
//             newErrors.name = "필수 입력 항목입니다!";
//             isValid = false;
//         }

//         if (!inputs.username.trim()) {
//             newErrors.username = "필수 입력 항목입니다!";
//             isValid = false;
//         }

//         if (!inputs.email.includes("@")) {
//             newErrors.email = "올바른 이메일 형식이 아닙니다!";
//             isValid = false;
//         }

//         const age = parseInt(inputs.age, 10);
//         if (!inputs.age || isNaN(age) || age < 19) {
//             newErrors.age = "올바른 나이 형식이 아닙니다!";
//             isValid = false;
//         }

//         if (inputs.password !== inputs.confirm_password) {
//             newErrors.confirm_password = "비밀번호가 일치하지 않습니다.";
//             isValid = false;
//         } else if (inputs.password.length < 4 || inputs.password.length > 12) {
//             newErrors.password =
//                 "비밀번호는 4자리 이상, 12자리 이하이어야 합니다.";
//             isValid = false;
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (validateForm()) {
//             try {
//                 const payload = {
//                     name: inputs.name,
//                     email: inputs.email,
//                     age: inputs.age,
//                     username: inputs.username,
//                     password: inputs.password,
//                     passwordCheck: inputs.confirm_password,
//                 };
//                 console.log("Sending payload:", payload); // Logging payload

//                 const response = await fetch(
//                     "http://localhost:8080/auth/signup",
//                     {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json",
//                         },
//                         body: JSON.stringify(payload),
//                     }
//                 );

//                 if (response.status === 201) {
//                     const data = await response.json();
//                     alert(
//                         `회원가입이 완료되었습니다! 아이디: ${data.username}`
//                     );
//                     navigate("/login");
//                 } else {
//                     const errorData = await response.json();
//                     alert(errorData.message);
//                 }
//             } catch (error) {
//                 console.error("Error during signup:", error); // Logging error
//                 alert("회원가입 처리 중 오류가 발생했습니다.");
//             }
//         }
//     };

//     return (
//         <Container>
//             <Title>회원 가입</Title>
//             <Form onSubmit={handleSubmit}>
//                 <Label htmlFor="name">이름</Label>
//                 <Input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={inputs.name}
//                     onChange={handleChange}
//                 />
//                 <LabelError
//                     style={{
//                         display: errors.name ? "block" : "none",
//                     }}
//                 >
//                     {errors.name}
//                 </LabelError>

//                 <Label htmlFor="username">아이디</Label>
//                 <Input
//                     type="text"
//                     id="username"
//                     name="username"
//                     value={inputs.username}
//                     onChange={handleChange}
//                 />
//                 <LabelError
//                     style={{
//                         display: errors.username ? "block" : "none",
//                     }}
//                 >
//                     {errors.username}
//                 </LabelError>

//                 <Label htmlFor="email">이메일</Label>
//                 <Input
//                     type="text"
//                     id="email"
//                     name="email"
//                     value={inputs.email}
//                     onChange={handleChange}
//                 />
//                 <LabelError
//                     style={{
//                         display: errors.email ? "block" : "none",
//                     }}
//                 >
//                     {errors.email}
//                 </LabelError>

//                 <Label htmlFor="age">나이</Label>
//                 <Input
//                     type="text"
//                     id="age"
//                     name="age"
//                     value={inputs.age}
//                     onChange={handleChange}
//                 />
//                 <LabelError
//                     style={{
//                         display: errors.age ? "block" : "none",
//                     }}
//                 >
//                     {errors.age}
//                 </LabelError>

//                 <Label htmlFor="password">비밀번호</Label>
//                 <Input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={inputs.password}
//                     onChange={handleChange}
//                 />
//                 <LabelError
//                     style={{
//                         display: errors.password ? "block" : "none",
//                     }}
//                 >
//                     {errors.password}
//                 </LabelError>

//                 <Label htmlFor="confirm_password">비밀번호 확인</Label>
//                 <Input
//                     type="password"
//                     id="confirm_password"
//                     name="confirm_password"
//                     value={inputs.confirm_password}
//                     onChange={handleChange}
//                 />
//                 <LabelError
//                     style={{
//                         display: errors.confirm_password ? "block" : "none",
//                     }}
//                 >
//                     {errors.confirm_password}
//                 </LabelError>

//                 <Input type="submit" value="가입하기" />
//             </Form>
//             <div style={{ marginTop: "20px", color: "white" }}>
//                 이미 아이디가 있으신가요?{" "}
//                 <span style={{ marginRight: "10px" }}></span>
//                 <LinkText onClick={() => navigate("/login")}>
//                     로그인 페이지로 이동하기
//                 </LinkText>
//             </div>
//         </Container>
//     );
// };

// export default SignupPage;

import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importing axios

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
    color: #fff;
`;

const Form = styled.form`
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
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
    width: 100%;
    text-align: left;
    margin-bottom: 8px;
`;

const Label = styled.label`
    width: 100%;
    text-align: left;
    margin-top: 8px;
`;

const LinkText = styled.span`
    color: #ffffff;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const SignupPage = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        username: "",
        email: "",
        age: "",
        password: "",
        confirm_password: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        username: "",
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
        }

        if (!inputs.username.trim()) {
            newErrors.username = "필수 입력 항목입니다!";
            isValid = false;
        }

        if (!inputs.email.includes("@")) {
            newErrors.email = "올바른 이메일 형식이 아닙니다!";
            isValid = false;
        }

        const age = parseInt(inputs.age, 10);
        if (!inputs.age || isNaN(age) || age < 19) {
            newErrors.age = "올바른 나이 형식이 아닙니다!";
            isValid = false;
        }

        if (inputs.password !== inputs.confirm_password) {
            newErrors.confirm_password = "비밀번호가 일치하지 않습니다.";
            isValid = false;
        } else if (inputs.password.length < 4 || inputs.password.length > 12) {
            newErrors.password =
                "비밀번호는 4자리 이상, 12자리 이하이어야 합니다.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const payload = {
                    name: inputs.name,
                    email: inputs.email,
                    age: inputs.age,
                    username: inputs.username,
                    password: inputs.password,
                    passwordCheck: inputs.confirm_password,
                };
                console.log("Sending payload:", payload); // Logging payload

                const response = await axios.post(
                    "http://localhost:8080/auth/signup",
                    payload,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.status === 201) {
                    const data = response.data;
                    alert(
                        `회원가입이 완료되었습니다! 아이디: ${data.username}`
                    );
                    navigate("/login");
                }
            } catch (error) {
                if (error.response) {
                    console.error(
                        "Server error response:",
                        error.response.data
                    );
                    alert(error.response.data.message);
                } else {
                    console.error("Error during signup:", error);
                    alert("회원가입 처리 중 오류가 발생했습니다.");
                }
            }
        }
    };

    return (
        <Container>
            <Title>회원 가입</Title>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="name">이름</Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                />
                <LabelError
                    style={{
                        display: errors.name ? "block" : "none",
                    }}
                >
                    {errors.name}
                </LabelError>

                <Label htmlFor="username">아이디</Label>
                <Input
                    type="text"
                    id="username"
                    name="username"
                    value={inputs.username}
                    onChange={handleChange}
                />
                <LabelError
                    style={{
                        display: errors.username ? "block" : "none",
                    }}
                >
                    {errors.username}
                </LabelError>

                <Label htmlFor="email">이메일</Label>
                <Input
                    type="text"
                    id="email"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                />
                <LabelError
                    style={{
                        display: errors.email ? "block" : "none",
                    }}
                >
                    {errors.email}
                </LabelError>

                <Label htmlFor="age">나이</Label>
                <Input
                    type="text"
                    id="age"
                    name="age"
                    value={inputs.age}
                    onChange={handleChange}
                />
                <LabelError
                    style={{
                        display: errors.age ? "block" : "none",
                    }}
                >
                    {errors.age}
                </LabelError>

                <Label htmlFor="password">비밀번호</Label>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
                />
                <LabelError
                    style={{
                        display: errors.password ? "block" : "none",
                    }}
                >
                    {errors.password}
                </LabelError>

                <Label htmlFor="confirm_password">비밀번호 확인</Label>
                <Input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    value={inputs.confirm_password}
                    onChange={handleChange}
                />
                <LabelError
                    style={{
                        display: errors.confirm_password ? "block" : "none",
                    }}
                >
                    {errors.confirm_password}
                </LabelError>

                <Input type="submit" value="가입하기" />
            </Form>
            <div style={{ marginTop: "20px", color: "white" }}>
                이미 아이디가 있으신가요?{" "}
                <span style={{ marginRight: "10px" }}></span>
                <LinkText onClick={() => navigate("/login")}>
                    로그인 페이지로 이동하기
                </LinkText>
            </div>
        </Container>
    );
};

export default SignupPage;
