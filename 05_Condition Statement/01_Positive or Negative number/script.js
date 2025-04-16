// let num = 24;

// if (num >= 0) {
//   console.log("Positive Number!");
// } else {
//   console.log("Negative Number!");
// }

let result = document.getElementById("answer");
function checkData() {
    let inputNum = parseInt(document.getElementById("input-num").value);

    if (inputNum >= 0) {
          result.innerText = "Positive Number!";  
    } else {
         result.innerText = "Negative Number!";  
    }
}
