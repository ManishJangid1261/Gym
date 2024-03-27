document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.traning-btn');
  const details = document.querySelectorAll('.traning-details');
  details[0].classList.add('active');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const name = this.getAttribute('data-name');
      const target = document.querySelector(`.traning-details[data-target="${name}"]`);

      details.forEach(detail => {
        detail.classList.remove('active');
      });

      target.classList.add('active');

      buttons.forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');

      document.querySelector('.traning-details-one').style.display = 'none';
    });
  });
});

// time table js section 


document.addEventListener('DOMContentLoaded', function() {
  const daybtns = document.querySelectorAll('.d-name');
  const timeSlots = document.querySelectorAll('.det');
  timeSlots[0].classList.add('active');
  timeSlots[5].classList.add('active');
  document.querySelectorAll('.det.mon').forEach(slot => {
      slot.classList.add('active');
  });

  daybtns.forEach(button => {
      button.addEventListener('click', function () {
          const name = this.getAttribute('data-name');
          const targets = document.querySelectorAll(`.det[data-target="${name}"]`);

          timeSlots.forEach(slot => {
              slot.classList.remove('active');
          });

          targets.forEach(target => {
              target.classList.add('active');
          });

          daybtns.forEach(btn => {
              btn.classList.remove('active');
          });

          this.classList.add('active');
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const headerText = header.querySelectorAll('h1, a');

  window.addEventListener('scroll', function(){
    if (window.scrollY > 100) {
      header.style.backgroundColor = "rgb(247, 247, 247)";
      headerText.forEach(element => {
        element.style.color = "black";
      });
    } else {
      header.style.backgroundColor = "#19161685";
      headerText.forEach(element => {
        element.style.color = "white";
      });
    }
  });
});


// contact section 
function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  var errorMessage = document.querySelector('.error-message');
  errorMessage.textContent = ''; // Clear previous error messages

  if (name.trim() === '') {
      errorMessage.textContent = 'Please enter your name.';
      return;
  }

  if (email.indexOf('@') === -1) {
      errorMessage.textContent = 'Please enter a valid email address.';
      return;
  }

  sendMessage(name, email);
}

function sendMessage(name, email) {
  alert('Message sent by ' + name + ' with email ' + email);
}

