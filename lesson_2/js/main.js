class Products {
    data = [];
    products = [];
    container = null;

    constructor(selector) {
        this.container = document.querySelector(selector)
    }

    fetchData() {
        this.data = [
            {
                title: 'Notebook',
                id: 1,
                price: 2000
            },
            {
                title: 'Keyboard',
                id: 2,
                price: 200
            },
            {
                title: 'Mouse',
                id: 3,
                price: 100
            },
            {
                title: 'Gamepad',
                id: 4,
                price: 87
            },
            {
                title: 'Screen',
                id: 5,
                price: 12300
            },
            {
                title: 'Fan',
                id: 6,
                price: 3250
            },
            {
                title: 'Mat',
                id: 7,
                price: 1100
            },
            {
                title: 'Chair',
                id: 8,
                price: 8600
            },
            {
                title: 'Headphones',
                id: 9,
                price: 6780
            }

        ];
    }

    render() {
        for (let data of this.data) {
            const product = new ProductItem(data);
            this.products.push(product);
            this.container.insertAbjacentHTML('beforeend', product.render())
        }
    }
}

class ProductItem {
    title = '';
    price = 0;
    id = 0;
    img = '';

    constructor(product, img = 'https://placehold.it/200x150') {
        ({title: this.title, price: this.price, id: this.id} = product);
        this.img = img;
    }

    render() {
        return `<div class="product-item">
    <img scr = "${this.img}" alt="${this.title}">
    <div class="desc">
    <h3>${this.title}</h3>
    <p>${this.price}</p>
    <button class="by-btn">Купить</button>
    </div>
    </div>`;
    }
}

const list = new Products('.products');

list.fetchData();
list.render();