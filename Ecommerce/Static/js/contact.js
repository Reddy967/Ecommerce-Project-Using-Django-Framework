function validateForm(){
      let name = document.forms['contactForm']['name'].value;
      let email = document.forms['contactForm']['email'].value;
      let phone = document.forms['contactForm']['phone'].value;
      let message = document.forms['contactForm']['message'].value;

      if (name == '' || hasNumber(name)){
          alert('Name must be filled out and must only contain letters');
          return false;
      } else if (email == '' && phone == ''){
          alert('Email or phone must be filled out');
          return false;
      } else if (!(email.includes('@'))){
          alert('Email does not seem to be valid');
          return false;
      }else if (isNaN(phone)){
          alert('Phone number seems to contain letters');
          return false;
      } else if (message == ''){
          alert('Message must be filled out');
          return false;
      } else {
          // confirm or cancel
          return confirm('Do you really want to sent the message?')
      }
  }

  function hasNumber(myString) {
      return /\d/.test(myString);
  }