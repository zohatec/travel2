/* ============================================================
   পদ্মা ট্যুর অ্যান্ড ট্রাভেলস (সদর দপ্তর: রাজশাহী) | js/data.js
   সারা বাংলাদেশ ও আন্তর্জাতিক ভ্রমণের বাস্তব ডেটা
   - attractions : রাজশাহী দপ্তর-শহরের যাচাইকৃত দর্শনীয় স্থান
   - destinations: দেশি (৮) + আন্তর্জাতিক (৮) গন্তব্য
   - packagesFallback : JSONBin ফেচিং বন্ধ থাকলে দেখানো ফ্ল্যাগশিপ প্যাকেজ
   ============================================================ */

window.SITE_DATA = {

  /* হিরো ব্যাকগ্রাউন্ড (পদ্মার সূর্যাস্ত — সদর দপ্তরের শহর) */
  heroImage: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/529cf57c3c6a.jpeg',

  /* ───────── রাজশাহী দপ্তর-শহরের দর্শনীয় স্থান (যাচাইকৃত) ───────── */
  attractions: [
    {
      id: 'vrm',
      img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/52b34ad592cb.jpg',
      name: { bn: 'বরেন্দ্র গবেষণা জাদুঘর', en: 'Varendra Research Museum' },
      tag: { bn: '১৯১০ • দেশের প্রাচীনতম জাদুঘর', en: '1910 • Oldest museum in Bangladesh' },
      desc: {
        bn: 'বরেন্দ্র সভ্যতার বিরল মূর্তি, তামাশাসন ও প্রত্নসম্পদের ভাণ্ডার — স্টেশন রোডের কাছেই।',
        en: 'A treasure of rare sculptures, copperplates and artifacts of the Barendra civilization, near Station Road.'
      },
      fee: { bn: '১০ বছরের নিচে ফ্রি • ১০+ ২০ টাকা • বিদেশি ১০০ টাকা', en: 'Under 10 free • 10+ Tk 20 • Foreigners Tk 100' },
      hours: { bn: 'শনি–বুধ ও শুক্র: ১০টা–বিকাল ৪টা', en: 'Sat–Wed & Fri: 10 AM–4 PM' },
      distance: { bn: 'প্রায় ১.৫ কিমি (স্টেশন রোড, বোয়ালিয়া)', en: '~1.5 km (Station Road, Boalia)' },
      mapQuery: 'Varendra Research Museum Rajshahi'
    },
    {
      id: 'puthia',
      img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1b720c092ee3.jpg',
      name: { bn: 'পুঠিয়া মন্দির কমপ্লেক্স', en: 'Puthia Temple Complex' },
      tag: { bn: 'দেশের বৃহত্তম মন্দির-ক্লাস্টার', en: "Largest temple cluster of the country" },
      desc: {
        bn: 'গোবিন্দ, জগন্নাথ ও শিব মন্দির আর পুঠিয়া রাজবাড়ির অসাধারণ টেরাকোটা কারুকাজ।',
        en: 'Govinda, Jagannath and Shiva temples plus the stunning terracotta work of Puthia Rajbari.'
      },
      fee: { bn: 'কমপ্লেক্স ফ্রি • রাজবাড়ী প্রায় ২০ টাকা', en: 'Complex free • Rajbari ~Tk 20' },
      hours: { bn: 'সকাল ৯টা – সন্ধ্যা ৫টা', en: '9 AM – 5 PM' },
      distance: { bn: 'প্রায় ২৩ কিমি (নাটোর হাইওয়ে, পুঠিয়া)', en: '~23 km (Natore highway, Puthia)' },
      mapQuery: 'Puthia Temple Complex Rajshahi'
    },
    {
      id: 'bagha',
      img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7b1aa0141bd7.jpg',
      name: { bn: 'বাঘা মসজিদ', en: 'Bagha Mosque' },
      tag: { bn: '১৫২৩-২৪ • সুলতানি স্থাপত্য', en: '1523–24 • Sultanate architecture' },
      desc: {
        bn: 'সুলতান নুসরাত শাহ নির্মিত, দেয়ালজুড়ে অসাধারণ টেরাকোটা অলংকরণের ঐতিহাসিক মসজিদ।',
        en: 'Built by Sultan Nusrat Shah, a historic mosque adorned with superb terracotta decoration.'
      },
      fee: { bn: 'প্রবেশ ফ্রি', en: 'Entry free' },
      hours: { bn: 'দিনের বেলা যেকোনো সময়', en: 'Any time during daylight' },
      distance: { bn: 'প্রায় ৪০ কিমি (বাঘা উপজেলা)', en: '~40 km (Bagha upazila)' },
      mapQuery: 'Bagha Mosque Rajshahi'
    },
    {
      id: 'makdum',
      img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/52f5c50d9504.jpg',
      name: { bn: 'শাহ মখদুম (রহ.) মাজার', en: 'Shah Makhdum (R) Shrine' },
      tag: { bn: 'পদ্মা তীরে সুফি দরগা', en: 'Sufi dargah on the Padma bank' },
      desc: {
        bn: '১৪শ শতকের সুফি সাধক শাহ মখদুম রুপস (রহ.)-এর পবিত্র মাজার — দরগাহ পাড়া, পদ্মার ধারে।',
        en: 'The sacred shrine of the 14th-century Sufi saint Shah Makhdum Rupos (R) at Dargah Para, beside the Padma.'
      },
      fee: { bn: 'প্রবেশ ফ্রি', en: 'Entry free' },
      hours: { bn: 'সারাদিন খোলা', en: 'Open all day' },
      distance: { bn: 'প্রায় ৩ কিমি (দরগাহ পাড়া)', en: '~3 km (Dargah Para)' },
      mapQuery: 'Shah Makhdum Dargah Rajshahi'
    },
    {
      id: 'padma',
      img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/77b6dabb0fb2.jpeg',
      name: { bn: 'পদ্মা গার্ডেন ও টি-বাঁধ', en: 'Padma Garden & T-Bandh' },
      tag: { bn: 'সূর্যাস্তের সেরা পয়েন্ট', en: 'The best sunset point' },
      desc: {
        bn: 'নদীর বিস্তৃত দৃশ্য, চরের বালুচর আর ট্রলার নৌভ্রমণ — সন্ধ্যায় পুরো শহর এখানে ভিড় করে।',
        en: 'Wide river views, sandy chars and trawler rides — the whole city gathers here at dusk.'
      },
      fee: { bn: 'প্রবেশ ফ্রি • নৌকা/ট্রলার ২০০–৫০০ টাকা/জন', en: 'Entry free • Boat/trawler Tk 200–500 pp' },
      hours: { bn: 'সকাল ৬টা – রাত ১০টা', en: '6 AM – 10 PM' },
      distance: { bn: 'প্রায় ৫ কিমি (রাজপাড়া, পদ্মা তীর)', en: '~5 km (Rajpara, Padma bank)' },
      mapQuery: 'Padma Garden Rajshahi'
    },
    {
      id: 'ru',
      img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bb1e8bdf5695.jpeg',
      name: { bn: 'রাজশাহী বিশ্ববিদ্যালয়', en: 'University of Rajshahi' },
      tag: { bn: 'দেশের ২য় বৃহত্তম ক্যাম্পাস', en: "Country's 2nd largest campus" },
      desc: {
        bn: 'কেন্দ্রীয় শহীদ মিনার, ক্যাম্পাস লেক আর ঘন সবুজ — সকালবেলার হাঁটার জন্য চমৎকার।',
        en: 'The central Shaheed Minar, campus lake and lush greenery — great for a morning walk.'
      },
      fee: { bn: 'প্রবেশ ফ্রি', en: 'Entry free' },
      hours: { bn: 'সকাল ৮টা – রাত ৮টা', en: '8 AM – 8 PM' },
      distance: { bn: 'প্রায় ৩ কিমি (মতিহার)', en: '~3 km (Motihar)' },
      mapQuery: 'University of Rajshahi'
    },
    {
      id: 'silk',
      img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/91ff166bdbce.png',
      name: { bn: 'রাজশাহী সিল্ক', en: 'Rajshahi Silk' },
      tag: { bn: 'রেশম শহরের ঐতিহ্য', en: 'Heritage of the Silk City' },
      desc: {
        bn: 'ঐতিহ্যবাহী সিল্ক মিল ও শোরুম — শাড়ি, পাঞ্জাবি, স্কার্ফ সরাসরি তাঁতীদের কাছ থেকে।',
        en: 'Heritage silk mills and showrooms — sarees, panjabis and scarves straight from the weavers.'
      },
      fee: { bn: 'প্রবেশ ফ্রি • শাড়ি ২,১০০–৯,৫০০+ টাকা', en: 'Entry free • Sarees Tk 2,100–9,500+' },
      hours: { bn: 'সকাল ১০টা – রাত ৮টা', en: '10 AM – 8 PM' },
      distance: { bn: 'প্রায় ১–৩ কিমি (শহরজুড়ে শোরুম)', en: '~1–3 km (showrooms across the city)' },
      mapQuery: 'Rajshahi Silk Showroom'
    },
    {
      id: 'mango',
      img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/662b5bfcb749.jpg',
      name: { bn: 'আম বাগান ও আমের বাজার', en: 'Mango Orchards & Markets' },
      tag: { bn: 'মৌসুম: মে–জুলাই', en: 'Season: May–July' },
      desc: {
        bn: 'খিরশা, গোপালভোগ, ল্যাংড়া আর ফজলির রাজ্য — বাগানে গাছপাকা আমের স্বাদ নিন।',
        en: 'The realm of Khirsha, Gopalbhog, Langra and Fazli — taste tree-ripened mangoes at the orchards.'
      },
      fee: { bn: 'বাগান ভিজিট ১০০–৩০০ টাকা • আম ৬০–৩০০ টাকা/কেজি', en: 'Orchard visit Tk 100–300 • Mangoes Tk 60–300/kg' },
      hours: { bn: 'সকাল ৮টা – বিকেল ৫টা', en: '8 AM – 5 PM' },
      distance: { bn: 'প্রায় ১০–৩০ কিমি (শহরতলির বাগান)', en: '~10–30 km (orchards around the city)' },
      mapQuery: 'Rajshahi mango orchard'
    }
  ],

  /* ───────── গন্তব্য: দেশি (৮) ও আন্তর্জাতিক (৮) ─────────
     price = জনপ্রতি শুরুর মূল্য (আনুমানিক, মৌসুম ও এয়ারলাইনভেদে পরিবর্তনশীল) */
  destinations: {
    bd: [
      {
        id: 'cox', priceFrom: 5999,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b840ba323328.jpg',
        name: { bn: 'কক্সবাজার', en: "Cox's Bazar" },
        tag: { bn: 'বিশ্বের দীর্ঘতম সমুদ্রসৈকত', en: 'World\'s longest natural sea beach' },
        desc: { bn: 'প্রায় ১২০ কিমি ধারাবাহিক বালুকাময় সৈকত — ইনানী, হিমছড়ি, মেরিন ড্রাইভ ও সূর্যাস্ত ক্রুজ।', en: 'About 120 km of unbroken sandy beach — Inani, Himchari, Marine Drive and sunset cruises.' },
        duration: { bn: '৩ দিন / ২ রাত', en: '3 days / 2 nights' },
        mapQuery: "Cox's Bazar Bangladesh"
      },
      {
        id: 'stmartin', priceFrom: 9999,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a3ec78dd6bb3.jpg',
        name: { bn: 'সেন্ট মার্টিন', en: 'Saint Martin' },
        tag: { bn: 'একমাত্র প্রবাল দ্বীপ • মৌসুম: নভে–মার্চ', en: 'The only coral island • Season: Nov–Mar' },
        desc: { bn: 'টেকনাফ থেকে শিপ/ক্রুজ যাত্রা, সাদা বালি, ছোট সেন্ট মার্টিন ও সূর্যোদয়ের ভাইরাল ভিউ।', en: 'Ship/cruise from Teknaf, white sand, Chera Dwip and the viral sunrise view.' },
        duration: { bn: '৩ দিন / ২ রাত', en: '3 days / 2 nights' },
        mapQuery: 'Saint Martin Island Bangladesh'
      },
      {
        id: 'sundarban', priceFrom: 8999,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/aa505957c469.jpg',
        name: { bn: 'সুন্দরবন', en: 'The Sundarbans' },
        tag: { bn: 'বিশ্বের বৃহত্তম ম্যানগ্রোভ অরণ্য', en: "World's largest mangrove forest" },
        desc: { bn: 'রয়েল বেঙ্গল টাইগারের আবাস — করমজল, হারবারিয়া, কোতকা ও নিশ্চিন্তপুরে লেঞ্চ ভ্রমণ।', en: 'Home of the Royal Bengal Tiger — guided boat safaris to Karamjal, Harbaria, Kotka & Nischintapur.' },
        duration: { bn: '৩ দিন / ২ রাত (লেঞ্চ)', en: '3 days / 2 nights (live-aboard)' },
        mapQuery: 'Sundarbans Bangladesh'
      },
      {
        id: 'sajek', priceFrom: 4999,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/40c9bab9f507.jpg',
        name: { bn: 'সাজেক ভ্যালি', en: 'Sajek Valley' },
        tag: { bn: 'মেঘদেবতার নাগালে ভ্যালি', en: 'The valley touching the clouds' },
        desc: { bn: 'রাঙামাটির খাগড়াছড়ি ট্রেইলে জিপ সাফারি, কংলাক প্যারা ও হেলিপ্যাড থেকে মেঘ-ভাঙা সূর্যাস্ত।', en: 'Jeep safari through Rangamati–Khagrachhari, Konglak Para and the cloud-kissed sunset from Helipad.' },
        duration: { bn: '২ দিন / ১ রাত', en: '2 days / 1 night' },
        mapQuery: 'Sajek Valley Bangladesh'
      },
      {
        id: 'bandarban', priceFrom: 4500,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7ade65b66bf8.jpg',
        name: { bn: 'বান্দরবান', en: 'Bandarban' },
        tag: { bn: 'নীলগিরি • নীলাচল • বগা লেক', en: 'Nilgiri • Nilachal • Boga Lake' },
        desc: { bn: 'নীলগিরির মেঘ-মিলন, নীলাচল সানসেট, বগা লেক ও চিম্বুক পাহাড়ের ট্রেইলিং।', en: 'Cloud-meets-hill at Nilgiri, Nilachal sunset, Boga Lake and the Chimbuk hill trails.' },
        duration: { bn: '২–৩ দিন', en: '2–3 days' },
        mapQuery: 'Bandarban Bangladesh'
      },
      {
        id: 'sylhet', priceFrom: 5500,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e8cd93acc8a4.jpg',
        name: { bn: 'সিলেট ও জাফলং', en: 'Sylhet & Jaflong' },
        tag: { bn: 'রাতারগুল জলাবন • চা বাগান', en: 'Ratargul swamp forest • tea gardens' },
        desc: { bn: 'রাতারগুলের ডুবে-যাওয়া বন, বিছনাকান্দির পাথুরে নদী আর শ্রীমঙ্গলের চা বাগান ভ্রমণ।', en: 'The submerged forest of Ratargul, pebble rivers of Bisnakandi and tea trails of Srimangal.' },
        duration: { bn: '৩ দিন / ২ রাত', en: '3 days / 2 nights' },
        mapQuery: 'Ratargul Swamp Forest Sylhet'
      },
      {
        id: 'kuakata', priceFrom: 6500,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/45e3aa00b3fc.jpg',
        name: { bn: 'কুয়াকাটা', en: 'Kuakata' },
        tag: { bn: 'সূর্যোদয় ও সূর্যাস্তের সৈকত', en: 'Beach of both sunrise & sunset' },
        desc: { bn: 'বারিসালের পান্না সৈকত — লিয়াজঙ্গ বন, ফাতরার চর আর রাখাইন সংস্কৃতি।', en: 'The gem beach of Barishal — Leajang forest, Fatrar Char and Rakhine culture.' },
        duration: { bn: '৩ দিন / ২ রাত', en: '3 days / 2 nights' },
        mapQuery: 'Kuakata Beach Bangladesh'
      },
      {
        id: 'rajheritage', priceFrom: 990,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1b720c092ee3.jpg',
        name: { bn: 'রাজশাহী হেরিটেজ ডে-ট্যুর', en: 'Rajshahi Heritage Day Tour' },
        tag: { bn: 'আমাদের সদর দপ্তরের শহর', en: 'Home city of our HQ' },
        desc: { bn: 'পুঠিয়া মন্দির, বাঘা মসজিদ, বরেন্দ্র জাদুঘর, সিল্ক শপিং আর পদ্মায় সূর্যাস্ত — এক দিনেই।', en: 'Puthia temples, Bagha Mosque, Varendra Museum, silk shopping and the Padma sunset — all in one day.' },
        duration: { bn: '১ দিন', en: '1 day' },
        mapQuery: 'Puthia Temple Complex Rajshahi'
      }
    ],

    intl: [
      {
        id: 'thailand', priceFrom: 54990,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/234daad800b3.jpg',
        name: { bn: 'থাইল্যান্ড — ব্যাংকক ও পটায়া', en: 'Thailand — Bangkok & Pattaya' },
        tag: { bn: 'সবচেয়ে জনপ্রিয় আউটবাউন্ড রুট', en: 'Our most popular outbound route' },
        desc: { bn: 'সাফারি ওয়ার্ল্ড, কোরাল আইল্যান্ড, সিটি ট্যুর আর ইন্দিরা মার্কেট শপিং — ভিসা সহায়তাসহ।', en: 'Safari World, Coral Island, city tour and Indira Market shopping — with visa assistance.' },
        duration: { bn: '৫ দিন / ৪ রাত', en: '5 days / 4 nights' },
        mapQuery: 'Wat Arun Bangkok Thailand'
      },
      {
        id: 'malaysia', priceFrom: 58990,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/90efcc76d1c7.jpg',
        name: { bn: 'মালয়েশিয়া — কুয়ালালামপুর ও গেন্টিং', en: 'Malaysia — Kuala Lumpur & Genting' },
        tag: { bn: 'পেট্রোনাস টাওয়ার ও পাহাড়ি রিসোর্ট', en: 'Petronas Towers & hilltop resort' },
        desc: { bn: 'পেট্রোনাস টাওয়ার, বাতু গুহা, গেন্টিং হাইল্যান্ডস আর পুট্রাজায়া লেক ক্রুজ।', en: 'Petronas Towers, Batu Caves, Genting Highlands and the Putrajaya lake cruise.' },
        duration: { bn: '৫ দিন / ৪ রাত', en: '5 days / 4 nights' },
        mapQuery: 'Petronas Towers Kuala Lumpur'
      },
      {
        id: 'bali', priceFrom: 78990,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5fb022e43e94.jpg',
        name: { bn: 'বালি, ইন্দোনেশিয়া', en: 'Bali, Indonesia' },
        tag: { bn: 'হানিমুনের স্বপ্নদ্বীপ', en: 'The dream honeymoon island' },
        desc: { bn: 'উলুবাতু মন্দির, টেগালালাং ধানখেত, কিন্তামানি আগ্নেয়গিরি আর বেনোয়া বিচ — হানিমুন স্পেশাল।', en: 'Uluwatu Temple, Tegallalang rice terraces, Kintamani volcano and Benoa Beach — honeymoon special.' },
        duration: { bn: '৫ দিন / ৪ রাত', en: '5 days / 4 nights' },
        mapQuery: 'Tegallalang Rice Terrace Bali'
      },
      {
        id: 'dubai', priceFrom: 84990,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e31b2d0f0e8d.jpeg',
        name: { bn: 'দুবাই ও আবুধাবি', en: 'Dubai & Abu Dhabi' },
        tag: { bn: 'বুর্জ খলিফা • ডেজার্ট সাফারি', en: 'Burj Khalifa • desert safari' },
        desc: { bn: 'বুর্জ খলিফা অ্যাট দ্য টপ, দুবাই মল, ডেজার্ট সাফারি, শেখ জায়েদ মসজিদ ও মেরিনা ক্রুজ।', en: 'Burj Khalifa At The Top, Dubai Mall, desert safari, Sheikh Zayed Mosque and Marina cruise.' },
        duration: { bn: '৪ দিন / ৩ রাত', en: '4 days / 3 nights' },
        mapQuery: 'Burj Khalifa Dubai'
      },
      {
        id: 'singapore', priceFrom: 89990,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f186f25e7b44.jpg',
        name: { bn: 'সিঙ্গাপুর + মালয়েশিয়া', en: 'Singapore + Malaysia Combo' },
        tag: { bn: 'দুই দেশের কম্বো প্যাকেজ', en: 'Two-country combo package' },
        desc: { bn: 'গার্ডেন্স বাই দ্য বে, সেন্টোসা, ইউনিভার্সাল স্টুডিও ও কুয়ালালামপুর সিটি ট্যুর — এক ভ্রমণেই।', en: 'Gardens by the Bay, Sentosa, Universal Studios and a KL city tour — all in one trip.' },
        duration: { bn: '৬ দিন / ৫ রাত', en: '6 days / 5 nights' },
        mapQuery: 'Marina Bay Sands Singapore'
      },
      {
        id: 'maldives', priceFrom: 94990,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a844fc5ff6e2.jpg',
        name: { bn: 'মালদ্বীপ', en: 'Maldives' },
        tag: { bn: 'ওভারওয়াটার ভিলা ও পান্না-নীল লগুন', en: 'Overwater villas & turquoise lagoons' },
        desc: { bn: 'মালে সিটি ট্যুর, ওভারওয়াটার ভিলা স্টে, স্নোর্কেলিং ও সানসেট ডলফিন ক্রুজ।', en: 'Malé city tour, overwater villa stay, snorkeling and a sunset dolphin cruise.' },
        duration: { bn: '৪ দিন / ৩ রাত', en: '4 days / 3 nights' },
        mapQuery: 'Maldives'
      },
      {
        id: 'turkey', priceFrom: 129990,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/eb12a12b4288.jpg',
        name: { bn: 'তুরস্ক — ইস্তানবুল ও কাপাদোসিয়া', en: 'Türkiye — Istanbul & Cappadocia' },
        tag: { bn: 'বেলুন-শহর ও দুই মহাদেশের নগরী', en: 'Balloon city & the city of two continents' },
        desc: { bn: 'হাগিয়া সোফিয়া, বোসফরাস ক্রুজ, গ্র্যান্ড বাজার আর কাপাদোসিয়ার বেলুন ফ্লাইট।', en: 'Hagia Sophia, Bosphorus cruise, Grand Bazaar and the famous Cappadocia balloon flight.' },
        duration: { bn: '৭ দিন / ৬ রাত', en: '7 days / 6 nights' },
        mapQuery: 'Cappadocia Turkey'
      },
      {
        id: 'umrah', priceFrom: 124990,
        img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b4f1c848c962.jpg',
        name: { bn: 'উমরাহ — মক্কা ও মদিনা', en: 'Umrah — Makkah & Madinah' },
        tag: { bn: 'লাইসেন্সপ্রাপ্ত পার্টনারের মাধ্যমে', en: 'Through licensed partners' },
        desc: { bn: '১৪ দিনের মাফাস্সাল প্যাকেজ — এসি বাস, নিকটবর্তী হোটেল, বাংলা-ভাষী মুতাওয়াইফ ও জিয়ারত।', en: 'A 14-day package — AC bus transport, hotels near the Haram, Bengali-speaking mutawwif and ziyarah.' },
        duration: { bn: '১৪ দিন', en: '14 days' },
        mapQuery: 'Masjid al-Haram Makkah'
      }
    ]
  },

  /* ───────── ফ্ল্যাগশিপ প্যাকেজ (JSONBin ফলব্যাক ডেটা) ───────── */
  packagesFallback: [
    {
      id: 'heritage-trail',
      img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/19e6253992d8.jpg',
      title: { bn: 'ঐতিহ্য ট্রেইল: পুঠিয়া–বাঘা (রাজশাহী)', en: 'Heritage Trail: Puthia–Bagha (Rajshahi)' },
      duration: { bn: '১ দিন', en: '1 day' },
      price: 1450,
      popular: true,
      badge: { bn: 'জনপ্রিয়', en: 'Popular' },
      includes: [
        { bn: 'পুঠিয়া রাজবাড়ী ও মন্দির কমপ্লেক্স', en: 'Puthia Rajbari & temple complex' },
        { bn: 'বাঘা মসজিদ ও বাঘা দরগা', en: 'Bagha Mosque & Bagha Dargah' },
        { bn: 'বরেন্দ্র জাদুঘর প্রবেশ ফি', en: 'Varendra Museum entry ticket' },
        { bn: 'এসি পরিবহন + অভিজ্ঞ গাইড', en: 'AC transport + expert guide' }
      ]
    },
    {
      id: 'cox-family',
      img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d68f14db09de.jpg',
      title: { bn: 'কক্সবাজার ফ্যামিলি স্পেশাল', en: "Cox's Bazar Family Special" },
      duration: { bn: '৩ দিন / ২ রাত', en: '3 days / 2 nights' },
      price: 7990,
      popular: false,
      badge: null,
      includes: [
        { bn: 'এসি বাস/ট্রেনে যাতায়াত', en: 'AC bus/train round trip' },
        { bn: '৩-স্টার হোটেল (ডাবল শেয়ারিং)', en: '3-star hotel (double sharing)' },
        { bn: 'ইনানী, হিমছড়ি ও মেরিন ড্রাইভ', en: 'Inani, Himchari & Marine Drive' },
        { bn: 'প্রতিদিন নাস্তা + লাঞ্চ', en: 'Daily breakfast + lunch' }
      ]
    },
    {
      id: 'hill-trio',
      img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/40e15ba17dfe.jpeg',
      title: { bn: 'সাজেক–বান্দরবান পাহাড়ি ট্যুর', en: 'Sajek–Bandarban Hill Tour' },
      duration: { bn: '৩ দিন / ২ রাত', en: '3 days / 2 nights' },
      price: 5490,
      popular: false,
      badge: null,
      includes: [
        { bn: 'সাজেক চেক-পোস্ট থেকে মেঘের দেশে', en: 'From Sajek check-post to cloud country' },
        { bn: 'নীলগিরি ও নীলাচল সানসেট', en: 'Nilgiri & Nilachal sunset' },
        { bn: 'রেজিস্টার্ড জিপ ও লোকাল গাইড', en: 'Registered jeep & local guide' },
        { bn: 'রিসোর্ট থাকা + বার-বিকিউ ডিনার', en: 'Resort stay + BBQ dinner' }
      ]
    },
    {
      id: 'bangkok-gateway',
      img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8467af7a467a.jpg',
      title: { bn: 'ব্যাংকক-পটায়া গেটওয়ে (থাইল্যান্ড)', en: 'Bangkok–Pattaya Gateway (Thailand)' },
      duration: { bn: '৫ দিন / ৪ রাত', en: '5 days / 4 nights' },
      price: 54990,
      popular: false,
      badge: { bn: 'আউটবাউন্ড', en: 'Outbound' },
      includes: [
        { bn: 'এয়ার টিকিট + থাইল্যান্ড ভিসা সহায়তা', en: 'Air ticket + Thailand visa assistance' },
        { bn: '৪-স্টার হোটেল + প্রতিদিন নাস্তা', en: '4-star hotel + daily breakfast' },
        { bn: 'কোরাল আইল্যান্ড ও সাফারি ওয়ার্ল্ড', en: 'Coral Island & Safari World' },
        { bn: 'বাংলা-ভাষী ট্যুর লিডার সহ', en: 'With a Bengali-speaking tour leader' }
      ]
    }
  ],

  /* ───────── গ্যালারি ───────── */
  gallery: [
    { img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7f00964c9384.jpg', cap: { bn: 'বরেন্দ্র সভ্যতার প্রাচীন মূর্তি', en: 'Ancient sculpture of the Barendra civilization' } },
    { img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c2c775ee97d8.jpg', cap: { bn: 'বাঘা মসজিদের অভ্যন্তরভাগ', en: 'Inside the Bagha Mosque' } },
    { img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/67c94f0e8f9f.jpeg', cap: { bn: 'মাটির পাত্রে মিষ্টি দই', en: 'Mishti doi in clay pots' } },
    { img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4fc00ff21b64.jpg', cap: { bn: 'পুঠিয়ার টেরাকোটা কারুকাজ', en: 'Terracotta art of Puthia' } },
    { img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/17dab305cdb5.jpg', cap: { bn: 'খাজা — রাজশাহীর সিগনেচার মিষ্টি', en: "Khaja — Rajshahi's signature sweet" } },
    { img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8f5ace9e2891.jpg', cap: { bn: 'পদ্মায় নৌভ্রমণ', en: 'Boating on the Padma' } },
    { img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c6eb09b5bdb5.jpg', cap: { bn: 'ঐতিহ্যবাহী মিষ্টান্ন', en: 'Traditional sweets' } },
    { img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/529cf57c3c6a.jpeg', cap: { bn: 'পদ্মার বুকে সূর্যাস্ত', en: 'Sunset on the Padma' } },
    { img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ba8ffe64a794.jpg', cap: { bn: 'সুন্দরবনের গহীনে', en: 'Deep inside the Sundarbans' } },
    { img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ba4eb0f7198a.jpg', cap: { bn: 'দুবাইয়ের আকাশরেখা', en: 'The skyline of Dubai' } },
    { img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3b2f71271c72.jpg', cap: { bn: 'মালদ্বীপের পান্না-নীল', en: 'The turquoise of the Maldives' } },
    { img: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9b9e746752cb.jpg', cap: { bn: 'কাপাদোসিয়ার আকাশে বেলুন', en: 'Balloons over Cappadocia' } }
  ],

  /* ───────── রিভিউ (উদাহরণ কনটেন্ট — README দেখুন) ───────── */
  testimonials: [
    {
      name: 'তানিয়া রহমান', origin: { bn: 'ঢাকা', en: 'Dhaka' }, rating: 5,
      text: { bn: 'প্যাকেজের মূল্য আর যা লেখা ছিল ঠিক তাই পেয়েছি। পুঠিয়া-বাঘা ট্যুরের গাইড দুর্দান্ত — প্রতিটি স্থাপনার পেছনের গল্প শুনলাম।', en: 'The price matched exactly what was written. The guide on the Puthia–Bagha tour was brilliant — heard the story behind every monument.' }
    },
    {
      name: 'James Whitfield', origin: { bn: 'যুক্তরাজ্য', en: 'United Kingdom' }, rating: 5,
      text: { bn: 'দ্বিভাষিক ওয়েবসাইট প্ল্যান করা সহজ করে দিয়েছে। ঘণ্টার মধ্যেই ফোন কলে বুকিং কনফার্ম। রাজশাহী বাংলাদেশের সবচেয়ে অবমূল্যায়িত শহর।', en: 'The bilingual website made planning so easy. My booking was confirmed with a phone call within hours. Rajshahi is Bangladesh\'s most underrated city.' }
    },
    {
      name: 'মাহমুদুল হাসান', origin: { bn: 'রাজশাহী', en: 'Rajshahi' }, rating: 5,
      text: { bn: 'ভিসা প্রসেসিং থেকে এয়ারপোর্ট ড্রপ — থাইল্যান্ড ট্যুরের পুরো ব্যবস্থাপনা নিখুঁত ছিল। রাজশাহী থেকে এমন সার্ভিস ভাবতেই পারিনি।', en: 'From visa processing to airport drop — the whole Thailand tour management was flawless. I never expected such service from Rajshahi.' }
    },
    {
      name: 'সাজিদ হোসেন', origin: { bn: 'খুলনা', en: 'Khulna' }, rating: 5,
      text: { bn: 'সুন্দরবনের লেঞ্চ প্যাকেজ অসাধারণ ছিল। ফর্মে বুক করে এক কলেই কনফার্ম — এত ঝামেলাহীন বুকিং আগে কখনো করিনি।', en: 'The Sundarbans live-aboard package was amazing. Booked via the form and confirmed in one call — never had such a hassle-free booking.' }
    },
    {
      name: 'মিতু আক্তার', origin: { bn: 'বরিশাল', en: 'Barishal' }, rating: 5,
      text: { bn: 'পরিবার নিয়ে কক্সবাজার গিয়েছিলাম — বাচ্চারা ইনানী আর মেরিন ড্রাইভে মেতে উঠেছে। পুরো খরচ আগে থেকেই জানা ছিল, কোনো লুকানো বিল নেই।', en: 'Took the family to Cox\'s Bazar — the kids loved Inani and Marine Drive. We knew the full cost upfront; no hidden bills at all.' }
    }
  ],

  /* ───────── FAQ ───────── */
  faqs: [
    {
      q: { bn: 'ফর্ম জমা দিলে বুকিং কীভাবে নিশ্চিত হয়?', en: 'How is my booking confirmed after submitting the form?' },
      a: { bn: 'ফর্ম জমা হলে তথ্য সরাসরি আমাদের অনলাইন ডাটাবেসে (JSONBin) সেভ হয়। আমাদের টিম ২৪ ঘণ্টার মধ্যে কল দিয়ে তারিখ, মূল্য ও প্ল্যান কনফার্ম করে।', en: 'Your details go straight into our online database (JSONBin). Our team calls you within 24 hours to confirm the date, price and plan.' }
    },
    {
      q: { bn: 'প্যাকেজের মূল্যে কী কী অন্তর্ভুক্ত?', en: 'What is included in the package price?' },
      a: { bn: 'প্রতিটি প্যাকেজ কার্ডের "অন্তর্ভুক্ত" তালিকা দেখুন — সাধারণত পরিবহন, গাইড ফি, টিকিট ও নির্দিষ্ট খাবার অন্তর্ভুক্ত। ব্যক্তিগত শপিং ও অতিরিক্ত খাবার আলাদা।', en: 'Check the "includes" list on each package card — usually transport, guide fee, tickets and listed meals. Personal shopping and extra meals are separate.' }
    },
    {
      q: { bn: 'বিদেশ ট্যুরের জন্য পাসপোর্ট ও ভিসা লাগবে?', en: 'Do I need a passport and visa for international tours?' },
      a: { bn: 'হ্যাঁ, আন্তর্জাতিক ট্যুরে মান্য পাসপোর্ট লাগে। ই-পাসপোর্ট থাকলে ভিসা আবেদন, ডকুমেন্টেশন ও অ্যাপয়েন্টমেন্ট আমরাই সামলাই; পাসপোর্ট না থাকলে নতুন আবেদনেও সাহায্য করি।', en: 'Yes, international tours require a valid passport. With an e-passport we handle the visa application, documentation and appointments; we also assist with new passport applications.' }
    },
    {
      q: { bn: 'শিশুদের জন্য ভাড়া কত?', en: 'What is the fare for children?' },
      a: { bn: '৫ বছরের নিচের শিশু সম্পূর্ণ ফ্রি, ৫–১০ বছর প্যাকেজ মূল্যের ৫০%। বুকিং ফর্মের নোটে শিশু সংখ্যা লিখে দিন।', en: 'Children under 5 join free; ages 5–10 pay 50% of the package price. Mention the number of children in the booking note.' }
    },
    {
      q: { bn: 'কাস্টম ট্যুর করা যাবে কি?', en: 'Can I arrange a custom tour?' },
      a: { bn: 'অবশ্যই। গ্রুপ সাইজ, দিনসংখ্যা ও বাজেট বুকিং ফর্মের বিশেষ নির্দেশনায় লিখুন — দেশি বা বিদেশি যেকোনো গন্তব্যে ব্যক্তিগত প্ল্যান ও মূল্য বানিয়ে দেব।', en: 'Of course. Write your group size, days and budget in the special-instructions box — we will craft a custom plan and quote for any destination, domestic or international.' }
    },
    {
      q: { bn: 'অগ্রিম পেমেন্ট লাগে কি?', en: 'Do I need to pay in advance?' },
      a: { bn: 'দেশি ট্যুরে বুকিং লক করতে প্যাকেজ মূল্যের ২০%, আন্তর্জাতিক ট্যুরে প্রায় ৩০% অগ্রিম লাগে (ভিসা ও টিকিটের জন্য)। বিকাশ/নগদ/রকেট/ব্যাংক সব সাপোর্টেড।', en: 'A 20% advance locks domestic bookings; international tours need ~30% (for visa and tickets). bKash, Nagad, Rocket and bank transfers are all accepted.' }
    },
    {
      q: { bn: 'বাতিল করলে রিফান্ড পলিসি কী?', en: 'What is the refund policy on cancellation?' },
      a: { bn: 'ট্যুরের ৭২ ঘণ্টা আগে বাতিলে ৯০%, ২৪–৭২ ঘণ্টার মধ্যে ৫০% রিফান্ড। আমাদের কারণে বাতিল হলে সম্পূর্ণ ১০০% ফেরত।', en: 'Cancel 72+ hours before the tour for a 90% refund; 24–72 hours gets 50%. If we cancel, you get a full 100% refund.' }
    }
  ],

  /* ───────── ভ্রমণ গাইড: যাতায়াত / থাকা / খাওয়া-কেনা ───────── */
  guide: {
    transport: [
      {
        icon: 'train',
        name: { bn: 'ট্রেন (ঢাকা ↔ রাজশাহী)', en: 'Train (Dhaka ↔ Rajshahi)' },
        detail: { bn: 'সিল্ক সিটি এক্সপ্রেস ও পদ্মা এক্সপ্রেস — কমলাপুর থেকে রাজশাহী কোর্ট স্টেশন, সময় প্রায় ৪.৫–৫.৫ ঘণ্টা', en: 'Silk City Express & Padma Express — Kamalapur to Rajshahi Court Station, about 4.5–5.5 hrs' },
        price: { bn: 'শোভন ৩১৫–৪০০ • স্নিগ্ধা প্রায় ৮৮০ টাকা', en: 'Shovan Tk 315–400 • Snigdha ~Tk 880' }
      },
      {
        icon: 'bus',
        name: { bn: 'বাস (ঢাকা ↔ রাজশাহী)', en: 'Bus (Dhaka ↔ Rajshahi)' },
        detail: { bn: 'শোহাগ, গ্রিনলাইন, শ্যামলী, হানিফ — চারমাথা টার্মিনাল নামবেন, সময় প্রায় ৫ ঘণ্টা', en: 'Shohag, Green Line, Shyamoli, Hanif — get off at Charmatha terminal, about 5 hrs' },
        price: { bn: 'নন-এসি ৫০০–৭০০ • এসি ৭০০–১,৪০০ টাকা', en: 'Non-AC Tk 500–700 • AC Tk 700–1,400' }
      },
      {
        icon: 'plane',
        name: { bn: 'বিমান (ঢাকা ↔ রাজশাহী)', en: 'Flight (Dhaka ↔ Rajshahi)' },
        detail: { bn: 'ইউএস-বাংলা এয়ারলাইন্স — শাহ মখদুম বিমানবন্দর (RJH), সময় প্রায় ৪০ মিনিট', en: 'US-Bangla Airlines — Shah Makhdum Airport (RJH), about 40 minutes' },
        price: { bn: 'প্রায় ৪,৫০০–১০,০০০ টাকা', en: '~Tk 4,500–10,000' }
      },
      {
        icon: 'bus',
        name: { bn: 'বাস (ঢাকা ↔ কক্সবাজার)', en: "Bus (Dhaka ↔ Cox's Bazar)" },
        detail: { bn: 'রিজেন্সি, গ্রিনলাইন, শোহাগ ইত্যাদি — রাতভর যাত্রা, সময় প্রায় ১০–১২ ঘণ্টা', en: 'Regency, Green Line, Shohag etc. — overnight journey, about 10–12 hrs' },
        price: { bn: 'এসি ২,০০০–২,৮০০ টাকা', en: 'AC Tk 2,000–2,800' }
      },
      {
        icon: 'plane',
        name: { bn: 'বিমান (ঢাকা ↔ কক্সবাজার)', en: "Flight (Dhaka ↔ Cox's Bazar)" },
        detail: { bn: 'বিমান বাংলাদেশ, ইউএস-বাংলা, নভোএয়ার — সময় প্রায় ১ ঘণ্টা', en: 'Biman, US-Bangla, Novoair — about 1 hour' },
        price: { bn: 'প্রায় ৫,৫০০–১২,০০০ টাকা', en: '~Tk 5,500–12,000' }
      },
      {
        icon: 'rickshaw',
        name: { bn: 'শহরে ঘোরা', en: 'Getting around' },
        detail: { bn: 'রিকশা, সিএনজি অটো, রাইড-শেয়ারিং ও লোকাল বাস — স্পটগুলো ছোট দূরত্বেই', en: 'Rickshaws, CNG autos, ride-sharing and local buses — most spots are a short hop away' },
        price: { bn: 'রিকশা ৩০–১০০ • সিএনজি ৮০–২৫০ টাকা', en: 'Rickshaw Tk 30–100 • CNG Tk 80–250' }
      }
    ],
    stay: [
      {
        name: { bn: 'হোটেল নাইস ইন্টারন্যাশনাল (রাজশাহী)', en: 'Hotel Nice International (Rajshahi)' },
        area: { bn: 'লক্ষ্মীপুর মোড়, বোয়ালিয়া', en: 'Laxmipur Moor, Boalia' },
        price: { bn: '১,৫০০–৩,৫০০ টাকা/রাত', en: 'Tk 1,500–3,500 / night' }
      },
      {
        name: { bn: 'রয়্যাল রাজ হোটেল (রাজশাহী)', en: 'Royal Raj Hotel (Rajshahi)' },
        area: { bn: 'শহর কেন্দ্র', en: 'City centre' },
        price: { bn: '২,০০০–৪,৫০০ টাকা/রাত', en: 'Tk 2,000–4,500 / night' }
      },
      {
        name: { bn: 'কক্সবাজার/সিলেটের হোটেল ও রিসোর্ট', en: "Hotels & resorts in Cox's Bazar / Sylhet" },
        area: { bn: 'সৈকতমুখী ও শহরের ভেতরে বিভিন্ন মানের', en: 'Beach-front and city options across price tiers' },
        price: { bn: '১,০০০–৮,০০০ টাকা/রাত', en: 'Tk 1,000–8,000 / night' }
      },
      {
        name: { bn: 'পাহাড়ি রিসোর্ট (সাজেক/বান্দরবান)', en: 'Hill resorts (Sajek / Bandarban)' },
        area: { bn: 'মেঘ-ভাঙা ভ্যালির পাশে কটেজ ও রিসোর্ট', en: 'Cottages and resorts beside the cloud-kissed valleys' },
        price: { bn: '২,৫০০–৭,০০০ টাকা/রাত', en: 'Tk 2,500–7,000 / night' }
      },
      {
        name: { bn: 'বাজেট গেস্টহাউস', en: 'Budget guesthouses' },
        area: { bn: 'সব বড় শহরে একাধিক', en: 'Multiple options in every major city' },
        price: { bn: '৬০০–১,২০০ টাকা/রাত', en: 'Tk 600–1,200 / night' }
      }
    ],
    food: [
      {
        name: { bn: 'মিষ্টি দই', en: 'Mishti Doi' },
        detail: { bn: 'চটক ও সাহেব বাজারের ঐতিহ্যবাহী দইয়ের দোকান (রাজশাহী)', en: 'The legendary doi shops of Chatok & Saheb Bazar, Rajshahi' },
        price: { bn: '৪০–৮০ টাকা/মাটির পাত্র', en: 'Tk 40–80 per clay pot' }
      },
      {
        name: { bn: 'খাজা', en: 'Khaja' },
        detail: { bn: 'রাজশাহীর সিগনেচার মিষ্টান্ন — উপহারে সবচেয়ে জনপ্রিয়', en: "Rajshahi's signature sweet — the most popular souvenir" },
        price: { bn: '১৫০–৩০০ টাকা/প্যাকেট', en: 'Tk 150–300 per pack' }
      },
      {
        name: { bn: 'আম', en: 'Mangoes' },
        detail: { bn: 'খিরশা, গোপালভোগ, ল্যাংড়া, ফজলি (মৌসুম: মে–জুলাই)', en: 'Khirsha, Gopalbhog, Langra, Fazli (season: May–July)' },
        price: { bn: '৬০–৩০০ টাকা/কেজি', en: 'Tk 60–300 per kg' }
      },
      {
        name: { bn: 'সিল্ক শাড়ি', en: 'Silk saree' },
        detail: { bn: 'অরিজিনাল রাজশাহী সিল্ক — মিল ও শোরুমে সরাসরি', en: 'Original Rajshahi silk — direct from mills and showrooms' },
        price: { bn: '২,১০০–৯,৫০০+ টাকা', en: 'Tk 2,100–9,500+' }
      },
      {
        name: { bn: 'সমুদ্রের মাছ (কক্সবাজার)', en: 'Seafood (Cox\'s Bazar)' },
        detail: { bn: 'সৈকতের পাশের রেস্টুরেন্টে তাজা রুপচাঁদা, লোট্টা ও ক্র্যাব', en: 'Fresh rupchanda, loitta and crab at beach-side restaurants' },
        price: { bn: 'মাছ-ভাত সেট ২০০–৬০০ টাকা', en: 'Fish-rice set Tk 200–600' }
      },
      {
        name: { bn: 'পদ্মা তীরের মাছ ও দেশি রান্না', en: 'Riverside fish & local cuisine' },
        detail: { bn: 'পদ্মা তীরের রেস্টুরেন্টে তাজা নদীর মাছ ও দেশি মেনু', en: 'Fresh river fish and local menus at riverside restaurants' },
        price: { bn: 'মাছ-ভাত সেট ১৫০–৪০০ টাকা', en: 'Fish-rice set Tk 150–400' }
      }
    ]
  },

  /* ───────── ম্যাপ সেকশনের স্পট সিলেক্টর (দপ্তর + জনপ্রিয় গন্তব্য) ───────── */
  mapSpots: [
    { id: 'city', label: { bn: 'রাজশাহী দপ্তর', en: 'Rajshahi HQ' }, q: 'Laxmipur Moor Rajshahi', z: 13 },
    { id: 'vrm', label: { bn: 'বরেন্দ্র জাদুঘর', en: 'Varendra Museum' }, q: 'Varendra Research Museum Rajshahi', z: 14 },
    { id: 'puthia', label: { bn: 'পুঠিয়া', en: 'Puthia' }, q: 'Puthia Temple Complex Rajshahi', z: 13 },
    { id: 'bagha', label: { bn: 'বাঘা মসজিদ', en: 'Bagha Mosque' }, q: 'Bagha Mosque Rajshahi', z: 12 },
    { id: 'padma', label: { bn: 'পদ্মা গার্ডেন', en: 'Padma Garden' }, q: 'Padma Garden Rajshahi', z: 13 },
    { id: 'cox', label: { bn: 'কক্সবাজার', en: "Cox's Bazar" }, q: "Cox's Bazar Bangladesh", z: 11 },
    { id: 'stmartin', label: { bn: 'সেন্ট মার্টিন', en: 'Saint Martin' }, q: 'Saint Martin Island Bangladesh', z: 11 },
    { id: 'sundarban', label: { bn: 'সুন্দরবন', en: 'Sundarbans' }, q: 'Sundarbans Bangladesh', z: 10 },
    { id: 'sajek', label: { bn: 'সাজেক ভ্যালি', en: 'Sajek Valley' }, q: 'Sajek Valley Bangladesh', z: 12 },
    { id: 'sylhet', label: { bn: 'সিলেট', en: 'Sylhet' }, q: 'Sylhet Bangladesh', z: 12 },
    { id: 'bangkok', label: { bn: 'ব্যাংকক', en: 'Bangkok' }, q: 'Wat Arun Bangkok Thailand', z: 12 },
    { id: 'dubai', label: { bn: 'দুবাই', en: 'Dubai' }, q: 'Burj Khalifa Dubai', z: 12 },
    { id: 'makkah', label: { bn: 'মক্কা', en: 'Makkah' }, q: 'Masjid al-Haram Makkah', z: 12 }
  ]
};
