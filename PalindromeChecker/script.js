const checkBtn = document.getElementById("check-btn");
const textInpt = document.getElementById("text-input");
const res = document.getElementById("result");


const cleanCheck = () => {
   pchecker((textInpt.value.replace(/[\W|_]/g, "")).toLowerCase());
   textInpt.value = "";
}

const pchecker = (str) => {
  if(str === "" || str === undefined) {
    alert("Please input a value");
  } else {
    let l = 0;
    let r = str.length - 1;
    while(l < r) {
      if(str[l] !== str[r]) {
        res.textContent = textInpt.value + " is not a palindrome";
        return;
      }
      l++;
      r--;
    }
   res.textContent =  textInpt.value + " is a palindrome";
  }
};


checkBtn.addEventListener("click", cleanCheck);
