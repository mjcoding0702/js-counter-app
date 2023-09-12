const countAddBtn = document.getElementById("add");
const counterHeader = document.getElementById("count");
const countSubtractBtn = document.getElementById("substract");

let count = 0;

countAddBtn.addEventListener("click", function () {
  count++;
  counterHeader.innerText = count;
});

countSubtractBtn.addEventListener("click", () => {
  count--;
  counterHeader.innerText = count;
});
