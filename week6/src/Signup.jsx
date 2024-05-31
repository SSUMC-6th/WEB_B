import React, { useState } from "react";
import "./style.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // 이름 유효성 검사
    if (!name.trim()) {
      newErrors.name = "필수 입력 항목입니다!";
      isValid = false;
    }

    // 이메일 유효성 검사
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");
    if (
      !email ||
      atIndex <= 0 ||
      dotIndex <= atIndex + 1 ||
      dotIndex >= email.length - 1
    ) {
      newErrors.email = "올바른 이메일 형식이 아닙니다!";
      isValid = false;
    }

    // 나이 유효성 검사
    if (!age.trim() || isNaN(age) || parseInt(age) < 0 || age.includes(".")) {
      newErrors.age = "올바른 나이 형식이 아닙니다!";
      isValid = false;
    }

    // 비밀번호 유효성 검사
    if (password.length < 4 || password.length > 12) {
      newErrors.password = "비밀번호는 4자 이상, 12자 이하로 입력해주세요.";
      isValid = false;
    }

    // 비밀번호 확인 일치 여부 확인
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // 유효성 검사 통과 시 회원가입 데이터 전송
      console.log("유효성 검사가 통과했습니다.");
      // 여기에 form-data 전송 로직 추가
      // 예: axios.post('/signup', { name, email, age, password });
      // 회원가입 성공 시 홈페이지로 이동 및 알림 메시지 출력
      alert("회원가입이 성공적으로 완료되었습니다!");
      window.location.href = "/"; // 홈페이지로 이동
    }
  };

  return (
    <div className="container">
      <h2>회원가입</h2>
      <form id="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">이름:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="age">나이:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {errors.age && <div style={{ color: "red" }}>{errors.age}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">비밀번호 확인:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <div style={{ color: "red" }}>{errors.confirmPassword}</div>
          )}
        </div>
        <button type="submit" id="submit-button">
          가입하기
        </button>
      </form>
    </div>
  );
};

export default Signup;
