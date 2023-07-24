"use strict";


//wait until all Content has been loaded to execute the logic
document.addEventListener("DOMContentLoaded", function () {
  let body = document.querySelector("body");

  let textParts = document.querySelectorAll(".text");
  let fontSizeBtns = document.querySelectorAll(".f-s");
  const fontSizes = ["small", "large", "xx-large"];

  let colorBtns = document.querySelectorAll(".c");
  const colors = ["#000", "#893737", "#352669"];

  let colorPicker = document.querySelector("#color-picker");

  let resetBtn = document.querySelector("#reset");

  //logic for changing font sixe on btn click
  fontSizeBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      textParts.forEach((text) => {
        text.style.fontSize = fontSizes[index];
      });
    });
  });

  //logic for color changing with buttons
  colorBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (index < colorBtns.length - 1) {
        body.style.backgroundColor = colors[index];
        body.style.backgroundImage = "url()";
      }
    });
  });

  //color picker logic
  colorPicker.addEventListener("input", () => {
    body.style.backgroundColor = colorPicker.value;
    body.style.backgroundImage = "url()";
  });

  //reset color
  resetBtn.addEventListener("click", () => {
    body.style.backgroundColor = "";
    body.style.backgroundImage = "url(../img/bg1.jpg)";
  });


  //image hover part in the gallery
  let imgView = document.querySelector(".img-view");
  let imgInfoArea = document.querySelector(".img-info-area");
  let title = document.querySelector(".img-info-area .title h3");
  let info = document.querySelector(".img-info-area .info p");
  let imgs = document.querySelectorAll(".img-section img");

  imgs.forEach(function (img, index) {
    img.addEventListener("mouseover", function () {
      //load json and put data in to the title and info
      fetch("js/imgInfo.json")
        .then((response) => response.json())
        .then((data) => {
          title.textContent = data[index].title;
          info.textContent = data[index].info;
        });

      //show the img info area
      imgInfoArea.classList.add("opacity-1");
      imgView.style.backgroundImage = `url(${img.src})`;
    });
  });
});
