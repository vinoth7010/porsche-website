function videopp(){ 
    let playVideo = document.getElementById('myVideo');
    let ppBtn = document.querySelector(".ppbtn");

    if (playVideo.paused) {
       playVideo.play();
        ppBtn.innerHTML = `<i class='bx bx-pause text-white fs-1'></i>`
    } else {
       playVideo.pause();
      ppBtn.innerHTML = `<i class='bx bx-play text-white fs-1'></i>`
    }
    console.log(5);
    
};

const counts = document.querySelectorAll('.number')
console.log(counts);

const speed = 97
counts.forEach((counter)=>{
function update(){
    const target = Number(counter.getAttribute('data-target'))
    const count = Number(counter.innerText)
    const inc = target / speed
    if(count < target){
        counter.innerText = Math.floor(inc + count)
        setTimeout(update, 1)
    }else{
     counter.innerText = target
    }
}
update()
})

let menu = document.querySelectorAll(".list")

let menuParent1 = document.querySelector(".menu-1-parent");
let menuParent2 = document.querySelector(".menu-2-parent");
let menuParent3 = document.querySelector(".menu-3-parent");
let menuParent4 = document.querySelector(".menu-4-parent");
let menuParent5 = document.querySelector(".menu-5-parent");

menu.forEach((item)=>{
    item.addEventListener("click", (event)=>{
        
        if(event.target.innerHTML == "Models"){
            menuParent1.classList.remove("d-none")
            menuParent1.classList.add("d-block")
            menuParent2.classList.add("d-none")
            menuParent3.classList.add("d-none")
            menuParent4.classList.add("d-none")
            menuParent5.classList.add("d-none")
        }
        else if(event.target.innerHTML == "Vehical Purchase"){
            console.log(5);
            menuParent2.classList.remove("d-none")
            menuParent2.classList.add("d-flex")
            menuParent1.classList.add("d-none")
            menuParent3.classList.add("d-none")
            menuParent4.classList.add("d-none")
            menuParent5.classList.add("d-none")
            
            
        }
        else if(event.target.innerHTML == "Service"){
            console.log(5);
            menuParent3.classList.remove("d-none")
            menuParent2.classList.add("d-none")
            menuParent1.classList.add("d-none")
            menuParent3.classList.add("d-flex")
            menuParent4.classList.add("d-none")
            menuParent5.classList.add("d-none")
            
            
        }

        else if(event.target.innerHTML == "Experience"){
            console.log(5);
            menuParent4.classList.remove("d-none")
            menuParent2.classList.add("d-none")
            menuParent1.classList.add("d-none")
            menuParent3.classList.add("d-none")
            menuParent4.classList.add("d-flex")
            menuParent5.classList.add("d-none")
            
            
        }

        else if(event.target.innerHTML == "Find a Dealer"){
            console.log(5);
            menuParent5.classList.remove("d-none")
            menuParent2.classList.add("d-none")
            menuParent1.classList.add("d-none")
            menuParent3.classList.add("d-none")
            menuParent4.classList.add("d-none")
            menuParent5.classList.add("d-flex")
            
            
        }

        else if(event.target.innerHTML == "My porsche"){
            console.log(5);
            menuParent3.classList.remove("d-none")
            menuParent2.classList.add("d-none")
            menuParent1.classList.add("d-none")
            menuParent3.classList.add("d-none")
            menuParent4.classList.add("d-flex")
            menuParent5.classList.add("d-none")
            
            
        }


        
        
        
        
    })
})


