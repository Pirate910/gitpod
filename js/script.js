// script.js
document.addEventListener("DOMContentLoaded", function() {
  var cookieNotification = document.getElementById('cookie-notification');
  var acceptCookieButton = document.getElementById('accept-cookie');

  // Check if the user has accepted cookies
  var cookieAccepted = getCookie('cookieAccepted');

  // If the consent is not given, show the cookie notification
  if (!cookieAccepted) {
      cookieNotification.classList.remove('hidden');
  }

  // Event listener for accepting the cookie
  acceptCookieButton.addEventListener('click', function() {
      // Set a cookie to remember that the user has accepted the cookie policy
      setCookie('cookieAccepted', true, 30); // 30 days expiration
      // Hide the cookie notification
      cookieNotification.classList.add('hidden');
  });

  // Function to set a cookie
  function setCookie(name, value, days) {
      var expires = "";
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Function to get a cookie
  function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1, c.length);
          }
          if (c.indexOf(nameEQ) == 0) {
              return c.substring(nameEQ.length, c.length);
          }
      }
      return null;
  }
});
