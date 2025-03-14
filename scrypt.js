
let input = document.querySelector("input");
let ulList = document.querySelector(".list");


input.addEventListener("keydown",(ev)=>{
    if(ev.key==="Enter"){
        firstFunc()
    }
})
const saveBtn = document.querySelector(".save-btn");
saveBtn.addEventListener("click", firstFunc);
function firstFunc(){

    if(input.value==""){
        alert("Introdu un task")
        newElement.remove();
        
    }
    if(input.value.length>100){
        alert("Ai introdus mai multe cuvinte decat este permis")
    }else{
        new Audio("assets/sounds/taskList.wav").play();
        let newElement = document.createElement("li");
        newElement.innerText= input.value;
        newElement.classList.add("list-item");
        ulList.append(newElement)
        newElement.addEventListener("click",()=>{
            newElement.remove();
            new Audio("assets/sounds/deleteNewItem.wav").play();
        })
    }
    input.value="";
    
}

let deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener("click",removeAllList)
function removeAllList(){
    ulList.remove();
   location.reload()
   
}


// Autentification
const userId = document.querySelector(".id");
const userPassword = document.querySelector("password");
const autenBtn = document.querySelector(".auten");

autenBtn.addEventListener("click" , autentificationFunc);
function autentificationFunc(e){   
    if(!userId.value){    
        e.preventDefault();
        alert("Introdu Id")
        
    }else if(userId.value=="gabi.cio@yahoo.com" ){
        let loginWindow = document.querySelector(".login");
        e.preventDefault();
       alert("Te-ai autentificat cu succes");
       loginWindow.classList.remove("active");
       userId.value="";
    }else{
        e.preventDefault();
        alert("Id Sau Parola Incorecta")
        
    }
}

let clouseWindou = document.querySelector(".close-window");
clouseWindou.addEventListener("click",closeWindowFunc)
function closeWindowFunc(){
    loginWindow.remove();
    
}
// Log IN

let butonsAutentification = document.querySelector(".ico");
butonsAutentification.addEventListener("click", rightButtons);
function rightButtons(){
    let loginWindow = document.querySelector(".login");
    loginWindow.classList.add("active");
    let signIn = document.querySelector(".sign-in");
    signIn.classList.remove("aactive")
    transitionAudio()
    let clouseWindou = document.querySelector(".close-window");
   clouseWindou.addEventListener("click",()=>{
    loginWindow.classList.remove("active")
   })
}
// <!-- SignIn -->

let openSighIn = document.querySelector(".ico-user");
openSighIn.addEventListener("click", sighInWindow);
function sighInWindow(){
    let signIn = document.querySelector(".sign-in");
    signIn.classList.add("aactive")
    let loginWindow = document.querySelector(".login");
    loginWindow.classList.remove("active");
    transitionAudio()
}
let closeSignIn = document.querySelector("#window-close");
closeSignIn.addEventListener("click", ()=>{
    let signIn = document.querySelector(".sign-in");
    signIn.classList.remove("aactive")
})


let signH3 = document.querySelector("#signh3");
let logH3 = document.querySelector("#logh3");

signH3.addEventListener("click",()=>{
    let signIn = document.querySelector(".sign-in");
    signIn.classList.remove("aactive")
    rightButtons()
})

logH3.addEventListener("click",()=>{
    let loginWindow = document.querySelector(".login");
    loginWindow.classList.remove("active");
    sighInWindow()
})
let userName = document.querySelector("#user-name")
let emailAdress = document.querySelector(".email-adress")
let userAcountName = document.querySelector(".user-name-account")
const btnAuten= document.querySelector(".sign-in-btn");
btnAuten.addEventListener("click",autenFunc);
function autenFunc(a){  
    if(userName.value==""){ 
        alert ("Toate campurile sunt obligatorii")
        a.preventDefault()
    }else if(emailAdress.value=="" || userAcountName.value==""){
        alert("Trebuie completate toate campurile")
        a.preventDefault()
    }else{
        alert("Felicitari te-ai Inscris cu succes")
    }
}

// sound
function startAudio(){
    new Audio("assets/sounds/phone.wav").play();
}
let firstLink = document.querySelector("#firstLink");
firstLink.addEventListener("mouseover",startAudio)

let secondLink = document.querySelector("#secondLink");
secondLink.addEventListener("mouseover",startAudio)

let thirdLink = document.querySelector("#thirdLink")
thirdLink.addEventListener("mouseover",startAudio)



function transitionAudio(){
    new Audio("assets/sounds/transition.wav").play()
}
// footer




