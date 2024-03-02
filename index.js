let rotateHeaderEl = document.getElementById("rotateHeader");
let numberListEl = document.querySelectorAll(".number");
let inputField = document.getElementById("valuesId");
let clearBtnEl = document.getElementById("clearBtn");
showHistoryEl.addEventListener("click", () => {
  historyEl.classList.toggle("history-container");
});
let currentExpression = "";
let result = 0;
const rollContainer = (value) => {
  switch (value) {
    case 1:
      currentExpression += "1";
      rotateHeaderEl.classList.add("one-animation");
      setTimeout(() => {
        rotateHeaderEl.classList.remove("one-animation");
        rotateHeaderEl.classList.add("reverse-one-animation");
      }, 3000);
      break;
    case 2:
      currentExpression += "2";
      rotateHeaderEl.classList.toggle("two-animation");
      setTimeout(() => {
        rotateHeaderEl.classList.toggle("two-animation");
        rotateHeaderEl.classList.toggle("reverse-two-animation");
        setTimeout(() => {
          rotateHeaderEl.classList.toggle("reverse-two-animation");
        }, 3000);
      }, 3000);
      break;
    case 3:
      currentExpression += "3";
      rotateHeaderEl.classList.toggle("three-animation");

      setTimeout(() => {
        rotateHeaderEl.classList.toggle("three-animation");
        rotateHeaderEl.classList.toggle("reverse-three-animation");
        setTimeout(() => {
          rotateHeaderEl.classList.toggle("reverse-three-animation");
        }, 3000);
      }, 3000);
      break;
    case 4:
      currentExpression += "4";
      rotateHeaderEl.classList.toggle("four-animation");

      setTimeout(() => {
        rotateHeaderEl.classList.toggle("four-animation");
        rotateHeaderEl.classList.toggle("reverse-four-animation");
        setTimeout(() => {
          rotateHeaderEl.classList.toggle("reverse-four-animation");
        }, 3000);
      }, 3000);
      break;
    case 5:
      currentExpression += "5";
      rotateHeaderEl.classList.toggle("five-animation");

      setTimeout(() => {
        rotateHeaderEl.classList.toggle("five-animation");
        rotateHeaderEl.classList.toggle("reverse-five-animation");
        setTimeout(() => {
          rotateHeaderEl.classList.toggle("reverse-five-animation");
        }, 3000);
      }, 3000);
      break;
    case 6:
      currentExpression += "6";
      rotateHeaderEl.classList.toggle("six-animation");

      setTimeout(() => {
        rotateHeaderEl.classList.toggle("six-animation");
        rotateHeaderEl.classList.toggle("reverse-six-animation");
        setTimeout(() => {
          rotateHeaderEl.classList.toggle("reverse-six-animation");
        }, 3000);
      }, 3000);
      break;
    case 7:
      currentExpression += "7";
      rotateHeaderEl.classList.toggle("seven-animation");

      setTimeout(() => {
        rotateHeaderEl.classList.toggle("seven-animation");
        rotateHeaderEl.classList.toggle("reverse-seven-animation");
        setTimeout(() => {
          rotateHeaderEl.classList.toggle("reverse-seven-animation");
        }, 3000);
      }, 3000);
      break;
    case 8:
      currentExpression += "8";
      rotateHeaderEl.classList.toggle("eight-animation");

      setTimeout(() => {
        rotateHeaderEl.classList.toggle("eight-animation");
        rotateHeaderEl.classList.toggle("reverse-eight-animation");
        setTimeout(() => {
          rotateHeaderEl.classList.toggle("reverse-eight-animation");
        }, 3000);
      }, 3000);
      break;
    case 9:
      currentExpression += "9";
      rotateHeaderEl.classList.toggle("nine-animation");

      setTimeout(() => {
        rotateHeaderEl.classList.toggle("nine-animation");
        rotateHeaderEl.classList.toggle("reverse-nine-animation");
        setTimeout(() => {
          rotateHeaderEl.classList.toggle("reverse-nine-animation");
        }, 3000);
      }, 3000);
      break;
    case 0:
      currentExpression += "0";
      rotateHeaderEl.classList.toggle("zero-animation");

      setTimeout(() => {
        rotateHeaderEl.classList.toggle("zero-animation");
        rotateHeaderEl.classList.toggle("reverse-zero-animation");
        setTimeout(() => {
          rotateHeaderEl.classList.toggle("reverse-zero-animation");
        }, 3000);
      }, 3000);
      break;
    default:
      break;
  }
  updateInputField();
};

const updateInputField = () => {
  inputField.value = currentExpression;
};
const calculateResult = () => {
  try {
    result = eval(currentExpression);
    currentExpression = result.toString();
    updateInputField();
  } catch (error) {
    inputField.innerText("Invalid expression");
  }
};

numberListEl.forEach((eachNum) => {
  eachNum.addEventListener("click", (e) => {
    rollContainer(parseInt(e.target.dataset.value));
  });
});

document.querySelectorAll("button").forEach((each) => {
  each.addEventListener("click", (e) => {
    const operator = e.target.value;
    if (operator === "=") {
      calculateResult();
    } else {
      currentExpression += ` ${operator} `;
      updateInputField();
    }
  });
});
clearBtnEl.addEventListener("click", () => {
  inputField.value = 0;
  currentExpression = "";
});
