/* =========================================================================
   Chinese Canteen — shared site behaviour (loads on every page)
   ========================================================================= */
(function () {
  "use strict";
  var D = window.SITE_DATA || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------------- helpers ---------------- */
  function dishByCode(code) {
    return (D.menu || []).filter(function (m) { return m.code === code; })[0];
  }
  function heatHTML(level, cls) {
    level = level || 0;
    var out = '<span class="heat ' + (cls || "") + '" title="Heat ' + level + '/3">';
    for (var i = 1; i <= 3; i++) out += '<i class="' + (i > level ? "off" : "") + '"></i>';
    return out + "</span>";
  }
  var TAGLABEL = { V: "Veg", F: "Seafood", N: "Nuts" };
  function tagsHTML(tags) {
    if (!tags || !tags.length) return "";
    return '<span class="tags">' + tags.map(function (t) {
      return '<span class="tag ' + (t === "V" ? "v" : "") + '">' + (TAGLABEL[t] || t) + "</span>";
    }).join("") + "</span>";
  }
  function money(n) { return "£" + Number(n).toFixed(2).replace(/\.00$/, ""); }

  /* ---------------- nav: scroll state ---------------- */
  var nav = $("#nav");
  /* the menu page has no hero behind the nav, so keep it solid at all times */
  var navAlwaysSolid = document.body.classList.contains("menupage");
  function onScroll() { if (nav) nav.classList.toggle("scrolled", navAlwaysSolid || window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------------- mobile drawer ---------------- */
  var burger = $("#burger");
  var drawer = $("#drawer");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (drawer) { if (open) drawer.removeAttribute("inert"); else drawer.setAttribute("inert", ""); }
  }
  if (burger) {
    burger.addEventListener("click", function () {
      setMenu(!document.body.classList.contains("menu-open"));
    });
    $$("#drawer a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
  }

  /* ---------------- reveal on scroll ---------------- */
  /* ?static disables entrance animations (useful for printing / crawlers / QA) */
  if (/[?&]static/.test(location.search)) document.documentElement.classList.remove("js");
  var supportsIO = "IntersectionObserver" in window;
  var revealIO = supportsIO ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); } });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }) : null;

  /* observe existing or later-injected .reveal nodes */
  window.__reobserve = function (root) {
    var nodes = $$(".reveal", root || document);
    if (!revealIO) { nodes.forEach(function (el) { el.classList.add("in"); }); return; }
    nodes.forEach(function (el) { if (!el.classList.contains("in")) revealIO.observe(el); });
  };
  window.__reobserve(document);

  /* ---------------- hero entrance ---------------- */
  var hero = $(".hero");
  if (hero) requestAnimationFrame(function () { setTimeout(function () { hero.classList.add("ready"); }, 80); });

  /* ---------------- year ---------------- */
  var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  /* ================= HOMEPAGE-ONLY RENDERS ================= */

  /* marquee */
  var marquee = $("#marquee");
  if (marquee) {
    var phrases = [
      ["Pan-fried dumplings", "猪肉锅贴"], ["Hand-pulled noodles", "河南烩面"],
      ["Sichuan heat", "麻辣"], ["Cantonese roast duck", "广式烧鸭"],
      ["Open flame", "明火"], ["Wok hei", "锅气"],
      ["Mapo tofu", "麻婆豆腐"], ["Cooked to order", "现点现做"]
    ];
    var seg = phrases.map(function (p) {
      return '<span>' + p[0] + ' <span class="hanzi">' + p[1] + '</span></span>';
    }).join("");
    marquee.innerHTML = seg + seg; /* duplicate for seamless loop */
  }

  /* signatures gallery */
  var sigGrid = $("#sigGrid");
  if (sigGrid && D.signature) {
    sigGrid.innerHTML = D.signature.map(function (s) {
      return '<a class="sigcard reveal" href="menu.html#dish-' + encodeURIComponent(s.code) + '">' +
        '<img src="' + encodeURI(s.image) + '" alt="' + escapeHTML(s.name) + '" loading="lazy" />' +
        '<div class="sigcard__body">' +
          '<span class="sigcard__zh hanzi">' + escapeHTML(s.nameZh || "") + '</span>' +
          '<h3 class="sigcard__name">' + escapeHTML(s.name) + '</h3>' +
          '<p class="sigcard__blurb">' + escapeHTML(s.blurb) + '</p>' +
          '<div class="sigcard__row">' +
            (s.heat ? heatHTML(s.heat, "heat--lg") : '<span></span>') +
            '<span class="txtlink">See on menu</span>' +
          '</div>' +
        '</div></a>';
    }).join("");
    /* re-observe the freshly injected reveals */
    if (window.__reobserve) window.__reobserve(sigGrid);
  }

  /* craft cards */
  var craftGrid = $("#craftGrid");
  if (craftGrid && D.craft) {
    craftGrid.innerHTML = D.craft.map(function (c, i) {
      return '<article class="craftcard reveal" data-d="' + (i % 3) + '">' +
        '<div class="craftcard__img"><img src="' + encodeURI(c.image) + '" alt="' + escapeHTML(c.title) + '" loading="lazy" /></div>' +
        '<div class="craftcard__body"><span class="kicker">' + escapeHTML(c.kicker) + '</span>' +
        '<h3>' + escapeHTML(c.title) + '</h3><p>' + escapeHTML(c.text) + '</p></div></article>';
    }).join("");
    if (window.__reobserve) window.__reobserve(craftGrid);
  }

  /* menu teaser list */
  var teaserList = $("#teaserList");
  if (teaserList && D.menuTeaser) {
    teaserList.innerHTML = D.menuTeaser.map(function (code) {
      var d = dishByCode(code); if (!d) return "";
      return '<a class="trow" href="menu.html#dish-' + encodeURIComponent(d.code) + '">' +
        '<span class="trow__code">' + escapeHTML(d.code) + '</span>' +
        '<span class="trow__name">' + escapeHTML(d.name) + ' <span class="hanzi">' + escapeHTML(d.nameZh || "") + '</span></span>' +
        '<span class="trow__price">' + money(d.price) + '</span></a>';
    }).join("");
  }

  /* opening hours */
  var hoursList = $("#hoursList");
  if (hoursList && D.restaurant && D.restaurant.hours) {
    var todayIdx = new Date().getDay(); /* 0=Sun */
    var order = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var todayName = order[todayIdx];
    hoursList.innerHTML = D.restaurant.hours.map(function (h) {
      var isToday = h.day === todayName;
      return '<li class="' + (isToday ? "today" : "") + '"><span>' + escapeHTML(h.day) + '</span><span>' + escapeHTML(h.value) + '</span></li>';
    }).join("");
  }

  /* delivery partner logos — every [data-partners] element gets the same row */
  var partnerSlots = $$("[data-partners]");
  if (partnerSlots.length && D.delivery) {
    var partnerHTML = D.delivery.map(function (p) {
      return '<a href="' + encodeURI(p.url) + '" target="_blank" rel="noopener" aria-label="Order from Chinese Canteen on ' + escapeHTML(p.name) + '">' +
        '<img src="' + encodeURI(p.logo) + '" alt="' + escapeHTML(p.name) + '" loading="lazy" /></a>';
    }).join("");
    partnerSlots.forEach(function (el) { el.innerHTML = partnerHTML; });
  }

  function escapeHTML(s) { return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  /* expose helpers for menu.js */
  window.CC = { dishByCode: dishByCode, heatHTML: heatHTML, tagsHTML: tagsHTML, money: money, escapeHTML: escapeHTML };
})();
