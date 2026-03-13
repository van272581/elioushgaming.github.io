
const mods = [
    {
        title: "Scania G8 Collection Ivoirienne",
        cat: "peintures",
        desc: "Skins truck lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem 1000",
        images: [
            "./Assets/STA 1.jpg",
            "./Assets/UTB Exclu front.jpg", "./Assets/TSR front.jpg"
        ],
        link: "https://www.mediafire.com/file/6ei52mtwpliz2z1/3_FC_ModSkins_G8_Scania_6x2.scs/file"
    },
    {
        title: "Mascarello R8- Edition Spéciale",
        cat: "peintures",
        desc: "Peintures personnalisées",
        images: [
            "./Assets/mascarello R8 UTB 2 front.png",
            "./Assets/mascarello R8 INTERCITY.png"
        ],
        link: "https://example.com"
    },

    {
        title: "Scania G7 - Édition Spéciale",
        cat: "vehicules",
        desc: "Mod Bus Scania G7 1200 de Fabio Contier",
        images: [
            "./Assets/Indenmonium front.png",
            "./Assets/indenmonium side.png"],
        link: ""
    },

    {
        title: "Mascarello R8- Edition Spéciale",
        cat: "peintures",
        desc: "Peintures personnalisées",
        images: [
            "./Assets/mascarello R8 UTB 2 front.png",
            "./Assets/mascarello R8 INTERCITY.png"
        ],
        link: "https://example.com"
    },

    {
        title: "Mascarello R8- Edition Spéciale",
        cat: "peintures",
        desc: "Peintures personnalisées",
        images: [
            "./Assets/mascarello R8 UTB 2 front.png",
            "./Assets/mascarello R8 INTERCITY.png"
        ],
        link: "https://example.com"
    },

    {
        title: "Mascarello R8- Edition Spéciale",
        cat: "peintures",
        desc: "Peintures personnalisées",
        images: [
            "./Assets/mascarello R8 UTB 2 front.png",
            "./Assets/mascarello R8 INTERCITY.png"
        ],
        link: "https://example.com"
    },

    {
        title: "Mascarello R8- Edition Spéciale",
        cat: "peintures",
        desc: "Peintures personnalisées",
        images: [
            "./Assets/mascarello R8 UTB 2 front.png",
            "./Assets/mascarello R8 INTERCITY.png"
        ],
        link: "https://example.com"
    },

    {
        title: "Mascarello R8- Edition Spéciale",
        cat: "peintures",
        desc: "Peintures personnalisées",
        images: [
            "./Assets/mascarello R8 UTB 2 front.png",
            "./Assets/mascarello R8 INTERCITY.png"
        ],
        link: "https://example.com"
    },

    {
        title: "Mascarello R8- Edition Spéciale",
        cat: "peintures",
        desc: "Peintures personnalisées",
        images: [
            "./Assets/mascarello R8 UTB 2 front.png",
            "./Assets/mascarello R8 INTERCITY.png"
        ],
        link: "https://example.com"
    },

    {
        title: "Mascarello R8- Edition Spéciale",
        cat: "peintures",
        desc: "Peintures personnalisées",
        images: [
            "./Assets/mascarello R8 UTB 2 front.png",
            "./Assets/mascarello R8 INTERCITY.png"
        ],
        link: "https://example.com"
    },

    {
        title: "Mascarello R8- Edition Spéciale",
        cat: "peintures",
        desc: "Peintures personnalisées-Amicitiam calculos Hoc verendum voluntatibus voluntatibus quid Hoc esse amicitiam nec sententia sit et definit quam plus plus ratio restricte est sententia acceptorum reddat nimis datorum ne verendum congeratur Hoc in nec ne par quid in ne esse Divitior restricte defluat amicitiam quam ut Divitior quid sit quid in Hoc in nec ac plus videtur ut sit vocare ratio videtur ratio est et neque mihi ad et mihi ne quid amicitiam vocare ad affluentior par congeratur ne exigue observare in sit ratio amicitia ut voluntatibus restricte ad mihi ne vera congeratur mihi aut quid sit aut in ne paribus nimis.",
        images: [
            "./Assets/mascarello R8 UTB 2 front.png",
            "./Assets/mascarello R8 INTERCITY.png"
        ],
        link: "https://example.com"
    },

    {
        title: "Mascarello R8- Edition Spéciale",
        cat: "peintures",
        desc: "Peintures personnalisées",
        images: [
            "./Assets/mascarello R8 UTB 2 front.png",
            "./Assets/mascarello R8 INTERCITY.png"
        ],
        link: "https://example.com"
    },

    {
        title: "Mascarello R8- Edition Spéciale",
        cat: "peintures",
        desc: "Peintures personnalisées",
        images: [
            "./Assets/mascarello R8 UTB 2 front.png",
            "./Assets/mascarello R8 INTERCITY.png"
        ],
        link: "https://example.com"
    },
]

