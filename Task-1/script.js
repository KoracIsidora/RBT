/* Regex for password validation */
const length = /^.{6,24}$/g;
const upperCase = /(?=.*[A-Z])/g;
const lowerCase = /(?=.*[a-z])/g;
const numbers = /(?=.*[0-9])/g;
const specialCharacters = /(?=(.*[!"#$%&'()=*?+@{}[\]:;]){2})/g;

/* Indexes for checkAdjecent function */
const nextCharIndex = 1;
const afterCharIndex = 2;

/* Validation messages */
const shortPasswordMsg = "Password is too short. ";
const missingUpperCaseMsg = "Missing one upper case letter. ";
const missingLowerCaseMsg = "Missing one lower case letter. ";
const missingNumberMsg = "Missing one digit. ";
const missingSpecialCharMsg = "At least two special characters. ";
const maxAdjecentMsg = "Maximum of two same adjecent letters. ";
const validMsg = "Password is valid.";

/* Function for validating adjecent characters */
const checkAdjecent = (password) => {
    let validString = true;
    let adjecentData = password.split("");
    adjecentData.forEach((_, index) => {
        if(adjecentData[index] === adjecentData[index + nextCharIndex] && adjecentData[index] === adjecentData[index + afterCharIndex]) {
            validString = false;
        };
    });
    return validString;
};

/* Password validation function */
const validatePassword = (password) => {
    let message = "";

    if(!length.test(password)) {
       message += shortPasswordMsg;
    }

    if(!upperCase.test(password)) {
        message += missingUpperCaseMsg;
    }

    if(!lowerCase.test(password)) {
        message += missingLowerCaseMsg;
    }

    if(!numbers.test(password)) {
        message += missingNumberMsg;
    }

    if(!specialCharacters.test(password)) {
        message += missingSpecialCharMsg;
    }

    if(!checkAdjecent(password)) {
        message += maxAdjecentMsg;
    }

    if(message === "") {
        message = validMsg;
    }
    
    return message;
}

let password = "Fi#g91@";
let password1 = "P1zz@";
let password2 = "iLoveProgramming";
console.log(validatePassword(password));
console.log(validatePassword(password1));
console.log(validatePassword(password2));