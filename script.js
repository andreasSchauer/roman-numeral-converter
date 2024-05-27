const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumerals = new Map([
  [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
  [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
  [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
]);

const validateInput = () => {
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
      output.innerText = romanConverter(input);
      output.classList = "";
  }
  numberInput.value = "";
}

const romanConverter = (input) => {
  const convertedArr = [];
  let remainder = input;

  for(let numeral of romanNumerals.keys()) {
    while(remainder >= numeral) {
      convertedArr.push(romanNumerals.get(numeral));
      remainder -= numeral;
    }
  }

  return convertedArr.join("");
}

convertButton.addEventListener("click", validateInput);
