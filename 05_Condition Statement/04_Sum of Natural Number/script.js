// Sum of First N Natural numbers

// formula -> n*(n+1)/2
// loop

// let n = parseInt(prompt("Enter Number : "));

// let sum = (n * (n + 1)) / 2;

// console.log(`Sum of natural number : ${sum}`);

// let n = parseInt(prompt("Enter Number : "));

// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log("Sum : ", sum);


let answer = document.getElementsByClassName("answer");


function sumNatural() {
    let sum = 0;
    let data = parseInt(document.getElementById("input-num").value);
    
    if (isNaN(data)) {
        answer[0].classList.add("text-danger");
        answer[0].innerHTML =`<i>Please Enter Correct Data</i>`
    } else {
      // sum = data * (data + 1) / 2;

      for (let i = 1; i <= data; i++) {
        sum += i;
      }
        answer[0].classList.remove("text-danger")
        answer[0].innerHTML = `<b> Sum : ${sum} </b>`;

    }



}
