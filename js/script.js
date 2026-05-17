
// Navegação entre seções
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Modal de informações
function toggleInfo() {
    const modal = document.getElementById('infoModal');

    modal.style.display =
        modal.style.display === 'block'
            ? 'none'
            : 'block';
}

// Expandir conteúdo extra dos cards
function toggleCard(card) {

    document.querySelectorAll('.concept-card')
        .forEach(item => {

            if (item !== card) {
                item.classList.remove('on');
            }

        });

    card.classList.toggle('on');
}
