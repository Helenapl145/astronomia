

function mudarSlide(e) {

    const idImg = e.target.id

    const functionPerson = document.getElementById("functionPerson")
    const namePerson = document.getElementById("namePerson")
    const descricaoPerson = document.getElementById("descricaoPerson")
    

    switch (idImg){
        case 'slide1':
            document.getElementById("imagemPerson").src = "/assests/crew/image-douglas-hurley.png"
            functionPerson.innerText = 'Commander'
            namePerson.innerText = 'Douglas Hurley'
            descricaoPerson.innerText = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'

            document.getElementById("slide1").classList.add("clicado")
            document.getElementById("slide2").classList.remove("clicado")
            document.getElementById("slide3").classList.remove("clicado")
            document.getElementById("slide4").classList.remove("clicado")


            break
        case 'slide2':
            document.getElementById("imagemPerson").src = "/assests/crew/image-mark-shuttleworth.png"
            functionPerson.innerText = 'Mission Specialist '
            namePerson.innerText = 'MARK SHUTTLEWORTH'
            namePerson.classList.add('text')
            descricaoPerson.innerText = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'

            document.getElementById("slide2").classList.add("clicado")
            document.getElementById("slide1").classList.remove("clicado")
            document.getElementById("slide3").classList.remove("clicado")
            document.getElementById("slide4").classList.remove("clicado")

            break
        case 'slide3':
            document.getElementById("imagemPerson").src = "/assests/crew/image-victor-glover.png"
            functionPerson.innerText = 'PILOT'
            namePerson.innerText = 'Victor Glover'
            
            descricaoPerson.innerText = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'

            document.getElementById("slide3").classList.add("clicado")
            document.getElementById("slide2").classList.remove("clicado")
            document.getElementById("slide1").classList.remove("clicado")
            document.getElementById("slide4").classList.remove("clicado")

            break
        case 'slide4':
            document.getElementById("imagemPerson").src = "/assests/crew/image-anousheh-ansari.png"
            functionPerson.innerText = 'Flight Engineer'
            namePerson.innerText = 'Anousheh Ansari'
            descricaoPerson.innerText = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'

            document.getElementById("slide4").classList.add("clicado")
            document.getElementById("slide3").classList.remove("clicado")
            document.getElementById("slide2").classList.remove("clicado")
            document.getElementById("slide1").classList.remove("clicado")

            break
    }
}



document.getElementById('slider').addEventListener('click', mudarSlide)