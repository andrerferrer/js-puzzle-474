// The three steps of pseudocode of Andre

// 1. explain it in plain English (FORGET THE CODE)
// 2. Translate the first into pseudocode
// 3. Actually write the code, step by step

// 1. explain it in plain English (FORGET THE CODE)
// whenever I click on a tile
// we will swap the tile with the empty one IF it's adjacent
// if we have the correct order, game is over

// 2. Translate the first into pseudocode
// select the tds
// we will add an event listener FOR_EACH td (for a click)
// when the click happens:
// 1- check if it's adjacent
// if yes, swap

// 3. Actually write the code, step by step

const isAdjacent = (box, emptyBox) => {
    // find the cols
    const boxColumn = box.cellIndex;
    const emptyBoxColumn = emptyBox.cellIndex;
    const columnDiff = Math.abs(boxColumn - emptyBoxColumn);
    // find the rows

    
    const boxRow = box.parentElement.rowIndex;
    const emptyBoxRow = emptyBox.parentElement.rowIndex;
    const rowDiff = Math.abs(boxRow - emptyBoxRow);
    
    // considering that we have a grid
    // how can we check whether something is adjacent?
    // if the difference of rows is 1 and the difference of columns is 0
    // if (rowDiff === 1 && columnDiff === 0) return true;
    // if the difference of cols is 1 and the difference of rows is 0
    // if (rowDiff === 0 && columnDiff === 1) return true;
    // return false;
    if (rowDiff === 1 && columnDiff === 0) {
        return true;
        // if the difference of cols is 1 and the difference of rows is 0
    } else if (rowDiff === 0 && columnDiff === 1) {
        return true;
    } else {
        return false;
    }
};

const swap = (box, emptyBox) => {
    // make the box hidden
    box.classList.add('empty');
    // make the emptyBox appear
    emptyBox.classList.remove('empty');

    // make the empty box receive the text
    emptyBox.innerText = box.innerText;
    // make the box lose its text
    box.innerText = '';
};

const gameIsOver = () => {
    // Problem 1: we can't really compare arrays in Javascript
    // Solution: Turn the array into strings and compare the strings
    // Problem 2: we could have the empty box between 14 and 15 and it would look like the game is ended
    // Solution: we can add a dash after each number. Hence, 14--15- is not endGame, but 14-15-- is
    const tds = document.querySelectorAll('td');
    let result = '';
    tds.forEach( (td) => { result += td.innerText + '-' } );
    const endGameResult = '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15--';
    console.log(result)
    
    return result === endGameResult
}

const endGame = () => {
    // show that the game is over
    alert('GAME OVER');
    // reload the page
    location.reload();
}

// select the tds
const tds = document.querySelectorAll('td');

// we will add an event listener FOR_EACH td (for a click)
tds.forEach((td) => {
    // td.addEventListener('event', 'action')
    td.addEventListener('click', (event) => {
        const box = event.currentTarget;

        // select the empty box
        const emptyBox = document.querySelector('td.empty');

        // when the click happens:
        // 1- check if it's adjacent
        if (isAdjacent(box, emptyBox)) {
            // if yes, swap
            swap(box, emptyBox);
            // check if the game is over
            if (gameIsOver()) endGame()
        };

    });
});







































































// 1. select the button
const button = document.querySelector('button');
// document.querySelector('#show-hint')
// document.querySelector('button#show-hint')
// document.querySelector('.btn')
// document.querySelector('.btn-primary')

// 2. add an event listener. 
// button.addEventListener(EVENT, CALLBACK);
// The event is a click

button.addEventListener('click', (event) => {
    // 3. When the click happens:
    // select the text
    const text = document.querySelector('div.hint');
    
    // 3.1 toggle whether the text is hidden
    // access the classList and toggle .active
    text.classList.toggle('active');
});

