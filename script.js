const message = document.querySelector("#message-contact");
const bouton = document.querySelector("button");
const compteurCartes = document.querySelector("#compteur-cartes");
bouton.addEventListener("click", function() {
  message.classList.toggle("visible");
  if (message.classList.contains("visible")) {
    bouton.textContent = "Masquer le message ▲";
    bouton.setAttribute("aria-expanded", "true");
  } else {
    bouton.textContent = "Me contacter ▼";
    bouton.setAttribute("aria-expanded", "false");
  }
});
const cartes = document.querySelectorAll(".service-card");
cartes.forEach(function(carte) {
    carte.addEventListener("click", function() {
      cartes.forEach(function(autreCarte) {
    if (autreCarte !== carte) {
        autreCarte.classList.remove("active");
    }
})
        carte.classList.toggle("active");
      if (carte.classList.contains("active")) {
    compteurCartes.textContent = "1 carte sélectionnée";
} else {
    compteurCartes.textContent = "Aucune carte sélectionnée";
      }
    });
});