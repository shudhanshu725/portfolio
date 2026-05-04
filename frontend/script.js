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

const resumeProjects=[
{
title:"Edu Swap",
stack:["React.js","Node.js","MongoDB"],
summary:"AI-powered college resource exchange platform built to help students swap books and academic materials more easily.",
highlights:[
"Built user authentication, dynamic listings, and search functionality for smoother discovery and exchange.",
"Worked in a GitHub-based team workflow with structured collaboration and version control."
],
link:"https://github.com/shudhanshu725/eduswapweb",
linkLabel:"View Code"
},
{
title:"Coin Toss Simulator",
stack:["JavaScript","HTML","CSS"],
summary:"Responsive web app that simulates coin tosses in real time with a playful, interactive UI.",
highlights:[
"Added toss history tracking and live statistics for heads and tails percentages.",
"Improved the experience with smooth CSS flip animations and responsive layout behavior."
],
link:"https://github.com/shudhanshu725?tab=repositories",
linkLabel:"View Code"
},
{
title:"AnnSeva",
stack:["React.js","Node.js","Express.js","MongoDB"],
summary:"Food rescue web application connecting event organizers with leftover food to nearby NGOs.",
highlights:[
"Used Context API for global state management across donor and volunteer data flows.",
"Built a dashboard with React Router to support food claims and donation activity."
],
link:"https://github.com/shudhanshu725?tab=repositories",
linkLabel:"View Code"
}
]

async function loadProjects(){
const container=document.getElementById("project-container")

try{
resumeProjects.forEach(project=>{
const div=document.createElement("div")
const stackMarkup=project.stack.map(item=>`<span>${item}</span>`).join("")
const highlightsMarkup=project.highlights.map(item=>`<li>${item}</li>`).join("")
const linkMarkup=project.link ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">${project.linkLabel || "View Project"}</a>` : ""

div.className="card"

div.innerHTML=`
<h3>${project.title}</h3>
<div class="project-stack">${stackMarkup}</div>
<p>${project.summary}</p>
<ul class="project-highlights">${highlightsMarkup}</ul>
${linkMarkup}
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
<p>I could not load project details right now. Please check back shortly.</p>
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
const apiBase=window.location.protocol==="file:" ? "http://localhost:5000" : ""

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
const data=await response.json().catch(()=>null)

if(!response.ok){
throw new Error(data?.message || "Message could not be sent")
}

form.reset()
formStatus.classList.add("success")
formStatus.textContent=data?.message || "Message sent successfully."
}catch(error){
formStatus.classList.add("error")
formStatus.textContent=error.message || "Message failed to send. Please try again."
}finally{
submitButton.disabled=false
submitButton.textContent="Send"
}
})
