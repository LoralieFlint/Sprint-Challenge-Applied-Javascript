/*1. What is the DOM? */
/* DOM stands for document object model where u can create your page dynamically */

/* 2. What is an event? */
/* an event is an action that happens with user interaction */

/* 3. What is an event listener? */
/* an event listener is a function waiting to happen on a certain call that is made by the user */

/* 4. Why would we convert a NodeList into an Array? */
/* one example for  a node list may be used in an array to call certain items and use them dynamically on a page */

/* 5. What is a component? */
/* a component is a creator function which can be reusable such as creating elements and click event to make it easier to read and easier to use over and over */



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
  const tabsContainer = document.querySelector(".topics");
  
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
