const html = document.querySelector("html");
const checkbox = document.querySelector('input[name="theme"]');

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColor = {
  bg: getStyle(html, "--bg"),
  bgCard: getStyle(html, "--bg-card"),
  textColor: getStyle(html, "--text-color"),
};

const theme = {
  bg: "#fff",
  bgCard: getStyle(html, "--bg"),
  textColor: "#fff",
};

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase();

const colorChange = (color) => {
  Object.keys(color).map((key) => {
    html.style.setProperty(transformKey(key), color[key]);
  });
};

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? colorChange(theme) : colorChange(initialColor);
});
