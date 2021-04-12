Vue.component('cart-shop', {
    data(){
      return {
          cartItems: [],
      }
    },
    methods: {
        addProduct(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1});
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson('/api/cart', prod)
                  .then(data => {
                      if (data.result === 1) {
                          this.cartItems.push(prod);
                      }
                  });
            }
        },
        remove(item) {
            if (item.quantity > 1) {
                this.$parent.putJson(`/api/cart/${item.id_product}`, {quantity: -1})
                    .then(data => {
                        if (data.result === 1) {
                            item.quantity--;
                        }
                    });
            } else {
                this.$parent.deleteJson(`/api/cart/${item.id_product}`)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    });
            }
        },
        removeAll(item) {
                this.$parent.deleteJson(`/api/cart/${item.id_product}`)
                    .then(data => {
                        this.cartItems.splice(this.cartItems.indexOf(item), 1);
                    });
        },
},    
    mounted(){
        this.$parent.getJson('/api/cart')
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },
    template: `
        <div class="cart-shopping-list">
                            <p v-if="!cartItems.length"  class="shopping-cart-text-pink">BASKET IS EMPTY</p>
                            <div v-if="cartItems.length" class="header-shopping-list">
                                <ul class="menu-shopping-list">
                                    <li class="text-header-list indent">Product Details</li>
                                    <li class="text-header-list">unite Price</li>
                                    <li class="text-header-list">Quantity</li>
                                    <li class="text-header-list">shipping</li>
                                    <li class="text-header-list">Subtotal</li>
                                    <li class="text-header-list">ACTION</li>
                                </ul>
                            </div>    
                            <shopping-cart-item class="cart-shopping-list" 
                            v-for="item of cartItems" 
                            :key="item.id_product"
                            :cart-item="item" 
                            :img="item.img_product"
                            @remove="remove"
                            @addProduct="addProduct"
                            @removeAll="removeAll">
                            </shopping-cart-item>

                            <div v-if="cartItems.length" class="container">           
                            <form-buy></form-buy> 
                            </div>   
                                     
        </div>`
});

Vue.component('shopping-cart-item', {
    props: ['cartItem', 'img'],
    template: `
    <div class="cart-shopping-list">
                        <div class="product-shopping-list">
                            <div class="arrivals-product">
                                <a href="#"><img :src="img" alt="Some image" class="img-cart-list"></a>
                                <div class="favorite-product indent1">
                                    <h3 class="name-product-cart-list">{{cartItem.product_name}}</h3>
                                    <div class="shopping-cart-fas-fa-star">
                                        <i class="fas fa-star shopping-cart-star"></i>
                                        <i class="fas fa-star shopping-cart-star"></i>
                                        <i class="fas fa-star shopping-cart-star"></i>
                                        <i class="fas fa-star shopping-cart-star"></i>
                                        <i class="fas fa-star shopping-cart-star"></i>
                                    </div>
                                    <p class="sort-favorite">Color: 
                                        <span class="sort-favorite1">{{cartItem.color}}</span>
                                    </p>
                                    <p class="sort-favorite">Size: 
                                        <span class="sort-favorite1">{{cartItem.size}}</span>
                                    </p>
                                </div>
                            </div>
                            <div class="details-shopping-list">
                                <ol class="menu-details-list">
                                    <li class="text-details-list">$ {{cartItem.price}}</li>
                                    <li class="text-details-list">
                                        <button type="button" class="product-quantity"><span class="span-quantity">{{cartItem.quantity}}</span>
                                            <div btn-quantity-cart>
                                                <button class="btn-quantity" type="button" @click="$emit('addProduct', cartItem)">
                                                    <i class="fas fa-angle-up"></i>
                                                </button>
                                                <button class="btn-quantity" type="button" @click="$emit('remove', cartItem)">
                                                   <i class="fas fa-angle-down"></i>
                                                </button>
                                            <div>    
                                        </button>
                                    </li>
                                    <li class="text-details-list ">FREE</li>
                                    <li class="text-details-list ">$ {{cartItem.quantity*cartItem.price}}</li>
                                    <li class="text-details-list">
                                        <button class="header-cart-btn" @click="$emit('removeAll', cartItem)">
                                            <span class="span-delete-cart"><i class="fa fa-times-circle"></i></span>
                                        </button>
                                    </li>
                                </ol>
                            </div>
                        </div>
    </div>`
});

Vue.component('form-buy', {
    props: ['cartItem'],
    template: `
            <div class="form-buy-conrainer">
                <div class="shipping-adress">
                        <h3 class="header-text-form-buy">Shipping Adress</h3>
                        <form action="#" class="form-buy-adress">
                            <select class="country form-shipping-adress">
                                <option>Bangladesh</option>
                                <option>USA</option>
                                <option>INDIA</option>
                            </select>
                            <input class="form-shipping-adress" type="text" placeholder="State">
                            <input class="form-shipping-adress" type="text" placeholder="Postcode / Zip">
                            <button type="submit" class="form-btn-comment"><span class="form-btn-text">get a quote</span></button>
                        </form>
                </div>
                <div class="coupon-discount">
                        <h3 class="header-text-form-buy">coupon discount</h3>
                        <p class="text-coupon-discount">Enter your coupon code if you have one</p>
                        <form action="#" class="form-coupon-discount">
                            <input class="form-shipping-adress" type="text" placeholder="State">
                            <button type="submit" class="form-btn-coupon"><span class="form-btn-text">Apply coupon</span></button>
                        </form>
                </div>
                <div class="checkout-buy">
                        <div class="total">
                            <div class="sub">Sub total<span class="sub sub-price">$ </span></div>
                            <div class="grand">GRAND TOTAL<span class="grand pink-grand">$ </span></div>
                        </div>
                        <button type="submit" class="total-btn"><span class="total-btn-text">proceed to checkout</span></button>
                </div>
            </div>`
});