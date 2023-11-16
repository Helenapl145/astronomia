

function mudarSlide(e) {

    const idImg = e.target.id

    const tituloPlaneta = document.getElementById("tituloPlaneta")
    const descricaoPlaneta = document.getElementById("descricaoPlaneta")

 
    const descricaoInfo1 = document.getElementById("descricaoInfo1")
    const descricaoInfo2 = document.getElementById("descricaoInfo2")
    

    switch (idImg){
        case 'slide1':
            document.getElementById("imagemPlaneta").src = "/assests/destination/image-moon.png"
            tituloPlaneta.innerText = 'MOON'
            descricaoPlaneta.innerText = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'

            descricaoInfo1.innerText = '384,400 km'

            descricaoInfo2.innerText = '3 days'
        
            document.getElementById("slide1").classList.add("clicado")
            document.getElementById("slide2").classList.remove("clicado")
            document.getElementById("slide3").classList.remove("clicado")
            document.getElementById("slide4").classList.remove("clicado")


            break
        case 'slide2':
            document.getElementById("imagemPlaneta").src = "/assests/destination/image-mars.png"
            tituloPlaneta.innerText = 'MARS'
            descricaoPlaneta.innerText = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'

            descricaoInfo1.innerText = '225 MIL. km'

            descricaoInfo2.innerText = '9 months'

            document.getElementById("slide2").classList.add("clicado")
            document.getElementById("slide1").classList.remove("clicado")
            document.getElementById("slide3").classList.remove("clicado")
            document.getElementById("slide4").classList.remove("clicado")

            break
        case 'slide3':
            document.getElementById("imagemPlaneta").src = "/assests/destination/image-europa.png"
            tituloPlaneta.innerText = 'EUROPA'
            descricaoPlaneta.innerText = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'

            descricaoInfo1.innerText = '628 MIL. km'

            descricaoInfo2.innerText = '3 years'

            document.getElementById("slide3").classList.add("clicado")
            document.getElementById("slide2").classList.remove("clicado")
            document.getElementById("slide1").classList.remove("clicado")
            document.getElementById("slide4").classList.remove("clicado")

            break
        case 'slide4':
            document.getElementById("imagemPlaneta").src = "/assests/destination/image-titan.png"
            tituloPlaneta.innerText = 'TITAN'
            descricaoPlaneta.innerText = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'

            descricaoInfo1.innerText = '1.6 BIL. km'

            descricaoInfo2.innerText = '7 years'

            document.getElementById("slide4").classList.add("clicado")
            document.getElementById("slide3").classList.remove("clicado")
            document.getElementById("slide2").classList.remove("clicado")
            document.getElementById("slide1").classList.remove("clicado")

            break
    }
}



document.getElementById('slider').addEventListener('click', mudarSlide)