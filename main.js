



// //Get the top button:
// mybutton = document.getElementById("topBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

$(document).ready(function() {
  $("#topBtn").click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, 500)
  }), $("#botBtn").click(function() {
      let e = $( document ).height();
      $("html, body").animate({
          scrollTop: e + "px"
      }, 1500)
  })
});

$(document).ready(function (){
  $(".box").fadeIn(3000);
});

$(document).ready(function (){
  $(".faders").fadeIn(3000);
});

let myForm = document.querySelector('.quote');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let msg = document.querySelector('#msg');
let res = document.querySelector('.response');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  //console.log('here');
  // console.log(typeof nameInput.value)
  // console.log(typeof emailInput.value)
  // console.log(typeof msg.value)
  if(nameInput.value === '' || emailInput.value === '' || msg.value === '') {
    // alert('Please enter all fields');
    //console.log('if block')
    res.classList.add('error');
    res.innerHTML = '<p style="color:red"><b>Please enter all fields</b></p>';

    // Remove error after 3 seconds
    //setTimeout(() => res.remove(), 3000);
  } else {
    //console.log('else block')
    res.classList.add('error');
    res.innerHTML = '<p style="color:green"><b>Message Sent</b></p>';

    // Remove error after 3 seconds
    //setTimeout(() => res.remove(), 3000);
    myForm.reset()
  }
  
}


