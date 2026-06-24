/* =========================================================================
   Chinese Canteen — full menu page: render, search, filter, builders, lightbox
   ========================================================================= */
(function () {
  "use strict";
  var D = window.SITE_DATA || {};
  var CC = window.CC || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var heatHTML = CC.heatHTML, tagsHTML = CC.tagsHTML, money = CC.money, esc = CC.escapeHTML || function (x) { return x; };

  var CAT_ZH = {
    "Starters": "开胃菜", "Cold Starters": "凉菜", "Soups": "汤羹",
    "Vegetable Dishes": "素菜", "Rice & Noodles": "饭 · 面", "Seafood": "海鲜",
    "Spicy Specialities": "川味招牌", "Mild & Savoury": "家常小炒",
    "Build Your Own Main": "自选主菜", "Set Meals": "套餐", "Hot Pot & Dry Pot": "火锅 · 干锅"
  };
  function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  var content = $("#menuContent");
  var noResults = $("#noResults");
  var dishImages = D.dishImages || {};

  /* ---------------- render dish categories ---------------- */
  var dishCats = (D.categories || []).filter(function (c) {
    return (D.menu || []).some(function (m) { return m.category === c; });
  });

  var html = "";
  dishCats.forEach(function (cat) {
    var items = (D.menu || []).filter(function (m) { return m.category === cat; });
    html += '<section class="catblock" id="cat-' + slug(cat) + '" data-cat="' + esc(cat) + '">' +
      '<div class="catblock__head"><h2>' + cat + '</h2><span class="zh hanzi">' + (CAT_ZH[cat] || "") + '</span></div>' +
      '<div class="dishgrid">' + items.map(dishRow).join("") + '</div></section>';
  });
  content.insertAdjacentHTML("beforeend", html);

  function dishRow(d) {
    var img = dishImages[d.code];
    var thumb = img ? img.replace("images/dishes/", "images/dishes/thumbs/") : "";
    var spicy = d.heat ? heatHTML(d.heat) : "";
    var meta = (spicy || tagsHTML(d.tags)) ?
      '<span class="dish__meta">' + spicy + tagsHTML(d.tags) + '</span>' : "";
    return '<article class="dish ' + (img ? "has-img" : "") + '" id="dish-' + d.code + '"' +
        ' data-tags="' + (d.tags || []).join(" ") + '" data-heat="' + (d.heat || 0) + '"' +
        ' data-img="' + (img ? "1" : "0") + '"' +
        ' data-search="' + esc((d.name + " " + (d.nameZh || "") + " " + (d.description || "") + " " + d.code).toLowerCase()) + '">' +
      (img ? '<img class="dish__thumb" src="' + thumb + '" alt="' + esc(d.name) + '" loading="lazy" role="button" tabindex="0" aria-label="View photo of ' + esc(d.name) + '" data-full="' + img + '" data-name="' + esc(d.name) + '" data-zh="' + esc(d.nameZh || "") + '" />'
           : '<span class="dish__code">' + d.code + '</span>') +
      '<div class="dish__main">' +
        '<div class="dish__name">' + d.name + ' <span class="zh hanzi">' + (d.nameZh || "") + '</span></div>' +
        (d.description ? '<p class="dish__desc">' + d.description + '</p>' : "") +
        meta +
      '</div>' +
      '<span class="dish__price">' + money(d.price) + '</span>' +
    '</article>';
  }

  /* ---------------- Build Your Own ---------------- */
  if (D.buildYourOwn) {
    var byo = D.buildYourOwn;
    var bHtml = '<section class="catblock special-block" id="cat-build-your-own-main" data-cat="Build Your Own Main">' +
      '<div class="catblock__head"><h2>Build Your Own Main</h2><span class="zh hanzi">' + CAT_ZH["Build Your Own Main"] + '</span></div>' +
      '<div class="byo">' +
        '<h3>Pick a protein, then a flavour</h3><p>' + esc(byo.note) + '</p>' +
        '<div class="byo__cols">' +
          '<div class="byo__col"><h4>1 · Protein</h4>' + byo.proteins.map(function (p, i) {
            return '<button class="optbtn proteinBtn" data-i="' + i + '" data-price="' + p.price + '" data-name="' + esc(p.name) + '" data-tags="' + (p.tags || []).join(" ") + '">' +
              '<span>' + p.name + ' <span class="zh hanzi">' + (p.nameZh || "") + '</span></span><span>' + money(p.price) + '</span></button>';
          }).join("") + '</div>' +
          '<div class="byo__col"><h4>2 · Flavour</h4>' + byo.flavours.map(function (f, i) {
            return '<button class="optbtn flavourBtn" data-i="' + i + '" data-name="' + esc(f.name) + '" data-heat="' + (f.heat || 0) + '" data-tags="' + (f.tags || []).join(" ") + '">' +
              '<span>' + f.name + ' <span class="zh hanzi">' + (f.nameZh || "") + '</span></span>' + (f.heat ? heatHTML(f.heat) : "") + '</button>';
          }).join("") + '</div>' +
        '</div>' +
        '<div class="byo__result" id="byoResult"><b>Choose a protein &amp; a flavour</b><span class="price">&mdash;</span></div>' +
      '</div></section>';
    content.insertAdjacentHTML("beforeend", bHtml);

    var selP = null, selF = null;
    function byoUpdate() {
      var res = $("#byoResult");
      if (selP && selF) {
        res.innerHTML = '<b>' + esc(selP.name) + ' · ' + esc(selF.name) + '</b><span class="price">' + money(selP.price) + '</span>';
      } else if (selP) {
        res.innerHTML = '<b>' + esc(selP.name) + ' — now pick a flavour</b><span class="price">' + money(selP.price) + '</span>';
      } else {
        res.innerHTML = '<b>Choose a protein &amp; a flavour</b><span class="price">&mdash;</span>';
      }
    }
    $$(".proteinBtn").forEach(function (b) {
      b.addEventListener("click", function () {
        $$(".proteinBtn").forEach(function (x) { x.classList.remove("sel"); });
        b.classList.add("sel"); selP = { name: b.dataset.name, price: +b.dataset.price }; byoUpdate();
      });
    });
    $$(".flavourBtn").forEach(function (b) {
      b.addEventListener("click", function () {
        $$(".flavourBtn").forEach(function (x) { x.classList.remove("sel"); });
        b.classList.add("sel"); selF = { name: b.dataset.name }; byoUpdate();
      });
    });
  }

  /* ---------------- Set Meals ---------------- */
  if (D.setMeals) {
    var sHtml = '<section class="catblock special-block" id="cat-set-meals" data-cat="Set Meals">' +
      '<div class="catblock__head"><h2>Set Meals</h2><span class="zh hanzi">' + CAT_ZH["Set Meals"] + '</span></div>' +
      '<p class="catblock__note">Sharing menus designed to take the deciding out of dinner. Prices are per person.</p>' +
      '<div class="sets">' + D.setMeals.map(function (m) {
        return '<article class="setcard"><div class="setcard__top"><h3>' + esc(m.name) + '</h3><span class="price">' + money(m.price) + '</span></div>' +
          '<div class="min">' + esc(m.per) + ' · ' + esc(m.min) + '</div>' +
          '<ul>' + m.dishes.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("") + '</ul></article>';
      }).join("") + '</div></section>';
    content.insertAdjacentHTML("beforeend", sHtml);
  }

  /* ---------------- Hot Pot & Dry Pot ---------------- */
  if (D.hotPot) {
    var hp = D.hotPot;
    function itemList(group) {
      return '<div class="setcard"><div class="setcard__top"><h3>' + esc(group.label) + '</h3><span class="price">' + money(group.price) + '</span></div>' +
        '<div class="min">per item</div><ul>' + group.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("") + '</ul></div>';
    }
    var hHtml = '<section class="catblock special-block" id="cat-hot-pot-dry-pot" data-cat="Hot Pot & Dry Pot">' +
      '<div class="catblock__head"><h2>Hot Pot &amp; Dry Pot</h2><span class="zh hanzi">' + CAT_ZH["Hot Pot & Dry Pot"] + '</span></div>' +
      '<p class="catblock__note">' + esc(hp.note) + '</p>' +
      '<div class="byo" style="margin-bottom:20px"><h3>Choose your base</h3><div class="byo__cols">' +
        hp.bases.map(function (base) {
          return '<div class="optbtn" style="cursor:default;flex-direction:column;align-items:flex-start;gap:6px">' +
            '<span style="font-family:var(--display);font-size:1.2rem">' + esc(base.name) + ' <span class="zh hanzi">' + (base.nameZh || "") + '</span> ' + heatHTML(base.heat) + '</span>' +
            '<span style="color:var(--muted);font-size:.88rem">' + esc(base.description) + '</span></div>';
        }).join("") +
      '</div></div>' +
      '<div class="sets">' + itemList(hp.meatItems) + itemList(hp.vegItems) + '</div></section>';
    content.insertAdjacentHTML("beforeend", hHtml);
  }

  /* ---------------- catnav ---------------- */
  var allCats = dishCats.concat(["Build Your Own Main", "Set Meals", "Hot Pot & Dry Pot"]).filter(function (c) {
    return $("#cat-" + slug(c));
  });
  $("#catNav").innerHTML = allCats.map(function (c) {
    return '<li><a href="#cat-' + slug(c) + '" data-target="cat-' + slug(c) + '">' + c + ' <span class="zh hanzi">' + (CAT_ZH[c] || "") + '</span></a></li>';
  }).join("");
  var navLinks = $$("#catNav a");
  navLinks.forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var el = document.getElementById(a.dataset.target);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 140, behavior: "smooth" });
    });
  });
  if ("IntersectionObserver" in window) {
    var intersecting = new Set();
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) intersecting.add(en.target); else intersecting.delete(en.target);
      });
      /* deterministic winner: the section nearest the top of the band */
      var winner = null, best = Infinity;
      intersecting.forEach(function (t) {
        var top = t.getBoundingClientRect().top;
        if (top < best) { best = top; winner = t; }
      });
      if (winner) navLinks.forEach(function (a) { a.classList.toggle("active", a.dataset.target === winner.id); });
    }, { rootMargin: "-30% 0px -60% 0px" });
    $$(".catblock").forEach(function (b) { spy.observe(b); });
  }

  /* ---------------- search + filter ---------------- */
  var search = $("#menuSearch");
  var chips = $$("#filterChips .chip");
  var activeFilter = "all";
  var term = "";

  function apply() {
    var dishes = $$(".dish");
    var anyVisible = false;
    dishes.forEach(function (d) {
      var ok = true;
      if (term && d.dataset.search.indexOf(term) === -1) ok = false;
      if (ok && activeFilter !== "all") {
        if (activeFilter === "photo") ok = d.dataset.img === "1";
        else if (activeFilter === "spicy") ok = (+d.dataset.heat) >= 2;
        else ok = (" " + d.dataset.tags + " ").indexOf(" " + activeFilter + " ") !== -1;
      }
      d.classList.toggle("hidden", !ok);
      if (ok) anyVisible = true;
    });
    /* hide empty dish categories */
    $$(".catblock").forEach(function (b) {
      if (b.classList.contains("special-block")) return;
      var visible = $$(".dish:not(.hidden)", b).length;
      b.classList.toggle("cat-empty", visible === 0);
    });
    /* special blocks only when browsing everything */
    var browsing = !term && activeFilter === "all";
    $$(".special-block").forEach(function (b) { b.classList.toggle("hidden", !browsing); });
    if (browsing) anyVisible = true;
    noResults.style.display = anyVisible ? "none" : "block";
  }

  if (search) {
    search.addEventListener("input", function () { term = search.value.trim().toLowerCase(); apply(); });
  }
  chips.forEach(function (c) {
    c.addEventListener("click", function () {
      chips.forEach(function (x) { x.classList.remove("active"); });
      c.classList.add("active"); activeFilter = c.dataset.filter; apply();
    });
  });
  var clear = $("#clearSearch");
  if (clear) clear.addEventListener("click", function () { search.value = ""; term = ""; apply(); search.focus(); });

  /* ---------------- lightbox ---------------- */
  var lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap"), lbClose = $("#lbClose");
  var lbTrigger = null;
  function openLB(src, name, zh, trigger) {
    lbTrigger = trigger || null;
    lbImg.src = src; lbImg.alt = name;
    lbCap.innerHTML = '<b>' + esc(name) + '</b><span class="zh hanzi">' + esc(zh || "") + '</span>';
    lb.classList.add("open"); document.body.style.overflow = "hidden";
    lbClose.focus();
  }
  function closeLB() {
    lb.classList.remove("open"); document.body.style.overflow = ""; lbImg.src = "";
    if (lbTrigger && lbTrigger.focus) lbTrigger.focus();
    lbTrigger = null;
  }
  function isThumb(t) { return t && t.classList && t.classList.contains("dish__thumb"); }
  content.addEventListener("click", function (e) {
    if (isThumb(e.target)) openLB(e.target.dataset.full, e.target.dataset.name, e.target.dataset.zh, e.target);
  });
  /* keyboard-activate thumbnails (they are role=button tabindex=0) */
  content.addEventListener("keydown", function (e) {
    if ((e.key === "Enter" || e.key === " ") && isThumb(e.target)) {
      e.preventDefault();
      openLB(e.target.dataset.full, e.target.dataset.name, e.target.dataset.zh, e.target);
    }
  });
  lbClose.addEventListener("click", closeLB);
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLB(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLB();
    /* trap focus inside the dialog (only the close button is focusable) */
    else if (e.key === "Tab") { e.preventDefault(); lbClose.focus(); }
  });

  /* ---------------- deep-link to a dish (#dish-006) ---------------- */
  function goToHash() {
    if (location.hash && /^#dish-/.test(location.hash)) {
      var el = document.querySelector(location.hash);
      if (el) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 150, behavior: "smooth" });
        el.classList.add("flash"); setTimeout(function () { el.classList.remove("flash"); }, 2000);
      }
    }
  }
  setTimeout(goToHash, 200);
  window.addEventListener("hashchange", goToHash);
})();
