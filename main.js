// 선택자

const btn = document.querySelector(".btn");
const openbtn = document.querySelector(".btn>button");
const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slide-item:first-child");
const lastSlide = document.querySelector(".slide-item:last-child");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const modals = document.querySelectorAll(".modals");

const plPage = document.querySelector(".grid_Modal_1");
const plPage2 = document.querySelector(".grid_Modal_2");
const plPage3 = document.querySelector(".grid_Modal_3");
const plPage4 = document.querySelector(".grid_Modal_4");
const plPage5 = document.querySelector(".grid_Modal_5");
const plPage6 = document.querySelector(".grid_Modal_6");
const plPage7 = document.querySelector(".grid_Modal_7");
const plPage8 = document.querySelector(".grid_Modal_8");
const close = document.querySelector(".close1");
const close2 = document.querySelector(".close2");
const close3 = document.querySelector(".close3");
const close4 = document.querySelector(".close4");
const close5 = document.querySelector(".close5");
const close6 = document.querySelector(".close6");
const close7 = document.querySelector(".close7");
const close8 = document.querySelector(".close8");


// 함수

const opennav = () => {
  btn.classList.toggle("open");
};
const slideNum = document.querySelector(".slide_number");
const slideItems = document.getElementsByClassName("slide-item");

openbtn.addEventListener("click", opennav);
let count = 1;



const modal1 = () => {
  plPage.style.left = "0";
};

const closeModel1 = () => {
  plPage.style.left = "-100%";
};
const closeModel2 = () => {
  plPage2.style.left = "-100%";
};
const closeModal3 = () => {
  plPage3.style.left = "-100%";
};
const closeModal4 = () => {
  plPage4.style.left = "-100%";
};
const closeModal5 = () => {
  plPage5.style.left = "-100%";
};
const closeModal6 = () => {
  plPage6.style.left = "-100%";
};
const closeModal7 = () => {
  plPage7.style.left = "-100%";
};
const closeModal8 = () => {
  plPage8.style.left = "-100%";
};



const modal2 = () => {
  plPage2.style.left = "0";
};

const modal3 = () => {
  plPage3.style.left = "0";
};

const modal4 = () => {
  plPage4.style.left = "0";
};

const modal5 = () => {
  plPage5.style.left = "0";
};

const modal6 = () => {
  plPage6.style.left = "0";
};

const modal7 = () => {
  plPage7.style.left = "0";
};

const modal8 = () => {
  plPage8.style.left = "0";
};


function modal(n) {
  modals[n].style.display = "block";
}

// arrow Function은 this가 작동하지 않는다 .



// 실행

close.addEventListener("click", closeModel1);
close2.addEventListener("click", closeModel2);
close3.addEventListener("click", closeModal3);
close4.addEventListener("click", closeModal4);
close5.addEventListener("click", closeModal5);
close6.addEventListener("click", closeModal6);
close7.addEventListener("click", closeModal7);
close8.addEventListener("click", closeModal8);




//slide