// DOM elements
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Phone Number Regex
const regex = /^1?[ ]?(\([0-9]{3}\)|[0-9]{3})[\- ]?[0-9]{3}[\- ]?[0-9]{4}$/;

// Functions
const check = () => {
  const val = userInput.value;
  if(!val) {
    alert("Please provide a phone number");
    return;
  }  
  const pEl = document.createElement("p");
  resultsDiv.appendChild(pEl);
  if(regex.test(val)) {
    pEl.innerText = `Valid US number: ${val}`;
  } else {
    pEl.innerText = `Invalid US number: ${val}`;
  }
  userInput.value = "";

};

const clear = () => 
{
  resultsDiv.replaceChildren();
}

// Event Listeners
checkBtn.addEventListener("click", check);

clearBtn.addEventListener("click", clear);

