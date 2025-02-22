// HTML Elements
const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const ouput = document.getElementById("output");

//Numerals
const numeralsMap = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
  ];

//Function to convert number to roman numerals
function convert(num, count) {
  let temp = num;
  let ret = "";
  for(let i = 0; i < numeralsMap.length; i++) {
    while(temp >= numeralsMap[i][0]) {
      console.log(ret)
      temp -= numeralsMap[i][0];
      ret += numeralsMap[i][1].toString();
    }
  }
  return ret;

}

//Event Listener for Button
convertBtn.addEventListener("click", () => {
  const number = parseInt(inputNumber.value);
  console.log(number)
  if(isNaN(number)) {
    output.innerText= "Please enter a valid number";
  } else if(number < 1)  {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if(number >= 4000){
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    output.innerText = convert(number, 0).toString();
  }
});
