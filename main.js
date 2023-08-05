// Load the owasp module (assuming both files are in the same directory)
const owasp = require('./owasp');

// Configure the password strength rules (optional)
owasp.config({
  allowPassphrases: false,
  minLength: 12,
  minOptionalTestsToPass: 3,
});

// Test a password
const password = 'MySecurePass123!';
const result = owasp.test(password);

// Log the result
console.log(result);
