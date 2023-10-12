/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];

  let domainList = document.getElementById("domainList");

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  for (let i = 0; i < 10; i++) {
    // Generate 10 random domains
    let pronoun = getRandomItem(pronouns);
    let adjective = getRandomItem(adjectives);
    let noun = getRandomItem(nouns);

    let domainName = pronoun + adjective + noun + ".com";
    let listItem = document.createElement("li");
    listItem.textContent = domainName;
    domainList.appendChild(listItem);
  }

  console.log("Hello Rigo from the console!");
};