const grid = document.getElementById("modsGrid")

function render(cat = "tous") {
    if (!grid) return;
    grid.innerHTML = ""

    mods.filter(m => cat === "tous" || m.cat === cat)
        .forEach(mod => {

            const card = document.createElement("div")
            card.className = "card"

            let imgs = ""

            mod.images.forEach((img, i) => {
                imgs += `<img src="${img}" class="${i == 0 ? 'active' : ''}">`
            })

            let shortDesc = mod.desc;
            if (shortDesc.length > 60) {
                shortDesc = shortDesc.substring(0, 60) + "...";
            }

            card.innerHTML = `
<div class="carousel" id="zoom">${imgs}
  <div class="card-overlay" onclick="transitionTo('mod.html?id=${mods.indexOf(mod)}')">
     <button class="details-btn">VOIR DÉTAILS</button>
  </div>
</div>
<div class="card-content">
<h3>${mod.title}</h3>
<p>${shortDesc}</p>
<a class="download" target="_blank" href="${mod.link}">Télécharger</a>
</div>
`

            grid.appendChild(card)

            let index = 0
            const images = card.querySelectorAll("img")

            setInterval(() => {
                images[index].classList.remove("active")
                index = (index + 1) % images.length
                images[index].classList.add("active")
            }, 3000)

        })

}

if (grid) {
    document.querySelectorAll(".nav button").forEach(btn => {
        if (btn.dataset.cat) {
            btn.onclick = () => {
                window.history.pushState({}, '', '?cat=' + btn.dataset.cat);
                render(btn.dataset.cat);
            }
        }
    })
}

const urlParams = new URLSearchParams(window.location.search);
const initialCat = urlParams.get('cat') || 'tous';
render(initialCat);
const toggle = document.getElementById("themeToggle")

function autoTheme() {

    let h = new Date().getHours()

    if (h >= 18 || h < 6) {

        document.body.classList.add("dark")
        toggle.checked = true

    } else {

        document.body.classList.remove("dark")
        toggle.checked = false

    }

}

toggle.onclick = () => {

    document.body.classList.toggle("dark")

}

autoTheme()

/*SCRIPT MOTEUR DE RECHERCHE */
const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("keyup", () => {
    if (!grid) return;

    let keyword = searchInput.value.toLowerCase()

    grid.innerHTML = ""

    mods
        .filter(mod =>
            mod.title.toLowerCase().includes(keyword) ||
            mod.desc.toLowerCase().includes(keyword) ||
            mod.cat.toLowerCase().includes(keyword)
        )

        .forEach(mod => {

            const card = document.createElement("div")
            card.className = "card"

            let imgs = ""

            mod.images.forEach((img, i) => {
                imgs += `<img src="${img}" class="${i == 0 ? 'active' : ''}">`
            })

            let shortDesc = mod.desc;
            if (shortDesc.length > 60) {
                shortDesc = shortDesc.substring(0, 60) + "...";
            }

            card.innerHTML = `
<div class="carousel">${imgs}
  <div class="card-overlay" onclick="transitionTo('mod.html?id=${mods.indexOf(mod)}')">
     <button class="details-btn">VOIR DÉTAILS</button>
  </div>
</div>
<div class="card-content">
<h3>${mod.title}</h3>
<p>${shortDesc}</p>
<a class="download" target="_blank" href="${mod.link}">Télécharger</a>
</div>
`

            grid.appendChild(card)

            let index = 0
            const images = card.querySelectorAll("img")

            setInterval(() => {
                images[index].classList.remove("active")
                index = (index + 1) % images.length
                images[index].classList.add("active")
            }, 3000)

        })

})

// Fonction de transition de page
function transitionTo(url) {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay out-start';
    document.body.appendChild(overlay);

    // Forcer le reflow
    void overlay.offsetWidth;

    overlay.classList.add('out-end');

    setTimeout(() => {
        window.location.href = url;
    }, 600);
}

// Animation d'entrée au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay in-start';
    document.body.appendChild(overlay);

    // Forcer le reflow
    void overlay.offsetWidth;

    overlay.classList.add('in-end');

    setTimeout(() => {
        overlay.remove();
    }, 600);
});

