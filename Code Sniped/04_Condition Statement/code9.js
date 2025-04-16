let oldPassword = "red123";
let enteredOld = "red123";
let newPassword = "red456";

if (enteredOld === oldPassword) {
  oldPassword = newPassword;
  console.log("Password changed successfully");
} else {
  console.log("Old password is incorrect");
}
