import app from './firebase.js'
import { createUserWithEmailAndPassword, getAuth } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

const auth = getAuth(app)

const signUpBtn = document.querySelector('#signUpBtn')
signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.querySelector('#signUpEmail').value;
    const password = document.querySelector('#signUppassword').value;
    const rePassword = document.querySelector('#signUpRepassword').value;
    if (email === '' || password === '') {
        let errorText = document.querySelector('.errorText');
        errorText.innerHTML = '아이디와 비밀번호를 입력하세요';
    }else if (password !== rePassword) {
        let errorText = document.querySelector('.errorText');
        errorText.innerHTML = '비밀번호가 일치하지 않습니다';
        return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log('회원가입 성공', user);
        if (confirm('로그인하시겠습니까?')) {
            window.location.href = "/login";
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
})