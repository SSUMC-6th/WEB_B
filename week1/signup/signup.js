const signupForm = document.getElementById("signupForm");
const inputName = document.getElementById("inputName");
const email = document.getElementById("email");
const age = document.getElementById("age");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const signupButton = document.getElementById("signupButton");

const modalContainer = document.getElementById("modalContainer");
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("close");

const nameMessage = document.getElementById("nameMessage");
const emailMessage = document.getElementById("emailMessage");
const ageMessage = document.getElementById("ageMessage");
const passwordMessage = document.getElementById("passwordMessage");
const password2Message = document.getElementById("password2Message");

const validate = [false, false, false, false, false];
inputName.addEventListener("input", () => {
  if (handleDisabled()) {
    signupButton.disabled = false;
  }
});
email.addEventListener("input", () => {
  if (handleDisabled()) {
    signupButton.disabled = false;
  }
});
age.addEventListener("input", () => {
  if (handleDisabled()) {
    signupButton.disabled = false;
  }
});
password.addEventListener("input", () => {
  if (handleDisabled()) {
    signupButton.disabled = false;
  }
});
password2.addEventListener("input", () => {
  if (handleDisabled()) {
    signupButton.disabled = false;
  }
});

function handleDisabled() {
  if (
    inputName.value !== "" &&
    email.value !== "" &&
    age.value !== "" &&
    password.value !== "" &&
    password2.value !== ""
  ) {
    return true;
  } else return false;
}

// 폼 제출
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkName(inputName.value);
  checkEmail(email.value);
  checkAge(age.value);
  checkPassword(password.value);
  checkPassword2(password2.value);
  if (showModal()) {
    modalContainer.classList.add("show");
    modal.classList.add("show");
  }
});

function checkName(name) {
  if (name === "") {
    nameMessage.innerHTML = "필수 입력 항목입니다!";
    nameMessage.style.display = "inline";
    nameMessage.style.color = "red";
    validate[0] = false;
  } else {
    nameMessage.innerHTML = "멋진 이름이네요!";
    nameMessage.style.display = "inline";
    nameMessage.style.color = "green";
    validate[0] = true;
  }
}

function checkEmail(email) {
  if (email === "" || !email.includes("@")) {
    emailMessage.innerHTML = "올바른 이메일 형식이 아닙니다!";
    emailMessage.style.display = "inline";
    emailMessage.style.color = "red";
    validate[1] = false;
  } else {
    emailMessage.innerHTML = "올바른 이메일 형식입니다!";
    emailMessage.style.display = "inline";
    emailMessage.style.color = "green";
    validate[1] = true;
  }
}

function checkAge(age) {
  if (age === "") {
    ageMessage.innerHTML = "나이를 입력해주세요!";
    ageMessage.style.display = "inline";
    ageMessage.style.color = "red";
    validate[2] = false;
  } else if (age < 0) {
    ageMessage.innerHTML = "나이는 음수가 될 수 없습니다!";
    ageMessage.style.display = "inline";
    ageMessage.style.color = "red";
    validate[2] = false;
  } else if (age % 1 !== 0) {
    ageMessage.innerHTML = "나이는 소수가 될 수 없습니다!";
    ageMessage.style.display = "inline";
    ageMessage.style.color = "red";
    validate[2] = false;
  } else if (age < 19) {
    ageMessage.innerHTML = "미성년자는 가입할 수 없습니다!";
    ageMessage.style.display = "inline";
    ageMessage.style.color = "red";
    validate[2] = false;
  } else {
    ageMessage.innerHTML = "올바른 나이 형식입니다!";
    ageMessage.style.display = "inline";
    ageMessage.style.color = "green";
    validate[2] = true;
  }
}

function checkPassword(password) {
  const regexp = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,}$/;
  if (password === "" || password.length < 4) {
    passwordMessage.innerHTML = "비밀번호는 최소 4자리 이상이어야합니다.";
    passwordMessage.style.display = "inline";
    passwordMessage.style.color = "red";
    validate[3] = false;
  } else if (password === "" || password.length > 12) {
    passwordMessage.innerHTML = "비밀번호는 12자리 이하여야합니다.";
    passwordMessage.style.display = "inline";
    passwordMessage.style.color = "red";
    validate[3] = false;
  } else {
    if (regexp.test(password)) {
      passwordMessage.innerHTML = "올바른 비밀번호입니다!";
      passwordMessage.style.display = "inline";
      passwordMessage.style.color = "green";
      validate[3] = true;
    } else {
      passwordMessage.innerHTML =
        "비밀번호는 영어, 숫자, 특수 문자를 하나 이상씩 포함해야 합니다.";
      passwordMessage.style.display = "inline";
      passwordMessage.style.color = "red";
      validate[3] = false;
    }
  }
}
function checkPassword2(password2) {
  if (password2 === "" || password2 !== password.value) {
    password2Message.innerHTML = "비밀번호가 일치하지 않습니다.";
    password2Message.style.display = "inline";
    password2Message.style.color = "red";
    validate[4] = false;
  } else {
    password2Message.innerHTML = "비밀번호가 일치합니다!";
    password2Message.style.display = "inline";
    password2Message.style.color = "green";
    validate[4] = true;
  }
}

// 모달 관리
modalCloseBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
  modal.classList.remove("show");
});

function showModal() {
  for (i = 0; i < 5; i++) {
    if (validate[i] === false) return false;
    if (i === 4) {
      return true;
    }
  }
}
