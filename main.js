// Up and down buttons

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

// Fading

$(document).ready(function (){
  $(".box").fadeIn(3000);
});

$(document).ready(function (){
  $(".faders").fadeIn(3000);
});

// Slideshow

$(document).ready(function (){
  $("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);
});


// Form Submission

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



