const container=document.querySelector(".container")

function loadimage(numbers=5){
    for(let i=0;i<numbers;i++){
fetch("https://dog.ceo/api/breeds/image/random")
.then((res)=>res.json())
.then((data)=>{
    const img=document.createElement("img");
    img.src=`${data.message}`
    container.appendChild(img);
})
    }
}
loadimage();

const baton=document.querySelector('#buton')

baton.addEventListener("click",()=>loadimage())

