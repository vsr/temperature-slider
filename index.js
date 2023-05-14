/**
 * step="0.025" min="35" max="45" value="36.1"
 */
const minTemperature = 35;
const maxTemperature = 45;
const step = 0.025;
const defaultValue = 36.1;
const $slider = document.querySelector("#slider");
const $cScale = document.querySelector(".c-scale");
const $fScale = document.querySelector(".f-scale");

const cToF = (c) => 32 + (9 / 5) * c;

for (let i = minTemperature; i <= maxTemperature; i += 0.5) {
  const e = document.createElement("span");
  e.classList.add("mark");
  const et = document.createElement("span");
  et.textContent = i;
  et.classList.add("mark-text");
  et.setAttribute("title", i);
  e.appendChild(et);
  $cScale.appendChild(e);
}

for (let i = cToF(minTemperature); i <= cToF(maxTemperature); i += 1) {
  const e = document.createElement("span");
  e.classList.add("mark");
  const et = document.createElement("span");
  et.textContent = i;
  et.classList.add("mark-text");
  et.setAttribute("title", i);
  e.appendChild(et);
  $fScale.appendChild(e);
}

$slider.addEventListener("input", function (ev) {
  const value = parseFloat(ev.target.value, 10);
  document.querySelector("#c-value").textContent = value.toFixed(1);
  document.querySelector("#f-value").textContent = cToF(value).toFixed(1);
});

$slider.setAttribute("min", minTemperature);
$slider.setAttribute("max", maxTemperature);
$slider.setAttribute("step", step);
$slider.setAttribute("value", defaultValue);

$slider.dispatchEvent(new Event("input", { bubbles: true }));
