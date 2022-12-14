

function mudarSlide(e) {

    const idImg = e.target.id

    
    const nameTech = document.getElementById("nameTech")
    const descricaoTech = document.getElementById("descricaoTech")
    

    switch (idImg){
        case 'slide1':
            document.getElementById("imagemTech").src = "/assests/technology/image-launch-vehicle-portrait.jpg"
            
            nameTech.innerText = 'LAUNCH VEHICLE'
            descricaoTech.innerText = " A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"

            document.getElementById("slide1").classList.add("clicado")
            document.getElementById("slide2").classList.remove("clicado")
            document.getElementById("slide3").classList.remove("clicado")
            document.getElementById("slide4").classList.remove("clicado")


            break
        case 'slide2':
            document.getElementById("imagemTech").src = "/assests/technology/image-spaceport-portrait.jpg"
            
            nameTech.innerText = 'SPACEPORT'
    
            descricaoTech.innerText = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'

            document.getElementById("slide2").classList.add("clicado")
            document.getElementById("slide1").classList.remove("clicado")
            document.getElementById("slide3").classList.remove("clicado")
            document.getElementById("slide4").classList.remove("clicado")

            break
        case 'slide3':
            document.getElementById("imagemTech").src = "/assests/technology/image-space-capsule-portrait.jpg"
           
            nameTech.innerText = 'SPACE CAPSULE'
            
            descricaoTech.innerText = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."

            document.getElementById("slide3").classList.add("clicado")
            document.getElementById("slide2").classList.remove("clicado")
            document.getElementById("slide1").classList.remove("clicado")
            document.getElementById("slide4").classList.remove("clicado")

            break
       
    }
}



document.getElementById('slider').addEventListener('click', mudarSlide)