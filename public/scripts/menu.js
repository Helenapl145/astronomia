const navegationPrimary = document.querySelector(".primary-navigation");
const navBtn = document.querySelector(".moblie-nav")

navBtn.addEventListener("click",() => {
    const visibility = navegationPrimary.getAttribute("data-visible");

    if(visibility === "false"){
        navegationPrimary.setAttribute('data-visible', true)
        navBtn.setAttribute('aria-expanded', true)
    }else if(visibility === "true"){
        navegationPrimary.setAttribute('data-visible', false)
        navBtn.setAttribute('aria-expanded', false)
    }
})

