const resultEl = document.getElementById("result");
const formEl = document.getElementById("form");

function sum() {
  let firstNum = document.getElementById("first-number").value;
  let secNum = document.getElementById("second-number").value;
  let result = parseInt(firstNum) + parseInt(secNum);

  resultEl.textContent = `Soma: ${result}`;
}
