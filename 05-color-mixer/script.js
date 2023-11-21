const head = document.querySelector("header");
const hexaCode = document.querySelector("#hexacode");
const changeBod = document.querySelector("body");
bgColor();

function bgColor() {
  const redSlide = document.getElementById("red").value;
  const blueSlide = document.getElementById("blue").value;
  const greenSlide = document.getElementById("green").value;
  changeBod.style.backgroundColor =
    "rgb(" + [redSlide, blueSlide, greenSlide].join(",") + ")";
  valueHex(redSlide, blueSlide, greenSlide);
}

head.addEventListener("click", bgColor);

function valueHex(r, g, b) {
  r = Number(r).toString(16);
  g = Number(g).toString(16);
  b = Number(b).toString(16);

  hexaCode.innerText = "#" + r + g + b;
}

/*
Color Mixer
Implement a web app that can mix red, green and blue into any color like this example.

Requirments
 Add a header with three sliders (input with type range)
 The sliders will control the values for a rgb color (one slider for red, one slider for green, one slider for blue)
 Once a slider is moved the background color of the web app is updated
 Also show the color value in the header (can be in hex or as a rgb value like this rgb(xx,xx,xx))
 Load a default color an the beginning (i.e. hotpink or dodgerblue)
Hints
Example range input. The value property sets the default value for the range input.
<input type="range" step="1" min="0" max="255" value="50">
*/
