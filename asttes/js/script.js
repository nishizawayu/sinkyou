const hambtn = document.querySelector(".hambtn");
const ham = document.querySelector(".ham");
const head = document.querySelector("header");

let count = 0;

hambtn.addEventListener("click", () => {
  count++;
  console.log(count);
  hambtn.classList.toggle("act");
  ham.classList.toggle("act");
  if (count % 2 == 1) {
    head.style.position = "fixed";
  } else {
    head.style.position = "";
  }
});

try {
  let mySwiper = new Swiper(".swiper-container", {
    effect: "slide",
    speed: 1000,
    loop: true,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
} catch {
  console.log("no swiper");
}

const onoffbtn1 = document.querySelectorAll(".myswitch__btn1");
const onoffbtn2 = document.querySelectorAll(".myswitch__btn2");
const switch1 = document.querySelector(".switch1__defo");
const switch2 = document.querySelector(".switch2__defo");
const switch3 = document.querySelector(".switch3__defo");
const switch4 = document.querySelector(".switch4__defo");
const on1 = document.querySelector(".ON1");
const on2 = document.querySelector(".ON2");
const on3 = document.querySelector(".ON3");
const on4 = document.querySelector(".ON4");
const off1 = document.querySelector(".OFF1");
const off2 = document.querySelector(".OFF2");
const off3 = document.querySelector(".OFF3");
const off4 = document.querySelector(".OFF4");

try {
  console.log(onoffbtn1);
  onoffbtn1[0].addEventListener("click", () => {
    switch1.classList.toggle("act");
    off1.classList.toggle("act");
    on1.classList.toggle("act");
    console.log("func");
  });

  onoffbtn1[1].addEventListener("click", () => {
    switch1.classList.toggle("act");
    off1.classList.toggle("act");
    on1.classList.toggle("act");
    console.log("func");
  });

  onoffbtn1[2].addEventListener("click", () => {
    switch3.classList.toggle("act");
    off3.classList.toggle("act");
    on3.classList.toggle("act");
    console.log("func");
  });

  onoffbtn1[3].addEventListener("click", () => {
    switch3.classList.toggle("act");
    off3.classList.toggle("act");
    on3.classList.toggle("act");
    console.log("func");
  });

  onoffbtn2[0].addEventListener("click", () => {
    switch2.classList.toggle("act");
    on2.classList.toggle("act");
    off2.classList.toggle("act");
    console.log("func2");
  });

  onoffbtn2[1].addEventListener("click", () => {
    switch2.classList.toggle("act");
    on2.classList.toggle("act");
    off2.classList.toggle("act");
    console.log("func2");
  });

  onoffbtn2[2].addEventListener("click", () => {
    switch4.classList.toggle("act");
    on4.classList.toggle("act");
    off4.classList.toggle("act");
    console.log("func2");
  });

  onoffbtn2[3].addEventListener("click", () => {
    switch4.classList.toggle("act");
    on4.classList.toggle("act");
    off4.classList.toggle("act");
    console.log("func2");
  });
} catch {
  console.log("no-onoffbtn");
}

const tabmenu1 = document.querySelector(".workstyle__btn-man");
const tabmenu2 = document.querySelector(".workstyle__btn-woman");
const man = document.querySelector(".workstyle__blue");
const woman = document.querySelector(".workstyle__red");
const tab = document.querySelector(".workstyle__tab-flex");

try {
  tabmenu1.addEventListener("click", () => {
    man.classList.add("act1");
    woman.classList.add("act1");
    man.classList.remove("act2");
    woman.classList.remove("act2");
    tab.classList.remove("act1");
    tab.classList.add("act2");
    tabmenu1.classList.add("act2");
    tabmenu2.classList.remove("act2");
    tabmenu1.classList.remove("act1");
    tabmenu2.classList.add("act1");
  });

  tabmenu2.addEventListener("click", () => {
    man.classList.add("act2");
    man.classList.remove("act1");
    woman.classList.remove("act1");
    woman.classList.add("act2");
    tab.classList.add("act1");
    tab.classList.remove("act2");
    tabmenu1.classList.add("act1");
    tabmenu2.classList.remove("act1");
    tabmenu1.classList.remove("act2");
    tabmenu2.classList.add("act2");
  });
} catch {
  console.log("notab");
}
