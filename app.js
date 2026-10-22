const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Shaxsiy rivojlanish',
    description: 'Har bir kichik odat maqsadga olib boruvchi kuchli mexanizmni tushuntiradi. O‘zingizga mos kuchli amallar yaratishga yordam beradi.',
    language: 'Inglizcha',
    pages: 320,
    readTime: '7 soat',
    type: 'free',
    price: 0,
    rating: 4.9,
    isFeatured: true,
    isNew: true,
    isRecommended: true,
    cover: 'cover-sunset',
    chapters: [
      { title: '1-bob. Odatlarni yaratish', text: 'Har bir yutuq kichik amallardan boshlanadi. Odatni o‘zgartirishning sirli yo‘li kichik va doimiy harakatlardan iborat. Bir oy davomida 1% yaxshilanishga urg‘u berish kerak. Bu ko‘plab insonlar uchun eng samarali yondashuvdir, chunki odamlar katta maqsadlarni qiyin deb biladi, ammo kichik qadamlar ularni muvaffaqiyatga olib keladi.' },
      { title: '2-bob. Odatlar va identitet', text: 'Insonlarning xatti-harakatlari o‘zlarini qanday ko‘rishini aniqlaydi. Agar siz “tubdan ishlovchi” deb o‘zingizni tasavvur qilsangiz, qarorlaringiz ham o‘zgaradi. Odatni qabul qilishning eng yaxshi usuli – muayyan identitetni tanlash va har kuni uning sadoqatli namoyandasi bo‘lishdir.' },
      { title: '3-bob. Oqim va doimiylik', text: 'Yaxshi o‘rnatilgan odatni saqlashning eng muhim jihati – doimiylik. Kichik, lekin muntazam qadamlar uzoq muddatda katta natijaga aylanadi. Sizga kerak bo‘lgan narsa – kutilmaysh hayajonni yaratish emas, balki rejaga rioya qilishdir.' }
    ]
  },
  {
    id: 2,
    title: 'The Lean Startup',
    author: 'Eric Ries',
    genre: 'Biznes va tadbirkorlik',
    description: 'Startaplar uchun tezkor, ma’lumotga asoslangan va takrorlanuvchi biznes modelini yaratish usullarini ochib beradi.',
    language: 'Inglizcha',
    pages: 336,
    readTime: '8 soat',
    type: 'premium',
    price: 16,
    rating: 4.8,
    isFeatured: true,
    isNew: true,
    isRecommended: false,
    cover: 'cover-ocean',
    chapters: [
      { title: '1-bob. O‘rganish va testlar', text: 'Startaplar odatda aniq mahsulot va maqsadga ega bo‘lib, lekin real bozor ehtiyoji haqida yetarlicha ma’lumotga ega bo‘lmaydi. Shu sababli tezkor tajribalar va o‘rganish ishlab chiqarish jarayoniga muhim ahamiyat kasb etadi.' },
      { title: '2-bob. Validatsiya', text: 'Mahsulotning ishlashini tekshirish uchun minimal versiya yaratish va foydalanuvchilar reaktsiyasini kuzatish zarur. Faqat ushbu jarayon bilan biznes modeli asoslangan bo‘lishi mumkin.' },
      { title: '3-bob. Iteratsiya', text: 'Har bir iteratsiya yangi ma’lumotlar oladi va o‘zgarishlar kiritishni odatga aylantiradi. Bu strategiya birinchidan to‘g‘ri yo‘lni tanlashga yordam beradi.' }
    ]
  },
  {
    id: 3,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    genre: 'Moliya va samaradorlik',
    description: 'Pul bilan munosabatlarning emotional va psixologik jihatlarini yoritadi. O‘rganishingiz kerak bo‘lgan narsa – yashash tarzi va qarorlar.',
    language: 'Inglizcha',
    pages: 256,
    readTime: '6 soat',
    type: 'free',
    price: 0,
    rating: 4.9,
    isFeatured: true,
    isNew: false,
    isRecommended: true,
    cover: 'cover-gold',
    chapters: [
      { title: '1-bob. Pulning falsafasi', text: 'Pulga munosabat insonning qarorlarini, qadriyatlarini va xavfsizlik hissini belgilaydi. Ba’zan odamlar pulni o‘qitadigan ma’lumot emas, balki shaxsiy tajriba bilan boshqaradi.' },
      { title: '2-bob. Kutilmagan tomonlar', text: 'Iqtisodiy muvaffaqiyatlar ko‘pincha maqsadli reja, sabr va puxta fikr bilan bog‘liq. Bu jarayonda ehtiyotkorlik va ehtiyotsizlikning farqi katta bo‘ladi.' },
      { title: '3-bob. Davomiylik', text: 'Bolaning moliyaviy qarorlari ko‘p hollarda vaqti-vaqtida qo‘llanadigan qoidalar bilan bog‘liq. O‘zingizga mos, soddalashtirilgan strategiyalar muhim.' }
    ]
  },
  {
    id: 4,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    genre: 'Dasturlash va IT',
    description: 'Yaxshi kodning tamoyillarini, o‘ziga xos uslubini va texnik oqilona yechimlarni ko‘rsatadi.',
    language: 'Inglizcha',
    pages: 464,
    readTime: '11 soat',
    type: 'premium',
    price: 22,
    rating: 4.8,
    isFeatured: false,
    isNew: true,
    isRecommended: true,
    cover: 'cover-ink',
    chapters: [
      { title: '1-bob. Kodning ma’nosi', text: 'Yaxshi kod faqat ishlashi bilan cheklanmaydi. U o‘qilishi, tushunilishi va o‘zgartirilishi qulay bo‘lishi kerak. Bu insoniy va texnik maqsadlar barcha loyihalarda muhimdir.' },
      { title: '2-bob. Nomlash va tuzilish', text: 'Nomi aniq bo‘lgan funksiya va o‘zgaruvchilar kodni soddalashtiradi. Qatorlar soni ko‘p bo‘lsa- ham, qo‘llanma va tayanch funktsiyalar kodni samarali qiladi.' },
      { title: '3-bob. Takrorlanishni kamaytirish', text: 'Bir xil logika va kodlarni takrorlamaslik dasturchilar o‘z vaqtini muhim vazifalarga sarflashga yordam beradi. Bu zamonaviy ishlab chiqishda eng muhim amaliyotlardan biridir.' }
    ]
  },
  {
    id: 5,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'Tarix',
    description: 'Insoniyatning tarixiy rivojlanishi, madaniyat, iqtisodiyot va ijtimoiy tuzilmalarning asosiy tamoyillarini fanga yaqin til bilan yoritadi.',
    language: 'Inglizcha',
    pages: 512,
    readTime: '12 soat',
    type: 'premium',
    price: 28,
    rating: 4.9,
    isFeatured: true,
    isNew: false,
    isRecommended: true,
    cover: 'cover-amber',
    chapters: [
      { title: '1-bob. Ajdodlar va birlashish', text: 'Insonlar tarixda yagona ommaviy ijtimoiy tuzilmalar yaratish uchun o‘zlarini birlashtirishga muvaffaq bo‘ldi. Bu qobiliyat boshqa hayvonlardan ajralib turuvchi muhim jihatdir.' },
      { title: '2-bob. Afroditaning karvoni', text: 'Kichik guruhlarning birlashishi va iqtisodiy mijozlashuv insoniyatni rivojlantirdi. Bu qobiliyat hayotning turli sohalarini o‘zgartirdi.' },
      { title: '3-bob. Yangi tsivilizatsiya', text: 'Insoniy taraqqiyot davomida xayoliy tushunchalar, ommaviy ishonch va tashkilot rivojlandi. Bu sababli madaniyat va iqtisodiy tizimlar uzluksiz shakllana bordi.' }
    ]
  },
  {
    id: 6,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Shaxsiy rivojlanish',
    description: 'Diqqatni to‘plash va chuqur ishlashning muhimligini tushuntiradi. Zamonamizda mahorat, aniqlik va yuksak natijalar uchun kerakli qobiliyat.',
    language: 'Inglizcha',
    pages: 296,
    readTime: '7 soat',
    type: 'free',
    price: 0,
    rating: 4.8,
    isFeatured: true,
    isNew: false,
    isRecommended: false,
    cover: 'cover-royal',
    chapters: [
      { title: '1-bob. Chuqur fikrlash', text: 'Real yutuq ko‘pincha ko‘p vazifalar bilan emas, balki bitta muhim maqsad ustida chuqur fikrlash bilan keladi. Diqqat yetishmasligi zamonaviy dunyoning asosiy muammolaridan biridir.' },
      { title: '2-bob. Oqimga kirish', text: 'Chuqur bilimga erishish uchun aniq va qoldirilmaydigan muhit yaratish kerak. Bu o‘quvchi uchun ham, ishchi uchun ham zarur bo‘ladi.' },
      { title: '3-bob. Reja va vaqt', text: 'Uzoq muddatli natijalar uchun shaffof reja va cheklangan vaqt maydonini yaratish zarur. Kengaytirilgan signal va uzluksiz axborot oqimi xatarlarga olib keladi.' }
    ]
  },
  {
    id: 7,
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    genre: 'Biznes va tadbirkorlik',
    description: 'Pul, muvaffaqiyat va maqsad sari intilish uchun ijodiy fikrlar, mahorat va ichki motivatsiya haqida gapiradi.',
    language: 'Inglizcha',
    pages: 400,
    readTime: '9 soat',
    type: 'premium',
    price: 18,
    rating: 4.7,
    isFeatured: false,
    isNew: false,
    isRecommended: true,
    cover: 'cover-violet',
    chapters: [
      { title: '1-bob. Insonning qalbi', text: 'Muvaffaqiyatga erishishning boshlang‘ich bosqichi fikr va maqsadning kuchli bo‘lishidan boshlanadi. Qalbdagi ishonch va o‘rganish ehtiyoji tezlik bilan harakatga aylanishi kerak.' },
      { title: '2-bob. Maqsadga intilish', text: 'Ma’lum bir maqsadga qaratilgan sa’y-harakatlarning hujjati hamma narsada muhimdir. Bu qarorlarni kuchaytiradi, yo‘lni aniqroq qiladi.' },
      { title: '3-bob. Harakat va ifoda', text: 'Maqsadga intilish qobiliyati ko‘p hollarda tasavvur va sezgi bilan birlashadi. Shu sababli mantiqiy reja va hissiy motivatsiya muvozanatda bo‘lishi lozim.' }
    ]
  },
  {
    id: 8,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Badiiy adabiyot',
    description: 'Maqsadga erishish, o‘z yo‘lini topish va ko‘proq ma’no qidirish haqida sehrli, ildizpoyali hikoya.',
    language: 'Inglizcha',
    pages: 208,
    readTime: '5 soat',
    type: 'free',
    price: 0,
    rating: 4.8,
    isFeatured: false,
    isNew: true,
    isRecommended: true,
    cover: 'cover-sand',
    chapters: [
      { title: '1-bob. O‘zga dunyo', text: 'Santiago uzoq sayohatga chiqadi. U yo‘ldan ketishi ham, orqaga qaytishi ham kerak bo‘ladigan aniq maqsadga ega bo‘lishini his qiladi. O‘zini topish sayohati uning hayotida eng asosiy davrga aylandi.' },
      { title: '2-bob. Toshlar va maqsad', text: 'Sayohat davomida u ko‘p narsalarni o‘rganadi: xayol va voqea o‘rtasidagi aloqani, insonlar va kechinmalarni, dunyo haqida kengroq ko‘rish qobiliyatini. Aytish mumkinki, yolg‘iz yo‘lning o‘zi ham maqsadga olib keladi.' },
      { title: '3-bob. O‘z qadr-qimmat', text: 'Har bir inson o‘z qalbiga quloq solishi kerak. Bu safar u kelajakka yetarlicha ishonchini hosil qiladi. Maqsad deb atalmish narsa qisman harakat, qisman ma’no bilan bog‘liq bo‘ladi.' }
    ]
  },
  {
    id: 9,
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Fantastika',
    description: 'Koinotdagi yirik siyosiy va ekologik qarama-qarshiliklar bilan boyib ketgan klassik fantastika asari.',
    language: 'Inglizcha',
    pages: 412,
    readTime: '10 soat',
    type: 'premium',
    price: 26,
    rating: 4.9,
    isFeatured: true,
    isNew: false,
    isRecommended: true,
    cover: 'cover-rose',
    chapters: [
      { title: '1-bob. Arrakis', text: 'Bu sayyora o‘zining yetersizligi va ma’naviy ishtiyoqi bilan butun galaktikani o‘zgartirishga qodir. Bu yerda yo‘qotish va g‘alaba bir-biridan ajralib turmaydi.' },
      { title: '2-bob. Nayshaning qarori', text: 'Ajoyib va azaliy taqdir bilan bezatilgan karakterlar o‘zlaricha vaqtlarda qaror qabul qilishadi. Ular bir-birini tanishadi, lekin asl ishonchlarning o‘sha yerdan paydo bo‘ladi.' },
      { title: '3-bob. Noma’lum yo‘l', text: 'Haqiqiy kuch faqat halokatli qadamlar bilan emas, balki tanlovlar va ehtiyotkorlik bilan yuzaga keladi. Har bir voqea yangi kelajakni yaratadi.' }
    ]
  },
  {
    id: 10,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    genre: 'Dasturlash va IT',
    description: 'Dasturchilar uchun amaliy, real hayotdagi tajriba va samarali yozish usullarini o‘z ichiga oladi.',
    language: 'Inglizcha',
    pages: 352,
    readTime: '9 soat',
    type: 'premium',
    price: 17,
    rating: 4.8,
    isFeatured: false,
    isNew: true,
    isRecommended: false,
    cover: 'cover-forest',
    chapters: [
      { title: '1-bob. Amaliy rivojlanish', text: 'Har bir mutaxassis o‘z uslubini o‘rganishi kerak. Dasturlash nafaqat algoritm, balki murakkab muammolarni hal qilish san’ati bilan bog‘liq.' },
      { title: '2-bob. Qobiliyat va struktur', text: 'Yaxshi dasturchi kodni yozadi, lekin vaqti-vaqtida to‘g‘ri yordam aloqalarini ta’minlashni ham bilishi kerak. Bu yo‘lning asosini texnik shakllar va soddalik tashkil etadi.' },
      { title: '3-bob. Texnik natija', text: 'Asosiy maqsad – tezda ishlab chiqish va yaxshi natijaga erishish. Shu sababli avtomatlashtirish, testlar va qayta foydalaniladigan komponentlar muhimi bor.' }
    ]
  },
  {
    id: 11,
    title: 'The Story of English',
    author: 'Robert McCrum',
    genre: 'Ta’lim va ingliz tili',
    description: 'Ingliz tilining kelib chiqishi, rivojlanishi va global ta’siri haqida keng qamrovli va diqqatga sazovor hikoya.',
    language: 'Inglizcha',
    pages: 288,
    readTime: '6 soat',
    type: 'free',
    price: 0,
    rating: 4.7,
    isFeatured: false,
    isNew: true,
    isRecommended: false,
    cover: 'cover-sunset',
    chapters: [
      { title: '1-bob. So‘zlar va xalqlar', text: 'Ingliz tili bir necha xalqlarning sayohatlari, savdolari va madaniy almashinuvlari natijasida shakllangan. Bu tilning boyligi uning tarixiy aralashuvlaridan kelib chiqadi.' },
      { title: '2-bob. Til va davlat', text: 'Tillar bosib olingan hududlarda va ta’limga kirish bilan o‘zgarishlarga uchraydi. Ingliz tili global amalga oshgan jarayonlarning markazida turadi.' },
      { title: '3-bob. Kengaygan dunyo', text: 'Barcha tillar singari, ingliz tili ham jamiyatlar o‘rtasidagi aloqani mustahkamlaydi. Bu saylov, mustaqillik va bilim almashinuvi uchun qulay vositadir.' }
    ]
  },
  {
    id: 12,
    title: 'Learning Python',
    author: 'Mark Lutz',
    genre: 'Dasturlash va IT',
    description: 'Python dasturlash tilini boshlang‘ichdan mutaxassislik darajasigacha o‘rganishni qulay qilib taqdim etadi.',
    language: 'Inglizcha',
    pages: 640,
    readTime: '15 soat',
    type: 'premium',
    price: 24,
    rating: 4.8,
    isFeatured: false,
    isNew: true,
    isRecommended: true,
    cover: 'cover-royal',
    chapters: [
      { title: '1-bob. Dasturlashga kirish', text: 'Pythonning soddaligi va kuchi uni yangi boshlanuvchilar uchun qulay qiladi. Bu dasturchilarni tezda ishlay boshlashga undovchi muhim omil.' },
      { title: '2-bob. O‘zgaruvchilar va ma’lumotlar', text: 'Ma’lumotlar obyektlari va o‘zgaruvchilar dasturlashning asosini tashkil etadi. Ular bilan ishlash mantiqini tushunish loyihalarni yanada samarali qiladi.' },
      { title: '3-bob. Voqea va funksiyalar', text: 'Python bilan ishlashda funksiyalar, sikllar va shartlar asosiy ustunlar hisoblanadi. Ularsiz har qanday katta loyihani qo‘lga kiritish qiyin bo‘ladi.' }
    ]
  },
  {
    id: 13,
    title: 'Ikigai',
    author: 'Héctor García',
    genre: 'Shaxsiy rivojlanish',
    description: 'Yashash ma’nosi, qulay ijtimoiy muhit va qadrli faoliyatni o‘rganish bo‘yicha chuqur motivatsion kitob.',
    language: 'Inglizcha',
    pages: 224,
    readTime: '5 soat',
    type: 'free',
    price: 0,
    rating: 4.8,
    isFeatured: false,
    isNew: false,
    isRecommended: true,
    cover: 'cover-gold',
    chapters: [
      { title: '1-bob. Hayot ma’nosi', text: 'Ikigai — bu bizning hayotimizga ma’no va maqsad beruvchi muhim omil. Bu tushuncha faqat ishlash bilan emas, balki nafosat va o‘ziga oid yaxshilik bilan bog‘liq.' },
      { title: '2-bob. O‘zingizni tanlash', text: 'Ba’zi odamlar hayotning maqsadini topadi, ba’zilari esa unga intiladi. Ikigai vaqti-vaqtida o‘zingizni tanlash va o‘z qadr-qimmatini bilish bilan chegaralanadi.' },
      { title: '3-bob. Ijtimoiy quvvat', text: 'Yaxshi muhit va oila, do‘stlik hamma narsada muhim rol o‘ynaydi. Hayotdagi ma’no ko‘pincha jamiyatda o’z o‘rnini topish bilan yuzaga keladi.' }
    ]
  },
  {
    id: 14,
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    genre: 'Moliya va samaradorlik',
    description: 'Moliyaviy savodxonlik, pulning ishlashi va qarorlar qabul qilishning amaliy jihatlari haqida ma’ruza.',
    language: 'Inglizcha',
    pages: 336,
    readTime: '8 soat',
    type: 'premium',
    price: 20,
    rating: 4.6,
    isFeatured: false,
    isNew: false,
    isRecommended: true,
    cover: 'cover-ocean',
    chapters: [
      { title: '1-bob. Qarzlar va aktivlar', text: 'Pul ko‘pincha faqat ishlash bilan emas, balki aktiv va passiv tushunchalar bilan bog‘liq. Ayllanishlar va daromadning manbai asosan qarorlar va xatti-harakatlar bilan belgilanadi.' },
      { title: '2-bob. Pulni boshqarish', text: 'Har bir shaxsning moliyaviy qarorlari uning maqsadlari va xavfsizlik hissi bilan bog‘liq. O‘qish va ishlatish ko‘nikmasi birinchi bosqichdagi eng muhim jarayon hisoblanadi.' },
      { title: '3-bob. Tezkor o‘sish', text: 'Muvaffaqiyatli moliya reja bo‘yicha ishlaydi. Yaxshi qaror va doimiy bilimlar bilan o‘z boyligingizni optimallashtirishga erishasiz.' }
    ]
  },
  {
    id: 15,
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    genre: 'Ilm-fan',
    description: 'Koinot, qora tuynuklar va vaqtning tabiati haqida tushuntirishga qaratilgan mashhur ilmiy kitob.',
    language: 'Inglizcha',
    pages: 256,
    readTime: '6 soat',
    type: 'free',
    price: 0,
    rating: 4.9,
    isFeatured: false,
    isNew: false,
    isRecommended: true,
    cover: 'cover-ink',
    chapters: [
      { title: '1-bob. Koinotning boshlanishi', text: 'Koinotning tarixi va uning shakllanishi insoniyatni aqlga soladi. Zamon va makon o’rtasidagi munosabat butun fan uchun asosiy savol bo‘lib qolmoqda.' },
      { title: '2-bob. Qora tuynuklar', text: 'Qora tuynuklar kubrang bo‘lib tuyulsa-da, ularning tasviri va moddiy xususiyatlari o‘rganish uchun eng katta qiziqish manbalaridir.' },
      { title: '3-bob. Vaqt va fazo', text: 'Bizning tasavvurlashimizda vaqt bir qator ma’lumotlarga bog‘liq. Fanga asoslangan tushuncha bo‘lsa, bu masala uzoq tarixdan keladi.' }
    ]
  },
  {
    id: 16,
    title: 'The Book of Why',
    author: 'Judea Pearl',
    genre: 'Ilm-fan',
    description: 'Sabablilik, sabab-oqibat va ma’lumotlar bilan ishlashning to‘g‘ri uslublarini o‘rganishga yordam beradi.',
    language: 'Inglizcha',
    pages: 432,
    readTime: '10 soat',
    type: 'premium',
    price: 19,
    rating: 4.7,
    isFeatured: false,
    isNew: false,
    isRecommended: true,
    cover: 'cover-violet',
    chapters: [
      { title: '1-bob. Sababliikning asoslari', text: 'Sabablar naqadar muhim ekanini tushunish va keyingi qarorlarni qabul qilishda analitik yondashuv muhimdir. Bu bilim ko‘plab sohalarda ishonchli natijaga olib keladi.' },
      { title: '2-bob. Model va nazariya', text: 'Insonlar o‘rtasida sababli bog‘liqlikni aniqlash uchun mutaxassislik talab etiladi. Matematik va empirik yondashuvlar birga ishlaganda yanada kuchli bo‘ladi.' },
      { title: '3-bob. Kengaytirilgan fikr', text: 'Qaror qabul qilish jarayonida sabablar va oqibatlar nihoyatda muhimdir. Kengaygan ta’lim va trend nazariyalar yuksak natijalarga olib keladi.' }
    ]
  },
  {
    id: 17,
    title: 'The Innovators',
    author: 'Walter Isaacson',
    genre: 'Tarix',
    description: 'Kompyuter va internet jamiyatining kelib chiqishini mashhur ixtirochilar bilan bog‘lab tushuntiradi.',
    language: 'Inglizcha',
    pages: 560,
    readTime: '13 soat',
    type: 'premium',
    price: 21,
    rating: 4.8,
    isFeatured: false,
    isNew: false,
    isRecommended: false,
    cover: 'cover-ocean',
    chapters: [
      { title: '1-bob. Ixtirochilik', text: 'Ishlab chiqarish va innovatsiyalar insonlar o‘rtasidagi hamkorlik bilan rivojlanadi. Ixtirochi bo‘lish uchun ham fikr, ham doimiy tajriba kerak bo‘ladi.' },
      { title: '2-bob. Rivojlanish', text: 'Tezlik, ommaviylik va tajribalar o‘zbekistonning rivojlanishiga ta’sir ko‘rsatadi. Dunyoda tezlik bilan o‘zgargan texnologiyalar ko‘plab yangi imkoniyatlar yaratadi.' },
      { title: '3-bob. Umumiy natija', text: 'Ularning sa’y-harakati birgalikda yangi madaniyat yaratdi. Odamlar ishlovchi tizimlar va tezkor fikrlar orqali qanchalik yuksalishini tan olish mumkin.' }
    ]
  },
  {
    id: 18,
    title: 'Flipped',
    author: 'Wendelin Van Draanen',
    genre: 'Ta’lim va ingliz tili',
    description: 'Yoshlar, his-tuyg‘ular va boshlang‘ich ta’lim muhitidagi o‘zgarishni qiziqarli tarzda bayon etadi.',
    language: 'Inglizcha',
    pages: 192,
    readTime: '4 soat',
    type: 'free',
    price: 0,
    rating: 4.5,
    isFeatured: false,
    isNew: true,
    isRecommended: false,
    cover: 'cover-amber',
    chapters: [
      { title: '1-bob. Qiziqarli boshlanish', text: 'Yoshlar o‘zlari haqidagi tasavvurlar va o‘z hissiyotlarini bayon qilishga harakat qiladi. Bu jarayonlar ko‘plab qiziqarli voqealar bilan to‘lib toshadi.' },
      { title: '2-bob. O‘rganish jarayoni', text: 'Bir-birini tushunish va o‘zaro hurmatlar kashf etiladi. Har bir voqea yanada yaqinlik va his tuyg‘ularini oshiradi.' },
      { title: '3-bob. O‘zgarish', text: 'Har bir g‘oya o‘z quvvatini harakat yaratishdan oladi. Bu asar yoshlar uchun ruhiy va ijtimoiy ma’lumot manbai hisoblanadi.' }
    ]
  },
  {
    id: 19,
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    genre: 'Psixologiya',
    description: 'Odamlar tayyor bo‘lgan odatlarning foydasi va ularni o‘zgartirish yo‘llarini ilmiy nuqtai nazardan ko‘rsatadi.',
    language: 'Inglizcha',
    pages: 280,
    readTime: '6 soat',
    type: 'free',
    price: 0,
    rating: 4.8,
    isFeatured: true,
    isNew: false,
    isRecommended: true,
    cover: 'cover-rose',
    chapters: [
      { title: '1-bob. Odatiy jarayon', text: 'Odatlar quyida ko‘rsatilgan model bilan shakllanadi: signal, amaliyot va mukofot. Bu zamonaviy psixologiyadagi narsa ko‘p sonli tadqiqotlarda isbotlangan.' },
      { title: '2-bob. Kichik o‘zgarish', text: 'Odatlarni o‘zgartirish dastlabki bosqichda ozgina bo‘lishi mumkin. Ammo bu kichik bosqichlar bir nechta natijalarga olib keladi.' },
      { title: '3-bob. Yangi barqarorlik', text: 'Yangi tartibga moslashish uchun doimiy poydevor: maqsad, motivatsiya va muvofiqlashtirishdir. Qhovn – har kuni kichik yutuqlar.' }
    ]
  },
  {
    id: 20,
    title: 'The Intelligent Investor',
    author: 'Benjamin Graham',
    genre: 'Moliya va samaradorlik',
    description: 'Qimmatli qog‘ozlar, risklar va uzoq muddatli sarmoya qarorlarini oqilona ko‘rib chiqishga yordam beradi.',
    language: 'Inglizcha',
    pages: 640,
    readTime: '14 soat',
    type: 'premium',
    price: 25,
    rating: 4.7,
    isFeatured: false,
    isNew: false,
    isRecommended: true,
    cover: 'cover-sand',
    chapters: [
      { title: '1-bob. Investitsiya tamoyillari', text: 'Uzoq muddatli investitsiya hech qachon tasodifiy bo‘lmaydi. Uyanish va qo‘llaniladigan fikrlar strategik ravishda tanlanadi.' },
      { title: '2-bob. Risklar va qarorlar', text: 'Muvaffaqiyatli investor har doim risklar bilan ishlashga tayyor bo‘ladi. Bunda asosiy omil – ma’lumot va ehtiyotkorlikning muvozanati.' },
      { title: '3-bob. Uzoq reja', text: 'Investitsiya jarayonida o‘z vaqtini yutish uchun doimiy bilim va barqaror qaror qabul qilish muhimdir. Bu holat har qanday daromadni yanada ishonchli qiladi.' }
    ]
  }
];

