<template>
    <div
        class="grid__tile"
        :class="classes"
        @click="onClick"
    />
</template>

<script>
import game from '@/game/game';

export default {
    name: 'tile',

    data: () => ({
        game: game,
        owner: {
            color: 'grey',
        },
        team: null,
        hasSoldier: false,
        isFocused: false,
    }),

    computed: {
        classes () {
            const color = `grid__tile--color-${this.owner.color}`;

            return {
                [color]: this.owner,
                'grid__tile--soldier': this.hasSoldier,
                'grid__tile--focused': this.isFocused,
            };
        },

        isOwnedByPlayer () {
            return this.owner.color === this.game.player.color;
        },
    },

    methods: {
        onClick () {
            if (this.game.mode === this.game.modes.BUYING) {
                return this.buySoldier();
            }

            if (this.game.mode === this.game.modes.ATTACKING) {
                return this.attack();
            }

            if (this.game.mode === this.game.modes.IDLE) {
                return this.focus();
            }
        },

        buySoldier () {
            if (this.isOwnedByPlayer && this.hasSoldier) {
                return false;
            }

            this.hasSoldier = true;
            this.owner = this.game.player;
            this.game.boughtSoldier();
        },

        attack () {
            if (this.isFocused) {
                return this.game.cancelAttack();
            }

            this.game.attack(this);
        },

        focus () {
            if (this.hasSoldier) {
                this.game.prepareAttack(this);
                this.isFocused = true;
            }
        },

        blur () {
            this.isFocused = false;
        },
    },
};
</script>

<style lang="scss">
    .grid__tile {
        background-color: #d2d5df;
        background-position: center;
        background-size: 70%;
        background-repeat: no-repeat;

        transition: .2s ease-in-out;

        &--soldier {
            background-image: url('../assets/soldier.png');
        }

        &--color-red {
            background-color: #efb4db;
        }

        &--color-purple {
            background-color: #bdb4ef;
        }

        &--focused {
            transform: translateY(-15%);
            box-shadow: 0 -1px 2px rgba(#000000, .2);
        }
    }
</style>
