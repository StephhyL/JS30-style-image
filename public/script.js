// have to use <ES6 with this.
function handleUpdate() {
  //data takes everything with data and put it in an object
  const suffix = this.dataset.sizing || "";
  console.log(this.name); // px or sizing
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

window.addEventListener("load", () => {
  // inputs is a NodeList (not an array)
  const inputs = document.querySelectorAll(".controls input");

  inputs.forEach((input) => input.addEventListener("change", handleUpdate));
  inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
});
