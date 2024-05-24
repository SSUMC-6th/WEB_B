function initializeForm() {
    const form = document.getElementById("signup-form"); // 전체 폼을 가져옴
    const successMessage_id = document.getElementById("success-message-id"); // successMessage
    const errorMessage_id= document.getElementById("error-message-id"); // errorMessage
    const errorMessage_id2= document.getElementById("error-message-id2"); // errorMessage 2
    const successMessage_email = document.getElementById("success-message-email"); // successMessage
    const errorMessage_email= document.getElementById("error-message-email"); // errorMessage
    const successMessage_age = document.getElementById("success-message-age"); // successMessage
    const errorMessage_age= document.getElementById("error-message-age"); // errorMessage
    const errorMessage_age2= document.getElementById("error-message-age2"); // errorMessage
    const errorMessage_age3= document.getElementById("error-message-age3"); // errorMessage
    const errorMessage_age4= document.getElementById("error-message-age4"); // errorMessage
    const errorMessage_age5= document.getElementById("error-message-age5"); // errorMessage
    const successMessage_pw = document.getElementById("success-message-pw"); // successMessage
    const errorMessage_pw= document.getElementById("error-message-pw"); // errorMessage
    const errorMessage_pw2= document.getElementById("error-message-pw-2"); // errorMessage
    const errorMessage_pw3= document.getElementById("error-message-pw-3"); // errorMessage
    const successMessage_pc = document.getElementById("success-message-pc"); // successMessage
    const errorMessage_pc= document.getElementById("error-message-pc"); // errorMessage

    const name = document.getElementById("name"); // 이름 input
    const email = document.getElementById("email");
    const age = document.getElementById("age");
    const password = document.getElementById("password");
    const password_confirm = document.getElementById("confirm-password");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // submit이 눌렸을 때 페이지가 다시 로드 되는게 아니라 자바스크립트에서 처리 
        // if (!/^[a-zA-Z\uAC00-\uD7A3]+$/.test(name.value.trim()))
        var check = [false, false, false, false, false];
        

        // 이름 처리
        if(name.value === "") // 비어 있으면
        {
            errorMessage_id.style.display = "block";
            successMessage_id.style.display = "none";
        }
        else if (!/^[a-zA-Z\uAC00-\uD7A3]+$/.test(name.value.trim())) // 문자열이 아니면
        {   
            errorMessage_id2.style.display = "block";
            errorMessage_id.style.display = "none";
            successMessage_id.style.display = "none";
        }
        else // 제대로 된 입력
        {
            errorMessage_id.style.display = "none";
            errorMessage_id2.style.display = "none";
            successMessage_id.style.display = "block";
            check[0] = true;
        }
        // 이메일 처리
        if(email.value.trim() === "" || !isValidEmail(email)) //비어있거나 email형식이 아니면
        {
            errorMessage_email.style.display = "block";
            successMessage_email.style.display = "none";
        }
        else
        {
            errorMessage_email.style.display = "none";
            successMessage_email.style.display = "block";
            check[1] = true;
        }
        // 나이 처리
        if(age.value === "") // 비어 있으면
        {
            errorMessage_age.style.display = "block";
            errorMessage_age2.style.display = "none";
            successMessage_age.style.display = "none";
        }
        else if(!isNum(age)) // 값이 있는데 숫자가 아니라면 
        {
            errorMessage_age2.style.display = "block";
            errorMessage_age.style.display = "none";
            errorMessage_age5.style.display = "none";
            errorMessage_age3.style.display = "none";
            errorMessage_age4.style.display = "none";
            successMessage_age.style.display = "none";
        }
        else if(isnegative(age)) // 값이 음수라면
        {
            errorMessage_age3.style.display = "block";
            errorMessage_age2.style.display = "none";
            errorMessage_age.style.display = "none";
            errorMessage_age5.style.display = "none";
            errorMessage_age4.style.display = "none";
            successMessage_age.style.display = "none";
        }
        else if(isFloat(age)) //값이 소수라면
        {
            errorMessage_age4.style.display = "block";
            errorMessage_age3.style.display = "none";
            errorMessage_age2.style.display = "none";
            errorMessage_age.style.display = "none";
            errorMessage_age5.style.display = "none";
            successMessage_age.style.display = "none";
        }
        else if(!isAdult(age)) // 값이 19 미만이라면
        {
            errorMessage_age5.style.display = "block";
            errorMessage_age4.style.display = "none";
            errorMessage_age3.style.display = "none";
            errorMessage_age2.style.display = "none";
            errorMessage_age.style.display = "none";
            successMessage_age.style.display = "none";
        }
        else
        {
            successMessage_age.style.display = "block";
            errorMessage_age4.style.display = "none";
            errorMessage_age5.style.display = "none";
            errorMessage_age3.style.display = "none";
            errorMessage_age.style.display = "none";
            errorMessage_age2.style.display = "none";
            check[2] = true;
        }
        // 비밀번호 처리
        if(password.value.trim().length < 4) // 입력이 4보다 작다면
        {
            successMessage_pw.style.display = "none"
            errorMessage_pw.style.display = "block"
            errorMessage_pw2.style.display = "none"
            errorMessage_pw3.style.display = "none"
        }
        else if(password.value.trim().length > 12) // 입력이 12보다 크다면
        {
            errorMessage_pw2.style.display = "block"
            errorMessage_pw.style.display = "none"
            successMessage_pw.style.display = "none"
            errorMessage_pw3.style.display = "none"
        }
        else if(!hasAllTypes(password.value))
        {
            errorMessage_pw3.style.display = "block"
            errorMessage_pw.style.display = "none"
            successMessage_pw.style.display = "none"
            errorMessage_pw2.style.display = "none"
        }
        else
        {
            successMessage_pw.style.display = "block"
            errorMessage_pw2.style.display = "none"
            errorMessage_pw.style.display = "none"
            errorMessage_pw3.style.display = "none"
            check[3] = true;
        }
        // 비밀번호 확인 처리
        if(password_confirm.value != password.value) // 입력이 다르면
        {
            successMessage_pc.style.display = "none"
            errorMessage_pc.style.display = "block"
        }
        else
        {
            successMessage_pc.style.display = "block"
            errorMessage_pc.style.display = "none"
            check[4] = true;
        }


        if (check.every(function(element) { return element === true; })) {
            // 모든 입력이 정상적으로 이루어졌을 때 모달을 표시
            showModal();
        }
    });

    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", function() {
        closeModal();
    });
}

