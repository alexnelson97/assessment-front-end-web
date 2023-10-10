console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Form has been submitted successfully!");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

let image = document.querySelector("#duckImage");

image.addEventListener("mouseover", () => {
  alert("You are as cool as this duck! Enjoy Douglas Duck.");
});
