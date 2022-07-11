const si = document.getElementById("si")
const talvez = document.getElementById("Talvez")
const no = document.getElementById("no")
const send = document.getElementById("send")
const reason = document.getElementById("reason")
const link = document.getElementById("link")
const img_love = document.getElementById("img_love")
const img_two = document.getElementById("img_two")
const img = document.getElementById("img")

send.addEventListener("click", function (e){
    e.preventDefault();
    var input = document.querySelector("#name");
    var texto = input.value;
    talvez.innerText = "Estas segura?"
    let href = link + texto
    link.style.display = "inline"
    link.href = href
   
    
})
no.addEventListener('mousedown', function(){
    si.style.display = 'none'
    talvez.style.display = 'none'
    reason.style.display = 'none'
    img.style.display = 'none'
    img_two.style.display = 'inline'
    no.innerText = "No puedes eligir esa porque te necessito y te amo mucho"
})
si.addEventListener('mousedown', function(){
    si.innerText = "Casemonos amor de mi vida"
    no.style.display = 'none'
    talvez.style.display = 'none'
    img_love.style.display = 'inline'
    img.style.display = 'none'
    text_love.style.display = 'inline'
})
talvez.addEventListener('mousedown', function(){
    talvez.innerText = "Que me falta para ser el amor de tu vida?"
    reason.style.display = 'inline'
    no.style.display = 'none'
    si.style.display = 'none'
    
})