(() => {
  "use strict";
  const root = document.documentElement;
  const read = key => { try { return localStorage.getItem(key); } catch (_) { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  const normalize = value => String(value || "").toLowerCase().startsWith("pt") ? "pt-br" : "en";
  let language = normalize(read("ycr.lang") || root.lang);
  const text = (en, pt) => language === "pt-br" ? pt : en;
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

    buildArticle();
    filterPosts();
    document.querySelectorAll("[data-lang-attribute]").forEach(el => {
      el.setAttribute(el.dataset.langAttribute, text(el.dataset.attributeEn, el.dataset.attributePt));
    });
  }
  let scheduled = false;
  function updateProgress() {
    scheduled = false;
    updateDeskScroll();
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
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const desk = document.querySelector("[data-desk]");
  function updateDeskScroll() {
    if (!desk || reducedMotion.matches) return;
    const hero = document.querySelector(".studio-hero").getBoundingClientRect();
    desk.style.setProperty("--desk-scroll", Math.min(1, Math.max(0, -hero.top / hero.height)).toFixed(3));
  }
  if (desk && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    desk.addEventListener("pointermove", event => {
      if (reducedMotion.matches) return;
      const rect = desk.getBoundingClientRect();
      desk.style.setProperty("--desk-x", ((event.clientX - rect.left) / rect.width - .5).toFixed(3));
      desk.style.setProperty("--desk-y", ((event.clientY - rect.top) / rect.height - .5).toFixed(3));
    });
    desk.addEventListener("pointerleave", () => {
      desk.style.setProperty("--desk-x", "0");
      desk.style.setProperty("--desk-y", "0");
    });
  }
  const productTabs = Array.from(document.querySelectorAll("[data-product-tab]"));
  function selectProductTab(tab, focus = false) {
    productTabs.forEach(button => {
      const selected = button === tab;
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      if (!panel) return;
      panel.hidden = !selected;
      if (selected && !reducedMotion.matches) panel.animate(
        [{ opacity: .35, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 350, easing: "cubic-bezier(.16,1,.3,1)" }
      );
    });
    if (focus) tab.focus();
  }
  productTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectProductTab(tab));
    tab.addEventListener("keydown", event => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % productTabs.length;
      if (event.key === "ArrowLeft") next = (index + productTabs.length - 1) % productTabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = productTabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectProductTab(productTabs[next], true);
    });
  });
  if (productTabs.length) selectProductTab(productTabs[0]);

  const mediaDialog = document.querySelector("#media-dialog");
  const expandedImage = document.querySelector("#media-expanded");
  const mediaCaption = document.querySelector("#media-caption");
  const mediaZoom = document.querySelector("#media-zoom");
  const mediaViewport = document.querySelector("#media-image-viewport");
  let mediaTrigger;
  mediaZoom?.addEventListener("click", () => {
    const zoomed = mediaViewport.classList.toggle("is-zoomed");
    expandedImage.style.setProperty("--image-actual-width", expandedImage.naturalWidth + "px");
    mediaZoom.setAttribute("aria-pressed", String(zoomed));
    mediaZoom.textContent = zoomed ? text("Fit image", "Ajustar imagem") : text("Zoom in", "Ampliar");
  });
  document.querySelectorAll("[data-lightbox]").forEach(link => {
    link.addEventListener("click", event => {
      if (!mediaDialog || !mediaDialog.showModal) return;
      event.preventDefault();
      mediaTrigger = link;
      mediaViewport?.classList.remove("is-zoomed");
      mediaZoom?.setAttribute("aria-pressed", "false");
      if (mediaZoom) mediaZoom.textContent = text("Zoom in", "Ampliar");
      const caption = text(link.dataset.captionEn, link.dataset.captionPt);
      expandedImage.src = link.href;
      expandedImage.alt = link.querySelector("img").alt;
      mediaCaption.textContent = caption;
      mediaDialog.showModal();
      syncFilm();
    });
  });
  mediaDialog?.addEventListener("click", event => {
    if (event.target === mediaDialog) {
      const rect = mediaDialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) mediaDialog.close();
    }
  });
  mediaDialog?.addEventListener("close", () => { mediaTrigger?.focus(); syncFilm(); });

  const galleryTrack = document.querySelector(".campaign-track");
  const galleryButtons = Array.from(document.querySelectorAll("[data-gallery-step]"));
  function moveGallery(step) {
    if (!galleryTrack) return;
    const item = galleryTrack.firstElementChild;
    const gap = parseFloat(getComputedStyle(galleryTrack).gap) || 0;
    galleryTrack.scrollBy({ left: step * (item.getBoundingClientRect().width + gap), behavior: reducedMotion.matches ? "auto" : "smooth" });
  }
  function updateGalleryButtons() {
    if (!galleryTrack) return;
    galleryButtons.forEach(button => {
      button.disabled = Number(button.dataset.galleryStep) < 0
        ? galleryTrack.scrollLeft < 2
        : galleryTrack.scrollLeft + galleryTrack.clientWidth >= galleryTrack.scrollWidth - 2;
    });
  }
  galleryButtons.forEach(button => button.addEventListener("click", () => moveGallery(Number(button.dataset.galleryStep))));
  galleryTrack?.addEventListener("scroll", updateGalleryButtons, { passive: true });
  galleryTrack?.addEventListener("keydown", event => {
    if (event.target !== galleryTrack || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    moveGallery(event.key === "ArrowRight" ? 1 : -1);
  });
  window.addEventListener("resize", updateGalleryButtons);
  updateGalleryButtons();

  const projectFilters = Array.from(document.querySelectorAll("[data-project-filter]"));
  projectFilters.forEach(button => button.addEventListener("click", () => {
    const apply = () => {
      const kind = button.dataset.projectFilter;
      projectFilters.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
      document.querySelectorAll("[data-project-kind]").forEach(project => {
        project.hidden = kind !== "all" && project.dataset.projectKind !== kind;
      });
      document.querySelector(".secondary-projects")?.classList.toggle("is-single", kind !== "all");
    };
    if (!reducedMotion.matches && document.startViewTransition) document.startViewTransition(apply);
    else apply();
  }));

  const film = document.querySelector("#larper-film");
  let filmInView = false;
  let userPausedFilm = false;
  let automaticPause = false;
  function pauseFilm() {
    if (film && !film.paused) {
      automaticPause = true;
      film.pause();
    }
  }
  function syncFilm() {
    if (!film) return;
    const canPlay = filmInView && !document.hidden && !mediaDialog?.open && !reducedMotion.matches && !navigator.connection?.saveData && !userPausedFilm;
    if (canPlay) film.play().catch(() => {});
    else pauseFilm();
  }
  if (film && "IntersectionObserver" in window) {
    const filmObserver = new IntersectionObserver(entries => {
      filmInView = entries[0].isIntersecting;
      syncFilm();
    }, { threshold: .35 });
    filmObserver.observe(film);
    film.addEventListener("pause", () => {
      if (automaticPause) automaticPause = false;
      else userPausedFilm = true;
    });
    film.addEventListener("play", () => { userPausedFilm = false; });
    document.addEventListener("visibilitychange", syncFilm);
    reducedMotion.addEventListener("change", syncFilm);
  }
  if (document.body.classList.contains("is-home") && "IntersectionObserver" in window) {
    const sectionNav = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const link = document.querySelector('.nav-link[href$="#' + entry.target.id + '"]');
        if (!link) return;
        if (entry.isIntersecting) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-15% 0px -60% 0px" });
    document.querySelectorAll("#projects, #about").forEach(section => sectionNav.observe(section));
  }
  setLanguage(language, false);
})();
