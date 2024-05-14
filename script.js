const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const isInputValid = () => {
  output.classList = "hidden";
  const input = Number(numberInput.value);
  const integer = Math.floor(numberInput.value);

  switch(true) {
    case input !== integer || !input: 
      output.innerText = "Please enter a valid number";
      output.classList = "error";
      break;

    case input < 0:
      output.innerText = "Please enter a number greater than or equal to 1";
      output.classList = "error";
      break;

    case input > 3999:
      output.innerText = "Please enter a number less than or equal to 3999";
      output.classList = "error";
      break;
      
    default:
      output.innerText = `${romanConverter(input)}`
      output.classList = ""   
  }
  numberInput.value = "";
}

const romanConverter = (input) => {
  let remainder = input;
  const convertedArr = [];

  const conversion = (num) => {
    if (num <= 0) {
      return
    }

    switch(true) {
      case num >= 1000:
        convertedArr.push("M");
        remainder -= 1000;
        conversion(remainder);
        break;

      case num >= 900:
        convertedArr.push("CM");
        remainder -= 900;
        conversion(remainder);
        break;

      case num >= 500:
        convertedArr.push("D");
        remainder -= 500;
        conversion(remainder);
        break;

      case num >= 400:
        convertedArr.push("CD");
        remainder -= 400;
        conversion(remainder);
        break;

      case num >= 100:
        convertedArr.push("C");
        remainder -= 100;
        conversion(remainder);
        break;

      case num >= 90:
        convertedArr.push("XC");
        remainder -= 90;
        conversion(remainder);
        break;

      case num >= 50:
        convertedArr.push("L");
        remainder -= 50;
        conversion(remainder);
        break;

      case num >= 40:
        convertedArr.push("XL");
        remainder -= 40;
        conversion(remainder);
        break;

      case num >= 10:
        convertedArr.push("X");
        remainder -= 10;
        conversion(remainder);
        break;

      case num >= 9:
        convertedArr.push("IX");
        remainder -= 9;
        conversion(remainder);
        break;

      case num >= 5:
        convertedArr.push("V");
        remainder -= 5;
        conversion(remainder);
        break;

      case num >= 4:
        convertedArr.push("IV");
        remainder -= 4;
        conversion(remainder);
        break;

      case num >= 1:
        convertedArr.push("I");
        remainder -= 1;
        conversion(remainder);
    }
  }

  conversion(remainder);
  return convertedArr.join("")
}

convertButton.addEventListener("click", isInputValid)
