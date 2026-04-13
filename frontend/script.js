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

ScrollReveal().reveal("section",{delay:200,distance:"40px",origin:"bottom"})

const normalizeProjectName=value=>value.toLowerCase().replace(/[^a-z0-9]/g,"")

const hiddenProjects=[
"blood-bank-management-system",
"blood-bank-mnagement-system",
"college-mini-project",
"college-mini-projects",
"interactive-quiz-application",
"eduswap-website",
"shudhanshu725",
"myportfolio",
"portfolio",
"qr-code-generator"
].map(normalizeProjectName)

const projectLinkOverrides={
eduswapwebsite:"https://github.com/shudhanshu725/eduswapweb"
}

async function loadProjects(){
const container=document.getElementById("project-container")

try{
const res=await fetch("https://api.github.com/users/shudhanshu725/repos")

if(!res.ok){
throw new Error("Unable to load projects")
}

const data=await res.json()

data
.filter(repo=>!hiddenProjects.includes(normalizeProjectName(repo.name)))
.slice(0,6)
.forEach(repo=>{
const div=document.createElement("div")
const projectUrl=projectLinkOverrides[normalizeProjectName(repo.name)] || repo.html_url

div.className="card"

div.innerHTML=`
<h3>${repo.name}</h3>
<p>${repo.description || "Project details coming soon."}</p>
<a class="project-link" href="${projectUrl}" target="_blank" rel="noopener noreferrer">View Code</a>
`

container.appendChild(div)
})

VanillaTilt.init(document.querySelectorAll(".card"),{
max:14,
speed:350,
glare:true,
"max-glare":0.12
})
}catch(error){
container.innerHTML=`
<article class="card">
<h3>Projects unavailable</h3>
<p>I could not load GitHub projects right now. Please check back shortly.</p>
</article>
`
}
}

loadProjects()

const form=document.getElementById("contactForm")
const formStatus=document.getElementById("form-status")
const submitButton=form.querySelector("button")
const nameInput=document.getElementById("name")
const emailInput=document.getElementById("email")
const messageInput=document.getElementById("message")
const apiBase=["localhost","127.0.0.1"].includes(window.location.hostname) ? "http://localhost:5000" : ""

form.addEventListener("submit",async e=>{
e.preventDefault()

const payload={
name:nameInput.value.trim(),
email:emailInput.value.trim(),
message:messageInput.value.trim()
}

formStatus.className="form-status"
formStatus.textContent="Sending message..."
submitButton.disabled=true
submitButton.textContent="Sending..."

try{
const response=await fetch(`${apiBase}/api/contact`,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(payload)
})

if(!response.ok){
throw new Error("Message could not be sent")
}

form.reset()
formStatus.classList.add("success")
formStatus.textContent="Message sent successfully."
}catch(error){
formStatus.classList.add("error")
formStatus.textContent="Message failed to send. Please try again."
}finally{
submitButton.disabled=false
submitButton.textContent="Send"
}
})
