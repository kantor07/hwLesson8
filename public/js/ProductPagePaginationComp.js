Vue.component('section-pagination', {
    template: `
    <div class="item-pagination-container">
                        <div class="pagination-arrivals">
                            <a href="#" class="pagination-page"><span class="chevron"><i class="fas fa-angle-left"></i></span></a>
                            <a href="#" class="pagination-page">1</a>
                            <a href="#" class="pagination-page">2</a>
                            <a href="#" class="pagination-page">3</a>
                            <a href="#" class="pagination-page">4</a>
                            <a href="#" class="pagination-page">5</a>
                            <a href="#" class="pagination-page">6</a>
                            <a href="#" class="pagination-page">.....</a>
                            <a href="#" class="pagination-page">20</a>
                            <a href="#" class="pagination-page"><span class="chevron"><i class="fas fa-angle-right"></i></span></a>
                        </div>
                        <div class="view-all">
                            <a href="#" class="href-view-all">View All</a>
                        </div>
    </div>`
});