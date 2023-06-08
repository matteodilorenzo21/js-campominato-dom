// JS LINK RUN CHECK
console.log('JS RUNNING')

// Dichiariamo una funzione che genererà le celle
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

// Recuperiamo la griglia dal DOM
const grid = document.getElementById('grid');

// Recuperiamo il bottone dal DOM
const playBtn = document.getElementById('play-btn');

// Recuperiamo la select
const difficultySelect = document.getElementById('difficulty-select');

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

    // Rimuoviamo tutte le celle precedenti
    grid.innerHTML = '';

    // Generiamo le celle in pagina
    for (let i = 0; i < totalCells; i++) {
        const cell = createCell(difficultySelect.value);
        cell.innerText = i + 1;

        cell.addEventListener('click', () => {
            
            cell.classList.add('clicked');

            console.log('Cella selezionata:', cell.innerText);
        });

        grid.appendChild(cell);
    }

    // Mostrare la griglia
    grid.classList.remove('d-none');
    grid.classList.add('d-block', 'd-flex');
}

// Nascondiamo la griglia all'avvio
grid.classList.add('d-none');

// Aggiungiamo un event listener al bottone per generare la griglia
playBtn.addEventListener('click', generateGrid);