// reload the page every 10 minutes
setInterval(() => location.reload(), 10 * 60 * 1000);
function temperature_to_title() {
  document.title = document.querySelector(
    "div.main-temp > lib-display-unit > span > span",
  ).innerText;
}
window.addEventListener("load", () => {
  temperature_to_title();
  setInterval(temperature_to_title, 10 * 1000);
});
