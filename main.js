const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_green.jpg',
            inventory: 5,
            onSale: true,
            inStock: true,
            details: ['50% algodão', '30% lã', '20% poliester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
            sizes: ['S','M','L','XL'],
            url: 'https://github.com/csp1po/intro_vue_3/tree/t3-start',
        }
    },

    methods:{
        addtoCart() {
            this.cart += 1
        },
        removetocart(){
            if (this.cart > 0)
                this.cart -=1

        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})