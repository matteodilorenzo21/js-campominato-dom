# CAMPO MINATO

1. Inizializzamo una variabile gameOver con il valore false.
2. Definiamo una funzione createCell con parametro gameMode che restituisce una cella di gioco.
3. Definiamo una funzione generateBombs che genera un array di numeri casuali che rappresentano le posizioni delle bombe nel gioco.
4. Recuperiamo dall'HTML l'elemento griglia.
5. Recuperiamo dall'HTML l'elemento bottone.
6. Recuperiamo dall'HTML l'elemento select con le difficoltà.
7. Recuperiamo dall'HTML l'elemento dove mostrare il punteggio del giocatore.
8. Recuperiamo dall'HTML l'elemento dove mostrare il messaggio di vittoria o sconfitta insieme allo score raggiunto.
9. Dichiariamo una variabile score con il valore 0.
10. Definiamo una funzione generateGrid che genera la griglia di gioco in base alla difficoltà selezionata.
11. Dichiariamo le variabili rows e cols, che rappresentano il numero di righe e colonne della griglia di gioco.
12. Utilizza uno switch per assegnare i valori corretti alle variabili rows e cols in base alla difficoltà selezionata dall'utente.
14. Generiamo un array di posizioni casuali delle bombe utilizzando la funzione generateBombs, passando il numero desiderato di bombe e il numero totale di celle della griglia.
15. Calcoliamo il punteggio massimo ottenibile sottraendo il numero di bombe dal numero totale di celle della griglia.
16. Dichiariamo una funzione handleClick che gestisce l'evento di clic su una cella della griglia.
17. Attraverso un ciclo For generiamo tutte le celle della griglia e creiamo un elemento cella utilizzando la funzione createCell, assegnando un numero ad ogni cella.
18. Rimuoviamo la classe "d-none" dalla griglia, in modo da renderla visibile.
19. Aggiungiamo le classi "d-block" e "d-flex" alla griglia, per visualizzare la griglia.
20. Creiamo un event listener al bottone di avvio del gioco, in modo che quando viene cliccato venga generata una nuova griglia di gioco utilizzando la funzione generateGrid.