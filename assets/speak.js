function speak(txt) {
    if ('speechSynthesis' in window) {
        const s = new SpeechSynthesisUtterance();
        s.volume = 10;
        s.lang = 'es-ES';
        s.text = txt;
        msg.textContent = txt;
        window.speechSynthesis.speak(s);
    } else {
        msg.textContent = txt;
    }
}

var msg = document.querySelector('#msg');

if (annyang) {
    const commands = {
        'asistente abrir mi perfil'() {
            window.open('https://www.facebook.com/BancoBci');
            speak('Abriendo perfil');
            msg.textContent = 'Abriendo perfil';
        },
        'asistente abrir mi credito'() {
            window.open('https://youtube.com');
            speak('Abriendo credito');
            msg.textContent = 'Abriendo credito';
        },
        'asistente abrir simulador'() {
            window.open('https://twitter.com');
            speak('Abriendo simulador');
            msg.textContent = 'Abriendo simulador';
        },
      'asistente abrir contacto'() {
            window.open('https://twitter.com');
            speak('Abriendo contacto');
            msg.textContent = 'Abriendo contacto';
        },
      'asistente abrir ejecutivo'() {
            window.open('https://twitter.com');
            speak('Abriendo ejecutivo virtual');
            msg.textContent = 'Abriendo ejecutivo';
        },
    };
  
speak('Di Algo acompañado de: asistente');
annyang.setLanguage('es-ES');
annyang.addCommands(commands);
annyang.start();
} else {
    speak('Your browser not support voice feature');
}