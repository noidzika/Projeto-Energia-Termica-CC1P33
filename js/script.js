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
function toggleMenu() {
    const navMobile = document.getElementById('nav-mobile');
    navMobile.classList.toggle('open');
}
// ========================================

// Fecha cards ao clicar fora
document.addEventListener('click', function(event) {

    // Cards de conceitos ====================
    if (!event.target.closest('.concept-card')) {
        document.querySelectorAll('.concept-card').forEach(c => c.classList.remove('on'));
    }
    // ======================================== 

    // Cards de aplicação ====================
    if (!event.target.closest('.experiment-card')) {
        document.querySelectorAll('.experiment-card').forEach(c => c.classList.remove('open'));
    }
    // ======================================== 

    // Cards de sustentabilidade ===============
    if (!event.target.closest('.sustentability-card')) {
        document.querySelectorAll('.sustentability-card').forEach(c => c.classList.remove('show'));
    }
    // ======================================== 

    // Menu mobile — fecha se clicar fora do menu E fora do botão
    if (!event.target.closest('#nav-mobile') && !event.target.closest('.btn-mobile')) {
        document.getElementById('nav-mobile').classList.remove('open');
    }
    // =======================================================
});
// ============================================================= 
// Reseta estado ao voltar para a página
window.addEventListener('pageshow', function() {
    document.querySelectorAll('.concept-card').forEach(c => c.classList.remove('on'));
    document.querySelectorAll('.experiment-card').forEach(c => c.classList.remove('open'));
    document.querySelectorAll('.sustentability-card').forEach(c => c.classList.remove('show'));
    document.getElementById('nav-mobile').classList.remove('open');
});
//=================================================================









