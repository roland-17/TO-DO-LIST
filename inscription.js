// Fonction pour hacher le mot de passe avec SHA-256
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}


async function enregistrerUtilisateur(nom, prenom, password) {
    let utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];

    if (utilisateurs.some(user => user.nom === nom)) {
        alert("⚠ Nom déjà utilisé ! Essayez un autre.");
        return;
    }

    const passwordHash = await hashPassword(password);

    utilisateurs.push({ nom, prenom, passwordHash });

    localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));

    
    localStorage.setItem("sessionUser", JSON.stringify({ nom, prenom }));

    // alert(" Inscription réussie ! Redirection en cours...");
    document.querySelector("#vrai").style.display="block"


    setTimeout(() => {
        window.location.href = "alls.html";
    }, 1500);
}


document.getElementById("but").addEventListener("click", async function(event) {
    event.preventDefault();

    const nom = document.getElementById("noms").value.trim();
    const prenom = document.getElementById("prenoms").value.trim();
    const password = document.getElementById("mot_de_pass").value;

    
    if (nom === "" || prenom === "" || password === "") {
        alert("⚠ Veuillez remplir tous les champs !");
        return;
    }

    await enregistrerUtilisateur(nom, prenom, password);
});


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  
