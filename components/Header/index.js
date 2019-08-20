    /* creating component*/
function Header() {
    /* creating elements*/
    const newDiv = document.createElement("div");
    const span1 = document.createElement("span");
    const newH1 = document.createElement("h1");
    const span2 = document.createElement("span");

    /* adding classes and text content */
    newDiv.classList.add("header");
    span1.classList.add("date");
    span1.textContent = new Date();
    newH1.textContent = "Lambda Times";
    span2.classList.add("temp");
    span2.textContent = "98*"

    /* appending children*/
    newDiv.appendChild(span1);
    newDiv.appendChild(newH1);
    newDiv.appendChild(span2);

   /* returning component*/
    return newDiv;
}
/* appending component to correct class*/
const container = document.querySelector(".header-container").appendChild(Header());


