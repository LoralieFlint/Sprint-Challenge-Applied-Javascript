/* creating component */
function cards(article) {
  /*  elements*/
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");
  const image = document.createElement("img");
  const span = document.createElement("span");

  /* adding classes and textContent */
  div1.classList.add("card");
  div2.classList.add("headline");
  div3.classList.add("author");
  div4.classList.add("img-container");
  div2.textContent = article.headline;
  image.src = article.authorPhoto;
  span.textContent = `By ${article.authorName}`;

  /* appending children */
  div1.appendChild(div2);
  div1.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(image);
  div3.appendChild(span);

/* Create a card for each of the articles and add the card to the DOM. */
const JScard = document.querySelector(".tab").addEventListener("click", (event) =>{
    
}) 
//     const card2 = cards();
//     const card3 = cards();
//     const card4 = cards();
//     const card5 = cards();


/* appending cards to cards-container class. */
// const cardContainer = document.querySelector(".tab");
// cardContainer.appendChild(JScard);
// cardContainer.appendChild(card2);
// cardContainer.appendChild(card3);
// cardContainer.appendChild(card4);
// cardContainer.appendChild(card5);

  /* returning the component */
  return div1;
}
const cardItem = document.querySelector('.cards-container');
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response);
    Object.values(response.data.articles).forEach(item => {
      item.forEach(item => {
        let Cards = document.querySelector('.cards-container');
        Cards.appendChild(cards(item));
      })
    })
  })
  .catch(error => {
    console.log(error);
  })




