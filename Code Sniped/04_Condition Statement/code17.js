let balance = 5000;
let withdraw = 4000;

if (withdraw <= 0) {
  console.log("Enter a valid amount");
} else if (withdraw > balance) {
  console.log("Insufficient Balance");
} else {
  balance -= withdraw;
  console.log(
    "Withdrawn: Rs." + withdraw + ", Remaining Balance: Rs." + balance
  );
}
