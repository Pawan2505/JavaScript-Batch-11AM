let result = document.getElementById("answer");

function checkEvenOdd() {
  let inputNum = parseInt(document.getElementById("input-num").value);

  if (isNaN(inputNum)) {
    result.innerText = "Please enter a valid number!";
    result.classList.remove("text-success", "text-warning");
    result.classList.add("text-danger");
    return;
  }

  if (inputNum % 2 === 0) {
    result.innerText = "Even Number!";
    result.classList.remove("text-danger", "text-warning");
    result.classList.add("text-success");
  } else {
    result.innerText = "Odd Number!";
    result.classList.remove("text-danger", "text-success");
    result.classList.add("text-warning");
  }
}
