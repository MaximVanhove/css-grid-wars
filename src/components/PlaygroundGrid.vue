<template>
    <div class="grid">
        <Tile
            v-for="index in area"
            :key="index"
        />
    </div>
</template>

<script>
import Tile from '@/components/Tile';

export default {
    name: 'grid',

    components: {
        Tile,
    },

    data: () => ({
        area: [],
        columns: 9,
        focusedTile: null,
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
.grid {
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

.grid__tile {
    grid-column-end: span 2;
    grid-row-end: span 2;
    border-radius: 10%;
}

.grid__tile:nth-child(18n+10) {
    grid-column-start: 2;
}
</style>
