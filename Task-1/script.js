const length = /^.{6,24}$/g;
const upperCase = /(?=.*[A-Z])/g;
const lowerCase = /(?=.*[a-z])/g;
const numbers = /(?=.*[0-9])/g;
const specialCharacters = /(?=(.*[!"#$%&'()=*?+@{}[\]:;]){2})/g;
const nextCharIndex = 1;
const afterCharIndex = 2;

const checkAdjecent = (password) => {
    let validString = true;
    let adjecentData = password.split("");
    adjecentData.forEach((_, index) => {
        if(adjecentData[index] === adjecentData[index + nextCharIndex] && adjecentData[index] === adjecentData[index + afterCharIndex]) {
            validString = false;
        };
    });
    return validString;
}

const validatePassword = (password) => {
    let validationMsg = "";

    if(!length.test(password)) {
        validationMsg += "Password is too short. ";
    }

    if(!upperCase.test(password)) {
        validationMsg += "Missing one upper case letter. ";
    }

    if(!lowerCase.test(password)) {
        validationMsg += "Missing one lower case letter. ";
    }

    if(!numbers.test(password)) {
        validationMsg += "Missing one digit. ";
    }

    if(!specialCharacters.test(password)) {
        validationMsg += "At least two special characters. ";
    }

    if(!checkAdjecent(password)) {
        validationMsg += "Maximum of two same adjecent letters. ";
    }

    if(validationMsg === "") {
        validationMsg = "Password is valid.";
    }
    
    return validationMsg;
}

let password = "Fi#g91@";
let password1 = "P1zz@";
let password2 = "iLoveProgramming";
console.log(validatePassword(password));
console.log(validatePassword(password1));
console.log(validatePassword(password2));