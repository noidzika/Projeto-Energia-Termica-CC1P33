// Navegação entre seções
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal de informações
function toggleInfo() {
    const modal = document.getElementById('infoModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}
// Expandir conteudo extra dos cards de conceitos
function toggleCard(card) {
    document.querySelectorAll('.concept-card')
        .forEach(item => {
            if(item !== card) {
                item.classList.remove('on');              
            }
        });
    card.classList.toggle('on');
}
// Expandir cards de aplicação
function toggleExperiment(card) {
    document.querySelectorAll('.experiment-card')
        .forEach(item => {
            if (item !== card) {
                item.classList.remove('open');
            }
        });
    card.classList.toggle('open');
}
// Expandir conteudo extra dos cards de sustentabilidade
function toggleSustentability(card) {
    document.querySelectorAll('.sustentability-card')
        .forEach(item => {
            if(item !== card) {
                item.classList.remove('show'); 
            }
        });
    card.classList.toggle('show');
}









