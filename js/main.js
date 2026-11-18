/* ============================================================
   পদ্মা ট্যুর রাজশাহী | js/main.js
   UI কন্ট্রোলার: রেন্ডারিং, অ্যানিমেশন, ফর্ম, ল্যাঙ্গুয়েজ ও থিম টগল
   ============================================================ */

(function () {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const SVG = {
    check: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M4.5 12.5l5 5 10-11"/></svg>',
    pin: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-5.4-7-11a7 7 0 1 1 14 0c0 5.6-7 11-7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
    tag: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 11l9-8h9v9l-9 8-9-9z"/><circle cx="16.5" cy="7.5" r="1.4"/></svg>',
    route: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H14a4 4 0 0 0 0-8H9.5A3.5 3.5 0 0 1 9.5 3H10"/></svg>',
    train: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="5" y="3" width="14" height="13" rx="3"/><path d="M5 10h14M9 16l-2 4m8-4 2 4M8.5 6.5h7"/></svg>',
    bus: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="4" y="4" width="16" height="12" rx="2.5"/><path d="M4 10h16M7.5 16v2.5m9-2.5v2.5M8 7h8"/></svg>',
    plane: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 4 3 11l6 2.5L11.5 20l3-6L21 4z"/><path d="M9 13.5 21 4"/></svg>',
    rickshaw: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="6" cy="17" r="2.5"/><circle cx="18" cy="17" r="2.5"/><path d="M8.5 17h7M9 17V6h6l3 8M4 6h5"/></svg>',
    bed: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M3 18v2m18-2v2M7 10V7h10v3"/></svg>',
    food: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 3v8a3 3 0 0 0 6 0V3M9 11v10M17 3c-1.8 1.5-2.5 3.5-2.5 6 0 2 .8 3 2.5 3v9M17 3v9"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>'
  };

  /* ---------- ভাষা ও থিম ---------- */
  function initTheme() {
    const saved = localStorage.getItem('ptr_theme');
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefers ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    $('#themeToggle').addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('ptr_theme', next);
    });
  }

  function initLang() {
    window.applyI18n();
    $('#langToggle').addEventListener('click', () => {
      const next = window.getLang() === 'bn' ? 'en' : 'bn';
      localStorage.setItem('ptr_lang', next);
      window.applyI18n();
      renderAll();
      window.PTR_API.loadWeather();
    });
  }

  /* ---------- রেভিল অ্যানিমেশন ---------- */
  let revealObs;
  function setupReveal() {
    if (revealObs) revealObs.disconnect();
    revealObs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); revealObs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    $$('.reveal').forEach(el => revealObs.observe(el));
  }

  /* ---------- কাউন্টার ---------- */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.decimal || '0', 10);
    const suffix = el.dataset.suffix || '';
    const dur = 1600;
    const t0 = performance.now();
    function frame(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      const shown = dec ? val.toFixed(dec) : Math.round(val).toLocaleString('en-US');
      el.textContent = window.num(shown) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  let countObs;
  function setupCounters() {
    if (countObs) countObs.disconnect();
    countObs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { animateCount(en.target); countObs.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    $$('.stat__num').forEach(el => countObs.observe(el));
  }

  /* ---------- নাভবার ---------- */
  function initNav() {
    const nav = $('#navbar'), progress = $('#navProgress'), toTop = $('#toTop');
    const hero = $('#home');

    function onScroll() {
      const y = window.scrollY;
      nav.classList.toggle('is-scrolled', y > 10);
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
      // হিরো পার হলে scroll-to-top বাটন দেখা যাবে
      const heroH = hero.offsetHeight || window.innerHeight;
      toTop.classList.toggle('is-visible', y > heroH * 0.72);
      // সক্রিয় লিংক
      let activeId = 'home';
      $$('main section[id], header[id="home"]').forEach(sec => {
        if (sec.getBoundingClientRect().top <= 140) activeId = sec.id;
      });
      $$('.nav__link').forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + activeId));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- ড্রয়ার ---------- */
  function initDrawer() {
    const drawer = $('#drawer'), burger = $('#burger');
    const open = (v) => {
      drawer.classList.toggle('is-open', v);
      drawer.setAttribute('aria-hidden', String(!v));
      burger.classList.toggle('is-open', v);
      burger.setAttribute('aria-expanded', String(v));
      document.body.style.overflow = v ? 'hidden' : '';
    };
    burger.addEventListener('click', () => open(!drawer.classList.contains('is-open')));
    $('#drawerClose').addEventListener('click', () => open(false));
    $('#drawerBackdrop').addEventListener('click', () => open(false));
    $$('.drawer__links a, .drawer__cta').forEach(a => a.addEventListener('click', () => open(false)));
  }

  /* ---------- দর্শনীয় স্থান রেন্ডার ---------- */
  function renderAttractions() {
    const grid = $('#attrGrid');
    grid.innerHTML = window.SITE_DATA.attractions.map((a, i) => {
      const L = window.getLang();
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.mapQuery)}`;
      return `
      <article class="attrcard reveal" style="--d:${(i % 4) * 0.08}s">
        <div class="attrcard__media">
          <img src="${a.img}" alt="${a.name[L]}" loading="lazy">
          <span class="attrcard__tag">${a.tag[L]}</span>
        </div>
        <div class="attrcard__body">
          <h3>${a.name[L]}</h3>
          <p>${a.desc[L]}</p>
          <ul class="attrcard__meta">
            <li>${SVG.tag}<div><strong>${window.T('attr.fee')}</strong><p>${a.fee[L]}</p></div></li>
            <li>${SVG.clock}<div><strong>${window.T('attr.hours')}</strong><p>${a.hours[L]}</p></div></li>
            <li>${SVG.pin}<div><strong>${window.T('attr.distance')}</strong><p>${a.distance[L]}</p></div></li>
          </ul>
          <a class="attrcard__map" href="${mapUrl}" target="_blank" rel="noopener">${SVG.route}${window.T('attr.route')}</a>
        </div>
      </article>`;
    }).join('');
  }

  /* ---------- গন্তব্য ট্যাব + রেন্ডার (দেশি/আন্তর্জাতিক) ---------- */
  let currentDest = 'bd';
  function renderDestinations() {
    const L = window.getLang();
    $$('.dest__tab').forEach(t => {
      const on = t.dataset.tab === currentDest;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', String(on));
    });
    const list = (window.SITE_DATA.destinations && window.SITE_DATA.destinations[currentDest]) || [];
    $('#destGrid').innerHTML = list.map((d, i) => {
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.mapQuery)}`;
      return `
      <article class="destcard reveal" style="--d:${(i % 4) * 0.08}s">
        <div class="destcard__media">
          <img src="${d.img}" alt="${d.name[L]}" loading="lazy">
          <span class="destcard__tag">${d.tag[L]}</span>
        </div>
        <div class="destcard__body">
          <h3>${d.name[L]}</h3>
          <p>${d.desc[L]}</p>
          <div class="destcard__price"><strong>${window.T('dest.price')} ${window.num(d.priceFrom.toLocaleString('en-US'))} ৳</strong><span>${window.T('dest.per')}</span></div>
          <ul class="destcard__meta">
            <li>${SVG.clock}<div><strong>${window.T('dest.days')}</strong><p>${d.duration[L]}</p></div></li>
          </ul>
          <div class="destcard__actions">
            <a class="destcard__map" href="${mapUrl}" target="_blank" rel="noopener">${SVG.route}${window.T('dest.route')}</a>
            <button type="button" class="destcard__book">${SVG.check}${window.T('dest.book')}</button>
          </div>
        </div>
      </article>`;
    }).join('');
    $$('.destcard__book').forEach(b => b.addEventListener('click', () => {
      $('#booking').scrollIntoView({ behavior: 'smooth' });
    }));
    setupReveal();
  }
  function initDestTabs() {
    $$('.dest__tab').forEach(t => t.addEventListener('click', () => {
      if (currentDest === t.dataset.tab) return;
      currentDest = t.dataset.tab;
      renderDestinations();
    }));
  }

  /* ---------- প্যাকেজ রেন্ডার (ডাটা ফেচিং) ---------- */
  let CURRENT_PACKAGES = window.SITE_DATA.packagesFallback;
  function renderPackages() {
    const grid = $('#pkgGrid');
    const L = window.getLang();
    grid.innerHTML = CURRENT_PACKAGES.map((p, i) => {
      const badge = p.badge ? `<span class="pkgcard__badge">${p.badge[L] || p.badge.bn}</span>` :
        (p.popular ? `<span class="pkgcard__badge">${window.T('pkg.popular')}</span>` : '');
      return `
      <article class="pkgcard reveal ${p.popular ? 'pkgcard--popular' : ''}" style="--d:${(i % 4) * 0.08}s">
        ${badge}
        <div class="pkgcard__media"><img src="${p.img}" alt="${p.title[L]}" loading="lazy"></div>
        <div class="pkgcard__body">
          <span class="pkgcard__dur">${p.duration[L]}</span>
          <h3>${p.title[L]}</h3>
          <div class="pkgcard__price"><strong>${window.num(p.price.toLocaleString('en-US'))} ৳</strong><span>${window.T('pkg.per')}</span></div>
          <ul class="pkgcard__inc">${p.includes.map(it => `<li>${SVG.check}<span>${it[L]}</span></li>`).join('')}</ul>
          <button class="btn btn--primary btn--full pkg-book" data-pkg="${p.title[L]}">${window.T('pkg.book')}</button>
        </div>
      </article>`;
    }).join('');
    $$('.pkg-book').forEach(btn => btn.addEventListener('click', () => {
      const pkgSel = $('#bPackage');
      const opt = Array.from(pkgSel.options).find(o => o.value === btn.dataset.pkg);
      if (opt) pkgSel.value = btn.dataset.pkg;
      $('#booking').scrollIntoView({ behavior: 'smooth' });
    }));
  }

  async function loadPackageData() {
    const res = await window.PTR_API.loadPackages();
    CURRENT_PACKAGES = res.data;
    const note = $('#pkgModeNote');
    note.hidden = false;
    note.textContent = res.mode === 'cloud' ? window.T('pkg.live') : window.T('pkg.demo');
    renderPackages();
    fillPackageSelect();
    setupReveal(); // অ্যাসিনক্রোনাস রেন্ডারের পরেও কার্ড reveal হয়
  }

  function fillPackageSelect() {
    const L = window.getLang();
    const sel = $('#bPackage');
    const prev = sel.value;
    sel.innerHTML = `<option value="">${window.T('book.pkgPlaceholder')}</option>` +
      CURRENT_PACKAGES.map(p => `<option value="${p.title[L]}">${p.title[L]} — ${window.num(p.price.toLocaleString('en-US'))} ৳</option>`).join('');
    if (prev && Array.from(sel.options).some(o => o.value === prev)) sel.value = prev;
  }

  /* ---------- ভ্রমণ গাইড রেন্ডার ---------- */
  function renderGuide() {
    const L = window.getLang();
    const g = window.SITE_DATA.guide;
    const rows = (arr, key2) => arr.map(it => `
      <tr><td>${it.name[L]}</td><td>${it.detail ? it.detail[L] : it.area[L]}</td><td>${it[key2][L]}</td></tr>`).join('');
    $('#guideGrid').innerHTML = `
      <article class="gcard reveal">
        <div class="gcard__head">${SVG.train}<h3>${window.T('guide.transport')}</h3></div>
        <table><thead><tr><th>${window.T('guide.th.item')}</th><th>${window.T('guide.th.detail')}</th><th>${window.T('guide.th.price')}</th></tr></thead>
        <tbody>${rows(g.transport, 'price')}</tbody></table>
      </article>
      <article class="gcard gcard--stay reveal" style="--d:.1s">
        <div class="gcard__head">${SVG.bed}<h3>${window.T('guide.stay')}</h3></div>
        <table><thead><tr><th>${window.T('guide.th.item')}</th><th>${window.T('guide.th.detail')}</th><th>${window.T('guide.th.price')}</th></tr></thead>
        <tbody>${rows(g.stay, 'price')}</tbody></table>
      </article>
      <article class="gcard reveal" style="--d:.2s">
        <div class="gcard__head">${SVG.food}<h3>${window.T('guide.food')}</h3></div>
        <table><thead><tr><th>${window.T('guide.th.item')}</th><th>${window.T('guide.th.detail')}</th><th>${window.T('guide.th.price')}</th></tr></thead>
        <tbody>${rows(g.food, 'price')}</tbody></table>
      </article>`;
  }

  /* ---------- গ্যালারি + লাইটবক্স ---------- */
  function renderGallery() {
    const L = window.getLang();
    $('#galleryGrid').innerHTML = window.SITE_DATA.gallery.map((g, i) => `
      <button type="button" class="galitem reveal ${i % 5 === 0 ? 'galitem--tall' : ''}" data-i="${i}" style="--d:${(i % 4) * 0.07}s" aria-label="${g.cap[L]}">
        <img src="${g.img}" alt="${g.cap[L]}" loading="lazy">
      </button>`).join('');
    $$('.galitem').forEach(b => b.addEventListener('click', () => openLb(parseInt(b.dataset.i, 10))));
  }

  let lbIndex = 0;
  function openLb(i) {
    lbIndex = i;
    const L = window.getLang();
    const g = window.SITE_DATA.gallery[i];
    $('#lbImg').src = g.img;
    $('#lbImg').alt = g.cap[L];
    $('#lbCap').textContent = g.cap[L];
    $('#lightbox').classList.add('is-open');
    $('#lightbox').setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    $('#lightbox').classList.remove('is-open');
    $('#lightbox').setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function moveLb(step) {
    const n = window.SITE_DATA.gallery.length;
    openLb((lbIndex + step + n) % n);
  }
  function initLightbox() {
    $('#lbClose').addEventListener('click', closeLb);
    $('#lbPrev').addEventListener('click', () => moveLb(-1));
    $('#lbNext').addEventListener('click', () => moveLb(1));
    $('#lightbox').addEventListener('click', e => { if (e.target === $('#lightbox')) closeLb(); });
    document.addEventListener('keydown', e => {
      if (!$('#lightbox').classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') moveLb(-1);
      if (e.key === 'ArrowRight') moveLb(1);
    });
  }

  /* ---------- ম্যাপ বোতাম ---------- */
  function renderMapButtons() {
    const L = window.getLang();
    const box = $('#mapBtns'), frame = $('#mapFrame');
    box.innerHTML = window.SITE_DATA.mapSpots.map((s, i) => `
      <button type="button" class="mapbtn ${i === 0 ? 'is-active' : ''}" data-q="${encodeURIComponent(s.q)}" role="tab" aria-selected="${i === 0}">${s.label[L]}</button>`).join('');
    $$('.mapbtn').forEach(b => b.addEventListener('click', () => {
      $$('.mapbtn').forEach(x => { x.classList.remove('is-active'); x.setAttribute('aria-selected', 'false'); });
      b.classList.add('is-active');
      b.setAttribute('aria-selected', 'true');
      const spot = window.SITE_DATA.mapSpots.find(s => s.label[window.getLang()] === b.textContent) || {};
      frame.src = `https://www.google.com/maps?q=${b.dataset.q}&z=${spot.z || 12}&output=embed`;
    }));
  }

  /* ---------- রিভিউ স্লাইডার ---------- */
  let revTimer = null, revPos = 0;
  function renderReviews() {
    const L = window.getLang();
    const list = window.SITE_DATA.testimonials;
    $('#revTrack').innerHTML = list.map(r => `
      <div class="revslide">
        <div class="revcard">
          <div class="revcard__stars" aria-hidden="true">${'★'.repeat(r.rating)}</div>
          <p class="revcard__text">${r.text[L]}</p>
          <p class="revcard__who">${r.name}<small>${r.origin[L]}</small></p>
        </div>
      </div>`).join('');
    $('#revDots').innerHTML = list.map((_, i) => `<button type="button" data-i="${i}" aria-label="Review ${i + 1}"></button>`).join('');
    $$('#revDots button').forEach(d => d.addEventListener('click', () => goRev(parseInt(d.dataset.i, 10))));
    goRev(0);
  }
  function goRev(i) {
    revPos = i;
    $('#revTrack').style.transform = `translateX(-${i * 100}%)`;
    $$('#revDots button').forEach((d, j) => d.classList.toggle('is-active', j === i));
  }
  function initReviewAutoplay() {
    const wrap = $('.reviews__wrap');
    const n = window.SITE_DATA.testimonials.length;
    wrap.addEventListener('mouseenter', () => clearInterval(revTimer));
    wrap.addEventListener('mouseleave', startRevTimer);
    function startRevTimer() { clearInterval(revTimer); revTimer = setInterval(() => goRev((revPos + 1) % n), 6000); }
    startRevTimer();
  }

  /* ---------- FAQ ---------- */
  function renderFaq() {
    const L = window.getLang();
    $('#faqList').innerHTML = window.SITE_DATA.faqs.map((f, i) => `
      <div class="faqitem reveal" style="--d:${i * 0.05}s">
        <button type="button" class="faqitem__q" aria-expanded="false">${f.q[L]}${SVG.chevron}</button>
        <div class="faqitem__a"><p>${f.a[L]}</p></div>
      </div>`).join('');
    $$('.faqitem__q').forEach(q => q.addEventListener('click', () => {
      const item = q.parentElement;
      const open = item.classList.contains('is-open');
      $$('.faqitem').forEach(x => { x.classList.remove('is-open'); x.querySelector('.faqitem__a').style.maxHeight = null; x.querySelector('.faqitem__q').setAttribute('aria-expanded', 'false'); });
      if (!open) {
        item.classList.add('is-open');
        const a = item.querySelector('.faqitem__a');
        a.style.maxHeight = a.scrollHeight + 'px';
        q.setAttribute('aria-expanded', 'true');
      }
    }));
  }

  /* ---------- টোস্ট ---------- */
  let toastTimer;
  function toast(msg, kind) {
    const el = $('#toast');
    el.textContent = msg;
    el.className = 'toast is-show' + (kind ? ' toast--' + kind : '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.className = 'toast'; }, 4600);
  }

  /* ---------- ফর্ম ভ্যালিডেশন + বুকিং ---------- */
  function markError(field, bad) {
    field.closest('.form__field').classList.toggle('has-error', bad);
    return !bad;
  }
  function initBookingForm() {
    const form = $('#bookingForm');
    const dateInput = $('#bDate');
    dateInput.min = new Date().toISOString().split('T')[0];

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = $('#bName').value.trim();
      const phone = $('#bPhone').value.trim();
      const pkg = $('#bPackage').value;
      const date = $('#bDate').value;
      const people = parseInt($('#bPeople').value, 10);
      const email = $('#bEmail').value.trim();

      let ok = true;
      ok = markError($('#bName'), name.length < 2) && ok;
      ok = markError($('#bPhone'), !/^01[3-9]\d{8}$/.test(phone.replace(/[\s-]/g, ''))) && ok;
      ok = markError($('#bPackage'), !pkg) && ok;
      ok = markError($('#bDate'), !date || date < dateInput.min) && ok;
      ok = markError($('#bPeople'), !(people >= 1 && people <= 30)) && ok;
      ok = markError($('#bEmail'), email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) && ok;
      if (!ok) { toast(window.T('toast.fieldErr'), 'err'); return; }

      const btn = $('#bookingSubmit');
      const label = btn.querySelector('span');
      btn.disabled = true;
      label.textContent = window.T('book.submitting');

      const res = await window.PTR_API.saveSubmission('booking', { name, phone, package: pkg, date, people, email, note: $('#bNote').value.trim() });

      btn.disabled = false;
      label.textContent = window.T('book.submit');
      if (res && res.ok) {
        toast(res.mode === 'cloud' ? window.T('toast.bookingOk') : window.T('toast.bookingLocal'), 'ok');
        form.reset();
        $('#bPeople').value = 2;
      } else {
        toast(window.T('toast.bookingErr'), 'err');
      }
    });
  }

  function initNewsForm() {
    $('#newsForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = $('#newsEmail').value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { toast(window.T('toast.newsErr'), 'err'); return; }
      await window.PTR_API.saveSubmission('newsletter', { email });
      toast(window.T('toast.newsOk'), 'ok');
      $('#newsForm').reset();
    });
  }

  /* ---------- রেন্ডর অল (ভাষা বদলালেও চলে) ---------- */
  function renderAll() {
    renderAttractions();
    renderDestinations();
    renderPackages();
    fillPackageSelect();
    renderGuide();
    renderGallery();
    renderMapButtons();
    renderReviews();
    renderFaq();
    const y = $('#year');
    if (y) y.textContent = window.num(new Date().getFullYear());
    setupReveal();
    // ইতোমধ্যে কাউন্ট হয়ে গেলে ভাষা অনুযায়ী ফাইনাল ভ্যালু
    $$('.stat__num').forEach(el => {
      if (el.textContent !== '০' && el.textContent !== '0') {
        const target = parseFloat(el.dataset.count);
        const dec = parseInt(el.dataset.decimal || '0', 10);
        const suffix = el.dataset.suffix || '';
        const shown = dec ? target.toFixed(dec) : Math.round(target).toLocaleString('en-US');
        el.textContent = window.num(shown) + suffix;
      }
    });
  }

  /* ---------- ইনিট ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLang();
    $('#heroBg').style.backgroundImage = `url('${window.SITE_DATA.heroImage}')`;
    initNav();
    initDrawer();
    initDestTabs();
    initLightbox();
    initBookingForm();
    initNewsForm();
    renderAll();
    initReviewAutoplay();
    setupCounters();
    window.PTR_API.loadWeather();
    loadPackageData();
  });
})();
