var overlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popup-box")
var popup=document.getElementById("popup")
popup.addEventListener("click",function()
{
    overlay.style.display="block"
    popupbox.style.display="block"

})
var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"

})



var container=document.querySelector(".container")
var addblock=document.getElementById("addblock")
var title=document.getElementById("title")
var objective=document.getElementById("obj")
var description=document.getElementById("descript")
addblock.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
            <h5>${objective.value}</h5>
            <p>${description.value}</p>
            <button onclick="(deletenote(event))">delete</button>`
    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"

     
})

function deletenote(event)
{
    event.target.parentElement.remove()
}