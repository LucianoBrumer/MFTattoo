const header = document.querySelector('#header')

header.state = 'visible'
header.timer = null

if(window.scrollY){
    header.mode = 'normal'
    header.style.backgroundColor =  "rgba(50, 33, 58, 0.5)"
    header.style.padding = "12.5px 20px"
}else{
    header.mode = 'top'
    header.style.backgroundColor =  "rgba(50, 33, 58, 0)"
    header.style.padding = "25px 40px"
}

window.addEventListener('scroll', e => {
    // console.log(getComputedStyle(header).backgroundColor, window.scrollY);

    if(window.scrollY > 0) {
        if(header.mode == 'top'){
            header.mode = 'normal'
            header.animate([
                {backgroundColor: "rgba(50, 33, 58, 0.5)", padding: "12.5px 20px"}
                
            ],{
                duration: 250,
                fill: 'forwards'
            })
        }
    }else{
        header.mode = 'top'
        header.animate([
            {backgroundColor: "rgba(30, 4, 38, 0)", padding: "25px 40px"}
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