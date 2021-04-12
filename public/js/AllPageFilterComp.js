Vue.component('filter-el', {
    data(){
        return {
            userSearch: ''
        }
    },
    template: `
    <form action="#" class="search" @submit.prevent="$parent.$refs.products.filter(userSearch)">
        <input class="search-field" type="text" placeholder="Search for Item..." v-model="userSearch">
        <button class="search-btn" type="submit">
            <img src="img/search.png" alt="search">
        </button>
    </form>
    `
});
