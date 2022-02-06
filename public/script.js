// have to use <ES6 with this.
function handleUpdate() {
  console.log(this.value);
}

// const handleUpdate = () => {
//   console.log(this.value);
// };

window.addEventListener("load", () => {
  // inputs is a NodeList (not an array)
  const inputs = document.querySelectorAll(".controls input");
  // console.log(inputs);

  inputs.forEach((input) => input.addEventListener("change", handleUpdate));
  inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
});
