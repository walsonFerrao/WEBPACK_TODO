let editor=function()
{

let text=document.getElementById("textarea")

document.getElementById("submit").addEventListener("click",add)

function add()
{
let notes=text.value
let notesbox=document.getElementById("collect");
let div=document.createElement("div");
let p=document.createElement("p")
p.innerHTML=notes
div.append(p)
notesbox.append(div)
}






}


 export default editor