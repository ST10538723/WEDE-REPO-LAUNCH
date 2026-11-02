const searchInput = document.getElementById("productSearch"); const products = document.querySelectorAll(".product"); const noResults = document.getElementById('noResults'); 
searchInput.addEventListener("input", function () {const search = this.value.toLowerCase (); let found = 0; 
    products.forEach(product => {const matches = product.textContent.toLowerCase().includes(search);
    product.style.display = matches ? "block" : "none"; if (matches) found++;}); 
noResults.hidden = found !== 0; });

// Product Enquiry Functionality 
function enquire(product) {window.location.href ="enquiry.html?product=" + encodeURIComponent(product);}

// Product sorting
const sortProducts = document.getElementById("sortProducts");
const productContainer = document.querySelector(".products");

sortProducts.addEventListener("change", function() {
    const productList = Array.from(products);

    productList.sort((a, b) => {
        const priceA = Number(a.dataset.price);
        const priceB = Number(b.dataset.price);

        if (this.value === "low") return priceA - priceB;
        if (this.value === "high") return priceB - priceA;

        return 0;
    });

    productList.forEach(product => {
        productContainer.appendChild(product);
    });
});