const allPlantsTree = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) => allPlantDisplay(data.plants));
};

allPlantsTree();

const allPlantDisplay = (tree) => {
  // get the container and empty container
  const allTreeShow = document.getElementById("card-show");
  allTreeShow.innerHTML = "";
  // get into every lesson
  tree.forEach((card) => {
    const createNewDiv = document.createElement("div");
    createNewDiv.innerHTML = `


         <div class="bg-white rounded-2xl pb-2">
              <img class="w-full h-[250px] rounded-t-2xl p-1" src="${card.image}" alt="">
              <div class="p-1 space-y-1">
              <h1 class="px-3 text-2xl font-semibold">${card.name}</h1>
              <p class="px-3 ">${card.description.slice(0, 30) + "..."}</p>
              <div class="flex justify-between items-center p-1">
                <button class="border-1 border-green-400  rounded-xl p-2">${card.category}</button>
                <h2 class="text-2xl">$ ${card.price}</h2>
              </div>
              <button class="rounded-full py-2 w-full bg-green-600 text-xl text-white">Add to cart</button>
              </div>
            </div>

        
        `;
    allTreeShow.append(createNewDiv);
  });
};
//

// categories name show function start
const categoriesNameShow = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategoriesName(data.categories));
};
// display categories name
const displayCategoriesName = (categore) => {
  // get the container and empty
  const categoreContainer = document.getElementById("categore-name");
  categoreContainer.innerHTML = "";
  //   container empty end

  // new element create && append container
  const newDivBtn = document.createElement("div");
  newDivBtn.innerHTML = `<h1 id="all-tree" onclick="allPlantsTree()" class="mt-2 text-base py-2 px-2 rounded-sm hover:bg-green-600 hover:text-white lesson-btn"> All Tree</h1>`;
  categoreContainer.appendChild(newDivBtn);
  //   append end

  // loop every lesson
  categore.forEach((categoriesName) => {
    const btnNewDiv = document.createElement("div");
    btnNewDiv.innerHTML = `
    
    <h1 id="categories-name${categoriesName.id}" onclick="categoriesProduct(${categoriesName.id})" class="text-base mt-1 py-2 px-2 rounded-sm hover:bg-green-600 hover:text-white lesson-btn">${categoriesName.category_name}</h1>
        `;
    categoreContainer.append(btnNewDiv);
  });
};
categoriesNameShow();

// click categories button
const categoriesProduct = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      
      removeActiveBtn();
     
      const categoriesButton = document.getElementById(`categories-name${id}`);
      categoriesButton.classList.add("active");

      allPlantDisplay(data.plants);
    });
};

// remove active class function setup

const removeActiveBtn = () => {
 
  
  const lessoneButton = document.querySelectorAll(".lesson-btn");
  lessoneButton.forEach((btn) => {
    btn.classList.remove("active");
    
  });
};
