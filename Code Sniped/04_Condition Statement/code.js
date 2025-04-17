let oldPass = "abc123";
let newPass = "abc1234";

if (oldPass === "abc123") {
  if (newPass !== oldPass) {
    console.log("Password updated");
  } else {
    console.log("New password should be different");
  }
} else {
  console.log("Incorrect old password");
}
