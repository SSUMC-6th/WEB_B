import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const history = useHistory();

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!id.trim()) {
      newErrors.id = "아이디를 입력해 주세요";
      isValid = false;
    }

    if (password.length < 4 || password.length > 12) {
      newErrors.password = "비밀번호는 4자 이상, 12자 이하로 입력해주세요.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLoginSuccess = (token) => {
    localStorage.setItem("token", token); // 토큰 저장
    alert("로그인이 성공적으로 완료되었습니다!");
    history.push("/"); // 메인 페이지로 이동
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:8080/auth/login", {
          username: id, // 아이디 필드를 username으로 변경
          password,
        });
        console.log(response);
        const token = response.data.token;
        handleLoginSuccess(token);
      } catch (error) {
        console.error("Error during login:", error);
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoading(true);
      axios
        .get("http://localhost:8080/user", {
          // 수정 필요: 사용자 정보 엔드포인트 URL
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserName(response.data.name);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className="container">
      <h2>로그인</h2>
      {loading ? (
        <div>로딩 중...</div>
      ) : (
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">아이디:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            {errors.id && <div style={{ color: "red" }}>{errors.id}</div>}
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
          <button type="submit" id="submit-button">
            로그인
          </button>
        </form>
      )}
      {userName && <div>{userName}님 환영합니다.</div>}
    </div>
  );
};

export default Login;
