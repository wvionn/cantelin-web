/* =========================================================
   Cantelin — Interactive Logic (Routing, Carousel, Modal, Variants, DM)
   ========================================================= */

(function () {
  "use strict";

  const selectedVariantsByProduct = {};

  /**
   * Buka link DM langsung di tab baru tanpa mengubah tab asli
   */
  window.openDmLink = function openDmLink() {
    const url = (typeof CANTELIN_CONFIG !== "undefined" && CANTELIN_CONFIG.dmLink)
      ? CANTELIN_CONFIG.dmLink
      : "https://ig.me/m/cantelin.id";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  function findProductById(productId) {
    if (typeof CATALOGUE_PRODUCTS === "undefined") return null;
    return CATALOGUE_PRODUCTS.find((p) => p.id === productId) || null;
  }

  function ensureModalElement() {
    let backdrop = document.getElementById("cantelin-modal");
    if (backdrop) return backdrop;

    backdrop = document.createElement("div");
    backdrop.id = "cantelin-modal";
    backdrop.className = "modal-backdrop";
    backdrop.setAttribute("role", "dialog");
    backdrop.setAttribute("aria-modal", "true");
    backdrop.setAttribute("aria-labelledby", "modal-title");

    backdrop.innerHTML = `
      <div class="modal-container" id="modal-container">
        <button type="button" class="modal-close-btn" id="modal-close-btn" aria-label="Tutup detail gambar">&times;</button>
        <div class="modal-image-box">
          <img id="modal-preview-img" src="" alt="" />
          <p class="modal-zoom-caption" id="modal-zoom-caption"></p>
          <span class="modal-file-tag" id="modal-file-tag"></span>
        </div>
        <div class="modal-details" id="modal-details">
          <div>
            <div class="modal-badge-row" id="modal-badge-row"></div>
            <h2 class="modal-title" id="modal-title"></h2>
            <p class="modal-variant-active" id="modal-variant-active"></p>
            <p class="modal-desc" id="modal-desc"></p>
            <div id="modal-variants-section">
              <p class="modal-variants-heading">Pilih Varian:</p>
              <div class="modal-variants-grid" id="modal-variants-grid"></div>
            </div>
          </div>
          <div class="modal-actions" id="modal-actions">
            <button type="button" class="modal-action-primary" onclick="openDmLink()">
              Chat kami via DM ya! 💬
            </button>
            <a href="catalogue.html" class="modal-action-secondary" id="modal-catalogue-link">
              Cek Katalognya! 👉
            </a>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    const closeBtn = backdrop.querySelector("#modal-close-btn");
    closeBtn.addEventListener("click", closeImageModal);
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) {
        closeImageModal();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && backdrop.classList.contains("is-open")) {
        closeImageModal();
      }
    });

    return backdrop;
  }

  function closeImageModal() {
    const backdrop = document.getElementById("cantelin-modal");
    if (!backdrop) return;
    backdrop.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  /**
   * Tampilkan container baru (modal) dari gambar yang diklik beserta pilihan variannya.
   */
  function openImageModal(options) {
    const backdrop = ensureModalElement();
    const {
      product = null,
      activeVariantId = "all",
      overrideImage = "",
      overrideTitle = "",
      overridePrice = "",
      overrideSub = "",
      overrideDescription = "",
      showCatalogueLink = false,
      zoomOnly = false,
      onVariantSelect = null
    } = options;

    const modalContainer = backdrop.querySelector("#modal-container");
    const previewImg = backdrop.querySelector("#modal-preview-img");
    const zoomCaption = backdrop.querySelector("#modal-zoom-caption");
    const fileTag = backdrop.querySelector("#modal-file-tag");
    const badgeRow = backdrop.querySelector("#modal-badge-row");
    const titleEl = backdrop.querySelector("#modal-title");
    const variantActiveEl = backdrop.querySelector("#modal-variant-active");
    const descEl = backdrop.querySelector("#modal-desc");
    const variantsSection = backdrop.querySelector("#modal-variants-section");
    const variantsGrid = backdrop.querySelector("#modal-variants-grid");
    const catLink = backdrop.querySelector("#modal-catalogue-link");

    modalContainer.classList.toggle("modal-container--zoom-only", Boolean(zoomOnly));
    catLink.style.display = showCatalogueLink && !zoomOnly ? "inline-flex" : "none";

    const displayTitle = overrideTitle || (product ? product.name : "Cantelin");
    zoomCaption.textContent = displayTitle;

    const priceText = overridePrice || (product ? [product.badgePrice, product.badgeSub].filter(Boolean).join(" ") : "");
    const subText = overrideSub || (product ? (product.secondaryBadge || product.subtitle) : "");

    badgeRow.innerHTML = "";
    if (priceText) {
      const pricePill = document.createElement("span");
      pricePill.className = "modal-price-pill";
      pricePill.textContent = priceText;
      badgeRow.appendChild(pricePill);
    }
    if (subText) {
      const subPill = document.createElement("span");
      subPill.className = "modal-sub-pill";
      subPill.textContent = subText;
      badgeRow.appendChild(subPill);
    }

    titleEl.textContent = overrideTitle || (product ? product.name : "Cantelin");

    function applyModalSelection(variantId) {
      let imgSrc = overrideImage || (product ? product.mainImage : "");
      let variantLabel = "Varian: Semua / Overview";
      let descText = overrideDescription || (product ? product.description : "");

      if (product && variantId !== "all") {
        const chosen = product.variants.find((v) => v.id === variantId);
        if (chosen) {
          imgSrc = chosen.image;
          variantLabel = `Varian Aktif: ${chosen.shortLabel} — ${chosen.name}`;
          descText = chosen.description || product.description;
        }
      } else if (!product) {
        variantLabel = overrideSub || "Koleksi Cantelin";
      }

      previewImg.src = imgSrc;
      previewImg.alt = `${titleEl.textContent} - ${variantLabel}`;
      fileTag.textContent = imgSrc;
      variantActiveEl.textContent = variantLabel;
      descEl.textContent = descText;

      variantsGrid.querySelectorAll(".modal-variant-btn").forEach((btn) => {
        btn.classList.toggle("is-active", btn.dataset.variantId === variantId);
      });

      if (typeof onVariantSelect === "function") {
        onVariantSelect(variantId);
      }
    }

    variantsGrid.innerHTML = "";
    if (product && Array.isArray(product.variants) && product.variants.length > 0) {
      variantsSection.style.display = "block";

      const allOptionImage = overrideImage || product.mainImage;
      const allBtn = document.createElement("button");
      allBtn.type = "button";
      allBtn.className = "modal-variant-btn";
      allBtn.dataset.variantId = "all";
      allBtn.innerHTML = `
        <img class="modal-variant-thumb" src="${allOptionImage}" alt="Overview" />
        <span>Semua</span>
      `;
      allBtn.addEventListener("click", () => applyModalSelection("all"));
      variantsGrid.appendChild(allBtn);

      product.variants.forEach((variant) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "modal-variant-btn";
        btn.dataset.variantId = variant.id;
        btn.innerHTML = `
          <img class="modal-variant-thumb" src="${variant.image}" alt="${variant.name}" />
          <span class="variant-dot" style="background:${variant.color}"></span>
          <span>${variant.shortLabel}: ${variant.name}</span>
        `;
        btn.addEventListener("click", () => applyModalSelection(variant.id));
        variantsGrid.appendChild(btn);
      });

      applyModalSelection(activeVariantId);
    } else {
      variantsSection.style.display = "none";
      applyModalSelection("all");
    }

    backdrop.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  /* ---------- HOME PAGE CAROUSEL ---------- */

  function initHomePage() {
    const imgEl = document.getElementById("carousel-image");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");
    const dotsWrap = document.getElementById("carousel-dots");
    const triggerBtn = document.getElementById("carousel-trigger");

    if (!imgEl || !dotsWrap || typeof HOME_SLIDES === "undefined") {
      return;
    }

    let currentIndex = 0;

    function renderSlide(index) {
      currentIndex = (index + HOME_SLIDES.length) % HOME_SLIDES.length;
      const slide = HOME_SLIDES[currentIndex];
      imgEl.src = slide.image;
      imgEl.alt = slide.title;

      dotsWrap.querySelectorAll(".carousel-dot").forEach((dot, idx) => {
        const isActive = idx === currentIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    }

    dotsWrap.innerHTML = "";
    HOME_SLIDES.forEach((slide, idx) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel-dot" + (idx === 0 ? " is-active" : "");
      dot.setAttribute("aria-label", `Lihat ${slide.title}`);
      dot.addEventListener("click", () => renderSlide(idx));
      dotsWrap.appendChild(dot);
    });

    prevBtn.addEventListener("click", () => renderSlide(currentIndex - 1));
    nextBtn.addEventListener("click", () => renderSlide(currentIndex + 1));

    triggerBtn.addEventListener("click", () => {
      const slide = HOME_SLIDES[currentIndex];
      openImageModal({
        product: null,
        overrideImage: slide.image,
        overrideTitle: slide.title,
        showCatalogueLink: false,
        zoomOnly: true
      });
    });

    renderSlide(0);
  }

  /* ---------- CATALOGUE PAGE & VARIANTS ---------- */

  function createCornerStarsSvg() {
    return `
      <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="catStarGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fff176"/>
            <stop offset="100%" stop-color="#ffb300"/>
          </linearGradient>
        </defs>
        <path fill="url(#catStarGrad)" d="M32 4l8.5 17.5L60 24.3 46 37.9l3.3 19.3L32 48.1l-17.3 9.1L18 37.9 4 24.3l19.5-2.8z"/>
      </svg>
      <svg width="18" height="18" viewBox="0 0 64 64" aria-hidden="true" style="margin-left:-6px;margin-bottom:2px;">
        <path fill="#ffe047" d="M32 4l8.5 17.5L60 24.3 46 37.9l3.3 19.3L32 48.1l-17.3 9.1L18 37.9 4 24.3l19.5-2.8z"/>
      </svg>
    `;
  }

  function initCataloguePage() {
    const grid = document.getElementById("catalogue-grid");
    if (!grid || typeof CATALOGUE_PRODUCTS === "undefined") return;

    grid.innerHTML = "";

    CATALOGUE_PRODUCTS.forEach((product) => {
      selectedVariantsByProduct[product.id] = "all";

      const card = document.createElement("article");
      card.className = "product-card";
      card.dataset.productId = product.id;

      const labelHtml = `
        <div class="product-label-box">
          <h2 class="product-label-title">${product.name}</h2>
          ${product.subtitle ? `<p class="product-label-sub">${product.subtitle}</p>` : ""}
        </div>
      `;

      const badgeHtml = `
        <div class="price-badge-stack">
          <div class="price-badge">
            <span class="price-badge-main">${product.badgePrice}</span>
            ${product.badgeSub ? `<span class="price-badge-sub">${product.badgeSub}</span>` : ""}
          </div>
          ${product.secondaryBadge ? `<div class="price-badge-extra">${product.secondaryBadge}</div>` : ""}
        </div>
      `;

      card.innerHTML = `
        ${labelHtml}
        ${badgeHtml}
        <div class="card-corner-stars">${createCornerStarsSvg()}</div>
        <button type="button" class="product-image-btn" aria-label="Buka detail ${product.name}">
          <img src="${product.mainImage}" alt="${product.name}" />
        </button>
        <div class="variant-strip" aria-label="Pilih varian ${product.name}"></div>
      `;

      const imgBtn = card.querySelector(".product-image-btn");
      const imgEl = imgBtn.querySelector("img");
      const variantStrip = card.querySelector(".variant-strip");

      function updateCardVariant(variantId) {
        selectedVariantsByProduct[product.id] = variantId;
        if (variantId === "all") {
          imgEl.src = product.mainImage;
          imgEl.alt = product.name;
        } else {
          const found = product.variants.find((v) => v.id === variantId);
          if (found) {
            imgEl.src = found.image;
            imgEl.alt = `${product.name} - ${found.name}`;
          }
        }
        variantStrip.querySelectorAll(".variant-chip").forEach((chip) => {
          chip.classList.toggle("is-selected", chip.dataset.variantId === variantId);
        });
      }

      const allChip = document.createElement("button");
      allChip.type = "button";
      allChip.className = "variant-chip is-selected";
      allChip.dataset.variantId = "all";
      allChip.textContent = "Semua";
      allChip.addEventListener("click", () => updateCardVariant("all"));
      variantStrip.appendChild(allChip);

      product.variants.forEach((variant) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "variant-chip";
        chip.dataset.variantId = variant.id;
        chip.innerHTML = `<span class="variant-dot" style="background:${variant.color}"></span><span>${variant.shortLabel} · ${variant.name}</span>`;
        chip.addEventListener("click", () => updateCardVariant(variant.id));
        variantStrip.appendChild(chip);
      });

      imgBtn.addEventListener("click", () => {
        openImageModal({
          product,
          activeVariantId: selectedVariantsByProduct[product.id],
          showCatalogueLink: false,
          onVariantSelect: (chosenVariantId) => updateCardVariant(chosenVariantId)
        });
      });

      grid.appendChild(card);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    if (page === "home") initHomePage();
    if (page === "catalogue") initCataloguePage();
  });
})();
