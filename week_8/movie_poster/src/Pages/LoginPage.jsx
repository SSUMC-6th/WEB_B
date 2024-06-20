// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기

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
// `;

// const Form = styled.form`
//     background-color: #f0f0f0;
//     padding: 20px;
//     border-radius: 10px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

// const Input = styled.input`
//     width: 600px;
//     padding: 10px;
//     margin: 8px 0;
//     display: inline-block;
//     border: 1px solid #fff;
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
// `;

// const LoginPage = () => {
//     const navigate = useNavigate(); // useNavigate 훅 사용

//     const [inputs, setInputs] = useState({
//         username: "",
//         password: "",
//     });

//     const [errors, setErrors] = useState({
//         username: "",
//         password: "",
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setInputs((prev) => ({ ...prev, [name]: value }));
//     };

//     const validateForm = () => {
//         let isValid = true;
//         let newErrors = {};

//         if (!inputs.username.trim()) {
//             newErrors.username = "필수 입력 항목입니다!";
//             isValid = false;
//         } else {
//             newErrors.username = "멋진 아이디네요!";
//         }

//         if (inputs.password.length < 4 || inputs.password.length > 12) {
//             newErrors.password =
//                 "비밀번호는 4자리 이상, 12자리 이하이어야 합니다.";
//             isValid = false;
//         } else {
//             newErrors.password = "올바른 비밀번호입니다!";
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (validateForm()) {
//             console.log("입력 받은 데이터:", inputs);
//             alert("회원 가입이 완료되었습니다!");
//             navigate("/"); // MainPage로 이동
//         }
//     };

//     return (
//         <Container>
//             <Title>로그인</Title>
//             <Form onSubmit={handleSubmit}>
//                 <label htmlFor="username">아이디</label>
//                 <br />
//                 <Input
//                     type="text"
//                     id="username"
//                     name="username"
//                     value={inputs.username}
//                     onChange={handleChange}
//                 />
//                 <br />
//                 <LabelError
//                     style={{
//                         display: errors.username ? "block" : "none",
//                         color: errors.username.startsWith("멋진")
//                             ? "green"
//                             : "red",
//                     }}
//                 >
//                     {errors.username}
//                 </LabelError>
//                 <br />

//                 <label htmlFor="password">비밀번호</label>
//                 <br />
//                 <Input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={inputs.password}
//                     onChange={handleChange}
//                 />
//                 <br />
//                 <LabelError
//                     style={{
//                         display: errors.password ? "block" : "none",
//                         color: errors.password.startsWith(
//                             "올바른 비밀번호입니다!"
//                         )
//                             ? "green"
//                             : "red",
//                     }}
//                 >
//                     {errors.password}
//                 </LabelError>
//                 <br />

//                 <Input type="submit" value="가입하기" />
//             </Form>
//         </Container>
//     );
// };

// export default LoginPage;

// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom"; // useNavigate 훅 가져오기

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
//     color: #000;
// `;

// const LinkText = styled.span`
//     color: #ffffff;
//     cursor: pointer;
//     &:hover {
//         text-decoration: underline;
//     }
// `;

// const LoginPage = () => {
//     const navigate = useNavigate(); // useNavigate 훅 사용

//     const [inputs, setInputs] = useState({
//         username: "",
//         password: "",
//     });

//     const [errors, setErrors] = useState({
//         username: "",
//         password: "",
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setInputs((prev) => ({ ...prev, [name]: value }));
//     };

//     const validateForm = () => {
//         let isValid = true;
//         let newErrors = {};

//         if (!inputs.username.trim()) {
//             newErrors.username = "필수 입력 항목입니다!";
//             isValid = false;
//         } else {
//             newErrors.username = "멋진 아이디네요!";
//         }

//         if (inputs.password.length < 4 || inputs.password.length > 12) {
//             newErrors.password =
//                 "비밀번호는 4자리 이상, 12자리 이하이어야 합니다.";
//             isValid = false;
//         } else {
//             newErrors.password = "올바른 비밀번호입니다!";
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (validateForm()) {
//             try {
//                 const payload = {
//                     username: inputs.username,
//                     password: inputs.password,
//                 };
//                 console.log("Sending payload:", payload); // Logging payload

//                 const response = await fetch(
//                     "http://localhost:8080/auth/login",
//                     {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json",
//                         },
//                         body: JSON.stringify(payload),
//                     }
//                 );

//                 if (response.status === 200) {
//                     const data = await response.json();
//                     alert(`로그인에 성공했습니다! 아이디: ${data.username}`);
//                     navigate("/");
//                 } else {
//                     const errorData = await response.json();
//                     alert(errorData.message);
//                 }
//             } catch (error) {
//                 console.error("Error during login:", error); // Logging error
//                 alert("로그인 처리 중 오류가 발생했습니다.");
//             }
//         }
//     };

//     return (
//         <Container>
//             <Title>로그인</Title>
//             <Form onSubmit={handleSubmit}>
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
//                         color: errors.username.startsWith("멋진")
//                             ? "green"
//                             : "red",
//                     }}
//                 >
//                     {errors.username}
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
//                         color: errors.password.startsWith(
//                             "올바른 비밀번호입니다!"
//                         )
//                             ? "green"
//                             : "red",
//                     }}
//                 >
//                     {errors.password}
//                 </LabelError>

//                 <Input type="submit" value="로그인" />
//             </Form>
//         </Container>
//     );
// };

// export default LoginPage;

// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Importing axios

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
//     color: #000;
// `;

// const LoginPage = () => {
//     const navigate = useNavigate();

//     const [inputs, setInputs] = useState({
//         username: "",
//         password: "",
//     });

//     const [errors, setErrors] = useState({
//         username: "",
//         password: "",
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setInputs((prev) => ({ ...prev, [name]: value }));
//     };

//     const validateForm = () => {
//         let isValid = true;
//         let newErrors = {};

//         if (!inputs.username.trim()) {
//             newErrors.username = "필수 입력 항목입니다!";
//             isValid = false;
//         } else {
//             newErrors.username = "멋진 아이디네요!";
//         }

//         if (inputs.password.length < 4 || inputs.password.length > 12) {
//             newErrors.password =
//                 "비밀번호는 4자리 이상, 12자리 이하이어야 합니다.";
//             isValid = false;
//         } else {
//             newErrors.password = "올바른 비밀번호입니다!";
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (validateForm()) {
//             try {
//                 // const payload = {
//                 //     username: inputs.username,
//                 //     password: inputs.password,
//                 // };
//                 // console.log("Sending payload:", payload);

//                 // const response = await axios.post(
//                 //     "http://localhost:8080/auth/login",
//                 //     payload,
//                 //     {
//                 //         headers: {
//                 //             "Content-Type": "application/json",
//                 //         },
//                 //     }
//                 // );

//                 const response = await axios.post(
//                     "http://localhost:8080/auth/login",
//                     {
//                         username: inputs.username,
//                         password: inputs.password,
//                     }
//                 );

//                 if (response.status === 200) {
//                     const data = response.data;
//                     alert(`로그인에 성공했습니다! 아이디: ${data.username}`);
//                     navigate("/");
//                 }
//             } catch (error) {
//                 if (error.response) {
//                     console.error(
//                         "Server error response:",
//                         error.response.data
//                     );
//                     alert(error.response.data.message);
//                 } else {
//                     console.error("Error during login:", error);
//                     alert("로그인 처리 중 오류가 발생했습니다.");
//                 }
//             }
//         }
//     };

//     return (
//         <Container>
//             <Title>로그인</Title>
//             <Form onSubmit={handleSubmit}>
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
//                         color: errors.username.startsWith("멋진")
//                             ? "green"
//                             : "red",
//                     }}
//                 >
//                     {errors.username}
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
//                         color: errors.password.startsWith(
//                             "올바른 비밀번호입니다!"
//                         )
//                             ? "green"
//                             : "red",
//                     }}
//                 >
//                     {errors.password}
//                 </LabelError>

//                 <Input type="submit" value="로그인" />
//             </Form>
//         </Container>
//     );
// };

// export default LoginPage;

import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

    @media (max-width: 480px) {
        padding: 15px;
    }
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

    @media (max-width: 480px) {
        padding: 8px;
        margin: 6px 0;
    }
`;

const LabelError = styled.label`
    display: none;
    color: red;
    width: 100%;
    text-align: left;
    margin-bottom: 8px;

    @media (max-width: 480px) {
        margin-bottom: 6px;
    }
`;

const Label = styled.label`
    width: 100%;
    text-align: left;
    margin-top: 8px;
    color: #000;

    @media (max-width: 480px) {
        margin-top: 6px;
    }
`;

const LoginPage = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = {};

        if (!inputs.username.trim()) {
            newErrors.username = "필수 입력 항목입니다!";
            isValid = false;
        } else {
            newErrors.username = "멋진 아이디네요!";
        }

        if (inputs.password.length < 4 || inputs.password.length > 12) {
            newErrors.password =
                "비밀번호는 4자리 이상, 12자리 이하이어야 합니다.";
            isValid = false;
        } else {
            newErrors.password = "올바른 비밀번호입니다!";
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post(
                    "http://localhost:8080/auth/login",
                    {
                        username: inputs.username,
                        password: inputs.password,
                    }
                );

                if (response.status === 200) {
                    const data = response.data;
                    alert(`로그인에 성공했습니다! 아이디: ${data.username}`);
                    navigate("/");
                }
            } catch (error) {
                if (error.response) {
                    console.error(
                        "Server error response:",
                        error.response.data
                    );
                    alert(error.response.data.message);
                } else {
                    console.error("Error during login:", error);
                    alert("로그인 처리 중 오류가 발생했습니다.");
                }
            }
        }
    };

    return (
        <Container>
            <Title>로그인</Title>
            <Form onSubmit={handleSubmit}>
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
                        color: errors.username.startsWith("멋진")
                            ? "green"
                            : "red",
                    }}
                >
                    {errors.username}
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
                        color: errors.password.startsWith(
                            "올바른 비밀번호입니다!"
                        )
                            ? "green"
                            : "red",
                    }}
                >
                    {errors.password}
                </LabelError>

                <Input type="submit" value="로그인" />
            </Form>
        </Container>
    );
};

export default LoginPage;
