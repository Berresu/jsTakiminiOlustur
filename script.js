let karakterler;
let takimdakiler;
let ul;

document.getElementById("btnEkle").addEventListener("click", ()=>{
    karakterler=document.getElementById("txtKarakter").value;
    console.log(karakterler);
    takimdakiler=document.createElement("li");
    document.getElementById("karakterListe").appendChild(takimdakiler);
    takimdakiler.innerHTML=karakterler;
    console.log(takimdakiler);
})