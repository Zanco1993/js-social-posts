/*
Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito,
 il nostro script JS in cui:

Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post,
numero progressivo da 1 a n nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder
ad es. Unsplash (https://unsplash.it/300/300?image=<id>

Milestone 2
Prendendo come riferimento il layout di esempio presente nell’html, 
stampiamo i post del nostro feed.

Milestone 3
Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone
e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

BONUS
- Formattare le date in formato italiano (gg/mm/aaaa)
- Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
- Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

Consigli del giorno:
Ragioniamo come sempre a step.
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice. console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
*/

//--------------------------------------------------------------------------------

// creo l'array di oggetti

const social = [
    {
        id: 1,
        name: "Andrea",
        profileImage: "https://unsplash.it/300/300?image=15",
        dataAmerican: 05-01-2021,
        text: "Ciao sono Andrea",
        postImage: "https://unsplash.it/600/300?image=171",
        likes: 20
    },
    {
        id: 2,
        name: "Marco",
        profileImage: "https://unsplash.it/300/300?image=15",
        dataAmerican: 03-22-2021,
        text: "Ciao mi chiamo Marco",
        postImage: "https://unsplash.it/600/300?image=171",
        likes: 30
    },
    {
        id: 3,
        name: "Fabio",
        profileImage: "https://unsplash.it/300/300?image=15",
        dataAmerican: 02-03-2021,
        text: "Ciao mi chiamo Fabio",
        postImage: "https://unsplash.it/600/300?image=171",
        likes: 40
    }
];