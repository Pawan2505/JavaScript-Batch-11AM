// let result = document.getElementById("answer");
// function checkData() {
//     let marks = parseInt(document.getElementById("input-num").value);

//     if (marks >= 90) {
//           result.innerHTML = ``
//     } else {
//          result.innerText = "Negative Number!";
//     }
// }

// let num = 10;

// const result = `The value of num : ${num}`;

// console.log(result);


// let num = 10;

// const result = "The value of num : ${num}";

// console.log(result);

let result = document.getElementById("answer");
function checkData() {
    let marks = parseInt(document.getElementById("input-num").value);

    if (marks >= 90) {
      result.innerHTML = `<i>Grade A</i>`;
    } else if (marks >= 80) {
      result.innerHTML = `<i>Grade B</i>`;
    } else if (marks >= 70) {
      result.innerHTML = `<i>Grade C</i>`;
    } else {
        result.innerHTML = `<i>Sorry, You are failed!</i>`;
    }
}
