import app from './firebase.js'
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

const auth = getAuth(app)

const loginBtn = document.querySelector('#loginBtn')
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPass').value;
    if (email === '' || password === '') {
        let errorText = document.querySelector('.errorText');
        errorText.innerHTML = '아이디와 비밀번호를 입력하세요';
        return;
    }
    
    signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
            const user = data.user;
            window.location.href = "/";
            localStorage.setItem("bookmateIsLogin", true);
            localStorage.setItem("bookmateIsUid", user.uid);
            localStorage.setItem("bookmateIsEmail", user.email);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
})