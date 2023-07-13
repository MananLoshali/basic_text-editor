const textArea = document.getElementById("text");
const font = document.getElementById("font");

const sizeBtn = document.getElementById("size");
const boldBtn = document.getElementById("bold");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const centerBtn = document.getElementById("center");
const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const capitalBtn = document.getElementById("capital");
const removeBtn = document.getElementById("remove");
const colorBtn = document.getElementById("color");
const selectTag = document.getElementById("select");
const letterSpacing = document.getElementById("letter_spacing");
const lineHeight = document.getElementById("line_height");

textArea.style.fontSize = `${sizeBtn.value}px`;
textArea.style.lineHeight = `${lineHeight.value}px`;

textArea.style.letterSpacing = `${letterSpacing.value}px`;

let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
  "sans-serif",
  "Tahoma",
  "serif",
  "Times",
];

fontList.map((item) => {
  let option = document.createElement("option");
  option.value = item;
  option.innerHTML = item;
  selectTag.appendChild(option);
});

textArea.style.fontFamily = selectTag.value;

selectTag.addEventListener("change", () => {
  textArea.style.fontFamily = selectTag.value;
});

sizeBtn.addEventListener("change", () => {
  textArea.style.fontSize = `${sizeBtn.value}px`;
});

boldBtn.addEventListener("click", () => {
  if (textArea.style.fontWeight == "bolder") {
    textArea.style.fontWeight = "normal";
  } else {
    textArea.style.fontWeight = "bolder";
  }
});

italicBtn.addEventListener("click", () => {
  if (textArea.style.fontStyle == "italic") {
    textArea.style.fontStyle = "normal";
  } else {
    textArea.style.fontStyle = "italic";
  }
});

underlineBtn.addEventListener("click", () => {
  if (textArea.style.textDecoration == "underline") {
    textArea.style.textDecoration = "none";
  } else {
    textArea.style.textDecoration = "underline";
  }
});

centerBtn.addEventListener("click", () => {
  if (textArea.style.textAlign == "center") {
    textArea.style.textAlign = "left";
  } else {
    textArea.style.textAlign = "center";
  }
});

rightBtn.addEventListener("click", () => {
  if (textArea.style.textAlign == "left") {
    textArea.style.textAlign = "right";
  } else {
    textArea.style.textAlign = "left";
  }
});

leftBtn.addEventListener("click", () => {
  if (textArea.style.textAlign == "right") {
    textArea.style.textAlign = "left";
  } else {
    textArea.style.textAlign = "right";
  }
});

capitalBtn.addEventListener("click", () => {
  if (textArea.style.textTransform == "uppercase") {
    textArea.style.textTransform = "none";
  } else {
    textArea.style.textTransform = "uppercase";
  }
});

removeBtn.addEventListener("click", () => {
  textArea.value = "";
});

colorBtn.addEventListener("change", () => {
  textArea.style.color = colorBtn.value;
});

letterSpacing.addEventListener("change", () => {
  textArea.style.letterSpacing = `${letterSpacing.value}px`;
});

lineHeight.addEventListener("change", () => {
  textArea.style.lineHeight = `${lineHeight.value}px`;
});
