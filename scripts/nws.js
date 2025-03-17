function conditions_to_title() {
  const current = document.querySelector("#current_conditions-summary");
  if (!current) {
    console.log("not found");
    return;
  }
  const T = current.querySelector("p.myforecast-current-lrg").innerHTML;
  const text = current.querySelector("p.myforecast-current").innerHTML;
  document.title = `${T} ${text} NWS`;
}
setInterval(() => location.reload(), 30 * 60 * 1000);
window.addEventListener("load", conditions_to_title);
