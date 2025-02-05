document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const year = document.getElementById('year').value;
    const site = document.getElementById('site').value;  // Corrected field name
    const time = document.getElementById('time').value;
    const ideas = document.getElementById('ideas').value;

    // Créer un message de confirmation
    const confirmationMessage = `Merci ${name} ! Vous êtes inscrit à la séance de jardinage sur le site ${site} de ${time}.`;

    // Affichage du message flottant
    const floatingMessage = document.getElementById('floating-message');
    const floatingContent = document.getElementById('floating-content');
    
    if (floatingMessage && floatingContent) {  // Check if floating elements exist
        floatingContent.innerText = confirmationMessage;
        floatingMessage.style.display = 'block';
    }

    // Réinitialiser le formulaire
    document.getElementById('join-form').reset();
});

// Utilisation de l'Intersection Observer pour révéler la section "Comment ça marche"
document.addEventListener("DOMContentLoaded", function() {
    const section = document.getElementById('how-it-works');
    const items = document.querySelectorAll('.how-it-works-item');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // La section devient visible
                section.classList.add('show'); 

                // Pour chaque item, on l'affiche un par un
                items.forEach((item, index) => {
                    // Chaque item devient visible avec un délai entre chaque
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 300);  // Délai de 300ms entre chaque élément
                });
            }
        });
    }, {
        threshold: 0.5 // La section doit être à 50% visible pour être considérée comme "visible"
    });

    observer.observe(section);
});


// Display the Thank You message after form submission
document.getElementById('thank-you-section').style.display = 'block';
