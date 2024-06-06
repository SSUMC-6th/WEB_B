import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginPage() {
  const navigator = useNavigate();
  const [validation, setValidatioin] = useState(false);
  const [ID, setID] = useState(null);
  const [PW, setPW] = useState(null);

  const [PWValidation, setPWValidation] = useState();

  useEffect(() => {
    const pwRegex = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*?_])/;
    if (PW !== null) {
      if (PW.length < 4) {
        setPWValidation("비밀번호는 최소 4자리 이상이어야 합니다!");
      } else if (PW.length > 12) {
        setPWValidation("비밀번호는 최대 12자리까지 가능합니다!");
      } else if (!pwRegex.test(PW)) {
        setPWValidation(
          "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다!"
        );
      } else setPWValidation("checked");
    }
  }, [PW]);
  useEffect(() => {
    if (ID !== null && PWValidation === "checked") setValidatioin(true);
    else setValidatioin(false);
  }, [ID, PWValidation]);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        username: ID,
        password: PW,
      });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("ID", res.data.username);
        navigator("/");
      }
    } catch (error) {
      console.log("로그인 에러 : ", error);
    }
  };
  return (
    <MainContainer>
      <Container>
        <div>회원가입</div>
        <Form>
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
              placeholder="비밀번호를 입력해주세요"
              type="text"
              onChange={(e) => setPW(e.target.value)}
            />
            <InputAlert>
              {" "}
              {PWValidation === "checked" ? null : PWValidation}
            </InputAlert>
          </InputDiv>
          <SubmitBtn disabled={!validation} onClick={handleLogin}>
            제출하기
          </SubmitBtn>
        </Form>
      </Container>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;
const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  align-items: center;
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
