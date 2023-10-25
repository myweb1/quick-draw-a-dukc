Webcam.set({
    width:200,
    height:180,
    image_format:"png",
    png_quality: 100
})
var callesierrasuciaa =""
function funcion() {
    Webcam.snap(function (callesierrasucia) {
    document.getElementById("fotoarenosa").innerHTML='<img src="'+callesierrasucia+'" id="fotito">'
}
)
}
Webcam.attach("#camarenosa")
var bebito1medioiq = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yYgPvvySH/model.json",function() {
    console.log("mi bebito fiu fiu")
})
function clik() {
    callesierrasuciaa=document.getElementById("fotito")
    bebito1medioiq.classify(callesierrasuciaa,lalectura)
}
function lalectura(error,resultado) {
    if (!error) {
        console.log(resultado)
        document.getElementById("emoji1").innerHTML = resultado[0].label 
        document.getElementById("emoji2").innerHTML = resultado[1].label
        switch (resultado[0].label){
            case "laik":
                voz("prediccion laik chido")
            break
            case "😏":
                voz("prediccion fino ")
            break
            case "/_ \\":
                voz("prediccion tiste no chido")
            break
            case "（⊙ｏ⊙）":
                voz("prediccion omg chido")
            break
        }
        switch (resultado[1].label){
            case "laik":
                voz("prediccion 2 laik chido")
            break
            case "😏":
                voz("prediccion 2 fino ")
            break
            case "/_ \\":
                voz("prediccion 2 tiste no chido")
            break
            case "（⊙ｏ⊙）":
                voz("prediccion 2 omg chido")
            break
        }
    }
}
function voz(predccion_magik) {
    var dunction = window.speechSynthesis
    var mensaje = new SpeechSynthesisUtterance(predccion_magik)
    mensaje.lang="es-MX"
    dunction.speak(mensaje)
}