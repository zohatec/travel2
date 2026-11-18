/* ============================================================
   পদ্মা ট্যুর রাজশাহী | Padma Tours Rajshahi
   পদ্মা ট্যুর অ্যান্ড ট্রাভেলস (সদর দপ্তর: রাজশাহী) | js/config.js — ফ্রি ডাটা স্টোরেজ (JSONBin.io) কনফিগারেশন
   ------------------------------------------------------------
   SETUP (README.md দেখুন):
   1. https://jsonbin.io তে ফ্রি একাউন্ট খুলুন
   2. API Keys সেকশন থেকে "X-Master-Key" কপি করুন
   3. দুটি Bin তৈরি করুন:
      a. Packages bin  → ভিতরে [] বা আপনার প্যাকেজ লিস্ট
      b. Bookings bin  → ভিতরে [] (সাবমিশন স্টোর হবে)
   4. নিচের ফাঁকা জায়গায় key ও bin id বসিয়ে enabled: true করুন।

   ⚠️ Key না দিলে সাইট "ডেমো মোডে" চলবে:
      - প্যাকেজ: js/data.js এর ফলব্যাক ডেটা দেখাবে
      - ফর্ম: ব্রাউজারের localStorage এ সেভ হবে (কোনো ডেটা হারাবে না)
   ============================================================ */

window.SITE_CONFIG = {
  // ---- JSONBin.io (ফ্রি ক্লাউড ডাটা স্টোরেজ) ----
  jsonbin: {
    enabled: false,                                  // true করলে লাইভ ডাটা ফেচ হবে
    baseUrl: 'https://api.jsonbin.io/v3',
    masterKey: 'PASTE_YOUR_X_MASTER_KEY_HERE',       // jsonbin.io → API Keys
    packagesBinId: 'PASTE_PACKAGES_BIN_ID',          // প্যাকেজ লিস্ট সংরক্ষণের bin
    bookingsBinId: 'PASTE_BOOKINGS_BIN_ID'           // বুকিং/কন্টাক্ট সাবমিশনের bin
  },

  // ---- ঐচ্ছিক: Google Sheets (Apps Script Web App URL) ----
  // ফর্ম ডেটা গুগল শিটেও পাঠাতে চাইলে URL বসিয়ে sheetsEnabled: true করুন
  sheets: {
    enabled: false,
    webhookUrl: ''
  },

  // ---- Open-Meteo: ফ্রি আবহাওয়া API (কোনো key লাগে না) ----
  weather: {
    lat: 24.3745,   // রাজশাহী সিটি সেন্টার
    lon: 88.6042,
    url: 'https://api.open-meteo.com/v1/forecast?latitude=24.3745&longitude=88.6042&current=temperature_2m,relative_humidity_2m,weather_code&timezone=Asia%2FDhaka'
  },

  // ---- ব্যবসার যোগাযোগ তথ্য (নিজের তথ্য দিয়ে বদলান) ----
  business: {
    name: 'পদ্মা ট্যুর অ্যান্ড ট্রাভেলস',
    nameEn: 'Padma Tours & Travels',
    phone: '+8801712345678',
    email: 'hello@padmatoursrajshahi.com',
    address: '১৪২/এ, লক্ষ্মীপুর মোড়, বোয়ালিয়া, রাজশাহী ৬১০০'
  }
};
