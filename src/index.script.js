const pxToRemForm = document.querySelector("#px-to-rem-form");
const remResult = document.querySelector("#result-in-rem");

remResult.addEventListener("click", async () => {
  const text = remResult.innerText;

  try {
    await navigator.clipboard.writeText(text);
    console.log("Text kopiert");
  } catch (err) {
    console.log("Fehler beim Kopieren", err);
  }
});

pxToRemForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { fontsize, givenPx } = event.target.elements;

  const fs = Number(fontsize.value); //Die Standard Fontsize als Number
  const gp = Number(givenPx.value); //Die gegebenen Pixel als Number

  if (!isNaN(fs) && !isNaN(gp)) {
    const result = Number(givenPx.value) / Number(fontsize.value);
    remResult.innerText = result;
    console.log(result);
  } else {
    console.log("object");
  }
});
