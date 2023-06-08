console.log('JS RUNNING')

//flag
let gameOver = false;

// Dichiariamo una funzione per generare le celle
const createCell = (gameMode) => {
    const cell = document.createElement('div');
    cell.className = "cell";

    if (gameMode === "medium") {
        cell.classList.add("cell-medium");
    } else if (gameMode === "hard") {
        cell.classList.add("cell-hard");
    }

    return cell;
}

// Dichiariamo una funzione per generare le bombe
function generateBombs(numberOfBombs, maxNumber) {
    let bombs = [];

    while (bombs.length < numberOfBombs) {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        } while (bombs.includes(randomNumber));

        bombs.push(randomNumber);
    }

    console.log('CHEATS') + console.table(bombs);
    return bombs;
}

// Recuperiamo la griglia dal DOM
const grid = document.getElementById('grid');

// Recuperiamo il bottone dal DOM
const playBtn = document.getElementById('play-btn');

// Recuperiamo la select
const difficultySelect = document.getElementById('difficulty-select');

// Recuperiamo l'elemento in cui stampare lo score
const scorePlaceholder = document.getElementById('score-placeholder');

// Recupero l'elemento in cui stampare il messaggio
const gameResult = document.getElementById('game-result');
const displayScore = document.getElementById('display-score');

// Preparo il punteggio
let score = 0;

// Funzione per generare la griglia in base alla difficoltà selezionata
const generateGrid = () => {
    // Prepariamo i dati per la griglia
    let rows, cols;

    switch (difficultySelect.value) {
        case "easy":
            rows = 10;
            cols = 10;
            break;
        case "medium":
            rows = 9;
            cols = 9;
            break;
        case "hard":
            rows = 7;
            cols = 7;
            break;
    }

    const totalCells = rows * cols;
    console.log('Celle generate: ' + totalCells);

    // Dichiaro un array per le bombe
    const bombs = generateBombs(16, totalCells);

    // Imposto il punteggio massimo
    const maxScore = totalCells - bombs.length;

    // Rimuoviamo tutte le celle precedenti
    grid.innerHTML = '';

    // Funzione per gestire il clic sulla cella
    const handleClick = (event) => {
        const cell = event.target;
        
        if (!gameOver && !cell.classList.contains('clicked')) {
            cell.classList.add('clicked');
    
            // Controlla se la cella cliccata è una bomba
            if (bombs.includes(Number(cell.innerText))) {
                gameOver = true;
                cell.classList.add('bomb');
                cell.innerText = '';
                console.log('BOOM!');
    
                // Mostra tutte le altre bombe
                const bombCells = document.querySelectorAll('.bomb');
                bombCells.forEach(bombCell => {
                    bombCell.innerText = '';
                });
    
                // Rimuovi gli event listener dalle altre celle
                const cells = document.getElementsByClassName('cell');
                for (let i = 0; i < cells.length; i++) {
                    cells[i].removeEventListener('click', handleClick);
                }
    
                // Mostra il messaggio di perdita
                gameResult.innerHTML = `<h2 class="text-danger fw-bold pb-0">YOU LOSE!</h2><hr><p class="text-center fw-bold">YOU SCORED: ${score}`;
            } else {
                // Incrementa lo score
                score++;
                // Stampa lo score
                scorePlaceholder.innerText = score;
    
                // Controlla se l'utente ha vinto
                if (score === maxScore) {
                    gameOver = true;
                    gameResult.innerHTML = `<h2 class="text-success fw-bold pb-0">YOU WON!</h2><hr><p class="text-center fw-bold">YOU SCORED: ${score}`;
                }
            }
        }
    
        console.log('Cella selezionata:', cell.innerText);
    };

    // Generiamo le celle in pagina
    for (let i = 0; i < totalCells; i++) {
        const cell = createCell(difficultySelect.value);
        cell.innerText = i + 1;

        cell.addEventListener('click', handleClick);

        grid.appendChild(cell);
    }

    // Mostrare la griglia
    grid.classList.remove('d-none');
    grid.classList.add('d-block', 'd-flex');
    gameResult.innerText = "";
    displayScore.innerText = "";
}

// Nascondiamo la griglia all'avvio
grid.classList.add('d-none');

// Aggiungiamo un event listener al bottone per generare la griglia
playBtn.addEventListener('click', function () {
    // Riporta lo score a zero
    score = 0;
    // Aggiorna il valore al placeholder dello score
    scorePlaceholder.innerText = score;

    // Reimposta gameOver a false
    gameOver = false;

    generateGrid();
});