const modalOverlay = document.querySelector('.modal-overlay');
const receitas = document.querySelectorAll('.receita')

for (let receita of receitas){
    receita.addEventListener("click", function(){
        modalOverlay.classList.add('active')
        const criadorReceita = receita.querySelector('.criadorReceita').textContent
        const receitaNome = receita.querySelector('.nomeReceita').textContent
        const receitaId = receita.getAttribute("id")
        modalOverlay.querySelector('img').src = `${receitaId}.png`
        modalOverlay.querySelector('.nomeReceitaModal').innerHTML = `${receitaNome}`
        modalOverlay.querySelector('.criadorReceitaModal').innerHTML = `${criadorReceita}`
    })
};

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})