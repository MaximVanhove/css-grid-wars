import Player from './player';

class Game {
    constructor () {
        this.player = new Player();
        this.mode = this.modes.IDLE;
    }

    get modes () {
        return {
            'IDLE': 'IDLE',
            'BUYING': 'BUYING',
            'ATTACKING': 'ATTACKING',
        };
    }

    buySoldier () {
        this.mode = this.modes.BUYING;
    }

    boughtSoldier () {
        this.mode = this.modes.IDLE;
    }

    prepareAttack (tile) {
        this.mode = this.modes.ATTACKING;

        if (this.focusedTile) {
            this.focusedTile.blur();
        }

        this.focusedTile = tile;
    }

    cancelAttack () {
        this.mode = this.modes.IDLE;

        if (this.focusedTile) {
            this.focusedTile.blur();
        }
    }

    attack (tile) {
        tile.owner = this.player;
        this.mode = this.modes.IDLE;

        if (this.focusedTile) {
            this.focusedTile.blur();
        }

        this.moveSoldier({ from: this.focusedTile, to: tile });
    }

    moveSoldier ({ from, to }) {
        from.hasSoldier = false;
        to.hasSoldier = true;
    }

    nextTurn () {
        this.player.money += 10;
    }
}

const game = new Game();

export default game;
