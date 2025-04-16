let result = document.getElementById("answer");

function checkData() {
  let marks = parseInt(document.getElementById("input-num").value);

  if (isNaN(marks) || marks < 0 || marks > 100) {
    result.innerHTML = `<span class="text-danger">Please enter valid marks between 0 and 100!</span>`;
    return;
  }

  if (marks >= 90) {
    result.innerHTML = `<span class="text-success">Grade A</span>`;
  } else if (marks >= 80) {
    result.innerHTML = `<span class="text-primary">Grade B</span>`;
  } else if (marks >= 70) {
    result.innerHTML = `<span class="text-warning">Grade C</span>`;
  } else {
    result.innerHTML = `<span class="text-danger">Sorry, you have failed!</span>`;
  }
}