function isValidEmail(email) {
    const emailValue = email.value.trim();
    const atIndex = emailValue.indexOf("@");
    const dotIndex = emailValue.lastIndexOf(".");

    // "@"가 존재하고, "@" 뒤에 "."도 존재하는지 확인
    if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < emailValue.length - 1) {
        return true; // 올바른 이메일 형식
    } else {
        return false; // 올바르지 않은 이메일 형식
    }
}

function isNum(input) {
    if(!isNaN(parseFloat(input.value)))//isNan 숫자면 false 리턴
        return true;
    else
        return false;
}
function isnegative(input) { // 음수인지 판별
    if(parseInt(input.value) < 0)
    {
        return true;
    }
    else
        return false;
}
function isFloat(input) {
    return input.value.includes('.');
}

function isAdult(input) {
    if(parseInt(input.value) > 18)
        return true;
    else
        return false;
}

function hasAllTypes(password) {
    // 영어, 숫자, 특수문자 각각의 포함 여부를 확인
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*()\-_=+[\]{};:'",.<>/?\\|~`]/.test(password);
    
    // 모든 종류가 포함되어 있는지 확인
    return hasLetter && hasNumber && hasSpecial;
}

// ================================= 모달 관련 =======================================

// 모달 표시 함수
function showModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}
  
  // 모달 닫기 함수
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}
  
  // 모달 창 닫기 버튼 클릭 이벤트 핸들러
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", closeModal);
  
  // 초기화
document.addEventListener("DOMContentLoaded", function() {
    closeModal(); // 페이지 로드 시 모달을 숨김
});
  

document.addEventListener("DOMContentLoaded", initializeForm);