const typeMap = {
  free: 'Bepul',
  premium: 'PRO'
};

const state = {
  search: '',
  genre: 'all',
  type: 'all',
  language: 'all',
  favorites: new Set(JSON.parse(localStorage.getItem('kelajak-favorites') || '[]')),
  currentBook: null,
  currentChapterIndex: 0,
  currentTheme: 'default',
  readerFontSize: 17,
  readingProgress: JSON.parse(localStorage.getItem('kelajak-progress') || '{}')
};

const refs = {
  featuredGrid: document.getElementById('featuredGrid'),
  newBooksGrid: document.getElementById('newBooksGrid'),
  recommendedGrid: document.getElementById('recommendedGrid'),
  freeBooksGrid: document.getElementById('freeBooksGrid'),
  premiumGrid: document.getElementById('premiumGrid'),
  categoryChips: document.getElementById('categoryChips'),
  bookGrid: document.getElementById('bookGrid'),
  continueGrid: document.getElementById('continueGrid'),
  favoritesGrid: document.getElementById('favoritesGrid'),
  modalBody: document.getElementById('modalBody'),
  bookModal: document.getElementById('bookModal'),
  readerModal: document.getElementById('readerModal'),
  readerText: document.getElementById('readerText'),
  chapterListSidebar: document.getElementById('chapterListSidebar'),
  readerBookTitle: document.getElementById('readerBookTitle'),
  readerBookTag: document.getElementById('readerBookTag'),
  readerProgressBar: document.getElementById('readerProgressBar'),
  readerSearchInput: document.getElementById('readerSearchInput'),
  readerSearchStatus: document.getElementById('readerSearchStatus'),
  readerNotes: document.getElementById('readerNotes'),
  searchInput: document.getElementById('searchInput'),
  genreFilter: document.getElementById('genreFilter'),
  typeFilter: document.getElementById('typeFilter'),
  languageFilter: document.getElementById('languageFilter')
};

