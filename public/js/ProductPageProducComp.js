Vue.component('products', {
    data(){
        return {
            catalogUrl: '',
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="item-arrivals-container">
            <product v-for="item of filtered"
            :key="item.id_product"
            :img="item.img_product"
            :product="item">
            </product>
        </div>
    `
});
Vue.component('product', {
    props: ['product', 'img'],
    data() {
      return {
          /**
           * Создали ссылку на API нашей корзины. Т.к. все компоненты у нас регистрируются в корневом экземпляре Vue,
           * то мы легко можем получить доступ к ним используя свойство $root.
           * $parent можно использовать для доступа к родительскому экземпляру из дочернего.
           */
          cartAPI: this.$root.$refs.cart,
      
      };
    },

    template: `
            <div class="item-arrivals-container">
                <div class="fetured-items">
                    <a href="#"> <img :src="img" alt="arrivals_item_product" class="img"></a>
                        <div class="overlay desc">
                            <button type="button" class="overlay-btn-product" @click="cartAPI.addProduct(product)">
                                <img src="img/overlay-cart.png" alt="cart" class="overlay-btn-img">
                                <span class="overlay-btn-text">Add to Cart</span>
                            </button>  
                            <div class="product-hover-btn">
                                <button type="button" class="hover-btn"><span class="product-hover-span">
                                    <i class="fas fa-retweet hover-span"></i></span>
                                </button> 
                                <button type="button" class="hover-btn"><span class="product-hover-span">
                                    <i class="far fa-heart hover-span"></i></span>
                                </button> 
                            </div>
                        </div>
                        <p class="name-product-arrivals">{{product.product_name}}<br>
                            <span class="price-product">$ {{product.price}}</span>
                        </p>
                        <div class="item-fas-fa-star">
                            <i class="fas fa-star item-star"></i>
                            <i class="fas fa-star item-star"></i>
                            <i class="fas fa-star item-star"></i>
                            <i class="fas fa-star item-star"></i>
                            <i class="fas fa-star item-star"></i>
                        </div>
                </div>        
            </div>`
});
