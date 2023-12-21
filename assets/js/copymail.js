document.addEventListener('DOMContentLoaded', function () {
  var emailLink = document.getElementById('emailLink');

  emailLink.addEventListener('click', function (event) {
    event.preventDefault();

    var emailAddress = emailLink.href.replace('mailto:', '');

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(emailAddress)
      .then(function () {
        alert('Email address copied: ' + emailAddress);
      })
      .catch(function (err) {
        console.error('Unable to copy to clipboard', err);
      });
  });
});