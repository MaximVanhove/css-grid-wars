<template>
    <div class="controlPanel">
        <section>{{ mode }}</section>
        <section>${{ money }}</section>

        <section>
            <button @click="nextTurn">next turn</button>
            <button @click="buySoldier">buy soldier</button>
        </section>
    </div>
</template>

<script>
import Game from '@/game/game';

export default {
    name: 'controlPanel',

    computed: {
        mode () {
            return this.game.mode;
        },

        money () {
            return this.game.player.money;
        },
    },

    data: () => ({
        game: Game,
    }),

    methods: {
        buySoldier () {
            this.game.buySoldier();
        },

        nextTurn () {
            this.game.nextTurn();
        },
    },
};
</script>
