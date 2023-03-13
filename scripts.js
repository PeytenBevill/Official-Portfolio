function SendMail() {
  let params = {
    from_name: document.getElementById('full_name').value,
    email_id: document.getElementById('email_id').value,
    message: document.getElementById('message').value
  }
  emailjs.send('service_qbf8re6', 'template_dxjbp0s', params).then(function (res) {
    alert('Success!' + res.status)
  })
};
/* <script type="text/javascript">
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
} */