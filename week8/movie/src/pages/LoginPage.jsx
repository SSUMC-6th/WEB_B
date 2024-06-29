import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import { Link, useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const LoginBox = styled.div`
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  text-align: center;
`;

const Input = styled.input`
  display: block;
  margin-top: -10px;
  margin-bottom: 60px;
  width: 500px;
  height: 50px;
  border-radius: 20px;
  color: black;
`;

const Message = styled.div`
  font-size: 12px;
  margin-top: -40px;
  margin-bottom: 20px;
  color: ${({ isError }) => (isError ? 'red' : 'green')};
`;

const SubmitButton = styled(Input).attrs({ type: 'submit' })`
  margin-top: 50px;
`;

function LoginPage() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    userid: '',
    password: '',
  });
  const [messages, setMessages] = useState({
    userid: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formValues.userid,
          password: formValues.password,
        }),
      });
  
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // 토큰 저장
        console.log('로그인 성공! 토큰:', data.token); // 토큰 콘솔에 출력
        navigate('/'); // 메인 페이지로 이동
      } else {
        const errorData = await response.json();
        alert(errorData.message); // 에러 메시지 출력
      }
    } catch (error) {
      console.error('로그인 중 에러 발생:', error);
      alert('로그인 과정에서 오류가 발생했습니다.');
    }
  };
  

  return (
    <PageContainer>
      <NavBar />
      <LoginBox>
        <Title>로그인 페이지</Title>
        <Form id="login-form" onSubmit={handleSubmit}>
          <Input
            type="text"
            id="userid"
            name="userid"
            value={formValues.userid}
            onChange={handleChange}
            placeholder="아이디를 입력해주세요"
          />
          <Message isError={messages.userid.isError}>{messages.userid.text}</Message>
          <Input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요"
          />
          <Message isError={messages.password.isError}>{messages.password.text}</Message>

          <SubmitButton value="로그인" />
        </Form>
      </LoginBox>
    </PageContainer>
  );
}

export default LoginPage;