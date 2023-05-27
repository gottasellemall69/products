function filterProductGrid(attribute,condition,printing,game,language,rarity) {
  const gridContainer=document.getElementById("gridContainer");

  // Clear the existing grid
  gridContainer.innerHTML="";

  // Fetch the cardData.json file
  fetch("./src/CardData/cardData.json")
    .then((response) => response.json())
    .then((data) => {
      // Extract the cardData array
      const cardData=data.cardData;

      // Filter the cardData array based on the selected options
      const filteredCards=cardData.filter((card) => {
        return (
          card.attribute===attribute&&
          card.condition===condition&&
          card.printing===printing&&
          card.game===game&&
          card.language===language&&
          card.rarity===rarity
        );
      });

      // Loop through the filtered cards array
      filteredCards.forEach((card) => {
        // Create the product card element
        const productCard=document.createElement("div");
        productCard.classList.add("w-fit","mx-auto");
        productCard.innerHTML=`
          <a href="${card.viewItemURL}"
            target="_blank"
            title="View on eBay"
            class="mt-2 hover:text-shadow text-white">
            <div class="w-fit border border-zinc-50 backdrop rounded-lg shadow-lg overflow-ellipsis will-change-transform hover:transform-gpu hover:duration-500 hover:ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-transparent hover:to-transparent hover:via-black hover:text-shadow text-white">
              <img src="${card.galleryURL}"
                alt="${card.title}"
                class="w-full h-72 object-cover object-top rounded-t-lg">
              <div class="p-2 flex-wrap">
                <h3 class="text-lg font-black text-shadow text-white">${card.title}</h3>
                <p class="mt-2 text-shadow font-bold text-white">${card.Price}</p>
                <p class="text-shadow text-sm font-bold text-white">Shipping: $${card.Shipping}</p>
                <p class="mt-5 text-sm italic font-semibold text-shadow text-white">${card.Condition} condition, kept sleeved and stored in a safe environment.</p>
              </div>
            </div>
          </a>`;

        // Append the product card to the grid container
        gridContainer.appendChild(productCard);
      });
    })
    .catch((error) => {
      console.log("Error fetching cardData:",error);
    });
}

// Call the function to update the grid with filtered cards
filterProductGrid(attribute,condition,printing,game,language,rarity);


