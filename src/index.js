import "./styles.css";

const data = {
  currentRating: 0,
  ratings: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
};

const ratingContainer = document.querySelector("#rating");
const ul = document.createElement("ul");

const stars = data.ratings.map((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.innerHTML = "&starf;";
  a.id = item.id;
  a.addEventListener("click", (e) => {
    const listItems = document.querySelectorAll("li");

    for (const item of listItems) {
      item.classList.remove("active");
    }

    for (const item of listItems) {
      if (item.querySelector("a").id <= e.target.id) {
        item.classList.add("active");
      }
    }

    ratingContainer.innerText = e.target.id;
  });

  li.appendChild(a);
  return li;
});

const starsContainer = document.querySelector(".stars-container");

for (const star of stars) {
  ul.appendChild(star);
}

starsContainer.appendChild(ul);
