const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const links = menu.querySelectorAll("a");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        burger.classList.remove("active");
        menu.classList.remove("active");
    });
});


// Définir les indicatifs et les longueurs de numéros pour chaque pays
const paysIndicatif = {
  "Afrique du Sud": { indicatif: "+27", longueur: 9 },
  "Algérie": { indicatif: "+213", longueur: 9 },
  "Angola": { indicatif: "+244", longueur: 9 },
  "Bénin": { indicatif: "+229", longueur: 10 },
  "Botswana": { indicatif: "+267", longueur: 8 },
  "Burkina Faso": { indicatif: "+226", longueur: 8 },
  "Burundi": { indicatif: "+257", longueur: 8 },
  "Cameroun": { indicatif: "+237", longueur: 9 },
  "Cap-Vert": { indicatif: "+238", longueur: 7 },
  "Comores": { indicatif: "+269", longueur: 7 },
  "Côte d'Ivoire": { indicatif: "+225", longueur: 8 },
  "Djibouti": { indicatif: "+253", longueur: 8 },
  "Égypte": { indicatif: "+20", longueur: 10 },
  "Érythrée": { indicatif: "+291", longueur: 7 },
  "Eswatini": { indicatif: "+268", longueur: 8 },
  "Éthiopie": { indicatif: "+251", longueur: 9 },
  "Gabon": { indicatif: "+241", longueur: 8 },
  "Gambie": { indicatif: "+220", longueur: 7 },
  "Ghana": { indicatif: "+233", longueur: 9 },
  "Guinée équatoriale": { indicatif: "+240", longueur: 9 },
  "Guinée": { indicatif: "+224", longueur: 8 },
  "Guinée-Bissau": { indicatif: "+245", longueur: 7 },
  "Kenya": { indicatif: "+254", longueur: 9 },
  "Lesotho": { indicatif: "+266", longueur: 8 },
  "Liberia": { indicatif: "+231", longueur: 8 },
  "Libye": { indicatif: "+218", longueur: 9 },
  "Madagascar": { indicatif: "+261", longueur: 9 },
  "Malawi": { indicatif: "+265", longueur: 8 },
  "Mali": { indicatif: "+223", longueur: 8 },
  "Maroc": { indicatif: "+212", longueur: 9 },
  "Maurice": { indicatif: "+230", longueur: 8 },
  "Mauritanie": { indicatif: "+222", longueur: 8 },
  "Mozambique": { indicatif: "+258", longueur: 9 },
  "Namibie": { indicatif: "+264", longueur: 9 },
  "Niger": { indicatif: "+227", longueur: 8 },
  "Nigeria": { indicatif: "+234", longueur: 10 },
  "Ouganda": { indicatif: "+256", longueur: 9 },
  "République centrafricaine": { indicatif: "+236", longueur: 8 },
  "République démocratique du Congo": { indicatif: "+243", longueur: 9 },
  "République du Congo": { indicatif: "+242", longueur: 9 },
  "Rwanda": { indicatif: "+250", longueur: 9 },
  "São Tomé-et-Príncipe": { indicatif: "+239", longueur: 7 },
  "Sénégal": { indicatif: "+221", longueur: 9 },
  "Seychelles": { indicatif: "+248", longueur: 7 },
  "Sierra Leone": { indicatif: "+232", longueur: 8 },
  "Somalie": { indicatif: "+252", longueur: 8 },
  "Soudan": { indicatif: "+249", longueur: 9 },
  "Soudan du Sud": { indicatif: "+211", longueur: 9 },
  "Tanzanie": { indicatif: "+255", longueur: 9 },
  "Tchad": { indicatif: "+235", longueur: 8 },
  "Togo": { indicatif: "+228", longueur: 8 },
  "Tunisie": { indicatif: "+216", longueur: 8 },
  "Zambie": { indicatif: "+260", longueur: 9 },
  "Zimbabwe": { indicatif: "+263", longueur: 9 },
};

// Sélectionner les éléments HTML
const paysSelect = document.getElementById("pays");
const telephoneInput = document.getElementById("telephone");

// Écouter les changements dans le champ "Pays"
paysSelect.addEventListener("change", () => {
  const pays = paysSelect.value;
  if (pays in paysIndicatif) {
    const indicatif = paysIndicatif[pays].indicatif;
    telephoneInput.value = indicatif + " ";
    telephoneInput.focus();
  }
});

// Écouter les entrées dans le champ "Téléphone"
telephoneInput.addEventListener("input", () => {
  const valeur = telephoneInput.value;
  const indicatif = paysSelect.value;
  if (paysIndicatif[indicatif]) {
    const longueur = paysIndicatif[indicatif].longueur;
    const valeurSansEspaces = valeur.replace(/\s/g, "");
    const indicatifSaisi = valeurSansEspaces.substring(0, paysIndicatif[indicatif].indicatif.length);
    const numeroSaisi = valeurSansEspaces.substring(paysIndicatif[indicatif].indicatif.length);

    if (indicatifSaisi !== paysIndicatif[indicatif].indicatif) {
      telephoneInput.value = paysIndicatif[indicatif].indicatif + " ";
      return;
    }

    if (numeroSaisi.length > longueur) {
      telephoneInput.value = paysIndicatif[indicatif].indicatif + " " + numeroSaisi.substring(0, longueur).replace(/(\d{2})/g, "$1 ");
      return;
    }

    let numeroSansEspaces = numeroSaisi;
    if (longueur % 2 === 0) {
      // Longueur paire
      numeroSansEspaces = numeroSansEspaces.replace(/(\d{2})/g, "$1 ");
    } else {
      // Longueur impaire
      if (numeroSansEspaces.length === 1) {
        numeroSansEspaces = numeroSansEspaces + " ";
      } else {
        numeroSansEspaces = numeroSansEspaces.replace(/^(\d)/, "$1 ");
        numeroSansEspaces = numeroSansEspaces.replace(/(\d{2})/g, "$1 ");
      }
    }

    // Mettre à jour la valeur du champ "Téléphone"
    telephoneInput.value = paysIndicatif[indicatif].indicatif + " " + numeroSansEspaces.trim();
  }
});

(function () {
  emailjs.init("nHADaauZDjOsf2iZ_");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");
  const submitBtn = document.getElementById("submitBtn");

  if (!form || !messageBox || !submitBtn) return;

  function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = `form-message ${type}`;

    if (type !== "loading") {
      setTimeout(() => {
        messageBox.style.display = "none";
      }, 5000);
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Anti-spam honeypot
    if (form.website.value !== "") {
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Envoi...";
    showMessage("⏳ Envoi du message en cours...", "loading");

    emailjs
      .sendForm(
        "service_vch3ugq",
        "template_z7yvby7",
        form
      )
      .then(
        function () {
          showMessage(
            "✅ Message envoyé avec succès ! Un email de confirmation vous a été envoyé.",
            "success"
          );
          form.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = "Soumettre";
        },
        function (error) {
          console.error("Erreur EmailJS :", error);
          showMessage(
            "❌ Une erreur est survenue. Veuillez réessayer.",
            "error"
          );
          submitBtn.disabled = false;
          submitBtn.textContent = "Soumettre";
        }
      );
  });
});