// GESTION DU FORMULAIRE D'AJOUT DE MOD
const uploadForm = document.getElementById("uploadForm");
if (uploadForm) {
    uploadForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Récupérer les valeurs du formulaire
        const title = document.getElementById("title").value;
        const cat = document.getElementById("cat").value;
        const desc = document.getElementById("desc").value;
        const imagesInput = document.getElementById("images").value;
        const link = document.getElementById("link").value;

        // Gérer les images (séparées par de virgules s'il y en a plusieurs)
        const imagesArray = imagesInput.split(',').map(url => url.trim()).filter(url => url !== "");

        // Créer l'objet mod formaté en texte pour l'admin
        const formattedMod = `{
title: "${title}",
cat: "${cat}",
desc: "${desc}",
images: ${JSON.stringify(imagesArray)},
link: "${link}"
}`;

        // --- MÉTHODE 1 : Envoi par email via le client mail de l'utilisateur (Outlook, Mail, Gmail...) ---
        // Remplacez "admin@eliouhgaming.com" par votre vraie adresse email
        const adminEmail = "admin@eliouhgaming.com";
        const subject = encodeURIComponent("⚠️ Nouveau Mod soumis : " + title);
        const body = encodeURIComponent(`Bonjour Admin,

Un nouvel utilisateur a soumis un mod sur le site.
Merci de bien vouloir vérifier son contenu et, s'il est approuvé, copier le code ci-dessous et le coller dans le tableau 'const mods' de votre fichier script.js.

CODE À COPIER / COLLER :
-----------------------------------
${formattedMod}
-----------------------------------

Cordialement,
Le système d'upload automatique.`);

        // Ouvre le client mail de l'utilisateur avec les informations remplies
        window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;

        // --- Optionnel --- 
        // Si vous préférez une méthode invisible sans ouvrir le client mail, vous pouvez utiliser
        // un service gratuit comme Formspree.io ou EmailJS (voir les explications dans le chat).

        // Afficher un message de succès
        const output = document.getElementById("output");
        output.style.color = "#00d2ff"; // Couleur correspondant au thème (bleu fluo)
        output.innerText = "✅ Formulaire généré ! Votre messagerie va s'ouvrir pour envoyer le mod à l'administrateur pour validation.";

        // Vider le formulaire
        uploadForm.reset();
    });
}

// ==========================================
// MOD DETAILS PAGE RENDERER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const modDetailsContainer = document.getElementById("modDetailsContainer");

    if (modDetailsContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const modId = urlParams.get('id');

        if (modId !== null && mods[modId]) {
            const mod = mods[modId];

            // 1. Build Thumbnails (Left Section)
            let thumbsHtml = "";
            let maxThumbs = Math.min(mod.images.length, 5); // Max 5 as requested
            for (let i = 0; i < maxThumbs; i++) {
                // First image is active by default
                let activeClass = (i === 0) ? 'active' : '';
                thumbsHtml += `<img src="${mod.images[i]}" class="${activeClass}" onclick="changeMainImage(this, '${mod.images[i]}')" alt="Thumbnail ${i + 1}">`;
            }

            // 2. Central Image (First image is default)
            let defaultImage = mod.images.length > 0 ? mod.images[0] : '';
            let mainImageHtml = `<img id="mainModImage" src="${defaultImage}" alt="${mod.title}">`;

            // 3. Build Entire Layout
            modDetailsContainer.innerHTML = `
                <div class="mod-thumbnails">
                    ${thumbsHtml}
                </div>
                <div class="mod-main-image">
                    ${mainImageHtml}
                </div>
                <div class="mod-info">
                    <span class="category-badge">${mod.cat}</span>
                    <h2>${mod.title}</h2>
                    <p class="desc">${mod.desc}</p>
                    <a class="download-btn-large" target="_blank" href="${mod.link}">TÉLÉCHARGER LE MOD</a>
                </div>
            `;
        } else {
            // Error handling if ID is invalid or missing
            modDetailsContainer.innerHTML = `
                <div style="text-align:center; width:100%; padding: 50px;">
                    <h2>Mod introuvable.</h2>
                    <br><a href="index.html" style="color:orange; font-size: 18px; text-decoration: none;">&larr; Retour à l'accueil</a>
                </div>`;
        }
    }
});

// Function to handle thumbnail switching (must be global to be called by inline onclick)
window.changeMainImage = function (thumbElement, newSrc) {
    // 1. Update main image source
    const mainImg = document.getElementById('mainModImage');
    if (mainImg) mainImg.src = newSrc;

    // 2. Manage active state styling on thumbnails
    document.querySelectorAll('.mod-thumbnails img').forEach(img => img.classList.remove('active'));
    thumbElement.classList.add('active');
}

/*widget social*/
function toggleSocial() {

document.getElementById("socialMenu").classList.toggle("active");

}

/*Synchroniser le header et le footer*/
fetch("./components/widget.html")
.then(res => res.text())
.then(data => {
document.getElementById("widget").innerHTML = data;
});

fetch("./components/footer.html")
.then(res => res.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});
