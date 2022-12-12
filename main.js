let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app,{
loop:true,
delay: 75,
});

typewriter
.pauseFor(2500)
.typeString(' "Los Ingenieros químicos no son gente tranquila;<br>gustan de altas presiones y altas temperaturas" <br> -Steve LeBlanc')
.pauseFor(200)
.deleteChars(10)
.start();