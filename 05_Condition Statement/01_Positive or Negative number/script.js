let result = document.getElementById("answer");

function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);

  if (isNaN(inputNum)) {
    result.innerText = "Please enter a valid number!";
    result.classList.add("text-danger");
    return;
  }

  if (inputNum >= 0) {
    result.innerText = "Positive Number!";
    result.classList.remove("text-danger");
    result.classList.add("text-success");
  } else {
    result.innerText = "Negative Number!";
    result.classList.remove("text-danger");
    result.classList.add("text-warning");
  }
}
