(function () {
  const supportedLangs = ["fr", "en", "es"];
  const fallbackLang = "fr";
  const storageLangKey = "carbuprix_lang";
  const storageThemeKey = "carbuprix_theme";

  const i18n = {
    fr: {
      brand: "CarbuPrix",
      nav_support: "Support",
      nav_privacy: "Confidentialite",
      nav_ads: "app-ads.txt",
      theme: "Theme",
      theme_light: "Clair",
      theme_dark: "Sombre",
      lang_label: "Langue",
      lang_fr: "Francais",
      lang_en: "Anglais",
      lang_es: "Espagnol",

      meta_title_home: "CarbuPrix - Support",
      meta_desc_home: "Support officiel de CarbuPrix : assistance, informations, confidentialite et app-ads.txt.",
      home_eyebrow: "Application iOS",
      home_title: "Trouvez rapidement le meilleur prix carburant",
      home_subtitle: "Page officielle de support CarbuPrix. Vous trouverez ici les informations utiles pour l'assistance, la confidentialite et l'identification publicitaire.",
      home_cta_help: "Obtenir de l'aide",
      home_cta_privacy: "Lire la confidentialite",
      home_card_support_title: "Support",
      home_card_support_body: "Besoin d'aide, signaler un bug ou proposer une amelioration ?",
      home_card_support_link: "Aller a la page support",
      home_card_privacy_title: "Confidentialite",
      home_card_privacy_body: "Consultez les informations generales sur le traitement des donnees.",
      home_card_privacy_link: "Voir la page confidentialite",
      home_card_ads_title: "Verification AdMob",
      home_card_ads_body: "Le fichier app-ads.txt requis pour AdMob est publie et accessible publiquement.",
      home_card_ads_link: "/app-ads.txt",
      home_footer_note: "Support public pour App Store et AdMob.",

      meta_title_support: "CarbuPrix - Support",
      meta_desc_support: "Support CarbuPrix : assistance et questions frequentes.",
      support_eyebrow: "Support",
      support_title: "Aide et assistance",
      support_subtitle: "Pour signaler un bug, poser une question ou proposer une amelioration, utilisez le canal ci-dessous.",
      support_open_ticket: "Ouvrir une demande de support",
      support_faq_title: "Questions frequentes",
      support_faq_q1: "Les pubs freemium peuvent ne pas s'afficher en continu si le reseau publicitaire ne retourne pas d'inventaire (no fill).",
      support_faq_q2: "Le mode Premium peut etre masque en version release selon les contraintes de publication App Store.",
      support_faq_q3: "Les donnees stations peuvent varier selon la source et la localisation choisie.",
      support_footer_note: "Support via GitHub Issues.",

      meta_title_privacy: "CarbuPrix - Confidentialite",
      meta_desc_privacy: "Informations de confidentialite de CarbuPrix.",
      privacy_eyebrow: "Confidentialite",
      privacy_title: "Informations generales",
      privacy_subtitle: "Cette page fournit une vue d'ensemble de haut niveau. Pour toute demande sur vos donnees, utilisez la page Support.",
      privacy_services_title: "Services tiers",
      privacy_services_1: "CarbuPrix peut utiliser des services tiers pour l'affichage publicitaire et les notifications.",
      privacy_services_2: "Ces services peuvent traiter des donnees techniques necessaires a leur fonctionnement (ex: identifiants publicitaires, diagnostics, performances).",
      privacy_control_title: "Controle utilisateur",
      privacy_control_1: "Vous pouvez gerer les autorisations (localisation, notifications) depuis les reglages iOS.",
      privacy_control_2: "Vous pouvez nous contacter pour toute question de confidentialite via la page Support.",
      privacy_contact_support: "Contacter le support",
      privacy_footer_note: "Derniere mise a jour: avril 2026"
    },

    en: {
      brand: "CarbuPrix",
      nav_support: "Support",
      nav_privacy: "Privacy",
      nav_ads: "app-ads.txt",
      theme: "Theme",
      theme_light: "Light",
      theme_dark: "Dark",
      lang_label: "Language",
      lang_fr: "French",
      lang_en: "English",
      lang_es: "Spanish",

      meta_title_home: "CarbuPrix - Support",
      meta_desc_home: "Official CarbuPrix support: help, privacy information and app-ads.txt.",
      home_eyebrow: "iOS app",
      home_title: "Find the best fuel price faster",
      home_subtitle: "Official CarbuPrix support page. You can find help, privacy details and advertising identification here.",
      home_cta_help: "Get support",
      home_cta_privacy: "Read privacy",
      home_card_support_title: "Support",
      home_card_support_body: "Need help, report a bug, or suggest an improvement?",
      home_card_support_link: "Go to support page",
      home_card_privacy_title: "Privacy",
      home_card_privacy_body: "Check general information about data handling.",
      home_card_privacy_link: "View privacy page",
      home_card_ads_title: "AdMob verification",
      home_card_ads_body: "The required AdMob app-ads.txt file is published and publicly available.",
      home_card_ads_link: "/app-ads.txt",
      home_footer_note: "Public support for App Store and AdMob.",

      meta_title_support: "CarbuPrix - Support",
      meta_desc_support: "CarbuPrix support: assistance and FAQ.",
      support_eyebrow: "Support",
      support_title: "Help and assistance",
      support_subtitle: "To report a bug, ask a question, or suggest an improvement, use the channel below.",
      support_open_ticket: "Open a support request",
      support_faq_title: "Frequently asked questions",
      support_faq_q1: "Freemium ads may not always display if the ad network does not return inventory (no fill).",
      support_faq_q2: "Premium mode can be hidden in release builds based on App Store publishing constraints.",
      support_faq_q3: "Station data may vary depending on source and selected location.",
      support_footer_note: "Support through GitHub Issues.",

      meta_title_privacy: "CarbuPrix - Privacy",
      meta_desc_privacy: "Privacy information for CarbuPrix.",
      privacy_eyebrow: "Privacy",
      privacy_title: "General information",
      privacy_subtitle: "This page provides a high-level overview. For data requests, use the Support page.",
      privacy_services_title: "Third-party services",
      privacy_services_1: "CarbuPrix may use third-party services for ads and notifications.",
      privacy_services_2: "These services may process technical data needed for operation (for example: advertising identifiers, diagnostics, performance).",
      privacy_control_title: "User control",
      privacy_control_1: "You can manage permissions (location, notifications) from iOS settings.",
      privacy_control_2: "You can contact us for privacy questions via the Support page.",
      privacy_contact_support: "Contact support",
      privacy_footer_note: "Last update: April 2026"
    },

    es: {
      brand: "CarbuPrix",
      nav_support: "Soporte",
      nav_privacy: "Privacidad",
      nav_ads: "app-ads.txt",
      theme: "Tema",
      theme_light: "Claro",
      theme_dark: "Oscuro",
      lang_label: "Idioma",
      lang_fr: "Frances",
      lang_en: "Ingles",
      lang_es: "Espanol",

      meta_title_home: "CarbuPrix - Soporte",
      meta_desc_home: "Soporte oficial de CarbuPrix: ayuda, privacidad y app-ads.txt.",
      home_eyebrow: "App iOS",
      home_title: "Encuentra mas rapido el mejor precio de combustible",
      home_subtitle: "Pagina oficial de soporte de CarbuPrix. Aqui encontraras ayuda, privacidad e identificacion publicitaria.",
      home_cta_help: "Obtener ayuda",
      home_cta_privacy: "Leer privacidad",
      home_card_support_title: "Soporte",
      home_card_support_body: "Necesitas ayuda, reportar un error o proponer una mejora?",
      home_card_support_link: "Ir a soporte",
      home_card_privacy_title: "Privacidad",
      home_card_privacy_body: "Consulta la informacion general sobre tratamiento de datos.",
      home_card_privacy_link: "Ver privacidad",
      home_card_ads_title: "Verificacion AdMob",
      home_card_ads_body: "El archivo app-ads.txt requerido por AdMob esta publicado y disponible publicamente.",
      home_card_ads_link: "/app-ads.txt",
      home_footer_note: "Soporte publico para App Store y AdMob.",

      meta_title_support: "CarbuPrix - Soporte",
      meta_desc_support: "Soporte de CarbuPrix: asistencia y preguntas frecuentes.",
      support_eyebrow: "Soporte",
      support_title: "Ayuda y asistencia",
      support_subtitle: "Para reportar un error, hacer una pregunta o proponer una mejora, usa el canal de abajo.",
      support_open_ticket: "Abrir solicitud de soporte",
      support_faq_title: "Preguntas frecuentes",
      support_faq_q1: "Los anuncios freemium pueden no mostrarse siempre si la red publicitaria no devuelve inventario (no fill).",
      support_faq_q2: "El modo Premium puede ocultarse en builds release segun restricciones de publicacion de App Store.",
      support_faq_q3: "Los datos de estaciones pueden variar segun la fuente y la ubicacion seleccionada.",
      support_footer_note: "Soporte mediante GitHub Issues.",

      meta_title_privacy: "CarbuPrix - Privacidad",
      meta_desc_privacy: "Informacion de privacidad de CarbuPrix.",
      privacy_eyebrow: "Privacidad",
      privacy_title: "Informacion general",
      privacy_subtitle: "Esta pagina ofrece una vista general. Para solicitudes de datos, usa la pagina de soporte.",
      privacy_services_title: "Servicios de terceros",
      privacy_services_1: "CarbuPrix puede usar servicios de terceros para anuncios y notificaciones.",
      privacy_services_2: "Estos servicios pueden procesar datos tecnicos necesarios para funcionar (por ejemplo: identificadores publicitarios, diagnosticos, rendimiento).",
      privacy_control_title: "Control del usuario",
      privacy_control_1: "Puedes gestionar permisos (ubicacion, notificaciones) desde ajustes de iOS.",
      privacy_control_2: "Puedes contactarnos para preguntas de privacidad desde la pagina de soporte.",
      privacy_contact_support: "Contactar soporte",
      privacy_footer_note: "Ultima actualizacion: abril 2026"
    }
  };

  const languageSelect = document.getElementById("lang-select");
  const themeButton = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function getStoredLanguage() {
    const saved = localStorage.getItem(storageLangKey);
    if (saved && supportedLangs.includes(saved)) {
      return saved;
    }

    const browserLanguage = (navigator.language || fallbackLang).slice(0, 2).toLowerCase();
    return supportedLangs.includes(browserLanguage) ? browserLanguage : fallbackLang;
  }

  function getStoredTheme() {
    const saved = localStorage.getItem(storageThemeKey);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return prefersDark.matches ? "dark" : "light";
  }

  function t(lang, key) {
    return i18n[lang]?.[key] ?? i18n[fallbackLang]?.[key] ?? key;
  }

  let currentLanguage = getStoredLanguage();
  let currentTheme = getStoredTheme();

  function updateThemeLabel() {
    if (!themeButton) {
      return;
    }

    const modeKey = currentTheme === "dark" ? "theme_dark" : "theme_light";
    themeButton.textContent = `${t(currentLanguage, "theme")}: ${t(currentLanguage, modeKey)}`;
    themeButton.setAttribute("aria-label", t(currentLanguage, "theme"));
  }

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(storageThemeKey, theme);
    updateThemeLabel();
  }

  function applyLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    localStorage.setItem(storageLangKey, lang);

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      node.textContent = t(lang, key);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
      const key = node.getAttribute("data-i18n-aria-label");
      node.setAttribute("aria-label", t(lang, key));
    });

    if (languageSelect) {
      languageSelect.value = lang;
    }

    const page = document.documentElement.getAttribute("data-page");
    if (page) {
      const titleKey = `meta_title_${page}`;
      const descKey = `meta_desc_${page}`;
      document.title = t(lang, titleKey);

      const description = document.querySelector('meta[name="description"]');
      if (description) {
        description.setAttribute("content", t(lang, descKey));
      }
    }

    updateThemeLabel();
  }

  applyTheme(currentTheme);
  applyLanguage(currentLanguage);

  if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
      const selected = event.target.value;
      if (supportedLangs.includes(selected)) {
        applyLanguage(selected);
      }
    });
  }

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }

  if (!localStorage.getItem(storageThemeKey)) {
    const handleThemeChange = (event) => {
      applyTheme(event.matches ? "dark" : "light");
    };

    if (typeof prefersDark.addEventListener === "function") {
      prefersDark.addEventListener("change", handleThemeChange);
    } else if (typeof prefersDark.addListener === "function") {
      prefersDark.addListener(handleThemeChange);
    }
  }
})();
