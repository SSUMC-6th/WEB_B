document
    .getElementById("signupForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var nameError = document.getElementById("nameError");

        var email = document.getElementById("email").value;
        var emailError = document.getElementById("emailError");

        var age = document.getElementById("age").value;
        var ageError = document.getElementById("ageError");

        var password = document.getElementById("password").value;
        var passwordError = document.getElementById("passwordError");

        var confirm_password =
            document.getElementById("confirm_password").value;
        var confirm_passwordError = document.getElementById(
            "confirm_passwordError"
        );

        var formIsValid = true;

        if (typeof name === "string" && name.trim() !== "") {
            nameError.textContent = "멋진 이름이네요!";
            nameError.style.color = "green";
            nameError.style.display = "block";
        } else {
            nameError.textContent = "필수 입력 항목입니다!";
            nameError.style.color = "red";
            nameError.style.display = "block";
            formIsValid = false;
        }

        if (
            typeof email === "string" &&
            email.trim() !== "" &&
            email.includes("@")
        ) {
            emailError.textContent = "올바른 이메일 형식입니다!";
            emailError.style.color = "green";
            emailError.style.display = "block";
        } else {
            emailError.textContent = "올바른 이메일 형식이 아닙니다!";
            emailError.style.color = "red";
            emailError.style.display = "block";
            formIsValid = false;
        }

        if (!age) {
            ageError.textContent = "나이를 입력해주세요!";
            ageError.style.color = "red";
            ageError.style.display = "block";
            formIsValid = false;
        } else if (
            isNaN(age) ||
            Number(age) < 0 ||
            age.includes(".") ||
            Number(age) < 19
        ) {
            ageError.textContent = "올바른 나이 형식이 아닙니다!";
            ageError.style.color = "red";
            ageError.style.display = "block";
            formIsValid = false;
        } else {
            ageError.textContent = "올바른 나이 형식입니다!";
            ageError.style.color = "green";
            ageError.style.display = "block";
        }

        if (password.length < 4) {
            passwordError.textContent =
                "비밀번호는 최소 4자리 이상이어야 합니다.";
            passwordError.style.color = "red";
            passwordError.style.display = "block";
            formIsValid = false;
        } else if (password.length > 12) {
            passwordError.textContent =
                "비밀번호는 최대 12자리까지 가능합니다.";
            passwordError.style.color = "red";
            passwordError.style.display = "block";
            formIsValid = false;
        } else if (
            !/[A-Za-z]/.test(password) ||
            !/\d/.test(password) ||
            !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)
        ) {
            passwordError.textContent =
                "비밀번호는 영어, 숫자, 특수문자를 모두 조합해서 작성해야 합니다.";
            passwordError.style.color = "red";
            passwordError.style.display = "block";
            formIsValid = false;
        } else {
            passwordError.textContent = "올바른 비밀번호입니다!";
            passwordError.style.color = "green";
            passwordError.style.display = "block";
        }

        if (confirm_password.length == 0 || confirm_password != password) {
            confirm_passwordError.textContent = "비밀번호가 일치하지 않습니다.";
            confirm_passwordError.style.color = "red";
            confirm_passwordError.style.display = "block";
            formIsValid = false;
        } else {
            confirm_passwordError.textContent = "비밀번호가 일치합니다.";
            confirm_passwordError.style.color = "green";
            confirm_passwordError.style.display = "block";
        }

        if (formIsValid) {
            alert("회원 가입이 완료되었습니다!");
        }
    });
