const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelectorAll('.ativo');
        const proximoPaso = 'passo-' + this.getAttribute('data-proximo');

        \TextTrackCueList.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo')
})