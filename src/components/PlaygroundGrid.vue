<template>
    <div class="playground-grid">
        <Tile
            v-for="index in area"
            :key="index"
        />
    </div>
</template>

<script>
import Tile from '@/components/Tile';

export default {
    name: 'playground-grid',

    components: {
        Tile,
    },

    data: () => ({
        area: [],
        columns: 9,
    }),

    created () {
        this.generateArea();
    },

    methods: {
        generateArea () {
            const count = this.columns * this.columns;

            for (let index = 0; index < count; index++) {
                this.area.push(index);
            }
        },
    },
};
</script>

<style lang="scss">
.playground-grid {
    $columns: 9;
    $size: 80;

    display: grid;
    grid-template-columns: repeat($columns * 2 + 1, 1fr);
    grid-column-gap: 1%;
    grid-row-gap: 1%;

    height: $size + 0vh;
    width: $size + 0vh;

    padding: 5vh 5vw;

    @media (max-aspect-ratio: 1/1) {
        height: $size + 0vw;
        width: $size + 0vw;
    }
}

.playground-grid__tile {
    background-color: #d2d5df;
    grid-column-end: span 2;
    grid-row-end: span 2;
    border-radius: 10%;
}

.playground-grid__tile:nth-child(18n+10) {
    grid-column-start: 2;
}
</style>