function saveFavorites() {
  localStorage.setItem('kelajak-favorites', JSON.stringify([...state.favorites]));
}

function saveProgress() {
  localStorage.setItem('kelajak-progress', JSON.stringify(state.readingProgress));
}

function humanizeGenre(genre) {
  return genre;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getBookById(id) {
  return books.find((book) => book.id === Number(id));
}

function getFilteredBooks() {
  return books.filter((book) => {
    const matchText =
      state.search === '' ||
      [book.title, book.author, book.genre, book.description, book.language]
        .join(' ')
        .toLowerCase()
        .includes(state.search.toLowerCase());

    const matchGenre = state.genre === 'all' || book.genre === state.genre;
    const matchType = state.type === 'all' || book.type === state.type;
    const matchLanguage = state.language === 'all' || book.language === state.language;

    return matchText && matchGenre && matchType && matchLanguage;
  });
}

function renderCategoryChips() {
  const categories = [...new Set(books.map((book) => book.genre))];
  refs.categoryChips.innerHTML = categories
    .map(
      (genre) => `
        <button class="category-chip ${state.genre === genre ? 'active' : ''}" data-genre="${genre}">${genre}</button>
      `
    )
    .join('');

  refs.genreFilter.innerHTML = `
    <option value="all">Hammasi</option>
    ${categories.map((genre) => `<option value="${genre}">${genre}</option>`).join('')}
  `;
  refs.genreFilter.value = state.genre;
}

function renderBookCard(book) {
  const isFavorite = state.favorites.has(book.id);
  return `
    <article class="book-card" data-book-id="${book.id}">
      <div class="book-cover ${book.cover}"><span>${escapeHtml(book.title.slice(0, 2).toUpperCase())}</span></div>
      <div class="book-card-body">
        <div class="card-topline">
          <span class="type-badge ${book.type}">${typeMap[book.type]}</span>
          <span class="rating">★ ${book.rating}</span>
        </div>
        <h3>${escapeHtml(book.title)}</h3>
        <p class="author">${escapeHtml(book.author)}</p>
        <p class="genre">${escapeHtml(book.genre)}</p>
        <p class="book-description">${escapeHtml(book.description)}</p>
        <div class="meta-strip">
          <span>${escapeHtml(book.language)}</span>
          <span>${book.pages} bet</span>
          <span>${book.readTime}</span>
        </div>
        <div class="card-actions">
          <button class="secondary-btn detail-btn" data-book-id="${book.id}">Batafsil</button>
          <button class="primary-btn read-btn" data-book-id="${book.id}">${book.type === 'premium' ? 'PRO o‘qish' : 'O‘qish'}</button>
        </div>
      </div>
    </article>
  `;
}

function renderFeaturedBooks() {
  refs.featuredGrid.innerHTML = books
    .filter((book) => book.isFeatured)
    .slice(0, 4)
    .map((book) => renderBookCard(book))
    .join('');
}

function renderNewBooks() {
  refs.newBooksGrid.innerHTML = books
    .filter((book) => book.isNew)
    .slice(0, 4)
    .map((book) => renderBookCard(book))
    .join('');
}

function renderRecommendedBooks() {
  refs.recommendedGrid.innerHTML = books
    .filter((book) => book.isRecommended)
    .slice(0, 4)
    .map((book) => renderBookCard(book))
    .join('');
}

function renderFreeBooks() {
  refs.freeBooksGrid.innerHTML = books
    .filter((book) => book.type === 'free')
    .slice(0, 4)
    .map((book) => renderBookCard(book))
    .join('');
}

function renderPremiumBooks() {
  refs.premiumGrid.innerHTML = books
    .filter((book) => book.type === 'premium')
    .slice(0, 4)
    .map((book) => renderBookCard(book))
    .join('');
}

function renderBookGrid() {
  const filtered = getFilteredBooks();
  refs.bookGrid.innerHTML = filtered.length
    ? filtered.map((book) => renderBookCard(book)).join('')
    : '<div class="empty-state">Hech narsa topilmadi. Boshqa kalit so‘z yoki filtri bilan qayta urinib ko‘ring.</div>';
}

function renderContinueReading() {
  const booksWithProgress = books.filter((book) => (state.readingProgress[book.id] || 0) > 0);
  const items = booksWithProgress.length ? booksWithProgress.slice(0, 3) : books.slice(0, 3);

  refs.continueGrid.innerHTML = items
    .map((book) => {
      const progress = state.readingProgress[book.id] || 18 + Math.floor(Math.random() * 50);
      return `
        <div class="continue-item" data-book-id="${book.id}">
          <div class="mini-cover ${book.cover}">${escapeHtml(book.title.slice(0, 2).toUpperCase())}</div>
          <div class="continue-content">
            <h4>${escapeHtml(book.title)}</h4>
            <p>${escapeHtml(book.author)} · ${escapeHtml(book.genre)}</p>
            <div class="progress-line"><span style="width:${Math.min(progress, 100)}%"></span></div>
            <small>${Math.min(progress, 100)}% o‘qilgan</small>
          </div>
        </div>
      `;
    })
    .join('');
}

function renderFavorites() {
  const favoriteBooks = books.filter((book) => state.favorites.has(book.id));
  refs.favoritesGrid.innerHTML = favoriteBooks.length
    ? favoriteBooks.slice(0, 4).map((book) => renderBookCard(book)).join('')
    : '<div class="empty-state">Sevimlilar ro‘yxati hozircha bo‘sh. Unga kitoblar qo‘shing.</div>';
}

function renderAll() {
  renderFeaturedBooks();
  renderNewBooks();
  renderRecommendedBooks();
  renderFreeBooks();
  renderPremiumBooks();
  renderCategoryChips();
  renderBookGrid();
  renderContinueReading();
  renderFavorites();
}

function openModal(bookId) {
  const book = getBookById(bookId);
  if (!book) return;

  state.currentBook = book;
  refs.modalBody.innerHTML = `
    <div class="detail-layout">
      <div class="detail-cover ${book.cover}">${escapeHtml(book.title.slice(0, 2).toUpperCase())}</div>
      <div class="detail-main">
        <div class="card-topline">
          <span class="type-badge ${book.type}">${typeMap[book.type]}</span>
          <span class="rating">★ ${book.rating}</span>
        </div>
        <h2>${escapeHtml(book.title)}</h2>
        <div class="detail-meta">
          <span>${escapeHtml(book.author)}</span>
          <span>${escapeHtml(book.genre)}</span>
          <span>${escapeHtml(book.language)}</span>
          <span>${book.pages} bet</span>
          <span>${book.readTime}</span>
        </div>
        <p>${escapeHtml(book.description)}</p>
        <div class="detail-actions">
          <button class="primary-btn" data-action="read" data-book-id="${book.id}">${book.type === 'premium' ? 'PRO bilan o‘qish' : 'O‘qishni boshlash'}</button>
          <button class="secondary-btn" data-action="favorite" data-book-id="${book.id}">${state.favorites.has(book.id) ? 'Sevimlidan o‘chirish' : 'Sevimlilarga saqlash'}</button>
        </div>
      </div>
    </div>
    <div class="detail-section">
      <h4>Mundarija</h4>
      <ul class="chapter-list">
        ${book.chapters
          .map(
            (chapter, index) => `
              <li>
                <button data-action="chapter" data-book-id="${book.id}" data-chapter-index="${index}">${escapeHtml(chapter.title)}</button>
                <span>${index + 1}/${book.chapters.length}</span>
              </li>
            `
          )
          .join('')}
      </ul>
    </div>
  `;

  refs.bookModal.classList.remove('hidden');
  refs.bookModal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  refs.bookModal.classList.add('hidden');
  refs.bookModal.setAttribute('aria-hidden', 'true');
}

function openReader(bookId, chapterIndex = 0) {
  const book = getBookById(bookId);
  if (!book) return;

  state.currentBook = book;
  state.currentChapterIndex = Math.min(chapterIndex, book.chapters.length - 1);
  refs.readerBookTitle.textContent = book.title;
  refs.readerBookTag.textContent = `${book.type === 'premium' ? 'PRO' : 'Bepul'} · ${book.genre}`;
  refs.readerNotes.value = localStorage.getItem(`kelajak-note-${book.id}`) || '';

  renderReader();
  refs.readerModal.classList.remove('hidden');
  refs.readerModal.setAttribute('aria-hidden', 'false');
}

function closeReader() {
  refs.readerModal.classList.add('hidden');
  refs.readerModal.setAttribute('aria-hidden', 'true');
}

function renderReader() {
  if (!state.currentBook) return;

  const book = state.currentBook;
  const chapter = book.chapters[state.currentChapterIndex];
  const query = refs.readerSearchInput.value.trim();
  let text = chapter.text;

  if (query) {
    const parts = escapeHtml(text).split(new RegExp(`(${escapeHtml(query)})`, 'ig'));
    text = parts
      .map((part) => (part.toLowerCase() === query.toLowerCase() ? `<mark>${part}</mark>` : part))
      .join('');
    refs.readerSearchStatus.textContent = `Qidiruv natijasi: ${text.match(/<mark>/g)?.length || 0} ta moslik`;
  } else {
    text = escapeHtml(text);
    refs.readerSearchStatus.textContent = 'Matn ichida qidiruv';
  }

  refs.readerText.innerHTML = `<h4>${escapeHtml(chapter.title)}</h4>${text.split(/\n/).map((line) => `<p>${line}</p>`).join('')}`;

  refs.chapterListSidebar.innerHTML = book.chapters
    .map(
      (item, index) => `
        <li>
          <button data-action="reader-chapter" data-book-id="${book.id}" data-chapter-index="${index}">${escapeHtml(item.title)}</button>
          <span>${index + 1}</span>
        </li>
      `
    )
    .join('');

  const progress = ((state.currentChapterIndex + 1) / book.chapters.length) * 100;
  refs.readerProgressBar.style.width = `${progress}%`;
  state.readingProgress[book.id] = Math.round(progress);
  saveProgress();
  renderContinueReading();
}

function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  state.currentTheme = theme;
  document.querySelectorAll('.theme-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
}

function attachEvents() {
  document.addEventListener('click', (event) => {
    const detailTarget = event.target.closest('.detail-btn');
    const readTarget = event.target.closest('.read-btn');
    const favoriteTarget = event.target.closest('[data-action="favorite"]');
    const readActionTarget = event.target.closest('[data-action="read"]');
    const chapterTarget = event.target.closest('[data-action="chapter"]');
    const readerChapterTarget = event.target.closest('[data-action="reader-chapter"]');
    const categoryTarget = event.target.closest('.category-chip');
    const continueTarget = event.target.closest('.continue-item');
    const bookCardTarget = event.target.closest('.book-card');

    if (detailTarget) {
      openModal(Number(detailTarget.dataset.bookId));
      return;
    }

    if (readTarget) {
      openReader(Number(readTarget.dataset.bookId), 0);
      return;
    }

    if (readActionTarget) {
      openReader(Number(readActionTarget.dataset.bookId), 0);
      closeModal();
      return;
    }

    if (favoriteTarget) {
      const id = Number(favoriteTarget.dataset.bookId);
      if (state.favorites.has(id)) {
        state.favorites.delete(id);
      } else {
        state.favorites.add(id);
      }
      saveFavorites();
      renderFavorites();
      renderAll();
      openModal(id);
      return;
    }

    if (chapterTarget) {
      const bookId = Number(chapterTarget.dataset.bookId);
      const chapterIndex = Number(chapterTarget.dataset.chapterIndex);
      openReader(bookId, chapterIndex);
      closeModal();
      return;
    }

    if (readerChapterTarget) {
      const bookId = Number(readerChapterTarget.dataset.bookId);
      const chapterIndex = Number(readerChapterTarget.dataset.chapterIndex);
      state.currentChapterIndex = chapterIndex;
      renderReader();
      return;
    }

    if (categoryTarget) {
      state.genre = categoryTarget.dataset.genre;
      renderAll();
      refs.searchInput.focus();
      return;
    }

    if (continueTarget) {
      openReader(Number(continueTarget.dataset.bookId), 0);
      return;
    }

    if (bookCardTarget) {
      const bookId = Number(bookCardTarget.dataset.bookId);
      if (event.target.closest('.primary-btn, .secondary-btn')) {
        return;
      }
      openModal(bookId);
    }

    if (event.target.closest('[data-close-modal="true"]')) {
      closeModal();
    }

    if (event.target.closest('[data-close-reader="true"]')) {
      closeReader();
    }
  });

  refs.searchInput.addEventListener('input', (e) => {
    state.search = e.target.value;
    renderBookGrid();
  });

  refs.genreFilter.addEventListener('change', (e) => {
    state.genre = e.target.value;
    renderBookGrid();
    renderCategoryChips();
  });

  refs.typeFilter.addEventListener('change', (e) => {
    state.type = e.target.value;
    renderBookGrid();
  });

  refs.languageFilter.addEventListener('change', (e) => {
    state.language = e.target.value;
    renderBookGrid();
  });

  document.getElementById('featuredMore').addEventListener('click', () => {
    document.getElementById('books').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('browseBooksBtn').addEventListener('click', () => {
    document.getElementById('books').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('premiumBtn').addEventListener('click', () => {
    document.getElementById('premium').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('viewPremiumCatalog').addEventListener('click', () => {
    document.getElementById('premium').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('searchToggle').addEventListener('click', () => {
    refs.searchInput.focus();
    refs.searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  document.getElementById('mobileMenuButton').addEventListener('click', () => {
    document.querySelector('.main-nav').classList.toggle('open');
  });

  document.getElementById('readerSearchInput').addEventListener('input', () => {
    renderReader();
  });

  document.getElementById('readerCopyBtn').addEventListener('click', async () => {
    const selection = window.getSelection().toString();
    if (!selection) {
      return;
    }
    await navigator.clipboard.writeText(selection);
  });

  document.getElementById('readerBookmarkBtn').addEventListener('click', () => {
    const bookId = state.currentBook.id;
    const saveKey = `kelajak-bookmark-${bookId}`;
    localStorage.setItem(saveKey, JSON.stringify({ chapter: state.currentChapterIndex, savedAt: Date.now() }));
  });

  document.getElementById('readerNotes').addEventListener('input', (event) => {
    const noteKey = `kelajak-note-${state.currentBook.id}`;
    localStorage.setItem(noteKey, event.target.value);
  });

  document.getElementById('decreaseFont').addEventListener('click', () => {
    state.readerFontSize = Math.max(14, state.readerFontSize - 1);
    refs.readerText.style.fontSize = `${state.readerFontSize}px`;
  });

  document.getElementById('increaseFont').addEventListener('click', () => {
    state.readerFontSize = Math.min(24, state.readerFontSize + 1);
    refs.readerText.style.fontSize = `${state.readerFontSize}px`;
  });

  document.getElementById('prevChapterBtn').addEventListener('click', () => {
    if (!state.currentBook) return;
    state.currentChapterIndex = Math.max(0, state.currentChapterIndex - 1);
    renderReader();
  });

  document.getElementById('nextChapterBtn').addEventListener('click', () => {
    if (!state.currentBook) return;
    state.currentChapterIndex = Math.min(state.currentBook.chapters.length - 1, state.currentChapterIndex + 1);
    renderReader();
  });

  document.getElementById('readerThemeToggle').addEventListener('click', () => {
    const nextTheme = state.currentTheme === 'default' ? 'sepia' : state.currentTheme === 'sepia' ? 'dark' : 'default';
    applyTheme(nextTheme);
  });

  document.querySelectorAll('.theme-btn').forEach((button) => {
    button.addEventListener('click', () => applyTheme(button.dataset.theme));
  });
}

const authState = {
  googleEmail: 'aisha.kelajak@gmail.com',
  isAuthenticated: false,
  currentCode: ''
};

function generateAuthCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function showAuthModal() {
  const authModal = document.getElementById('authModal');
  authModal.classList.remove('hidden');
  authModal.setAttribute('aria-hidden', 'false');
}

function hideAuthModal() {
  const authModal = document.getElementById('authModal');
  authModal.classList.add('hidden');
  authModal.setAttribute('aria-hidden', 'true');
}

function handleGoogleLogin() {
  const emailInput = document.getElementById('googleEmailInput');
  const authCodeBox = document.getElementById('authCodeBox');
  const generatedCodeDisplay = document.getElementById('generatedCodeDisplay');
  const authMessage = document.getElementById('authMessage');

  const enteredEmail = emailInput.value.trim();
  if (!enteredEmail || !enteredEmail.includes('@')) {
    authMessage.textContent = 'Email kiritilishi shart.';
    authMessage.style.color = '#ff9a9a';
    return;
  }

  authState.googleEmail = enteredEmail;
  authState.currentCode = generateAuthCode();
  generatedCodeDisplay.textContent = authState.currentCode;
  authCodeBox.classList.remove('hidden');
  authMessage.textContent = 'Tasdiqlash kodi yaratildi. Kodingizni kiriting.';
  authMessage.style.color = '#7fe0a9';
}

function verifyAuthCode() {
  const codeInput = document.getElementById('authCodeInput');
  const authMessage = document.getElementById('authMessage');
  const enteredCode = codeInput.value.trim();

  if (!enteredCode) {
    authMessage.textContent = 'Tasdiqlash kodi kiritilishi shart.';
    authMessage.style.color = '#ff9a9a';
    return;
  }

  if (enteredCode !== authState.currentCode) {
    authMessage.textContent = 'Kod xato. Qayta urinib ko‘ring.';
    authMessage.style.color = '#ff9a9a';
    return;
  }

  authState.isAuthenticated = true;
  authMessage.textContent = 'Google akkaunt bilan muvaffaqiyatli kirildi!';
  authMessage.style.color = '#7fe0a9';
  hideAuthModal();
}

function initializeAuth() {
  const authModal = document.getElementById('authModal');
  const googleBtn = document.getElementById('googleAuthBtn');
  const loginConfirmBtn = document.getElementById('loginConfirmBtn');
  const closeButtons = document.querySelectorAll('[data-close-auth="true"]');

  if (authModal) {
    authModal.classList.remove('hidden');
  }

  googleBtn.addEventListener('click', handleGoogleLogin);
  loginConfirmBtn.addEventListener('click', verifyAuthCode);

  closeButtons.forEach((btn) => {
    btn.addEventListener('click', () => hideAuthModal());
  });

  document.getElementById('googleEmailInput').addEventListener('input', () => {
    const authMessage = document.getElementById('authMessage');
    authMessage.textContent = '';
  });
}

const userProfile = {
  name: localStorage.getItem('kelajak-user-name') || 'Aisha',
  email: localStorage.getItem('kelajak-user-email') || 'aisha.kelajak@gmail.com',
  avatar: localStorage.getItem('kelajak-user-avatar') || '',
  plan: localStorage.getItem('kelajak-user-plan') || 'Starter'
};

const purchaseState = {
  hasPurchased: localStorage.getItem('kelajak-pro-status') === 'true',
  purchasedPlan: localStorage.getItem('kelajak-purchased-plan') || 'Starter'
};

function setHeaderUser() {
  const headerName = document.getElementById('headerUserName');
  const headerAvatar = document.getElementById('headerAvatar');
  const profileHeading = document.getElementById('profileNameHeading');
  const profileNameInput = document.getElementById('profileNameInput');
  const profileEmailInput = document.getElementById('profileEmailInput');
  const profileAvatar = document.getElementById('profileAvatarPreview');
  const planBadge = document.getElementById('currentPlanBadge');

  if (!headerName || !headerAvatar || !profileHeading || !profileNameInput || !profileEmailInput || !profileAvatar || !planBadge) return;

  headerName.textContent = userProfile.name;
  profileHeading.textContent = userProfile.name;
  profileNameInput.value = userProfile.name;
  profileEmailInput.value = userProfile.email;
  planBadge.textContent = userProfile.plan;

  const initials = userProfile.name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase() || 'US';
  headerAvatar.textContent = initials;

  if (userProfile.avatar) {
    profileAvatar.src = userProfile.avatar;
    headerAvatar.textContent = '';
    headerAvatar.style.backgroundImage = `url('${userProfile.avatar}')`;
    headerAvatar.style.backgroundSize = 'cover';
    headerAvatar.style.backgroundPosition = 'center';
  } else {
    profileAvatar.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80';
  }
}

function saveProfile() {
  localStorage.setItem('kelajak-user-name', userProfile.name);
  localStorage.setItem('kelajak-user-email', userProfile.email);
  localStorage.setItem('kelajak-user-avatar', userProfile.avatar);
  localStorage.setItem('kelajak-user-plan', userProfile.plan);
}

function openProfileModal() {
  const modal = document.getElementById('profileModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  setHeaderUser();
}

function closeProfileModal() {
  const modal = document.getElementById('profileModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function handleProfileSave() {
  const nameInput = document.getElementById('profileNameInput');
  const emailInput = document.getElementById('profileEmailInput');
  const purchaseMessage = document.getElementById('purchaseMessage');

  userProfile.name = nameInput.value.trim() || 'Aisha';
  userProfile.email = emailInput.value.trim() || 'aisha.kelajak@gmail.com';
  saveProfile();
  setHeaderUser();

  if (purchaseMessage) {
    purchaseMessage.textContent = 'Profil ma’lumotlari saqlandi.';
    purchaseMessage.style.color = '#7fe0a9';
  }
}

function handleProfileImageUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    userProfile.avatar = reader.result;
    saveProfile();
    setHeaderUser();
  };
  reader.readAsDataURL(file);
}

function purchasePlan(plan) {
  const purchaseMessage = document.getElementById('purchaseMessage');
  const planMap = {
    starter: { name: 'Starter', price: '$9' },
    premium: { name: 'Premium', price: '$19' },
    elite: { name: 'Elite', price: '$39' }
  };

  const selected = planMap[plan];
  if (!selected) return;

  userProfile.plan = selected.name;
  purchaseState.hasPurchased = true;
  purchaseState.purchasedPlan = selected.name;
  localStorage.setItem('kelajak-pro-status', 'true');
  localStorage.setItem('kelajak-purchased-plan', selected.name);
  saveProfile();
  setHeaderUser();

  if (purchaseMessage) {
    purchaseMessage.textContent = `${selected.name} tarif muvaffaqiyatli sotib olindi. (${selected.price}/oy)`;
    purchaseMessage.style.color = '#7fe0a9';
  }

  const premiumButton = document.getElementById('premiumButton');
  if (premiumButton) premiumButton.textContent = 'PRO ✓';
}

function initializeProfileFlow() {
  const profileBtn = document.getElementById('profileButton');
  const premiumBtn = document.getElementById('premiumButton');
  const saveProfileBtn = document.getElementById('saveProfileBtn');
  const profileImageInput = document.getElementById('profileImageInput');
  const closeProfileButtons = document.querySelectorAll('[data-close-profile="true"]');
  const buyButtons = document.querySelectorAll('.buy-plan-btn');

  if (profileBtn) {
    profileBtn.addEventListener('click', openProfileModal);
  }

  if (premiumBtn) {
    premiumBtn.addEventListener('click', () => {
      document.getElementById('premium')?.scrollIntoView({ behavior: 'smooth' });
      openProfileModal();
    });
  }

  if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', handleProfileSave);
  }

  if (profileImageInput) {
    profileImageInput.addEventListener('change', handleProfileImageUpload);
  }

  closeProfileButtons.forEach((button) => {
    button.addEventListener('click', closeProfileModal);
  });

  buyButtons.forEach((button) => {
    button.addEventListener('click', () => purchasePlan(button.dataset.plan));
  });

  setHeaderUser();
}

renderAll();
attachEvents();
applyTheme('default');
refs.readerText.style.fontSize = `${state.readerFontSize}px`;
initializeAuth();
initializeProfileFlow();
