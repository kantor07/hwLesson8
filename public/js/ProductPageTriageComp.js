Vue.component('section-triage', {
    template: `
    <div class="triage">
                <div class="sort">
                    <p class="triage-text">Sort By</p>
                    <select class="triage-select triage-text">
                        <option>Name</option>
                        <option>Size</option>
                        <option>Price</option>
                    </select>
                </div>
                <div class="show">
                    <p class="triage-text">Show</p>
                    <select class="triage-select triage-text">
                        <option>09</option>
                        <option>06</option>
                        <option>03</option>
                    </select>
                </div>
    </div>`
});