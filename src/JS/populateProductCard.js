// Function to fetch JSON data from an external file
async function fetchProducts() {
  try {
    const response=await fetch("./cardData.json");
    const data=await response.json();
    // Convert the fetched data into a list of products
    const products=data.map(({
      viewItemURL: listingData.viewItemURL,
      galleryURL: listingData.galleryURL,
      title: listingData.Title,
      Price: cardData.Price,
      Shipping: cardData.Shipping,
      Condition: cardData.Condition
    }));

    // Display the product cards
    displayProductCards(products);
  } catch(error) {
    return console.log("Error fetching products:",error);
  }
}

// Function to create product cards
function createProductCard(product) {
  const card=document.createElement("div");
  card.innerHTML=`
        <a href="${product.viewItemURL}" target="_blank" title="View on eBay" class="mt-2 hover:text-shadow text-white">
          <div class="w-fit border border-zinc-50 backdrop rounded-lg shadow-lg overflow-ellipsis will-change-transform hover:transform-gpu hover:duration-500 hover:ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-transparent hover:to-transparent hover:via-black hover:text-shadow text-white">
            <img src="${product.galleryURL}" alt="${product.Title}" class="w-full h-72 object-cover object-top rounded-t-lg">
              <div class="p-2 flex-wrap">
                <h3 class="text-lg font-black text-shadow text-white">${product.Title}</h3>
                <p class="mt-2 text-shadow font-bold text-white">${product.Price}</p>
                <p class="text-shadow text-sm font-bold text-white">Shipping: $${product.Shipping}</p>
                <p class="mt-5 text-sm italic font-semibold text-shadow text-white">${product.Condition} condition, kept sleeved and stored in a safe environment.</p>
              </div>
          </div>
        </a>
        `;
  return card;
}

// Function to display product cards
function displayProductCards(products) {
  // Get the product grid element
  const productGrid=document.getElementById("productGrid");

  // Generate product cards and append to the grid
  products.forEach((product) => {
    const card=createProductCard(product);
    productGrid.appendChild(card);
  });
}

// Fetch the products and display the cards
fetchProducts();

