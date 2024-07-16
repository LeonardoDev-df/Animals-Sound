document.addEventListener("DOMContentLoaded", function () {
    // Variável para armazenar o elemento de áudio atualmente em reprodução
    let currentlyPlaying;

    // Selecione todos os botões com a classe "animal-button"
    const animalButtons = document.querySelectorAll(".animal-button");

    // Adicione um ouvinte de evento a cada botão
    animalButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Obtenha o ID do elemento de áudio associado a este botão
            const soundId = button.getAttribute("data-sound");

            // Obtenha o elemento de áudio correto com base no ID
            const soundEl = document.getElementById(soundId);

            // Pausa a reprodução se houver algum som em reprodução
            if (currentlyPlaying) {
                currentlyPlaying.pause();
            }

            // Verifique se o elemento de áudio existe
            if (soundEl) {
                // Reproduza o som associado ao animal
                soundEl.play();
                // Atualize o elemento de áudio atualmente em reprodução
                currentlyPlaying = soundEl;
            }
        });
    });
});
