// Récupération des différents éléments
const shortBtn = document.querySelector("#short__btn");
const resetBtn = document.querySelector("#reset__btn");
const urlToShort = document.querySelector("#originalUrl");
const shortenedUrlTextarea = document.querySelector("#shortenedUrl");

/**
 * Déclaration de la fonction asynchrone shortenUrl qui va permettre de raccourcir une URL
 * Envoi d'une requête HTTP de type GET grâce à fetch
 */
const shortenUrl = async () => {
  await fetch(
    "https://tinyurl.com/api-create.php?url=" +
      encodeURIComponent(urlToShort.value)
  )
    .then(function (res) {
      if (res.ok) {
        return res.text();
      }
    })
    .then(function (data) {
      shortenedUrlTextarea.value = data;
      console.log(shortenedUrlTextarea.value);
    })
    .catch(function (err) {
      // Affichage d'un message d'erreur dans la console
      console.log("Sorry, we are unable to shorten URL! Try later.");
      // Affichage d'un message d'erreur dans la textarea
      shortenedUrlTextarea.value =
        "Sorry, we are unable to shorten URL! Try later.";
    });
};

// Ecoute de l'événement "click" sur le bouton "Short it" et appel de la focntion shortenUrl
shortBtn.addEventListener("click", shortenUrl);

// Ecoute de l'événement "click" sur le bouton "Reset"
resetBtn.addEventListener("click", () => {
  urlToShort.value = "";
  shortenedUrlTextarea.value = "";
});
