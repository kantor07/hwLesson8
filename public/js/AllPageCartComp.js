Vue.component('cart', {
    data(){
      return {
          cartItems: [],
          showCart: false,
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

        totalPrice () {
            let priceTotal, s=0, result
            let price = document.querySelectorAll('.allPrice');
      
           price.forEach(function(sum) {
               priceTotal = Number(sum.innerText)
                result = s+=priceTotal;  
            });
          // return result
            console.log(result)
        }

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
        <div class="header-cart">
                    <div class="header-href-cart">
                        <button type="button" class="in-cart"><span class="in-cart-number"></span></button>
                        <a href="shopping-cart.html"><img src="img/cart.png" alt="cart" class="header-href-cart-img"></a>
                    </div>
                    <button class="account" type="button" @click="showCart = !showCart" @click="totalPrice">
                        <span class="account-text">My Account</span><i class="fas1 fas fa-caret-down"></i>   
                    </button>
                    <div class="cart-block" v-show="showCart">
                        <p v-if="!cartItems.length"  class="header-cart-text-pink">BASKET IS EMPTY</p>
                            <cart-item class="header-cart-product" 
                            v-for="item of cartItems" 
                            :key="item.id_product"
                            :cart-item="item" 
                            :img="item.img_product"
                            @remove="remove">
                            </cart-item>              
                  
                        <div v-if="cartItems.length" class="header-cart-all">           
                            <total-cart-item
                            @totalPrice="totalPrice">
                            </total-cart-item>
                        </div>    
                    </div>

        </div>`
});

Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `
        <div class="header-cart-product">
                    <div class="cart-product">   
                        <div class="header-cart">
                            <a href="#"><img :src="img" alt="Some image" class="img-header-cart"></a>
                            <div class="header-cart-shopping">
                                <p class="header-cart-product-name">{{cartItem.product_name}}</p>
                                <div class="header-fas-fa-start">
                                    <i class="fas fa-star star"></i>
                                    <i class="fas fa-star star"></i>
                                    <i class="fas fa-star star"></i>
                                    <i class="fas fa-star star"></i>
                                    <i class="fas fa-star star"></i>
                                </div>
                                    <p class="header-cart-text-pink">{{cartItem.quantity}}<span class="span-p"> x </span>$ {{cartItem.price}}</p>
                                    <p class="allPrice hidden">{{cartItem.quantity*cartItem.price}}</p>
                            </div> 
                                <button class="header-cart-btn" @click="$emit('remove', cartItem)">
                                    <span class="span-delete-cart"><i class="fa fa-times-circle"></i></span>
                                </button>        
                         </div>          
                    </div> 
        </div>`
});

Vue.component('total-cart-item', {
    props: ['cartItem'],
    template: `
            <div class="header-cart-all">           
                    <div class="header-cart-total">
                        <p class="header-cart-text">TOTAL</p>
                        <p class="header-cart-text totalAll">$</p>
                    </div>
                    <div class="header-cart-btn1">
                        <a href="checkout.html" class="cart-btn1-text">Checkout</a>
                    </div>
                    <div class="header-cart-btn1">
                        <a href="shopping-cart.html" class="cart-btn1-text">Go to cart</a>
                    </div>
            </div>`        
});

