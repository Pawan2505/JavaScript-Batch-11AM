let char = "e";

if (char.length === 1 && /[a-zA-Z]/.test(char)) {
  if ("aeiouAEIOU".includes(char)) {
    console.log("Vowel");
  } else {
    console.log("Consonant");
  }
} else {
  console.log("Invalid Input");
}
