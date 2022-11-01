function main() {
  //adds big css to grow me on click#1
  let v = document.getElementById("grow-me");
  v.className += "big";

  //shrinks text by removing big css on click#2
  let b = document.getElementById("shrink-me");
  b.classList.remove("big");

  //logs all list elements and counts the list length#3
  for (let li of document.querySelectorAll("li"))
  console.log(li.textContent);

  //Set the href of the link to "https://www.example.com" #4
  //update text to "somewhere" #4
  let linkchange = document.querySelector("a");
  linkchange.setAttribute("href", "https://www.example.com");
  linkchange.textContent = "somewhere";

  //hides hide me on click#5
  let hideme = document.getElementById("hide-me")
  hideme.style.display = "none";

  //show on click#6
  let showme = document.getElementById("show-me");
  showme.style.display = "";

  // welcome name! input to h1 on click#7
  let input = document.querySelector("#name").value;
  document.querySelector("h1").textContent = `Welcome ${input}!`;
}
