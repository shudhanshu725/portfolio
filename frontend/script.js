new Typed("#typing",{

strings:[
"Full Stack Developer",
"JavaScript Developer",
"Node.js Developer"
],

typeSpeed:60,
backSpeed:40,
loop:true

})


particlesJS("particles-js",{

particles:{
number:{value:80},
size:{value:3},
move:{speed:2}
}

})


ScrollReveal().reveal('section',{delay:200})


VanillaTilt.init(document.querySelectorAll(".card"),{

max:25,
speed:400

})


async function loadProjects(){

const res=await fetch("https://api.github.com/users/shudhanshu725/repos")

const data=await res.json()

const container=document.getElementById("project-container")

data.slice(0,6).forEach(repo=>{

const div=document.createElement("div")

div.className="card"

div.innerHTML=`

<h3>${repo.name}</h3>
<p>${repo.description || "No description"}</p>
<a href="${repo.html_url}" target="_blank">View Code</a>

`

container.appendChild(div)

})

}

loadProjects()



const form=document.getElementById("contactForm")

form.addEventListener("submit",async(e)=>{

e.preventDefault()

const data={

name:name.value,
email:email.value,
message:message.value

}

await fetch("http://localhost:5000/api/contact",{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)

})

alert("Message Sent")

})