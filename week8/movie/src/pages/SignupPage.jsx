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

const SignupBox = styled.div`
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

const Label = styled.label`
  display: block;
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
`;

const Input = styled.input`
  display: block;
  text-align: left;
 // margin-top: -10px;
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
  margin-top: 20px;
  text-align: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LoginButton = styled.button`
  background: none;
`;

const LoginText = styled.div`
  color: white;
  margin-right: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  color: white;
  margin-right: 40px;
`;

function SignupPage() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: '',
    username: '',
    email: '',
    age: '',
    password: '',
    pwcheck: '',
  });
  const [messages, setMessages] = useState({
    name: '',
    username: '',
    email: '',
    age: '',
    password: '',
    pwcheck: '',
  });

  const validateField = (name, value) => {
    let message = { text: '', isError: false };

    switch (name) {
      case 'name':
      case 'username':
        if (!value.trim()) {
          message = { text: '필수 입력 항목입니다!', isError: true };
        }
        break;
      case 'email':
        if (!value.includes('@')) {
          message = { text: '올바른 이메일 형식이 아닙니다!', isError: true };
        }
        break;
      case 'age':
        if (!value.trim()) {
          message = { text: '나이를 입력해주세요.', isError: true };
        } else if (isNaN(value.trim())) {
          message = { text: '나이는 숫자 형식이어야 합니다.', isError: true };
        } else if (parseInt(value.trim()) <= 0) {
          message = { text: '나이는 음수가 될 수 없습니다!', isError: true };
        } else if (!Number.isInteger(parseFloat(value.trim()))) {
          message = { text: '나이는 소수가 될 수 없습니다!', isError: true };
        } else if (parseInt(value.trim()) < 19) {
          message = { text: '미성년자는 가입할 수 없습니다!', isError: true };
        }
        break;
      case 'password':
        if (!value.trim()) {
          message = { text: '비밀번호는 최소 4자리 이상이어야 합니다.', isError: true };
        } else if (value.trim().length < 4) {
          message = { text: '비밀번호는 최소 4자리 이상이어야 합니다.', isError: true };
        } else if (value.trim().length > 12) {
          message = { text: '비밀번호는 최대 12자리까지 가능합니다.', isError: true };
        } else if (!(/[a-zA-Z]/.test(value.trim())) || !(/\d/.test(value.trim())) || !(/[!@#$%^&*()\-_=+{};:,<.>]/.test(value.trim()))) {
          message = { text: '영어, 숫자, 특수문자를 모두 포함한 비밀번호를 사용하세요.', isError: true };
        }
        break;
      case 'pwcheck':
        if (!value.trim() || value.trim() !== formValues.password.trim()) {
          message = { text: '비밀번호가 일치하지 않습니다.', isError: true };
        }
        break;
      default:
        break;
    }

    setMessages((prevMessages) => ({
      ...prevMessages,
      [name]: message,
    }));
    return message;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    validateField(name, value);
  };

  const validateForm = () => {
    let isValid = true;
    const newMessages = {};

    Object.keys(formValues).forEach((name) => {
      const value = formValues[name];
      const message = validateField(name, value);

      if (message.isError) {
        isValid = false;
      }

      newMessages[name] = message;
    });

    setMessages(newMessages);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:8080/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formValues.name,
            username: formValues.username,
            email: formValues.email,
            age: formValues.age,
            password: formValues.password,
            passwordCheck: formValues.pwcheck,
          }),
        });

        const responseData = await response.json();

        if (response.status === 201) {
          console.log(responseData);
          alert('회원가입에 성공했습니다!');
          navigate('/login');
        } else if (response.status === 409) {
          alert(responseData.message);
        } else if (response.status === 400) {
          alert(responseData.message);
        }
      } catch (error) {
        console.error('회원가입 중 에러 발생:', error);
        alert('회원가입 과정에서 오류가 발생했습니다.');
      }
    }
  };

  return (
    <PageContainer>
      <NavBar />
      <SignupBox>
        <Title>회원가입 페이지</Title>
        <Form id="signup-form" onSubmit={handleSubmit}>
          <Input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="이름을 입력해주세요"
          />
          <Message isError={messages.name.isError}>{messages.name.text}</Message>

          <Input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            placeholder="아이디를 입력해주세요"
          />
          <Message isError={messages.username.isError}>{messages.username.text}</Message>

          <Input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="이메일을 입력해주세요"
          />
          <Message isError={messages.email.isError}>{messages.email.text}</Message>

          <Input
            type="text"
            id="age"
            name="age"
            value={formValues.age}
            onChange={handleChange}
            placeholder="나이를 입력해주세요"
          />
          <Message isError={messages.age.isError}>{messages.age.text}</Message>

          <Input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요"
          />
          <Message isError={messages.password.isError}>{messages.password.text}</Message>

          <Input
            type="password"
            id="pwcheck"
            name="pwcheck"
            value={formValues.pwcheck}
            onChange={handleChange}
            placeholder="비밀번호 확인"
          />
          <Message isError={messages.pwcheck.isError}>{messages.pwcheck.text}</Message>

          <SubmitButton value="제출하기" />
        </Form>
      </SignupBox>
      <LoginBox>
        <LoginText>이미 아이디가 있으신가요?</LoginText>
        <LoginButton>
          <StyledLink to="/login">로그인 페이지로 이동하기</StyledLink>
        </LoginButton>
      </LoginBox>
    </PageContainer>
  );
}

export default SignupPage;