Vue.component('block-feedback', {
    template: `
    <div class="container feedback-container">
                <section class="reviews">
                    <h3 class="hidden">section reviews</h3>
                    <div class="reviews-box">
                        <div class="reviews-text">
                            <img src="img/review1.png" alt="review1" class="img-reviews">
                            <p class="text">&laquo;Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi,<br> a&nbsp;pulvinar purus condimentum&nbsp;a. Aliquam condimentum<br> mattis neque sed pretium&raquo;</p>
                            <div class="reviews-text-author">
                                <p class="reviews-text text-pink">Bin Burhan</p>
                                <p class="text-author">Dhaka, Bd</p>
                            </div>
                            <div class="reviews-text-circle">
                                <a href="#" class="circle"></a><a href="#" class="circle"></a><a href="#" class="circle"></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="subscribe">
                    <h3 class="hidden">section subscribe</h3>
                    <div class="subscribe-text">
                        <h2 class="text-h2">Subscribe</h2>
                        <p class="subscribe-text-message">FOR OUR NEWLETTER AND PROMOTION</p>
                    </div>
                    <div class="message">
                        <form action="#" class="message-subscribe">
                            <input class="message-field" type="email" placeholder="Enter Your Email">
                        </form>
                        <button class="message-btn"><span class="message-btn-text">Subscribe</span></button>
                    </div>
                </section>
    </div>`
});