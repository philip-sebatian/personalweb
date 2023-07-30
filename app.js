
var nam =document.querySelector(".name");
var about_me=document.querySelector(".about-me");
var para=document.querySelector(".para");
var about_me_heading=document.querySelector(".about-me-heading");
var social=document.querySelectorAll(".links");
nam.addEventListener("mouseleave",()=>{
    nam.classList.remove("name-hover");
    console.log("bye");
})

nam.addEventListener("mouseenter",()=>{
    nam.classList.add("name-hover");
    console.log("hi");

})
nam.addEventListener("click",()=>{
    nam.classList.add("name-click");
    

    

    
    if(nam.textContent==="P"){
        nam.textContent="Philip";
    }  


})
const second_grids=document.querySelectorAll(".about-grid div");
const observer = new  IntersectionObserver(
    entries=>{
        entries.forEach(entry=>{
            entry.target.classList.toggle("show",entry.isIntersecting)
        })
    },
    {
        threshold:.15,
    }
)
second_grids.forEach(grd=>{
    observer.observe(grd)
})


var grid_elements =document.querySelectorAll(".about-grid .small");

console.log(grid_elements.length);
for(let x=0;x<grid_elements.length;x++){
    console.log(grid_elements[x]);
    grid_elements[x].addEventListener("mouseenter",()=>{
        grid_elements[x].classList.add("hover-grid");

    })
    grid_elements[x].addEventListener('mouseleave',()=>{
        grid_elements[x].classList.remove("hover-grid");
    })
}


document.querySelector(".grid-1").addEventListener("click",()=>{
    document.querySelector(".grid-2").textContent="hellooooo my name is Philip sebastian i am from kerala and i am currently doing btech is compter science at model engineering college thrikkakara . I am passionate about tech and also love to interact with others  ";
})
document.querySelector(".grid-4").addEventListener("click",()=>{
    document.querySelector(".grid-2").textContent="bye";
})
document.querySelector(".grid-3").addEventListener("click",()=>{
    document.querySelector(".grid-2").textContent="I did my middle school at Rajagiri christu jayanthi public school . Then i went to St.Antony's public school annakal for my high school education and entrance coaching . currently i am doing btech in computer schience at model engineering college thrikkakara";
})
document.querySelector(".grid-5").addEventListener("click",()=>{
    document.querySelector(".grid-2").textContent="bzooe";
})