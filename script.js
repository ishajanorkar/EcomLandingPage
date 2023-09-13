let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu").onclick = () => {
  navbar.classList.add("active");
};

document.querySelector("#close").onclick = () => {
  navbar.classList.remove("active");
};

// mousemove home img

// document.addEventListener("mousemove", move);
// function move(e) {
//   this.querySelectorAll(".move").forEach((layer) => {
//     const speed = layer.getAttribute("data-speed");

//     const x = (window.innerWidth - e.pageX * speed) / 120;
//     const y = (window.innerWidth - e.pageY * speed) / 120;

//     layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
//   });
// }

// gsap.from(".logo", { opacity: 0, duration: 1, delay: 2, y: 10 });
// gsap.from(".navbar .nav_item", {
//   opacity: 0,
//   duration: 1,
//   delay: 2.1,
//   y: 30,
//   stagger: 0.2,
// });

// gsap.from(".title", { opacity: 0, duration: 1, delay: 1.6, y: 30 });
// gsap.from(".description", { opacity: 0, duration: 1, delay: 1.8, y: 30 });
// gsap.from(".btn", { opacity: 0, duration: 1, delay: 2.1, y: 30 });
// gsap.from(".image", { opacity: 0, duration: 1, delay: 2.6, y: 30 });

// Validation

var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");


// function to validate user name feild

function validateUname() {
  var name = document.getElementById("userName").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is Required";
    return false;
  }

  if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameError.innerHTML = "Please Enter Full Name";
    return false;
  }

  nameError.innerHTML =
    '<i class="fa-regular fa-circle-check fa-2xl" style="color: #34c200;"></i>';
  return true;
}


// function to validate phone feild

function validateUphone() {
  var phone = document.getElementById("userPhone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone No. is Required";
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone No. should be 10 digits";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Enter Valid Phone Number";
    return false;
  }

  phoneError.innerHTML =
    '<i class="fa-regular fa-circle-check fa-2xl" style="color: #34c200;"></i>';
  return true;
}

// function to validate Email feild

function validateUemail() {
  var email = document.getElementById("useremail").value;


  var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (email.length == 0) {
    emailError.innerHTML = "Email is Required";
    return false;
  }

  if (!email.match(emailPattern)) {
    emailError.innerHTML = "Enter a Valid Email Address";
    return false;
  }

  emailError.innerHTML =
    '<i class="fa-regular fa-circle-check fa-2xl" style="color: #34c200;"></i>';
  return true;
}

// function to validate message field

function validateUmessage() {
  var message = document.getElementById("userMessage").value;

  if (message.length == 0) {
    messageError.innerHTML = "Message is Required";
    return false;
  }

  messageError.innerHTML =
    '<i class="fa-regular fa-circle-check fa-2xl" style="color: #34c200;"></i>';
  return true;
}


// function to validate whole form and display success message

function validateFormAndOpenPopup() {
  
  const form = document.getElementById('contact-frm');

  let isValid = true;

  
  if (form) {
   
    const textField = form.querySelector('input[type="text"]');
    if (textField && textField.value.trim() === '') {
      isValid = false;
      document.getElementById('submit-error').textContent = 'Please fill out all required fields.';
    }


  }

  if (isValid) {
    openPopup();
  }
}

function openPopup() {
  const popup = document.getElementById('popup');
  if (popup) {
    popup.style.display = 'block';
  }
}

function closePopup() {
  const popup = document.getElementById('popup');
  if (popup) {
    popup.style.display = 'none';
  }
}




