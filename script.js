const GAME_STATUS_STARTED = 'started';
const GAME_STATUS_PAUSED = 'paused';
const GAME_STATUS_STOPPED = 'stopped';
const GAME_STATUS_DEFAULT = 'default';

const SNAKE_DIRECTION_UP = 'up';
const SNAKE_DIRECTION_DOWN = 'down';
const SNAKE_DIRECTION_LEFT = 'left';
const SNAKE_DIRECTION_RIGHT = 'right';

const config = {
    size: 20
};

const game = {

    score: 0,

    getElement() {
        return document.getElementById('game');
    },

    getScoreValueElement() {
        return document.getElementById('score-value');
    },

    start() {
        game.setGameStatus(GAME_STATUS_STARTED);
        board.render();
        snake.render();
        food.render();
    },

    pause() {
        game.setGameStatus(GAME_STATUS_PAUSED);

    },

    stop() {
        game.setGameStatus(GAME_STATUS_STOPPED);

        alert('Игра окончена. Количество очков: ' + game.score);

        board.clean();

        game.setGameStatus(GAME_STATUS_DEFAULT);

        game.score = 0;
        const scoreValueElement = game.getScoreValueElement();
        scoreValueElement.innerHTML = game.score;

        snake.parts = [{
            top: 0,
            left: 0
        },
        {
            top: 0,
            left: 1
        },
        {
            top: 0,
            left: 2
        },
        ]

    },

    move(event) {
        let direction = null;

        switch (event.keyCode) {
            case 38:
                direction = SNAKE_DIRECTION_UP;
                break;
            case 40:
                direction = SNAKE_DIRECTION_DOWN;
                break;
            case 37:
                direction = SNAKE_DIRECTION_LEFT;
                break;
            case 39:
                direction = SNAKE_DIRECTION_RIGHT;
                break;
            default:
                return;
        }

        snake.setDirection(direction);
        const nextPosition = snake.getNextPosition();

        const foundSnake = snake.foundPosition(nextPosition);

        if (foundSnake !== -1) {
            game.stop();
            return;
        };

        const foundFood = food.foundPosition(nextPosition);

        if (foundFood !== -1) {
            snake.setPosition(nextPosition, false);
            food.removeItem(foundFood);
            food.generateItem();
            food.render();

            game.score += 1;
            const scoreValueElement = game.getScoreValueElement();
            scoreValueElement.innerHTML = game.score;

        } else {
            snake.setPosition(nextPosition);
        }

        snake.render();
    },

    setGameStatus(status) {
        const element = game.getElement();

        element.classList.remove(GAME_STATUS_STARTED, GAME_STATUS_PAUSED, GAME_STATUS_STOPPED);
        element.classList.add(status);
    }

};

const board = {

    getElement() {
        return document.getElementById('board');
    },

    render() {
        const board = this.getElement();

        for (let i = 0; i < config.size ** 2; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            cell.dataset.top = Math.trunc(i / config.size);
            cell.dataset.left = i % config.size;

            board.appendChild(cell);
        }
    },

    clean() {
        const cleaner = document.getElementById('board');
        cleaner.innerHTML = "";
    }
};

const cells = {

    getElements() {
        return document.getElementsByClassName('cell');
    },

    renderItems(coordinates, className) {
        const cells = this.getElements();

        for (let cell of cells) {
            cell.classList.remove(className);
        }

        for (let coordinate of coordinates) {
            const cell = document.querySelector(`.cell[data-top="${coordinate.top}"][data-left="${coordinate.left}"]`);
            cell.classList.add(className);
        }
    }
};

const snake = {

    direction: SNAKE_DIRECTION_RIGHT,

    parts: [{
        top: 0,
        left: 0
    },
    {
        top: 0,
        left: 1
    },
    {
        top: 0,
        left: 2
    },
    ],

    setDirection(direction) {
        if (this.direction === SNAKE_DIRECTION_UP && direction === SNAKE_DIRECTION_DOWN ||
            this.direction === SNAKE_DIRECTION_DOWN && direction === SNAKE_DIRECTION_UP ||
            this.direction === SNAKE_DIRECTION_LEFT && direction === SNAKE_DIRECTION_RIGHT ||
            this.direction === SNAKE_DIRECTION_RIGHT && direction === SNAKE_DIRECTION_LEFT) {
            return;
        }

        this.direction = direction;
    },

    foundPosition(snakePosition) {
        const comparerFunction = function (item) {
            return item.top === snakePosition.top && item.left === snakePosition.left;
        };

        return this.parts.findIndex(comparerFunction);
    },

    getNextPosition() {
        const position = {
            ...this.parts[this.parts.length - 1]
        };

        switch (this.direction) {
            case SNAKE_DIRECTION_UP:
                position.top -= 1;
                break;
            case SNAKE_DIRECTION_DOWN:
                position.top += 1;
                break;
            case SNAKE_DIRECTION_LEFT:
                position.left -= 1;
                break;
            case SNAKE_DIRECTION_RIGHT:
                position.left += 1;
                break;
        }

        if (position.top === -1) {
            position.top = config.size - 1;
        } else if (position.top > config.size - 1) {
            position.top = 0;
        }

        if (position.left === -1) {
            position.left = config.size - 1;
        } else if (position.left > config.size - 1) {
            position.left = 0;
        }

        return position;
    },

    setPosition(position, shift = true) {
        if (shift) {
            this.parts.shift();
        }

        this.parts.push(position);
    },

    render() {
        cells.renderItems(this.parts, 'snake');
    }
};

const food = {

    items: [{
        top: 5,
        left: 5
    }],

    foundPosition(snakePosition) {
        const comparerFunction = function (item) {
            return item.top === snakePosition.top && item.left === snakePosition.left;
        };

        return this.items.findIndex(comparerFunction);
    },

    removeItem(foundPosition) {
        this.items.splice(foundPosition, 1);
    },

    generateItem() {
        const newItem = {
            top: getRandomNumber(0, config.size - 1),
            left: getRandomNumber(0, config.size - 1)
        };

        this.items.push(newItem);
    },

    render() {
        cells.renderItems(this.items, 'food');
    }
};

function init() {
    const startButton = document.getElementById('button-start');
    const pauseButton = document.getElementById('button-pause');
    const stopButton = document.getElementById('button-stop');

    startButton.addEventListener('click', game.start);
    pauseButton.addEventListener('click', game.pause);
    stopButton.addEventListener('click', game.stop);

    window.addEventListener('keydown', game.move);
}

function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

window.addEventListener('load', init);