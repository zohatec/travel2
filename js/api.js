/* ============================================================
   পদ্মা ট্যুর রাজশাহী | js/api.js
   ফ্রি ডাটা স্টোরেজ ও ডাটা ফেচিং লেয়ার:
   1) JSONBin.io  → প্যাকেজ ফেচ + ফর্ম সাবমিশন সেভ (ফ্রি ক্লাউড)
   2) localStorage → ডেমো মোড / অফলাইন ফলব্যাক
   3) Open-Meteo  → ফ্রি আবহাওয়া API (key ছাড়া)
   ============================================================ */

(function () {
  const CFG = () => window.SITE_CONFIG || {};

  /* ---------- JSONBin হেল্পার ---------- */
  function jheaders() {
    return {
      'X-Master-Key': CFG().jsonbin.masterKey,
      'Content-Type': 'application/json'
    };
  }

  function isCloudEnabled() {
    const j = CFG().jsonbin || {};
    return !!(j.enabled && j.masterKey && !j.masterKey.includes('PASTE_') &&
              j.bookingsBinId && !j.bookingsBinId.includes('PASTE_'));
  }

  /* ---------- প্যাকেজ লোড (ফেচ → ক্যাশ → ফলব্যাক) ---------- */
  async function loadPackages() {
    // ১) লোকাল ক্যাশ (দ্রুত প্রদর্শন)
    let cached = null;
    try { cached = JSON.parse(localStorage.getItem('ptr_packages') || 'null'); } catch (e) { /* ignore */ }

    // ২) JSONBin থেকে লাইভ ফেচ (চালু থাকলে)
    if (CFG().jsonbin && CFG().jsonbin.enabled &&
        CFG().jsonbin.packagesBinId && !CFG().jsonbin.packagesBinId.includes('PASTE_')) {
      try {
        const res = await fetch(`${CFG().jsonbin.baseUrl}/b/${CFG().jsonbin.packagesBinId}/latest`, {
          headers: jheaders(),
          cache: 'no-store'
        });
        if (res.ok) {
          const json = await res.json();
          const list = (json.record && json.record.length ? json.record : window.SITE_DATA.packagesFallback);
          try { localStorage.setItem('ptr_packages', JSON.stringify(list)); } catch (e) { /* ignore */ }
          return { data: list, mode: 'cloud' };
        }
      } catch (e) { /* নেটওয়ার্ক ব্যর্থ → ফলব্যাক */ }
    }

    // ৩) ক্যাশ → ফলব্যাক ডেটা
    if (cached && Array.isArray(cached) && cached.length) return { data: cached, mode: 'cache' };
    return { data: window.SITE_DATA.packagesFallback, mode: 'fallback' };
  }

  /* ---------- ফর্ম সাবমিশন সেভ (বুকিং/কন্টাক্ট/নিউজলেটার) ---------- */
  async function pushToBin(payload) {
    // bookings bin = একটি অ্যারে; GET → append → PUT
    const { baseUrl, bookingsBinId, masterKey } = CFG().jsonbin;
    const res = await fetch(`${baseUrl}/b/${bookingsBinId}/latest`, {
      headers: jheaders(), cache: 'no-store'
    });
    if (!res.ok) throw new Error('bin read failed');
    const json = await res.json();
    const list = Array.isArray(json.record) ? json.record : [];
    list.push(payload);
    const put = await fetch(`${baseUrl}/b/${bookingsBinId}`, {
      method: 'PUT',
      headers: { 'X-Master-Key': masterKey, 'Content-Type': 'application/json' },
      body: JSON.stringify(list)
    });
    if (!put.ok) throw new Error('bin write failed');
  }

  function saveLocal(payload) {
    let list = [];
    try { list = JSON.parse(localStorage.getItem('ptr_submissions') || '[]'); } catch (e) { /* ignore */ }
    list.push(payload);
    try { localStorage.setItem('ptr_submissions', JSON.stringify(list)); } catch (e) { /* ignore */ }
  }

  async function saveSubmission(type, fields) {
    const payload = Object.assign({ type, ts: new Date().toISOString() }, fields);

    // ঐচ্ছিক Google Sheets ওয়েবহুক
    if (CFG().sheets && CFG().sheets.enabled && CFG().sheets.webhookUrl) {
      try { fetch(CFG().sheets.webhookUrl, { method: 'POST', body: JSON.stringify(payload) }); } catch (e) { /* ignore */ }
    }

    if (isCloudEnabled()) {
      try {
        await pushToBin(payload);
        return { ok: true, mode: 'cloud' };
      } catch (e) {
        saveLocal(payload);
        return { ok: true, mode: 'local' };
      }
    }
    saveLocal(payload);
    return { ok: true, mode: 'local' };
  }

  /* ---------- ব্যবসার জন্য: সাবমিশন পড়া ----------
     কনসোলে লিখুন: PTR_API.getSubmissions()          */
  function getSubmissions() {
    try { return JSON.parse(localStorage.getItem('ptr_submissions') || '[]'); }
    catch (e) { return []; }
  }

  /* ---------- Open-Meteo আবহাওয়া (ফ্রি, key ছাড়া) ---------- */
  function wxText(code) {
    const lang = window.getLang();
    let key = 'wx.unknown';
    if (code === 0) key = 'wx.clear';
    else if (code <= 2) key = 'wx.cloudy';
    else if (code === 3 || code === 45 || code === 48) key = 'wx.overcast';
    else if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) key = 'wx.rain';
    else if (code >= 71 && code <= 86) key = 'wx.storm';
    else if (code >= 95) key = 'wx.storm';
    return window.T(key);
  }

  async function loadWeather() {
    const el = document.getElementById('weatherText');
    if (!el) return;
    try {
      const res = await fetch(CFG().weather.url, { cache: 'no-store' });
      if (!res.ok) throw new Error('weather failed');
      const j = await res.json();
      const c = j.current || {};
      const temp = Math.round(c.temperature_2m);
      const cond = wxText(c.weather_code);
      const hum = Math.round(c.relative_humidity_2m);
      el.textContent = `${window.getLang() === 'bn' ? 'রাজশাহী' : 'Rajshahi'}: ${window.num(temp)}°C • ${cond} • ${window.T('wx.humidity')} ${window.num(hum)}%`;
    } catch (e) {
      el.textContent = `${window.getLang() === 'bn' ? 'রাজশাহী' : 'Rajshahi'} — ${window.T('wx.error')}`;
    }
  }

  /* ---------- এক্সপোজ ---------- */
  window.PTR_API = { loadPackages, saveSubmission, getSubmissions, loadWeather, isCloudEnabled };
})();
