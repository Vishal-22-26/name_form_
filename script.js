const form = document.getElementById("task1");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Hello, ${name}!`);

  const ele = document.createElement("p");
  ele.textContent = `Welcome ${name}`;
  document.body.appendChild(ele);
});
