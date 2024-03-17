//
// Austin Carranza
// 4 March 2024
// L8: Forms Assignment
// Carey Chapter 6
// 

let form = document.forms["myForm"];
// adding event listener
form.addEventListener('submit', function (event) {
    // Carey 242
    event.preventDefault();

    // pulling inputField from html
    let inputField = form.elements["inputField"];
    // setting value to value of inputField
    let value = inputField.value;

    // calling function through conditional
    if(validityChecker(value)) {
        // submitting form if input passes validity check
        form.submit();
        // alerting user of successful submission
        alert('Input passed validity check. Form submitted.');
    } else {
        // displaying error if input fails validity check
        error('Error: Input must contain only letters and numbers');
        error('example: "a-z, A-Z, 0-9"');
    }
});

// using regex to check alphanumeric values
// https://www.w3schools.com/js/js_regexp.asp
// https://www.30secondsofcode.org/js/s/is-alpha-numeric/
function validityChecker(input) {
    let regex = /^[a-zA-Z0-9]+$/;
    // .test = Carey 248
    return regex.test(input);
}

// Function to display error message
function error(message) {
    // Create a div for error message
    let error = document.createElement('div');
    // className used in Hands-on 6-4
    // reference: https://www.w3schools.com/jsref/prop_html_classname.asp
    error.className = 'error';
    // .textContent = Carey 220
    error.textContent = message;
    // .elements = Carey 211
    let inputField = form.elements['inputField'];
    //parent node = carey 166
    // insertBefore = Carey 169
    inputField.parentNode.insertBefore(error, inputField);

}