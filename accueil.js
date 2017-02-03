/*function clic() {
    console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);

// Gestion de la fin du chargement de la page web
window.addEventListener("load", function () {
    console.log("Page entièrement chargée");
});

// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function (e) {
    var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
});
// Focus sur la zone de saisie du pseudo
pseudoElt.focus();
*/

//<script type="text/javascript">
    
$(document).ready(function()    {$('.text_container').addClass("hidden");
    $('.text_container').click(function() {
            var $this = $(this);

            if ($this.hasClass("hidden")) {
                $(this).removeClass("hidden").addClass("visible");

            } else {
                $(this).removeClass("visible").addClass("hidden");
            }
        });
    });
//</script>