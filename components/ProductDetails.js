app.component('product-detail', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
        <div>
            <ul>
                <li v-for="detail in details" :key="detail">{{ detail }}</li>
            </ul>
        </div>

    `
});