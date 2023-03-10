"use strict";

const callbackBtn = document.querySelector(".callback-btn");
const callbackForm = document.querySelector(".callbackForm");

sessionStorage.removeItem("scrollPosition");
callbackBtn.addEventListener("click", onCallbackBtnClick);

function onCallbackBtnClick(e) {
  e.preventDefault();
  const targetElementTop =
    callbackForm.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: targetElementTop,
    behavior: "smooth",
  });
}