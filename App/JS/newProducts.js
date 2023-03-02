import { newProductsData } from './data.js';

const productsContainer = document.getElementById('products-container');

function load() {
    const newProduct = newProductsData.map((product) => {
        // use array destructuring
        const { id, img, price, desc, brand } = product;
        return (
            `<div id=${id} class="main__products-card">
                    <img src=${img} alt=${brand}>
                    <div class="main__products-details">
                        <h3 class="main__products-brand">${brand}</h3>
                        <p class="main__products-description">${desc}</p>
                        <div class="main__products-purchase">
                            <p class="main__products-price">&dollar;<span> ${price}</span></p>
                            <p class="main__products-quantity">
                                <button onclick="decreament(${id})">&minus;</button>
                                <span id=${id} class='quantity'>0</span>
                                <button onclick="increament(${id})">&plus;</button>
                            </p>
                        </div>
                    </div>
                </div>
            `
        );
    }).join('');

    productsContainer.innerHTML = newProduct;
}
load();

const increament = (id) => {
    console.log(id);
};
const decreament = (id) => {
    console.log(id);
};

