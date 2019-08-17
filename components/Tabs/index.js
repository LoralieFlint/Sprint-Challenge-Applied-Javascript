/* creating component */
function tabs(topics) {
    /* creating element */
    const div = document.createElement("div");
    /* adding class and text */
    div.classList.add("tab");
    div.textContent = topics;
    /* returning componentb */
    return div;
  }
  /* appending component to correct class*/
  const tabsContainer = document.querySelector(".topics").appendChild(tabs());
  
/* calling axious */
  axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
  
    // console.log("https://lambda-times-backend.herokuapp.com/topics")
  /* using .then() to fetch the data */
    .then(info => {
      info.data.topics.forEach(element => {
        const topic = tabs(element);
        tabsContainer.appendChild(topic);
      });
    })

    /* using .catch() to return errors if any */
    .catch(error => {
      console.log("Network request didnt work");
      console.log(error);
    });
