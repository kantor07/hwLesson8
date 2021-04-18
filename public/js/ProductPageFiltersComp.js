Vue.component('section-filters', {
    template: `
    <div class="filters-container">
                        <div class="trending-now">
                            <p class="filters-text">Trending now</p>
                            <button class="trending">Bohemian<span class="trending-btn-span"> |</span></button>
                            <button class="trending">Floral<span class="trending-btn-span"> |</span></button>
                            <button class="trending">Lace</button>
                            <button class="trending">Floral<span class="trending-btn-span"> |</span></button>
                            <button class="trending">Lace<span class="trending-btn-span"> |</span></button> <button class="trending">Bohemian</button>
                        </div>
                        <div class="size">
                            <h3 class="filters-text">Size</h3>
                            <table>
                                <tr>
                                    <td><input type="checkbox"><label class="size-text">XXS</label></td>
                                    <td><input type="checkbox"><label class="size-text">XS</label></td>
                                    <td><input type="checkbox"><label class="size-text">S</label></td>
                                    <td> <input type="checkbox"><label class="size-text">M</label></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox"><label class="size-text">L</label></td>
                                    <td><input type="checkbox"><label class="size-text">XL</label></td>
                                    <td><input type="checkbox"><label class="size-text">XXL</label></td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                        <div class="price">
                            <p class="filters-text price-text">pRICE</p>
                            <div class="range-filter">
                                <div class="range-controls">
                                    <div class="scale">
                                        <div class="bar"></div>
                                    </div>
                                    <div class="toggle toggle-min" tabindex="0"></div>
                                    <div class="toggle toggle-max" tabindex="0"></div>
                                    <div class="filters-text-size">
                                        <span class="filters-text">$52</span>
                                        <span class="filters-text">$400</span>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>`
});