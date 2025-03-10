
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

async function verifierUtilisateur(nom, password) {
    let utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];
    const passwordHash = await hashPassword(password);

    console.log("🔍 Utilisateurs stockés:", utilisateurs); 


    const utilisateur = utilisateurs.find(user => user.nom === nom && user.passwordHash === passwordHash);

    if (utilisateur) {
        document.getElementById("but").textContent = "✅ Connexion réussie !";

        localStorage.setItem("sessionUser", JSON.stringify(utilisateur));

   
        setTimeout(() => {
            window.location.href = "alls.html";
        }, 1500);
    } else {
        document.getElementById("but").textContent = "❌ Nom ou mot de passe incorrect";
        document.getElementById("but").style.color = "red";
        setTimeout(() => {
            document.getElementById("but").textContent = "SE CONNECTER";
            document.getElementById("but").style.color = "black";
        }, 2000);
    }
}

document.getElementById("formulaire").addEventListener("submit", async function(event) {
    event.preventDefault();

    const nom = document.getElementById("nomsco").value.trim();
    const password = document.getElementById("mot_de_passco").value;

    if (nom === "" || password === "") {
        alert("⚠ Veuillez remplir tous les champs !");
        return;
    }

    await verifierUtilisateur(nom, password);
});


