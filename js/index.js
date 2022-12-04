function initMap(){
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center:{lat: 20.62809364833871, lng: -100.41220833817474}
    })

    const marker = new google.maps.Marker({
        position: {lat: 20.62809364833871, lng:-100.41220833817474},
        map, 
        title: "Clau Reposteria"
    })
}

//Animations
let animado = document.querySelectorAll('.cake')

function mostrarScroll(){
    let scrollTop= document.documentElement.scrollTop;
    for (var i=0 ; i< animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado-800< scrollTop &&  alturaAnimado+550> scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }else{
            animado[i].style.opacity = 0;
            animado[i].classList.remove("mostrarArriba");
        }
    }
}

window.addEventListener('scroll',mostrarScroll);