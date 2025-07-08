let activeLines = document.getElementsByClassName("active-line");
let listItems = document.getElementsByClassName("list");
let skill = document.getElementById("skill");
let certi = document.getElementById("certificate");
let proj = document.getElementById("project");
let btn = document.getElementsByClassName("btn");
let show = document.getElementById("show");
let showOuter = document.getElementById("show-outer");
let btn1 = document.getElementById("btn1");
let faBars = document.getElementById("fa-bars");
let navUl = document.getElementById("nav-ul");
let showImage = document.getElementById("show-image");
let btnUrl = document.getElementById("btn-url");

let skillList = [
  "skillImages/skill_image_1.png",
  "skillImages/skill_image_2.png",
  "skillImages/skill_image_3.png",
  "skillImages/skill_image_4.png",
  "skillImages/skill_image_5.png",
  "skillImages/skill_image_6.png"
];
let certiList = [
  "internships/certi1.png", "internships/certi2.png", "internships/certi3.png",
  "internships/certi4.jpg", "internships/certi5.jpg", "internships/certi6.jpg",
  "internships/certi7.jpg", "internships/certi8.jpg", "internships/certi9.jpg",
  "internships/certi10.jpg", "internships/certi11.jpg", "internships/certi12.jpg",
  "internships/certi13.jpg", "internships/certi14.jpg", "internships/certi15.jpg",
  "internships/certi16.jpg", "internships/certi17.jpg", "internships/certi18.jpg",
  "internships/certi19.jpg", "internships/certi20.jpg", "internships/certi21.jpg",
  "internships/certi22.jpg"
];
let projList = [
  [
    "Portfolio Website",
    "A personal website showcasing my skills, projects, and contact info.",
    "https://via.placeholder.com/300x200?text=Portfolio",
    "imageFiles/work-1.png"
  ],
  [
    "Survey Form",
    "A responsive form to collect user feedback and preferences.",
    "https://via.placeholder.com/300x200?text=Survey+Form",
    "imageFiles/work-2.png"
  ],
  [
    "Technical Documentation",
    "A multi-section documentation page explaining web topics clearly.",
    "https://via.placeholder.com/300x200?text=Documentation",
    "imageFiles/work-3.png"
  ],
  [
    "Product Landing Page",
    "A marketing page for a fictional product with smooth layout and CTA.",
    "https://via.placeholder.com/300x200?text=Product+Page",
    "imageFiles/work-4.jpg"
  ]
];
let check = false;
let base = false;

(function (){if(skillList.length <= 6){
    btn1.remove();
    if(window.matchMedia("(max-width: 600px)").matches){
        skill.style.height = "30%";
    }
    else{
        skill.style.height = "40%";
    }
}})();
(function (){if(projList.length <= 4){
    btn3.remove();
}})();
function copyText(txt){
    navigator.clipboard.writeText(txt);
    alert("Number Copied");
}
function onText(txt){
    alert("Are You sure For Download!");
}
function menuCancel() {
    check = !check;
    if (check) {
        faBars.classList.remove("fa-bars");
        faBars.classList.add("fa-xmark");
        navUl.style.display = "block";
        setTimeout(() => {
            check = false;
            faBars.classList.add("fa-bars");
            faBars.classList.remove("fa-xmark");
            navUl.style.display = "none";
        }, 10000); 
    } else {
        faBars.classList.add("fa-bars");
        faBars.classList.remove("fa-xmark");
        navUl.style.display = "none";
    }
}
function resetMenu(){
        if(window.matchMedia("(max-width: 600px)").matches){
            faBars.classList.add("fa-bars");
            faBars.classList.remove("fa-xmark");
            navUl.style.display = "none";
        }
    }
if(window.matchMedia("(max-width: 600px)").matches){
    function seeMoreSkill(val,val1){
        if(document.getElementById(val).style.height == "26%"){
            document.getElementById(val).style.height = "auto";
            document.getElementById(val1).textContent = "See Less";
            document.getElementById("skills-certificates").style.height = "auto";
        }else{
            document.getElementById(val).style.height = "26%";
            document.getElementById(val1).textContent = "See More";
            document.getElementById("skills-certificates").style.height = "100%";
        }
    }
    function seeMoreCerti(val,val1){
        if(document.getElementById(val).style.height == "48%"){
            document.getElementById(val).style.height = "auto";
            document.getElementById(val1).textContent = "See Less";
            document.getElementById("skills-certificates").style.height = "auto";
        }else{
            document.getElementById(val).style.height = "48%";
            document.getElementById(val1).textContent = "See More";
            document.getElementById("skills-certificates").style.height = "100%";
        }
    }
    function seeMorePro(val,val1){
        if(document.getElementById(val).style.height == "430px"){
            document.getElementById(val).style.height = "auto";
            document.getElementById(val1).textContent = "See Less";
            document.getElementById("portfolio").style.height = "auto";
        }else{
            document.getElementById(val).style.height = "430px";
            document.getElementById(val1).textContent = "See More";
        }
    }
}
function openContent(val){
    for(activeLine of activeLines){
        activeLine.classList.remove("active");
    }
    for(listItem of listItems){
        listItem.classList.remove("list-active");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(val).classList.add("list-active");
}
function changeBack(){
    show.style.display = "none";
    showOuter.style.display = "none";
    document.body.style.overflow = "auto";
}
skillList.forEach(element => {
    const img = document.createElement("img");
    img.classList.add("item-image");
    img.src = element;
    skill.appendChild(img);
});
certiList.forEach(element => {
    const img = document.createElement("img");
    img.onclick = ()=>{
        show.style.display = "block";
        showOuter.style.display = "block";
        document.body.style.overflow = "hidden";
        showImage.src = element;
    }
    img.src = element;
    img.classList.add("item");
    certi.appendChild(img);
});
projList.forEach((element, index) => {
    const div0 = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const h2 = document.createElement("h2");
    const i = document.createElement("i");

    let im = element[3];
    i.classList.add("fa-solid");
    i.classList.add("fa-up-right-from-square");
    div1.textContent = element[1]; 
    h2.textContent = element[0];  
    div1.appendChild(h2);
    div2.appendChild(i);
    div1.classList.add("proj");
    div0.style.backgroundImage = `url(${im})`;
    div0.classList.add("projects");
    proj.appendChild(div0);
    div0.appendChild(div1).appendChild(div2);
});

function seeMoreSkill(val,val1){
    if(document.getElementById(val).style.height == "35%"){
        document.getElementById(val).style.height = "auto";
        document.getElementById(val1).textContent = "See Less";
    }else{
        document.getElementById(val).style.height = "35%";
        document.getElementById(val1).textContent = "See More";
    }
}
function seeMoreCerti(val,val1){
    if(document.getElementById(val).style.height == "30%"){
        document.getElementById(val).style.height = "auto";
        document.getElementById(val1).textContent = "See Less";
    }else{
        document.getElementById(val).style.height = "30%";
        document.getElementById(val1).textContent = "See More";
    }
}
function seeMorePro(val,val1){
    if(document.getElementById(val).style.height == "480px"){
        document.getElementById(val).style.height = "auto";
        document.getElementById(val1).textContent = "See Less";
    }else{
        document.getElementById(val).style.height = "480px";
        document.getElementById(val1).textContent = "See More";
    }
}