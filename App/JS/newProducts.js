const newProductsData = [
    {
        id: 1,
        img: './IMG/shoes/s1.jpg',
        brand: 'adidas',
        desc: 'Shoes ipsum dolor sit amet consectetur adipisicing elit. In quod possimus a officia eaque vero voluptas ratione quia, quis numquam.',
        price: 45,
    },
    {
        id: 2,
        img: './IMG/jackets/j2.jpg',
        brand: 'D&G',
        desc: 'Jackets ipsum dolor sit amet consectetur adipisicing elit. In quod possimus a officia eaque vero voluptas ratione quia, quis numquam.',
        price: 145,
    },
    {
        id: 3,
        img: './IMG/pants/p2.jpg',
        brand: 'wrangler',
        desc: 'Pants ipsum dolor sit amet consectetur adipisicing elit. In quod possimus a officia eaque vero voluptas ratione quia, quis numquam.',
        price: 100,
    },
    {
        id: 4,
        img: './IMG/shirts/f1.jpg',
        brand: 'Hawai',
        desc: 'Shirt ipsum dolor sit amet consectetur adipisicing elit. In quod possimus a officia eaque vero voluptas ratione quia, quis numquam.',
        price: 60,
    },
    {
        id: 5,
        img: './IMG/pull/b2.jpg',
        brand: 'chanel',
        desc: 'Pull ipsum dolor sit amet consectetur adipisicing elit. In quod possimus a officia eaque vero voluptas ratione quia, quis numquam.',
        price: 30,
    },
];
const productsContainer = document.getElementById('products-container');

function load() {
    const newProduct = newProductsData.map((product) => {
        return (
            `<div class="main__products-card">
                    <img src=${product.img} alt=${product.brand}>
                    <div class="main__products-details">
                        <h3 class="main__products-brand">${product.brand}</h3>
                        <p class="main__products-description">${product.desc}</p>
                        <div class="main__products-purchase">
                            <p class="main__products-price">&dollar;<span> ${product.price}</span></p>
                            <p class="main__products-quantity">
                                <button>&minus;</button>
                                12
                                <button>&plus;</button>
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