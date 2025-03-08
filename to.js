let texte=document.getElementById("texte");
creer.onclick=()=>{

    let rep=document.createElement("div");
    rep.id="rol"
    rep.style. height="100PX";
    rep.style.width="100%";
    // rep.style.marginLeft="28VW"
    rep.style.boxShadow="0PX 100PX 300PX 10PX gray"
    rep.style.display="flex";
    rep.style.justifyContent="space-around"
    rep.style.gap="30PX";
    rep.style.marginTop="50PX";
    rep.style.alignItems="center";
    rep.style.borderRadius="10PX"
    
    let rep1=document.createElement("div")
    
    rep1.style.width="55%";
    rep1.style.height="60%";
    rep1.style.borderRadius="10PX";
    rep1.style.display="flex";
    rep1.style.alignItems="center";
    rep1.style.justifyContent="space-around"
    rep1.style.border="1PX solid blue";
    rep1.style.paddingLeft="100PX"
    let rep2=document.createElement("button")

    rep2.style.width="15%";
    rep2.style.height="30%";
    rep2.style.backgroundColor="blue";
    rep2.style.border="1PX solid blue";
    rep2.style.borderRadius="10PX"
    rep2.innerHTML="supp"
    rep2.style.color="white"
    
    rep2.onclick=()=>{
        rep.style.display="none"
        ok.style.display="none";
        texte.value=""
    }

    let rep3=document.createElement("button")
    rep3.innerHTML="modifier"
    rep3.style.height="30%";
    rep3.style.backgroundColor="blue";
    rep3.style.border="1PX solid blue";
    rep3.style.borderRadius="10PX"
    rep3.style.color="white"
    
    rep3.onclick=()=>{
     texte.value=rep1.textContent;
     let ok=document.getElementById("ok");
     ok.style.display="block";
    
     
     ok.onclick=()=>{
       let chan=texte.value;
       rep1.innerHTML=chan;
       ok.style.display="none";
       texte.value = " ";
     }

    }

    document.body.appendChild(rep)
    rep.appendChild(rep1)
    rep.appendChild(rep3)
    rep.appendChild(rep2)
   
    rep1.innerHTML=texte.value
    texte.value = "";
}
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});