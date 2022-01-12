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

// funzione generica

function createPost(container, content) {


    container.innerHTML += 
   `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${content.profileImage}" alt="${content.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${content.name}</div>
                    <div class="post-meta__time">Pubblicato il ${content.dataAmerican}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${content.text}</div>
        <div class="post__image">
            <img src="${content.postImage}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${content.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${content.id}" class="js-likes-counter">${content.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `
}


// creo l'array di oggetti

const social = [
    {
        id: 1,
        name: "Andrea",
        profileImage: "https://unsplash.it/300/300?image=15",
        dataAmerican: "05-01-2021",
        text: "Ciao sono Andrea",
        postImage: "https://unsplash.it/600/300?image=171",
        likes: 20
    },
    {
        id: 2,
        name: "Marco",
        profileImage: "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
        dataAmerican: "03-22-2021",
        text: "Ciao mi chiamo Marco",
        postImage: "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
        likes: 30
    },
    {
        id: 3,
        name: "Fabio",
        profileImage: "https://i.picsum.photos/id/928/300/300.jpg?hmac=QWFJOwXiovf5nsBF_GT3zPKfE-W2vrteEo3m0NcfYCM",
        dataAmerican: "02/03/2021",
        text: "Ciao mi chiamo Fabio",
        postImage: "https://media.istockphoto.com/photos/rocky-mountains-and-autumnal-forest-with-colorful-trees-high-mountain-picture-id1282522992?b=1&k=20&m=1282522992&s=170667a&w=0&h=W_7cRAwDTWOqqXF3g9zwOaCMgol1-Vb4rYtlqBbJMYE=",
        likes: 40
    }
];

// mi posiziono in container e cammino nell'array di oggetti
// inserisco dove mi serve, le varie informazioni dell'utente

const containerHtml = document.getElementById("container");
const likeNumber = [];

for(let i=0; i < social.length; i++) {
    likeNumber[i] = social[i].likes
    let post = social[i];
    createPost(containerHtml, post);  //in questo caso abbiamo innerHtml all'interno della funzione
}



const likeButton = document.querySelectorAll(".js-like-button");

let counterClick = 0;

for (let i=0; i < likeButton.length; i++) {
    likeButton[i].addEventListener('click', function(e){

        e.preventDefault();

        const likesCounter = document.getElementById(`like-counter-${social[i].id}`);

        likeButton[i].classList.toggle("like-button--liked");
        counterClick++;
        if(counterClick % 2 !== 0){
            likeNumber[i]++;
        } else {
            likeNumber[i]--;
        }
        likesCounter.innerHTML = likeNumber[i];

    });
}





