const header = document.querySelector('#header')

header.state = 'visible'
header.timer = null

window.addEventListener('scroll', e => {

    if(window.scrollY != 0) {
        // header.style.backgroundColor = 'rgba(8, 2, 8, 0.75)'
        if(getComputedStyle(header).backgroundColor == 'rgba(0, 0, 0, 0)'){
            header.animate([
                {backgroundColor: "rgba(8, 2, 8, 0)"},
                {backgroundColor: "rgba(8, 2, 8, 0.75)"}
            ],{
                duration: 250,
                fill: 'forwards'
            })
        }
    }else{
        header.animate([
            {backgroundColor: "rgba(8, 2, 8, 0.75)"},
            {backgroundColor: "rgba(8, 2, 8, 0)"}
        ],{
            duration: 250,
            fill: 'forwards'
        })
    }

    if(header.timer !== null) {
        clearTimeout(header.timer)   
    }
    header.timer = setTimeout(() => {
        //stop scrolling
        if(header.state == 'hidden'){
            header.animate([
                {transform: "translateY(-100%)"},
                {transform: "translateY(0)"}
            ],{
                duration: 250,
                fill: 'forwards'
            })
            header.state = 'visible'
        }
    }, 500);

    if(window.oldScroll > window.scrollY){
        //scrolling up
        if(header.state == 'hidden'){
            header.animate([
                {transform: "translateY(-100%)"},
                {transform: "translateY(0)"}
            ],{
                duration: 250,
                fill: 'forwards'
            })
            header.state = 'visible'
        }
    }else{
        //scrolling down
        // hideMobileNav()

        if(header.state == 'visible'){
            header.animate([
                {transform: "translateY(0)"},
                {transform: "translateY(-100%)"}
            ],{
                duration: 250,
                fill: 'forwards'
            })
            header.state = 'hidden'
        }
    }
    window.oldScroll = window.scrollY

})