document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data (replace 'data.json' with your JSON file's URL)
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Iterate through the JSON data and create cards
            const restaurantCardsContainer = document.getElementById('restaurant-cards');
            
            data.forEach(restaurant => {
                const card = document.createElement('div');
                card.classList.add('restaurant-card'); // Add CSS class for styling
                
                // Create card content based on JSON data
                card.innerHTML = `
                    <img src="${restaurant.imgUrl}" alt="${restaurant.productBrand}">
                    <h2>${restaurant.productBrand}</h2>
                    <p>${restaurant.productDescription}</p>
                    <p>Rating: ${restaurant.productRating}</p>
                    <p>Discount: ${restaurant.productDiscount}</p>
                    <p>Delivery Time: ${restaurant.productDeliveryTime}</p>
                    <p>Cost for One: ${restaurant.productTypeCost}</p>
                `;
                
                // Append the card to the container
                restaurantCardsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });
});
