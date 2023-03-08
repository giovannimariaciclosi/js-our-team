/*
CONSEGNA

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
*/



//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

  const teamMembers =  [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg'
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg'
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg'
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg'
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg'
    },
  ];

console.log(teamMembers);

//prendo l'elemento grid dal documento
let gridEl = document.getElementById("grid");

//faccio un ciclo for..in che esegue le istruzioni per ogni proprietà degli oggetti contenuti nell'array teamMembers
for (let key in teamMembers ) {

  // MILESTONE 1:
  //Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
  console.log(`Name: ${teamMembers[key].name}, Role:${teamMembers[key].role}, Image: ${teamMembers[key].image}`)


  //BONUS 2:
  //Organizzare i singoli membri in card/schede

  //creo un nuovo elemento div per la carta e lo appendo a grid
  let newCardEl = document.createElement('div');
  gridEl.append(newCardEl);
  //aggiungo una classe css a questo elemento
  newCardEl.classList.add("card-container");

  //BONUS 1:
  //Trasformare la stringa foto in una immagine effettiva

  //creo un nuovo elemento img e lo appendo all'elemento creato precedentemente, cardEl
  let newCardImgEl = document.createElement('img');
  newCardEl.append(newCardImgEl);
  //cambio la src dell'immagine con la proprietà image dell'array
  newCardImgEl.src = `img/${teamMembers[key].image}`;

  //creo un nuovo elemento div e lo appendo all'elemento cardEL
  let newCardNameEl = document.createElement('div');
  newCardEl.append(newCardNameEl);
  //aggiungo una classe css a questo elemento
  newCardNameEl.classList.add('card-name');
  //cambio il testo di questo elemento con la proprietà name dell'array
  newCardNameEl.innerText = `${teamMembers[key].name}`;

  //creo un nuovo elemento div e lo appendo all'elemento cardEL
  let newCardRoleEl = document.createElement('div');
  newCardEl.append(newCardRoleEl);
  //aggiungo una classe css a questo elemento
  newCardRoleEl.classList.add('card-role');
  //cambio il testo di questo elemento con la proprietà role dell'array
  newCardRoleEl.innerText = `${teamMembers[key].role}`;
  
};