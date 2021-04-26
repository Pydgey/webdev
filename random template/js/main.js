setInterval(function imprelogio(){
    
    let novaHora = new Date();

    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();

    minuto = zero(minuto);
    segundo = zero(segundo);

    document.getElementById('hora').textContent = hora+':'+minuto+':'+segundo;
    
},1000)

function zero(x) {
    if (x < 10){

        x = '0' + x;
    } return x;
};

var timer = 12;
var y = 1;

setInterval(function(){
    if( y <= timer ) {
        timer -= y
    };
    document.getElementById('contagem').textContent = timer;

    if(timer ==0){
        document.getElementById('aviso').style.backgroundColor=randomColor();
        document.getElementById('aviso').style.color=randomColor();
        document.getElementById('header-logo').style.backgroundColor=randomColor();
        document.getElementById('menu').style.backgroundColor=randomColor();
        document.getElementById('botoes').style.color=randomColor();
        document.getElementById('hora').style.color=randomColor();
        document.getElementById('contagem').style.color=randomColor();

        timer = 12;
    };

},1000);

 function randomColor() {
     const hex = (Math.random()*0xffffff<<0).toString(16)
     return `#${hex}`
 }

