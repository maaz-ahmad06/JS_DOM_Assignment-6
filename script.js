// const form = document.getElementById("myForm");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const password = document.getElementById("password").value;

//   if (name === "") {
//     alert("Name is required.");
//     return;
//   }

//   if (email === "") {
//     alert("Email is required.");
//     return;
//   }
//   if (!email.includes("@")) {
//     alert("Please enter a valid email address.");
//     return;
//   }

//   if(password === ""){
//     alert("Password is required");
//     return;
//   }
//   if(password.length < 6) {
//     alert("Password must be at least 6 characters")
//     return;
//   }

//   alert("Form is submitted successfully!");
// });

const form = document.getElementById("myForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

function showMessage(text, type) {
  message.textContent = text;
  message.className = type;
}

function clearMessage() {
  message.textContent = "";
  message.className = "";
}

function validate() {
  if (name.value.trim() === "") return "Name is required";
  if (!email.value.includes("@")) return "Invalid email";
  if (password.value.length < 6)
    return "Password must be at least 6 characters";
  return;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const error = validate();
  if (error) {
    showMessage(error, "error");
  } else {
    showMessage("Form submitted successfully", "success");
  }
});

[name, email, password].forEach(function (input) {
  input.addEventListener("input", function () {
    if (message.className === "error" && validate() === "") {
      clearMessage();
    }
  });
});

document.getElementById("resetBtn").addEventListener("click", function () {
  form.reset();
  clearMessage();
});