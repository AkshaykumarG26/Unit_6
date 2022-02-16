let container = document.getElementById("container");

function scrolling(num = 25){
    let i = 0;
    while(i < num){
        let p = document.createElement("p")
        p.innerText("Masai Student " + i)
        container.append(p)
        // console.log("masai" + i)
        i++
    }

    // num = num + 25
}

scrolling()


window.addEventListener('scroll', () => {
    window.scrollY()
})