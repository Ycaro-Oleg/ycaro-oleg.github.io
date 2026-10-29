(() => {
  "use strict";
  const root = document.documentElement;
  const read = key => { try { return localStorage.getItem(key); } catch (_) { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  const normalize = value => String(value || "").toLowerCase().startsWith("pt") ? "pt-br" : "en";
  let language = normalize(read("ycr.lang") || root.lang);
  const text = (en, pt) => language === "pt-br" ? pt : en;
  const toneExamples = {
    en: [
      "Spent a day at GolfVille brainstorming with a friend. We left with a name, a clear idea and a working POC for Larper. Now comes the part we're still learning: marketing.",
      "One day, one friend, one idea we couldn't leave alone. At GolfVille we named Larper, shaped the product and built the first POC. Getting it into people's hands is our next challenge.",
      "Went to a resort. Came back with a startup. Apparently a day of brainstorming at GolfVille was enough to turn a conversation into Larper. The POC exists. My marketing skills are still loading."
    ],
    "pt-br": [
      "Passei um dia no GolfVille trocando ideia com um amigo. Saímos com um nome, uma ideia definida e uma POC do Larper funcionando. Agora vem a parte que ainda estamos aprendendo: marketing.",
      "Um dia, um amigo e uma ideia que não dava pra largar. No GolfVille demos nome ao Larper, moldamos o produto e fizemos a primeira POC. Fazer isso chegar nas pessoas é o próximo desafio.",
      "Fui pra um resort. Voltei com uma startup. Aparentemente um dia de brainstorming no GolfVille bastou pra transformar uma conversa no Larper. A POC existe. Meu conhecimento de marketing ainda está carregando."
    ]
  };
  const tone = document.querySelector("#larp-tone");
  function updateTone() {
    const output = document.querySelector("#tone-output");
    if (!tone || !output) return;
    const index = Math.max(0, Math.min(2, Number(tone.value) - 1));
    output.textContent = toneExamples[language][index];
    tone.setAttribute("aria-valuetext", [text("Grounded", "Pé no chão"), text("Confident", "Confiante"), "Full larp"][index]);
  }
  let headings = [];

  function buildArticle() {
    const article = document.querySelector("#article-body");
    const toc = document.querySelector("#article-toc-list");
    if (!article) return;
    const visibleBlock = article.querySelector('.langblock:not([hidden])') || article;
    const time = document.querySelector("#reading-time");
    const words = (visibleBlock.textContent || "").trim().split(/\s+/).length;
    if (time) time.textContent = text(Math.max(1, Math.ceil(words / 220)) + " min read", Math.max(1, Math.ceil(words / 220)) + " min de leitura");
    headings = Array.from(visibleBlock.querySelectorAll("h2, h3"));
    if (!toc) return;
    toc.replaceChildren();

    headings.forEach((heading, index) => {
      if (!heading.id) heading.id = "section-" + language + "-" + index;
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = "#" + heading.id;
      link.textContent = heading.textContent;
      item.append(link);
      toc.append(item);
    });
    const nav = document.querySelector(".article-toc");
    if (nav) nav.hidden = headings.length === 0;
    scheduleProgress();
  }
  const search = document.querySelector("#post-search");
  const rows = Array.from(document.querySelectorAll(".archive-posts .post-row"));
  const normalizeSearch = value => value.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  function filterPosts() {
    if (!search) return;
    const query = normalizeSearch(search.value.trim());
    let count = 0;
    rows.forEach(row => {
      const match = normalizeSearch(row.dataset.search || "").includes(query);
      row.hidden = !match;
      if (match) count++;
    });
    document.querySelector("#search-empty").hidden = count > 0;
    document.querySelector("#search-count").textContent = language === "pt-br"
      ? count + (count === 1 ? " post encontrado" : " posts encontrados")
      : count + (count === 1 ? " post found" : " posts found");
  }
  function setLanguage(value, persist = true) {
    language = normalize(value);
    root.lang = language;
    if (persist) save("ycr.lang", language);
    document.querySelectorAll("[data-i18n-en], [data-i18n-pt-br]").forEach(el => {
      const next = language === "pt-br" ? el.dataset.i18nPtBr : el.dataset.i18nEn;
      if (next) el.textContent = next;
    });
    document.querySelectorAll(".langblock").forEach(block => { block.hidden = normalize(block.dataset.lang) !== language; });
    document.querySelectorAll("[data-global-lang]").forEach(button => {
      button.setAttribute("aria-pressed", String(normalize(button.dataset.globalLang) === language));
    });
    const status = document.querySelector("#copy-status");
    if (status) status.textContent = "";
    updateTone();
    buildArticle();
    filterPosts();
    document.querySelectorAll("[data-lang-attribute]").forEach(el => {
      el.setAttribute(el.dataset.langAttribute, text(el.dataset.attributeEn, el.dataset.attributePt));
    });
  }
  let scheduled = false;
  function updateProgress() {
    scheduled = false;
    const article = document.querySelector("#article-body");
    const bar = document.querySelector("#reading-progress-bar");
    if (!article || !bar) return;
    const rect = article.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, (innerHeight - rect.top) / (rect.height + innerHeight - 100)));
    bar.style.transform = "scaleX(" + progress + ")";
    let current = null;
    headings.forEach(heading => { if (heading.getBoundingClientRect().top < innerHeight * .4) current = heading; });
    document.querySelectorAll("#article-toc-list a").forEach(link => {
      if (current && link.hash === "#" + current.id) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }
  function scheduleProgress() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateProgress);
  }
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-global-lang]");
    if (button) setLanguage(button.dataset.globalLang);
  });
  window.addEventListener("storage", event => {
    if (event.key === "ycr.lang") setLanguage(event.newValue, false);
    if (event.key === "ycr.theme") setTheme(event.newValue === "light" ? "light" : "dark", false);
  });
  window.addEventListener("ycr:lang", event => setLanguage(event.detail?.lang || language));
  const themeButton = document.querySelector(".theme-toggle");
  function setTheme(theme, persist = true) {
    root.dataset.theme = theme;
    if (persist) save("ycr.theme", theme);
    if (themeButton) themeButton.setAttribute("aria-pressed", String(theme === "light"));
  }
  if (themeButton) themeButton.addEventListener("click", () => setTheme(root.dataset.theme === "light" ? "dark" : "light"));
  setTheme(read("ycr.theme") === "light" ? "light" : "dark", false);
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  function closeMenu() {
    nav?.classList.remove("is-open");
    menu?.setAttribute("aria-expanded", "false");
  }
  menu?.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    nav?.classList.toggle("is-open", open);
  });
  nav?.addEventListener("click", event => { if (event.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && menu?.getAttribute("aria-expanded") === "true") { closeMenu(); menu.focus(); } });
  document.addEventListener("click", event => { if (!event.target.closest(".site-header")) closeMenu(); });
  tone?.addEventListener("input", updateTone);
  search?.addEventListener("input", filterPosts);
  document.querySelector("#clear-search")?.addEventListener("click", () => { search.value = ""; filterPosts(); search.focus(); });
  document.querySelector("#copy-link")?.addEventListener("click", async () => {
    const status = document.querySelector("#copy-status");
    try {
      const url = new URL(location.href);
      url.hash = "";
      await navigator.clipboard.writeText(url.href);
      status.textContent = text("Link copied.", "Link copiado.");
    } catch (_) {
      status.textContent = text("Copy the URL from your address bar.", "Copie a URL da barra de endereços.");
    }
  });
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-revealing");
      observer.unobserve(entry.target);
    }), { threshold: .08 });
    document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
  }
  window.addEventListener("scroll", scheduleProgress, { passive: true });
  window.addEventListener("resize", scheduleProgress);
  setLanguage(language, false);
})();
