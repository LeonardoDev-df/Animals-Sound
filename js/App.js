// Eventos para quando os marcadores são detectados
AFRAME.registerComponent("markerhandler", {
    init: function () {
        //marcador
        const markerCrocodilo = document.getElementById("marker-crocodilo");
        const markerCobra = document.getElementById("marker-cobra");
        const markerGolfi = document.getElementById("marker-golfi");
        const markerPanter = document.getElementById("marker-panter");

        //botão
        document.getElementById("botao-sair").addEventListener("click", redirecionarPagina);
        const botaoPesquisa= document.getElementById("botao-pesquisa");
        const botaoCrocodilo = document.getElementById("botao-crocodilo");
        const botaoCobra = document.getElementById("botao-cobra");
        const botaoGolfi = document.getElementById("botao-golfi");
        const botaoPanter = document.getElementById("botao-panter");

         //div 
         const divCroc = document.getElementById("div-croc");
         const divSnake = document.getElementById("div-snake");
         const divGolfi = document.getElementById("div-golfi");
         const divPanter = document.getElementById("div-panter");
        
        //input 
        const inputCroc = document.getElementById("input-croc");
        const inputSnake = document.getElementById("input-snake");
        const inputGolfi = document.getElementById("input-golfi");
        const inputPanter = document.getElementById("input-panter");

        //funcionalidae audio descrição
       // Adicione um evento de clique ao botão de conversão
        const botaoConverterCroc = document.getElementById('botao-converter-croc');
       

        botaoConverterCroc.addEventListener('click', () => {
            const textoParaFalar = document.getElementById('div-croc').textContent; // Obtém o texto da div-croc

            const utterance = new SpeechSynthesisUtterance(textoParaFalar);

            // Verifica se a síntese de fala é suportada no navegador
            if ('speechSynthesis' in window) {
                // Pausa qualquer fala anterior e inicia a nova
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(utterance);
                utterance.onend = function() {
                    console.log('Fala concluída');
                };

                const soundEl = document.getElementById("kro-sound");
            
                soundEl.pause();

                // Converte o texto em áudio e exibe o áudio no elemento de áudio
                const blobUrl = URL.createObjectURL(new Blob([textoParaFalar], { type: 'audio/wav' }));
                audio.src = blobUrl;
                audio.controls = true;
            } else {
                alert('A síntese de fala não é suportada neste navegador.');
            }
        });

        // Adicione um evento de clique ao botão de conversão
        const botaoConverterSnake= document.getElementById('botao-converter-snake');
       

        botaoConverterSnake.addEventListener('click', () => {
            const textoParaFalar = document.getElementById('div-snake').textContent; // Obtém o texto da div-croc

            const utterance = new SpeechSynthesisUtterance(textoParaFalar);

            // Verifica se a síntese de fala é suportada no navegador
            if ('speechSynthesis' in window) {
                // Pausa qualquer fala anterior e inicia a nova
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(utterance);
                utterance.onend = function() {
                    console.log('Fala concluída');
                };

                const soundEl = document.getElementById("snake-sound");
            
                soundEl.pause();

                // Converte o texto em áudio e exibe o áudio no elemento de áudio
                const blobUrl = URL.createObjectURL(new Blob([textoParaFalar], { type: 'audio/wav' }));
                audio.src = blobUrl;
                audio.controls = true;
            } else {
                alert('A síntese de fala não é suportada neste navegador.');
            }
        });

        // Adicione um evento de clique ao botão de conversão
        const botaoConverterGolfin = document.getElementById('botao-converter-golfin');
       

        botaoConverterGolfin.addEventListener('click', () => {
            const textoParaFalar = document.getElementById('div-golfi').textContent; // Obtém o texto da div-croc

            const utterance = new SpeechSynthesisUtterance(textoParaFalar);

            // Verifica se a síntese de fala é suportada no navegador
            if ('speechSynthesis' in window) {
                // Pausa qualquer fala anterior e inicia a nova
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(utterance);
                utterance.onend = function() {
                    console.log('Fala concluída');
                };

                const soundEl = document.getElementById("golfi-sound");
            
                soundEl.pause();

                // Converte o texto em áudio e exibe o áudio no elemento de áudio
                const blobUrl = URL.createObjectURL(new Blob([textoParaFalar], { type: 'audio/wav' }));
                audio.src = blobUrl;
                audio.controls = true;
            } else {
                alert('A síntese de fala não é suportada neste navegador.');
            }
        });

        // Adicione um evento de clique ao botão de conversão
        const botaoConverterPanter = document.getElementById('botao-converter-panter');
       

        botaoConverterPanter.addEventListener('click', () => {
            const textoParaFalar = document.getElementById('div-panter').textContent; // Obtém o texto da div-croc

            const utterance = new SpeechSynthesisUtterance(textoParaFalar);

            // Verifica se a síntese de fala é suportada no navegador
            if ('speechSynthesis' in window) {
                // Pausa qualquer fala anterior e inicia a nova
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(utterance);
                utterance.onend = function() {
                    console.log('Fala concluída');
                };

                const soundEl = document.getElementById("panter-sound");
            
                soundEl.pause();

                // Converte o texto em áudio e exibe o áudio no elemento de áudio
                const blobUrl = URL.createObjectURL(new Blob([textoParaFalar], { type: 'audio/wav' }));
                audio.src = blobUrl;
                audio.controls = true;
            } else {
                alert('A síntese de fala não é suportada neste navegador.');
            }
        });


        // Evento sair modo realidade aumentada
        function redirecionarPagina() {
            window.location.href = "https://ra-animals-sounds.vercel.app"; // Substitua com a URL para a qual você deseja redirecionar.
        }

         // Evento de clique no botão do dúvida Crocodilo
         inputCroc.addEventListener("click", function () {
            divCroc.style.display = "block";
            botaoConverterCroc.style.display = "block";
        });
         // Evento de clique no botão do dúvida Cobra
         inputSnake.addEventListener("click", function () {
            divSnake.style.display = "block";
            botaoConverterSnake.style.display = "block";
        });
         // Evento de clique no botão do dúvida Golfinho
         inputGolfi.addEventListener("click", function () {
            divGolfi.style.display = "block";
            botaoConverterGolfin.style.display = "block";
        });
        // Evento de clique no botão do dúvida Pantera Negra
        inputPanter.addEventListener("click", function () {
            divPanter.style.display = "block";
            botaoConverterPanter.style.display = "block";
        });
        

        markerCrocodilo.addEventListener("markerFound", function () {
            // Marcador do Crocodilo detectado, exibir o botão do Crocodilo
            botaoCrocodilo.style.display = "block";
            inputCroc.style.display = "block";
            botaoCobra.style.display = "none";
            botaoGolfi.style.display = "none";
        });

        markerCrocodilo.addEventListener("markerLost", function () {
            // Marcador do Crocodilo perdido, ocultar o botão do Crocodilo
            botaoCrocodilo.style.display = "none";
            botaoConverterCroc.style.display = "none";
            botaoConverterSnake.style.display = "none";
            botaoConverterPanter.style.display = "none";
            botaoConverterGolfin.style.display = "none";
            botaoPesquisa.style.display = "none";
            inputCroc.style.display = "none";
            divCroc.style.display = "none";
            const soundEl = document.getElementById("kro-sound");
            
            soundEl.pause();
        });

        markerCobra.addEventListener("markerFound", function () {
            // Marcador do Cobra detectado, exibir o botão do Cobra
            botaoCobra.style.display = "block";
            inputSnake.style.display = "block";
            botaoCrocodilo.style.display = "none"; // Ocultar o botão do Crocodilo
            botaoGolfi.style.display = "none";
        });

        markerCobra.addEventListener("markerLost", function () {
            // Marcador do Cachorro perdido, ocultar o botão do Cachorro
            botaoCobra.style.display = "none";
            inputSnake.style.display = "none";
            botaoPesquisa.style.display = "none";
            botaoConverterSnake.style.display = "none";
            botaoConverterCroc.style.display = "none";
            botaoConverterPanter.style.display = "none";
            botaoConverterGolfin.style.display = "none";
            divSnake.style.display = "none";
            const soundEl = document.getElementById("snake-sound");
            
            soundEl.pause();
        });


        markerGolfi.addEventListener("markerFound", function () {
            // Marcador do Cobra detectado, exibir o botão do Cobra
            botaoGolfi.style.display = "block";
            inputGolfi.style.display = "block";
         
            botaoPanter.style.display = "none"; // Ocultar o botão do Cachorro
            botaoCobra.style.display = "none";// Ocultar o botão do Cachorro
            botaoCrocodilo.style.display = "none"; // Ocultar o botão do Crocodilo
        });

        markerGolfi.addEventListener("markerLost", function () {
            // Marcador do Cachorro perdido, ocultar o botão do Cachorro
            botaoGolfi.style.display = "none";
            inputGolfi.style.display = "none";
            botaoPesquisa.style.display = "none";
            botaoConverterGolfin.style.display = "none";
            divGolfi.style.display = "none";
            const soundEl = document.getElementById("golfi-sound");
            
            soundEl.pause();
           
        });

        markerPanter.addEventListener("markerFound", function () {
            // Marcador do Cobra detectado, exibir o botão do Cobra
            botaoPanter.style.display = "block";
            inputPanter.style.display = "block";
            botaoGolfi.style.display = "none"; // Ocultar o botão do Cachorro
            botaoCobra.style.display = "none";
            botaoCrocodilo.style.display = "none"; // Ocultar o botão do Crocodilo
        });

        markerPanter.addEventListener("markerLost", function () {
            // Marcador da Pantera Negra perdido, ocultar o botão do Pantera
            botaoPanter.style.display = "none";
            inputPanter.style.display = "none";
            botaoPesquisa.style.display = "none";
            botaoConverterPanter.style.display = "none";
            divPanter.style.display = "none";
            const soundEl = document.getElementById("panter-sound");
            
            soundEl.pause();
        });


        let contagemCliques = 0;
        
        // Evento de clique no botão do Crocodilo
        botaoCrocodilo.addEventListener("click", function () {
            contagemCliques++;

            window.speechSynthesis.pause();
            console.log('Fala pausada');
            const soundEl = document.getElementById("kro-sound");
            if (soundEl) {
                soundEl.play();
            }

                    // Verifica se o botão foi clicado duas vezes
            if (contagemCliques === 2) {
                // Exibe o botão de pesquisa
                botaoPesquisa.style.display = "block";
            }

            // Reinicia a contagem quando o botão de pesquisa é clicado
            botaoPesquisa.addEventListener("click", function() {
                contagemCliques = 0;
                botaoPesquisa.style.display = "none";
                // Redireciona para o formulário de pesquisa (substitua 'URL_DO_FORMULARIO' pelo URL correto)
                 window.location.href = 'https://forms.gle/CzRUbVvhceEniY7s9';
            });
          
        });

         // Evento de clique no botão do Cobra
         botaoCobra.addEventListener("click", function () {
            contagemCliques++;
            window.speechSynthesis.pause();
            console.log('Fala pausada');
            const soundEl = document.getElementById("snake-sound");
            if (soundEl) {
                soundEl.play();
            }

                   // Verifica se o botão foi clicado duas vezes
                   if (contagemCliques === 2) {
                    // Exibe o botão de pesquisa
                    botaoPesquisa.style.display = "block";
                }
    
                // Reinicia a contagem quando o botão de pesquisa é clicado
                botaoPesquisa.addEventListener("click", function() {
                    contagemCliques = 0;
                    botaoPesquisa.style.display = "none";
                    // Redireciona para o formulário de pesquisa (substitua 'URL_DO_FORMULARIO' pelo URL correto)
                     window.location.href = 'https://forms.gle/CzRUbVvhceEniY7s9';
                });
        });

        // Evento de clique no botão do Gato
        botaoGolfi.addEventListener("click", function () {
            contagemCliques++;
            window.speechSynthesis.pause();
            console.log('Fala pausada');
            const soundEl = document.getElementById("golfi-sound");
            if (soundEl) {
                soundEl.play();
            }

                   // Verifica se o botão foi clicado duas vezes
                   if (contagemCliques === 2) {
                    // Exibe o botão de pesquisa
                    botaoPesquisa.style.display = "block";
                }
    
                // Reinicia a contagem quando o botão de pesquisa é clicado
                botaoPesquisa.addEventListener("click", function() {
                    contagemCliques = 0;
                    botaoPesquisa.style.display = "none";
                    // Redireciona para o formulário de pesquisa (substitua 'URL_DO_FORMULARIO' pelo URL correto)
                     window.location.href = 'https://forms.gle/CzRUbVvhceEniY7s9';
                });
        });

        // Evento de clique no botão do Gato
        botaoPanter.addEventListener("click", function () {
            contagemCliques++;
            window.speechSynthesis.pause();
            console.log('Fala pausada');
            const soundEl = document.getElementById("panter-sound");
            if (soundEl) {
                soundEl.play();
            }

                   // Verifica se o botão foi clicado duas vezes
                   if (contagemCliques === 2) {
                    // Exibe o botão de pesquisa
                    botaoPesquisa.style.display = "block";
                }
    
                // Reinicia a contagem quando o botão de pesquisa é clicado
                botaoPesquisa.addEventListener("click", function() {
                    contagemCliques = 0;
                    botaoPesquisa.style.display = "none";
                    // Redireciona para o formulário de pesquisa (substitua 'URL_DO_FORMULARIO' pelo URL correto)
                     window.location.href = 'https://forms.gle/CzRUbVvhceEniY7s9';
                });
           
        });
    },
});