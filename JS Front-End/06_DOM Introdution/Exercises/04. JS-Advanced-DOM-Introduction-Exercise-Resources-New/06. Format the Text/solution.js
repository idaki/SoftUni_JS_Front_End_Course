function solve() {
  //TODO
  const rawText = document.querySelector("textarea").value;
  const outputElement = document.getElementById("output");

  let sentences = rawText.split(/\.|\?|!/);
  sentences = sentences.filter(element => element.trim().length > 0)
    .map(element => element.trim() + (element.trim().endsWith('.') ? '' : '.'));

  while (sentences.length > 0) {
    let paragraph = document.createElement("p");
    paragraph.textContent = sentences.splice(0, 3).join(" ").trim();
    outputElement.appendChild(paragraph);
  }
}