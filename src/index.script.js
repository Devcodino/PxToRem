const pxToRemForm = document.querySelector("#px-to-rem-form");
const remResult = document.querySelector("#result-in-rem");
const infoAlert = document.querySelector(".infoAlert");
const infoAlertText = document.querySelector(".infoAlertText");

//Zeigt einen Alert an
function showAlert(message, color) {
  infoAlert.style.borderBottom = `3px solid ${color}`;
  infoAlertText.innerText = message;
  infoAlert.style.opacity = "1";
  setTimeout(() => {
    infoAlert.style.opacity = "0";
    infoAlert.style.borderBottom = "none";
  }, 1000);
}

async function copy() {
  const text = remResult.innerText;
  try {
    await navigator.clipboard.writeText(text);
    remResult.style.backgroundColor = "lightgreen";
    showAlert("Copied", "lightgreen");
    setTimeout(() => {
      remResult.style.backgroundColor = "lightgray";
    }, 400);
  } catch (err) {
    showAlert("Error", "red");
  }
}

//Wenn der User auf den resultext klickt
remResult.addEventListener("click", copy);

//Wenn der User Enter drückt
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    setTimeout(() => {
      copy();
    }, 100);
  }
});

pxToRemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { fontsize, givenPx } = event.target.elements;

  const fs = Number(fontsize.value); //Die Standard Fontsize als Number
  const gp = Number(givenPx.value); //Die gegebenen Pixel als Number

  if (!isNaN(fs) && !isNaN(gp)) {
    const result = Number(givenPx.value) / Number(fontsize.value);
    remResult.innerText = result + "em";
    console.log(result);
  } else {
    console.log("object");
  }
});
