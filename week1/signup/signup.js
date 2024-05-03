const form = document.getElementById('signup-form');
const submitButton = document.querySelector('input[type="submit"]');
const modal = document.querySelector('.modal-container');
const close = document.getElementById('close');


form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});
submitButton.addEventListener('click', () => {
    validateForm();
  });
  
  close.addEventListener('click', () => {
    modal.style.display = "none";
  });

function validateForm() {
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const ageInput = document.getElementById('age');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('pwcheck');

  const usernameError = document.getElementById('error-username');
  const emailError = document.getElementById('error-email');
  const ageError = document.getElementById('error-age');
  const passwordError = document.getElementById('error-password');
  const pwcheckError = document.getElementById('error-pwcheck');
  
  let isValid=true;

  if (!usernameInput.value.trim()) {
    usernameError.innerHTML = '필수 입력 항목입니다!';
    usernameError.style.color = 'red';
    isValid = false;
  }
  else {
    usernameError.innerHTML = '멋진 이름이네요!';
    usernameError.style.color = 'green';
    
  }

  if (!emailInput.value.trim()) {
    emailError.innerHTML = '올바른 이메일 형식이 아닙니다!';
    emailError.style.color = 'red';
    isValid = false;
  }else {
    emailError.innerHTML = '올바른 이메일 형식입니다!';
    emailError.style.color = 'green';

  }

  if (!ageInput.value.trim()) {
    ageError.innerHTML = '나이를 입력해주세요.';
    ageError.style.color = 'red';
    isValid = false;
  }else if (isNaN(ageInput.value.trim())) {
    ageError.innerHTML = '나이는 숫자 형식이어야 합니다.';
    ageError.style.color = 'red';
    isValid = false;
} else if (parseInt(ageInput.value.trim()) <= 0) {
    ageError.innerHTML = '나이는 음수가 될 수 없습니다!';
    ageError.style.color = 'red';
    isValid = false;
} else if (!Number.isInteger(parseFloat(ageInput.value.trim()))) {
    ageError.innerHTML = '나이는 소수가 될 수 없습니다!';
    ageError.style.color = 'red';
    isValid = false;
} else if (parseInt(ageInput.value.trim())<19) {
    ageError.innerHTML = '미성년자는 가입할 수 없습니다!';
    ageError.style.color = 'red';
    isValid = false;
} else {
    ageError.innerHTML = '올바른 나이 형식입니다!';
    ageError.style.color = 'green';

  }

  if (!passwordInput.value.trim()) {
    passwordError.innerHTML = '비밀번호는 최소 4자리 이상이어야 합니다.';
    passwordError.style.color = 'red';
    isValid = false;
  } else if (passwordInput.value.trim().length < 4) {
    passwordError.innerHTML = '비밀번호는 최소 4자리 이상이어야 합니다.';
    passwordError.style.color = 'red';
    isValid = false;
  } else if(passwordInput.value.trim().length > 12) {
    passwordError.innerHTML = '비밀번호는 최대 12자리까지 가능합니다.';
    passwordError.style.color = 'red';
    isValid = false;
  } else if (!(/[a-zA-Z]/.test(passwordInput.value.trim())) || !(/\d/.test(passwordInput.value.trim())) || !(/[!@#$%^&*()\-_=+{};:,<.>]/.test(passwordInput.value.trim()))) {
    passwordError.innerHTML = '영어, 숫자, 특수문자를 모두 포함한 비밀번호를 사용하세요.';
    passwordError.style.color = 'red';
    isValid = false;
  }  else {
    passwordError.innerHTML = '올바른 비밀번호입니다!';
    passwordError.style.color = 'green';

  }
  if (!confirmPasswordInput.value.trim()) {
    pwcheckError.innerHTML = '비밀번호가 일치하지 않습니다.';
    pwcheckError.style.color = 'red';
    isValid = false;}
  else if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
    pwcheckError.innerHTML = '비밀번호가 일치하지 않습니다.';
    pwcheckError.style.color = 'red';
    isValid = false;
  } else{
    pwcheckError.innerHTML = '비밀번호가 일치합니다.';
    pwcheckError.style.color = 'green';

  }

if(isValid){
modal.style.display = "flex";
    //form.submit(); // 폼 제출
}
else {return ; }

} 
  
