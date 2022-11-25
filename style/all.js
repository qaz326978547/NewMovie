
// const { JSDOM } = require("jsdom");
// const { window } = new JSDOM("");
// const $ = require("jquery")(window);


// $(".back-top").click(function (e) {
//     e.preventDefault();
//     $("html,body").animate({
//         scrollTop: 0
//     }, 2000);
// })
//scrollTop 到指定高度顯示
// $(window).scroll(function () {
//     if ($(window).scrollTop() > 200) {
//         if ($(".back-top").hasClass("hide")) {
//             $(".back-top").toggleClass("hide");
//         }
//     } else {
//         $(".back-top").addClass("hide");
//     }
// });

jq2 = jQuery.noConflict();
jq2(function ($) {
    // Code using $ as usual goes here; the actual jQuery object is jq2
    $(".jq-adClose").click(function (event) {
        /* Act on the event */
        event.preventDefault();
        $(".adBox").fadeOut();
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 800) {
            if ($(".goTop").hasClass("hide")) {
                $(".goTop").toggleClass("hide");
            }
        } else {
            $(".goTop").addClass("hide");
        }
    });

    $(".jq-goTop").click(function (e) {
        e.preventDefault();
        $("html,body").animate(
            {
                scrollTop: 0
            },
            300
        );
    });
    //翻轉
    $('.flipcard').click(function () {
        $(this).find('.flipcard-wrap').toggleClass('flipped');

    });
});

const time = new Date()
const mm = time.getMonth() + 1;
const yy = time.getFullYear();
const dd = time.getDate();
const hr = time.getHours().toString().padStart(2, "0");
const min = time.getMinutes().toString().padStart(2, "0");
const sec = time.getSeconds().toString().padStart(2, "0");
const commentTime = document.querySelector(".comment-time")
console.log(sec);
// function MyTime() {
//     const MyTime = `${yy}-${mm.toString().padStart(2, "0")}-${dd} ${hr}:${min}:${sec}`
//     commentTime.innerHTML = MyTime;
//     timer()
// }
const MyTime = `${yy}-${mm.toString().padStart(2, "0")}-${dd} ${hr}:${min}:${sec}`
// console.log(MyTime);
// function MyTime() {
//     console.log(`${yy}-${mm.toString().padStart(2, "0")}-${dd} ${hr}:${min}:${sec}`);
// }

// function mytime(){
//     const MyTime = `${yy}-${mm.toString().padStart(2, "0")}-${dd} ${hr}:${min}:${sec}`
//     timer()
// }
function timer() {
    temp = setInterval(function () {

    }, 1000);
}



// console.log(NewTime());
// const ok = setInterval(function () {
//     MyTime
// }, 1000);
// console.log(ok);
//comment功能
const data = []
//渲染DOM
const doctorRender = document.querySelector(".doctor-render")
const doctorRenderNew = document.querySelector(".doctor-render-new")
//資料初始化渲染
function renderData() {
    let str = "";
    data.forEach(function (item, index) {
        str += `<div class="doctor-comment-bg my-3">
        <div class="doctor-comment-header d-flex ali-c">
            <h5 class="text-white my-0 me-3">YourName</h5>
            <div class="star d-flex ali-c me-3">
                <img src="../images/star/star.png" height="15px" width="15px" alt="">
                <img src="../images/star/star.png" height="15px" width="15px" alt="">
                <img src="../images/star/star.png" height="15px" width="15px" alt="">
                <img src="../images/star/star.png" height="15px" width="15px" alt="">
                <img src="../images/star/star.png" height="15px" width="15px" alt="">
            </div>
            <div class="comment-time text-white">${MyTime}</div>
        </div>
        <div class="doctor-comment-body">
            <p>${item.content}</p>
        </div>
    </div>`
        doctorRenderNew.innerHTML = str;
    })
}
//新增功能
const txt = document.querySelector(".txt")
function addComment() {

    let obj = {};
    obj.content = txt.value
    data.push(obj)
    renderData()
    txt.value = ""

}

//註冊
const SignUpEmail = document.querySelector(".signup-email")
const SignUpPassword = document.querySelector(".signup-password")
const SignUpBtn = document.querySelector(".signup-btn")

const SignUpUserName = document.querySelector(".signup-username")
const SignUpPhone = document.querySelector(".signup-phone")
const SignUpConfirm = document.querySelector(".signup-confirm")
//登入
const LogInEmail = document.querySelector(".login-email")
const LogInPassword = document.querySelector(".login-password")
const LogInBtn = document.querySelector(".login-btn")

//顯示結果
const message = document.querySelector(".message")
//註冊
SignUpBtn.addEventListener("click", function (e) {
    CallSingUp()
    SignUpEmail.value = ""
    SignUpPassword.value = ""
    message.textContent = ""
    SignUpUserName.value = ""
    SignUpPhone.value = ""
    SignUpConfirm.value = ""
})

function CallSingUp() {

    let obj = {};
    obj.email = SignUpEmail.value
    obj.password = SignUpPassword.value
    console.log(obj)

    axios.post('https://hexschool-tutorial.herokuapp.com/api/signup', obj)
        .then(function (response) {
            console.log(response);
            message.textContent = response.data.message
        })
        .catch(function (error) {
            console.log(error);
        })
}
//登入
const LogInMessage = document.querySelector(".login-message")
LogInBtn.addEventListener("click", function (e) {
    CallSingin()
    LogInEmail.value = ""
    LogInPassword.value = ""
    LogInMessage.textContent = ""
})

function CallSingin() {
    if (LogInEmail.value == "" || LogInPassword.value == "") {
        alert("請輸入正確資料")
    }
    let obj = {};
    obj.email = LogInEmail.value
    obj.password = LogInPassword.value
    console.log(obj)

    axios.post('https://hexschool-tutorial.herokuapp.com/api/signin', obj)
        .then(function (response) {
            console.log(response);
            LogInMessage.textContent = response.data.message
        })
        .catch(function (error) {
            console.log(error);
        })
}

