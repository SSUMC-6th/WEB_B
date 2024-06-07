import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function SignupPage() {
  const navigator = useNavigate();
  const goToLoginPage = () => {
    navigator("/login");
  };

  const [validation, setValidatioin] = useState(false);
  const [name, setName] = useState(null);
  const [ID, setID] = useState(null);
  const [email, setEmail] = useState(null);
  const [age, setAge] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordCheck, setPasswordCheck] = useState(null);

  const [emailValidation, setEmailValidation] = useState();
  const [ageValidation, setAgeValidation] = useState();
  const [passwordValidation, setPasswordValidation] = useState();
  const [passwordCheckValidation, setPasswordCheckValidation] = useState();

  const checkBlank = () => {
    if (
      name !== "" &&
      ID !== "" &&
      emailValidation === "checked" &&
      ageValidation === "checked" &&
      passwordValidation === "checked" &&
      passwordCheckValidation === "checked"
    ) {
      setValidatioin(true);
    } else setValidatioin(false);
  };

  useEffect(() => {
    checkBlank();
  }, [
    name,
    ID,
    email,
    age,
    password,
    passwordCheck,
    emailValidation,
    ageValidation,
    passwordValidation,
    passwordCheckValidation,
  ]);

  useEffect(() => {
    if (email !== null) {
      if (email.includes("@")) {
        setEmailValidation("checked");
      } else {
        setEmailValidation("올바른 형식의 이메일을 입력해주세요!");
      }
    }
  }, [email]);

  useEffect(() => {
    if (age !== null) {
      if (isNaN(age)) {
        setAgeValidation("나이는 숫자로 입력해주세요!");
      } else if (Number(age) < 0) {
        setAgeValidation("나이는 음수가 될 수 없습니다!");
      } else if (!Number.isInteger(Number(age))) {
        setAgeValidation("나이는 소수가 될 수 없습니다!");
      } else if (Number(age) < 19) {
        setAgeValidation("19세 이상만 가입 가능합니다!");
      } else setAgeValidation("checked");
    }
  }, [age]);

  useEffect(() => {
    const pwRegex = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*?_])/;
    if (password !== null) {
      if (password.length < 4) {
        setPasswordValidation("비밀번호는 최소 4자리 이상이어야 합니다!");
      } else if (password.length > 12) {
        setPasswordValidation("비밀번호는 최대 12자리까지 가능합니다!");
      } else if (!pwRegex.test(password)) {
        setPasswordValidation(
          "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다!"
        );
      } else setPasswordValidation("checked");
    }
  }, [password]);

  useEffect(() => {
    if (passwordCheck !== null) {
      if (password !== passwordCheck) {
        setPasswordCheckValidation("비밀번호가 일치하지 않습니다!");
      } else {
        setPasswordCheckValidation("checked");
      }
    }
  }, [password, passwordCheck]);

  const signupRequest = async () => {
    try {
      const res = await axios.post("http://localhost:8080/auth/signup", {
        name: name,
        email: email,
        age: age,
        username: ID,
        password: password,
        passwordCheck: password,
      });
      if (res.status === 201) {
        alert("회원가입이 완료되었습니다.");
        navigator("/login");
      }
    } catch (error) {
      console.log("회원가입 요청 에러 :", error);
    }
  };
  const handleSignup = (e) => {
    e.preventDefault();
    signupRequest();
    // alert("회원가입이 완료되었습니다!");
  };
  return (
    <MainContainer>
      <Container>
        <div>회원가입 페이지</div>
        <Form>
          <InputDiv>
            <Input
              placeholder="이름을 입력해주세요"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <InputAlert></InputAlert>
          </InputDiv>
          <InputDiv>
            <Input
              placeholder="아이디를 입력해주세요"
              type="text"
              onChange={(e) => setID(e.target.value)}
            />
            <InputAlert></InputAlert>
          </InputDiv>
          <InputDiv>
            <Input
              placeholder="이메일을 입력해주세요"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputAlert>
              {emailValidation === "checked" ? null : emailValidation}
            </InputAlert>
          </InputDiv>
          <InputDiv>
            <Input
              placeholder="나이를 입력해주세요"
              onChange={(e) => setAge(e.target.value)}
            />
            <InputAlert>
              {ageValidation === "checked" ? null : ageValidation}
            </InputAlert>
          </InputDiv>
          <InputDiv>
            <Input
              placeholder="비밀번호를 입력해주세요"
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputAlert>
              {passwordValidation === "checked" ? null : passwordValidation}
            </InputAlert>
          </InputDiv>
          <InputDiv>
            <Input
              placeholder="비밀번호 확인"
              type="text"
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
            <InputAlert>
              {passwordCheckValidation === "checked"
                ? null
                : passwordCheckValidation}
            </InputAlert>
          </InputDiv>
          <SubmitBtn disabled={!validation} onClick={handleSignup}>
            제출하기
          </SubmitBtn>
        </Form>
        <AskMember>
          <span>이미 아이디가 있으신가요?</span>
          <span onClick={goToLoginPage} style={{ fontWeight: "700" }}>
            로그인 페이지로 이동하기
          </span>
        </AskMember>
      </Container>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  margin-top: 60px;
`;
const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px 0;
  margin: 0 auto;
  color: white;
  font-size: 2rem;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 50px;
  padding-left: 10px;
  border: 1px solid black;
`;
const InputAlert = styled.span`
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
`;
const SubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 50px;
  border: none;
  background-color: ${({ disabled }) => (disabled ? "gray" : "red")};
  font-size: 1.3rem;
`;
const AskMember = styled.div`
  display: flex;
  gap: 20px;
  font-size: 1.2rem;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
