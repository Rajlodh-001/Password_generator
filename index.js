// // Random Password Generator


function generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumber, includeSymbols) {
    if(passwordLength<1000){
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "1234567890";
    const symbols = "~@#$%^&*()_+{}[]?/,.<>";

    let allowedChars = "";
    let password = "";

    if (includeLowerCase) allowedChars += lowercaseChar;
    if (includeUpperCase) allowedChars += uppercaseChar;
    if (includeNumber) allowedChars += number;
    if (includeSymbols) allowedChars += symbols;

    if (passwordLength <= 0) return "Password length must be at least 1";
    if (allowedChars.length === 0) return "Select at least one character type";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}else {
    throw new Error("PAssword length is to Big")
}
}

function generateAndDisplayPassword() {
    const length = parseInt(document.getElementById("passwordLength").value);
    const includeLowerCase = document.getElementById("lowercase").checked;
    const includeUpperCase = document.getElementById("uppercase").checked;
    const includeNumber = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    // const password = generatePassword(length, includeLowerCase, includeUpperCase, includeNumber, includeSymbols);
    // document.getElementById("generatedPassword").value = password;
    const password = generatePassword(length, includeLowerCase, includeUpperCase, includeNumber, includeSymbols);
    document.getElementById("generatedPassword").innerText = password;
}

function copyToClipboard() {
    const passwordText = document.getElementById("generatedPassword").innerText;

    if (!passwordText) {
        
        console.log("NO Password to copy !")
        return;
    }

    navigator.clipboard.writeText(passwordText).then(() => {
    
        console.log("Password copied to clipboard!")
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}
