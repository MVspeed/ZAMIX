/*
  translations.js — все тексты сайта ZAMIX
  ==========================================
  Меняй тексты здесь, не трогая index.html

  Структура:
    TRANSLATIONS.ru / .en / .uz — тексты интерфейса
    PRODUCTS.water / .energy / .protein — карточки товаров
*/

/* ============================================================
   ПЕРЕВОДЫ ИНТЕРФЕЙСА
============================================================ */
const TRANSLATIONS = {
  en: {
    hero_eyebrow:         "Quality in every product we sell.",
    hero_title:           "Energy.<br>Power.<br>Balance.",
    hero_sub:             "Products for those who value efficiency and results — no unnecessary additives.",
    nav_water:            "Sports water",
    nav_energy:           "Energy drinks",
    nav_protein:          "Protein concentrates",
    cat_count_water:      "7 types",
    cat_count_energy:     "14 types",
    cat_count_protein:    "9 types",
    about_title:          "About us",
    about_intro:          "We are a trading company specializing in the supply of modern functional beverages and high-quality protein ingredients.",
    about_mission:        "Our mission is to help people maintain an active lifestyle, recover effectively, and achieve their sports goals with products we believe in.",
    about_what_title:     "What we do",
    about_what:           "We supply a wide range of sports and functional nutrition, including:",
    about_item1:          "Celsius energy drinks",
    about_item2:          "Monster Energy — the world's most iconic energy drink",
    about_item3:          "Protein and sports water",
    about_item4:          "Milk and whey protein concentrates",
    about_approach_title: "Our approach",
    about_approach:       "We select manufacturers that meet high quality and safety standards. Each product undergoes thorough testing — from composition to taste and ease of use.",
    about_why_title:      "Why choose us",
    about_why1:           "Reliable supplies — stable logistics and timely delivery",
    about_why2:           "Product quality — we work only with verified brands and certified ingredients",
    about_why3:           "Flexibility — we offer solutions for sports stores, manufacturing companies, and the fitness industry",
    about_why4:           "Partner service — transparency and an individual approach to each client",
    about_goal_title:     "Our goal",
    about_goal:           "Create an ecosystem of products that help people be more energetic, stronger, and healthier every day.",
    contacts_label:       "Contacts",
    view_btn:             "View &#8594;",
  },
  uz: {
    hero_eyebrow:         "Sotayotgan har bir mahsulotimizda sifat.",
    hero_title:           "Energiya.<br>Kuch.<br>Muvozanat.",
    hero_sub:             "Samaradorlik va natijalarni qadrlaydiganlar uchun mahsulotlar — ortiqcha qo'shimchalarsiz.",
    nav_water:            "Sport suvi",
    nav_energy:           "Energetiklar",
    nav_protein:          "Protein konsentratlar",
    cat_count_water:      "7 tur",
    cat_count_energy:     "14 tur",
    cat_count_protein:    "9 tur",
    about_title:          "Biz haqimizda",
    about_intro:          "Biz zamonaviy funktsional ichimliklar va yuqori sifatli protein ingredientlarini yetkazishda ixtisoslashgan savdo kompaniyasimiz.",
    about_mission:        "Bizning missiyamiz odamlarga faol turmush tarzini saqlab qolishga, samarali tiklanishga va biz ishongan mahsulotlar bilan sport maqsadlariga erishishga yordam berishdir.",
    about_what_title:     "Nima bilan shug'ullanamiz",
    about_what:           "Biz keng ko'lamda sport va funktsional oziq-ovqat yetkazamiz, jumladan:",
    about_item1:          "Celsius energetik ichimliklarni",
    about_item2:          "Monster Energy — dunyodagi eng ikonik energetik",
    about_item3:          "Protein va sport suvini",
    about_item4:          "Sut va zardob protein konsentratlari",
    about_approach_title: "Bizning yondashuv",
    about_approach:       "Biz yuqori sifat va xavfsizlik standartlariga mos keladigan ishlab chiqaruvchilarni tanlaymiz. Har bir mahsulot diqqatli tekshiruvdan o'tadi — tarkibidan ta'mga va foydalanish qulayligiga qadar.",
    about_why_title:      "Nega bizni tanlaysiz",
    about_why1:           "Ishonchli yetkazish — barqaror logistika va o'z vaqtida yetkazish",
    about_why2:           "Mahsulot sifati — biz faqat tasdiqlangan brendlar va sertifikatsiyalangan ingredientlar bilan ishlaymiz",
    about_why3:           "Moslashuvchanlik — sport do'konlari, ishlab chiqarish kompaniyalari va fitness sanoatiga yechimlarni taqdim etamiz",
    about_why4:           "Shriklik xizmati — shaffoflik va har bir mijozga shaxsiy yondashuv",
    about_goal_title:     "Bizning maqsad",
    about_goal:           "Odamlarga har kuni energikroq, kuchliroq va sog'lomroq bo'lishiga yordam beradigan mahsulotlar ekosistemasi yaratish.",
    contacts_label:       "Aloqa",
    view_btn:             "Ko'rish &#8594;",
  },
  ru: {
    hero_eyebrow:         "Качество в каждом продукте, который мы продаём.",
    hero_title:           "Энергия.<br>Сила.<br>Баланс.",
    hero_sub:             "Продукты для тех, кто ценит результат и эффективность — без лишних добавок.",
    nav_water:            "Спортивная вода",
    nav_energy:           "Энергетики",
    nav_protein:          "Протеиновые концентраты",
    cat_count_water:      "7 видов",
    cat_count_energy:     "14 видов",
    cat_count_protein:    "9 видов",
    about_title:          "О нас",
    about_intro:          "Мы — торговая компания, специализирующаяся на поставках современных функциональных напитков и высококачественных белковых ингредиентов.",
    about_mission:        "Наша миссия — помогать людям поддерживать активный ритм жизни, эффективно восстанавливаться и достигать спортивных целей с помощью продуктов, в которых мы уверены.",
    about_what_title:     "Чем мы занимаемся",
    about_what:           "Мы поставляем широкий ассортимент спортивного и функционального питания, в том числе:",
    about_item1:          "энергетические напитки Celsius",
    about_item2:          "Monster Energy — самый узнаваемый энергетик в мире",
    about_item3:          "протеиновую и спортивную воду",
    about_item4:          "концентраты молочного и сывороточного белка",
    about_approach_title: "Наш подход",
    about_approach:       "Мы выбираем производителей, которые соответствуют высоким стандартам качества и безопасности. Каждый продукт проходит тщательную проверку — от состава до вкуса и удобства использования.",
    about_why_title:      "Почему выбирают нас",
    about_why1:           "Надёжность поставок — стабильная логистика и точность сроков",
    about_why2:           "Качество продукции — работаем только с проверенными брендами и сертифицированными ингредиентами",
    about_why3:           "Гибкость — предлагаем решения для спортивных магазинов, производственных компаний и фитнес-индустрии",
    about_why4:           "Партнёрский сервис — открытость, прозрачность и индивидуальный подход к каждому клиенту",
    about_goal_title:     "Наша цель",
    about_goal:           "Создавать экосистему продуктов, которые помогают людям быть энергичнее, сильнее и здоровее ежедневно.",
    contacts_label:       "Контакты",
    view_btn:             "Смотреть &#8594;",
  }
};

/* ============================================================
   ТОВАРЫ
   ==========================================
   КАК ДОБАВИТЬ ФОТО:
     image: "photos/название.jpg"
   КАК ДОБАВИТЬ ТОВАР:
     скопируй любой блок и вставь в нужный массив
============================================================ */
const PRODUCTS = {

  /* ────────────────────────────────────────
     СПОРТИВНАЯ ВОДА
  ──────────────────────────────────────── */
  water: [
    {
      image: "AA-Drink-Proteinwater-Grape-Gojiberry.jpg",
      name:  { en: "AA Drink Protein Water Grape Gojiberry", uz: "AA Drink Protein Water Grape Gojiberry", ru: "AA Drink Protein Water Grape Gojiberry" },
      cat:   { en: "Protein Water", uz: "Protein suv", ru: "Протеиновая вода" },
      short: { en: "Grape & goji berry / 0.5 l", uz: "Uzum va goji / 0.5 l", ru: "Виноград и годжи / 0.5 л" },
      desc:  {
        en: "A refreshing protein drink packed with the powerful combination of grape and goji berries. Each bottle delivers 20 g of collagen protein — the clean, light way to fuel an active lifestyle without heavy shakes.",
        uz: "Uzum va goji rezavorlari kuchli kombinatsiyasi bilan yengil protein ichimligi. Har bir shishada 20 g kollagen oqsil — og'ir kokteyllarsiz faol turmush uchun toza va yengil yoqilg'i.",
        ru: "Освежающий протеиновый напиток с мощной комбинацией винограда и ягод годжи. Каждая бутылка содержит 20 г коллагенового протеина — лёгкий и чистый способ поддержать активный образ жизни без тяжёлых коктейлей."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "500 ml"  },
        { label: { en: "Protein",  uz: "Oqsil",    ru: "Белок"   }, value: "20 g"    },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "14 kcal" },
        { label: { en: "Sugar",    uz: "Shakar",   ru: "Сахар"   }, value: "0 g"     }
      ]
    },
    {
      image: "AA-Drink-Proteinwater-Peach-Yuzu.jpg",
      name:  { en: "AA Drink Protein Water Peach Yuzu", uz: "AA Drink Protein Water Peach Yuzu", ru: "AA Drink Protein Water Peach Yuzu" },
      cat:   { en: "Protein Water", uz: "Protein suv", ru: "Протеиновая вода" },
      short: { en: "Peach & yuzu / 0.5 l", uz: "Shaftoli va yuzu / 0.5 l", ru: "Персик и юдзу / 0.5 л" },
      desc:  {
        en: "Juicy peach meets the exotic brightness of Japanese yuzu — all wrapped in a clean 20 g protein drink. No sugar, no crash, just smooth post-workout recovery you'll actually enjoy.",
        uz: "Shirin shaftoli va yapon yuzusining ekzotik yorqinligi — barchasi toza 20 g protein ichimligida. Shakarsiz, tushishsiz, faqat mashqdan keyin maroqli tiklanish.",
        ru: "Сочный персик встречается с экзотической яркостью японского юдзу — всё в одном чистом напитке с 20 г протеина. Без сахара, без спада — только приятное восстановление после тренировки."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "500 ml"  },
        { label: { en: "Protein",  uz: "Oqsil",    ru: "Белок"   }, value: "20 g"    },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "16 kcal" },
        { label: { en: "Sugar",    uz: "Shakar",   ru: "Сахар"   }, value: "0 g"     }
      ]
    },
    {
      image: "AA-Drink-Sportwater-Apple-Kiwi.jpg",
      name:  { en: "AA Drink Sportwater Apple Kiwi", uz: "AA Drink Sportwater Apple Kiwi", ru: "AA Drink Sportwater Apple Kiwi" },
      cat:   { en: "Sport Water", uz: "Sport suvi", ru: "Спортивная вода" },
      short: { en: "Apple & kiwi / 0.5 l", uz: "Olma va kivi / 0.5 l", ru: "Яблоко и киви / 0.5 л" },
      desc:  {
        en: "Zero sugar, zero calories — just crisp apple and kiwi with a full electrolyte complex and magnesium. A hypotonic formula that absorbs fast, keeping you hydrated from the first sip to the last rep.",
        uz: "Shakar ham, kaloriya ham yo'q — faqat yangi olma va kivi, to'liq elektrolit kompleksi va magniy bilan. Tez so'riluvchi gipotonk formula birinchi ho'plamdan oxirgi takrorlashgacha gidratatsiyangizni ta'minlaydi.",
        ru: "Ноль сахара, ноль калорий — только свежий вкус яблока и киви с полным электролитным комплексом и магнием. Гипотоническая формула быстро усваивается и поддерживает гидратацию от первого глотка до последнего повторения."
      },
      specs: [
        { label: { en: "Volume",       uz: "Hajm",          ru: "Объём"       }, value: "500 ml"        },
        { label: { en: "Electrolytes", uz: "Elektrolitlar", ru: "Электролиты" }, value: "Na, K, Ca, Mg" },
        { label: { en: "Magnesium",    uz: "Magniy",        ru: "Магний"      }, value: "+"             },
        { label: { en: "Calories",     uz: "Kaloriya",      ru: "Калории"     }, value: "0 kcal"        }
      ]
    },
    {
      image: "AA-Drink-Sportwater-Berries-1536x1536.jpg",
      name:  { en: "AA Drink Sportwater Berries", uz: "AA Drink Sportwater Berries", ru: "AA Drink Sportwater Berries" },
      cat:   { en: "Sport Water", uz: "Sport suvi", ru: "Спортивная вода" },
      short: { en: "Mixed berries / 0.5 l", uz: "Aralash rezavorlar / 0.5 l", ru: "Лесные ягоды / 0.5 л" },
      desc:  {
        en: "A rich berry blend with electrolytes and magnesium — the perfect companion for those who find plain water too boring but still want clean, sugar-free hydration during training.",
        uz: "Elektrolit va magniy bilan boy rezavor aralashmasi — oddiy suv zerikarli deb hisoblaydigan, lekin mashq davomida toza, shakarsiz gidratatsiya istaganlar uchun mukammal hamroh.",
        ru: "Насыщенное ягодное сочетание с электролитами и магнием — для тех, кому обычная вода кажется скучной, но кто хочет чистую, безсахарную гидратацию во время тренировки."
      },
      specs: [
        { label: { en: "Volume",       uz: "Hajm",          ru: "Объём"       }, value: "500 ml"        },
        { label: { en: "Electrolytes", uz: "Elektrolitlar", ru: "Электролиты" }, value: "Na, K, Ca, Mg" },
        { label: { en: "Magnesium",    uz: "Magniy",        ru: "Магний"      }, value: "+"             },
        { label: { en: "Calories",     uz: "Kaloriya",      ru: "Калории"     }, value: "0 kcal"        }
      ]
    },
    {
      image: "AA-Drink-Sportwater-Lemon-1536x1536.jpg",
      name:  { en: "AA Drink Sportwater Lemon", uz: "AA Drink Sportwater Lemon", ru: "AA Drink Sportwater Lemon" },
      cat:   { en: "Sport Water", uz: "Sport suvi", ru: "Спортивная вода" },
      short: { en: "Lemon / 0.5 l", uz: "Limon / 0.5 l", ru: "Лимон / 0.5 л" },
      desc:  {
        en: "The purest of the line — clean lemon, zero sugar, zero calories, and a full electrolyte and magnesium complex. Simple, classic, and exactly what your body needs to perform at its best.",
        uz: "Liniyaning eng sofi — toza limon, shakarsiz, kalorisiz, to'liq elektrolit va magniy kompleksi bilan. Oddiy, klassik va tanangiz eng yaxshi ishlash uchun kerak bo'lgan narsa.",
        ru: "Самый чистый в линейке — чистый лимон, ноль сахара, ноль калорий и полный комплекс электролитов и магния. Просто, классично — именно то, что нужно телу для максимальной производительности."
      },
      specs: [
        { label: { en: "Volume",       uz: "Hajm",          ru: "Объём"       }, value: "500 ml"        },
        { label: { en: "Electrolytes", uz: "Elektrolitlar", ru: "Электролиты" }, value: "Na, K, Ca, Mg" },
        { label: { en: "Magnesium",    uz: "Magniy",        ru: "Магний"      }, value: "+"             },
        { label: { en: "Calories",     uz: "Kaloriya",      ru: "Калории"     }, value: "0 kcal"        }
      ]
    },
    {
      image: "AA-Drink-Vitwater-Lemon-Lime.jpg",
      name:  { en: "AA Drink Vitwater Lemon Lime", uz: "AA Drink Vitwater Lemon Lime", ru: "AA Drink Vitwater Lemon Lime" },
      cat:   { en: "Vitamin Water", uz: "Vitamin suvi", ru: "Витаминная вода" },
      short: { en: "Lemon & lime / 0.5 l", uz: "Limon va laym / 0.5 l", ru: "Лимон и лайм / 0.5 л" },
      desc:  {
        en: "More than hydration — a daily dose of vitamins B12, D, E, niacin and biotin paired with magnesium and zinc. The sharp lemon-lime flavour makes it easy to keep up your vitamin routine without thinking about it.",
        uz: "Gidratatsiyadan ko'proq — magniy va rux bilan birgalikda kunlik B12, D, E vitaminlari, niatsin va biotin dozasi. O'tkir limon-laym ta'mi vitamin rutiningizni o'ylamasdan davom ettirishni osonlashtiradi.",
        ru: "Больше чем гидратация — ежедневная доза витаминов B12, D, E, ниацина и биотина вместе с магнием и цинком. Острый вкус лимона и лайма делает витаминный режим приятной привычкой."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",       ru: "Объём"    }, value: "500 ml"        },
        { label: { en: "Vitamins", uz: "Vitaminlar", ru: "Витамины" }, value: "B12, D, E, B7" },
        { label: { en: "Minerals", uz: "Minerallar", ru: "Минералы" }, value: "Mg, Zn"        },
        { label: { en: "Calories", uz: "Kaloriya",   ru: "Калории"  }, value: "0 kcal"        }
      ]
    },
    {
      image: "AA-Drink-Vitwater-Rhubarb-Strawberry-1.jpg",
      name:  { en: "AA Drink Vitwater Rhubarb Strawberry", uz: "AA Drink Vitwater Rhubarb Strawberry", ru: "AA Drink Vitwater Rhubarb Strawberry" },
      cat:   { en: "Vitamin Water", uz: "Vitamin suvi", ru: "Витаминная вода" },
      short: { en: "Rhubarb & strawberry / 0.5 l", uz: "Ravent va qulupnay / 0.5 l", ru: "Ревень и клубника / 0.5 л" },
      desc:  {
        en: "A bold rhubarb and strawberry flavour delivering vitamins C, E, D, B12, folic acid and biotin plus zinc in every sip. The most vitamin-rich bottle in the line — ideal for mornings, training days, or whenever your body needs a boost.",
        uz: "Har bir ho'plamda C, E, D, B12 vitaminlari, folat kislota va biotin hamda rux yetkazuvchi jasur ravent va qulupnay ta'mi. Liniyaning eng vitaminli shishasi — ertalab, mashq kunlari yoki tanangiz qo'shimcha kuch kerak bo'lganda ideal.",
        ru: "Смелый вкус ревеня и клубники, доставляющий в каждом глотке витамины C, E, D, B12, фолиевую кислоту, биотин и цинк. Самая витаминная бутылка в линейке — идеальна утром, в тренировочные дни или когда организму нужен заряд."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",       ru: "Объём"    }, value: "500 ml"               },
        { label: { en: "Vitamins", uz: "Vitaminlar", ru: "Витамины" }, value: "C, E, D, B12, B9, B7" },
        { label: { en: "Minerals", uz: "Minerallar", ru: "Минералы" }, value: "Zn"                   },
        { label: { en: "Calories", uz: "Kaloriya",   ru: "Калории"  }, value: "0 kcal"               }
      ]
    }
  ],

  /* ────────────────────────────────────────
     ЭНЕРГЕТИКИ — 4 × Celsius + 10 × Monster
  ──────────────────────────────────────── */
  energy: [

    /* ── CELSIUS ── */
    {
      image: "Celsius-Arctic-Vibe.jpg",
      name:  { en: "Celsius Arctic Vibe", uz: "Celsius Arctic Vibe", ru: "Celsius Arctic Vibe" },
      cat:   { en: "Celsius", uz: "Celsius", ru: "Celsius" },
      short: { en: "Frozen berry / 0.25 l / sugar-free", uz: "Muzlatilgan rezavor / 0.25 l / shakarsiz", ru: "Замороженные ягоды / 0.25 л / без сахара" },
      desc:  {
        en: "Ice-cold frozen berry — sharp, clean and instantly refreshing. Arctic Vibe hits different from the first sip: tart wild berries cut through with a cool spark that wakes you up before the caffeine even kicks in. Its thermogenic MetaPlus formula — green tea extract (EGCG), guarana and ginger — is clinically proven to accelerate metabolism and raise resting energy expenditure by up to 14% for 3 hours after drinking. 6 independent university studies back this up. Add taurine, glucuronolactone, a full B-vitamin complex (B2, B3, B5, B6, B7, B12) and vitamin C. Zero sugar, only 3 kcal. Not just an energy drink — a functional fitness drink that works for your body.",
        uz: "Muzlatilgan rezavor — o'tkir, toza va darhol yangilovchi. Arctic Vibe birinchi qultumdan farq qiladi: o'tkir yovvoyi rezavorlar kofeyin ishga tushgunga qadar sizni uyg'otadigan salqin uchqun bilan kesib o'tadi. Uning termogen MetaPlus formulasi — yashil choy ekstrakti (EGCG), guarana va zanjabil — metabolizmni tezlashtirishi va ichishdan keyin 3 soat davomida tinch holatdagi energiya sarfini 14% gacha oshirishi klinik jihatdan isbotlangan. 6 ta mustaqil universitet tadqiqoti buni tasdiqlaydi. Taurin, glyukuronolakton, to'liq B-vitamin kompleksi (B2, B3, B5, B6, B7, B12) va C vitamini. Shakar yo'q, atigi 3 kkal. Bu shunchaki energetik emas — tanangiz uchun ishlaydigan funksional fitness ichimligi.",
        ru: "Ледяные замороженные ягоды — острые, чистые и мгновенно бодрящие. Arctic Vibe ощущается иначе с первого глотка: терпкие лесные ягоды пронизывают свежей искрой, которая будит тебя ещё до того, как кофеин начинает действовать. Термогенная формула MetaPlus — экстракт зелёного чая (EGCG), гуарана и имбирь — клинически доказано ускоряет метаболизм и повышает расход энергии в покое до 14% в течение 3 часов. 6 независимых университетских исследований это подтверждают. Плюс таурин, глюкуронолактон, полный комплекс витаминов B (B2, B3, B5, B6, B7, B12) и витамин C. Ноль сахара, всего 3 ккал. Не просто энергетик — функциональный фитнес-напиток, который работает на ваше тело."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "250 ml" },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "3 kcal" },
        { label: { en: "Sugar",    uz: "Shakar",   ru: "Сахар"   }, value: "0 g"    },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "75 mg"  }
      ]
    },
    {
      image: "Celsius-Peach-Vibe.jpg",
      name:  { en: "Celsius Peach Vibe", uz: "Celsius Peach Vibe", ru: "Celsius Peach Vibe" },
      cat:   { en: "Celsius", uz: "Celsius", ru: "Celsius" },
      short: { en: "White peach / 0.25 l / sugar-free", uz: "Oq shaftoli / 0.25 l / shakarsiz", ru: "Белый персик / 0.25 л / без сахара" },
      desc:  {
          en: "Sun-ripened white peach — soft, sweet and surprisingly elegant for an energy drink. Peach Vibe is the one you reach for when you want smooth focus without the edge. A gentler entry into the Celsius world, but every bit as effective underneath. Its thermogenic MetaPlus formula — green tea extract (EGCG), guarana and ginger — is clinically proven to accelerate metabolism and raise resting energy expenditure by up to 14% for 3 hours after drinking. 6 independent university studies back this up. Add taurine, glucuronolactone, a full B-vitamin complex (B2, B3, B5, B6, B7, B12) and vitamin C. Zero sugar, only 3 kcal. Not just an energy drink — a functional fitness drink that works for your body.",
        uz: "Quyoshda pishgan oq shaftoli — yumshoq, shirin va energetik ichimlik uchun kutilmaganda nafis. Peach Vibe — o'tkirliksiz yumshoq diqqatni xohlaganingizda tanlaydiganingiz. Celsius dunyosiga yumshoqroq kirish, lekin ostida bir xil samarali. Uning termogen MetaPlus formulasi — yashil choy ekstrakti (EGCG), guarana va zanjabil — metabolizmni tezlashtirishi va ichishdan keyin 3 soat davomida tinch holatdagi energiya sarfini 14% gacha oshirishi klinik jihatdan isbotlangan. 6 ta mustaqil universitet tadqiqoti buni tasdiqlaydi. Taurin, glyukuronolakton, to'liq B-vitamin kompleksi (B2, B3, B5, B6, B7, B12) va C vitamini. Shakar yo'q, atigi 3 kkal. Bu shunchaki energetik emas — tanangiz uchun ishlaydigan funksional fitness ichimligi.",
        ru: "Белый персик, налитый солнцем — мягкий, сладкий и неожиданно изысканный для энергетика. Peach Vibe — это тот, к которому тянешься, когда нужна плавная концентрация без резкости. Самый нежный вход в мир Celsius, но не менее эффективный. Термогенная формула MetaPlus — экстракт зелёного чая (EGCG), гуарана и имбирь — клинически доказано ускоряет метаболизм и повышает расход энергии в покое до 14% в течение 3 часов. 6 независимых университетских исследований это подтверждают. Плюс таурин, глюкуронолактон, полный комплекс витаминов B (B2, B3, B5, B6, B7, B12) и витамин C. Ноль сахара, всего 3 ккал. Не просто энергетик — функциональный фитнес-напиток, который работает на ваше тело."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "250 ml" },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "3 kcal" },
        { label: { en: "Sugar",    uz: "Shakar",   ru: "Сахар"   }, value: "0 g"    },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "75 mg"  }
      ]
    },
    {
      image: "Celsius-Mango-Lemonade.jpg",
      name:  { en: "Celsius Mango Lemonade", uz: "Celsius Mango Lemonade", ru: "Celsius Mango Lemonade" },
      cat:   { en: "Celsius", uz: "Celsius", ru: "Celsius" },
      short: { en: "Mango & lemon / 0.25 l / sugar-free", uz: "Mango va limon / 0.25 l / shakarsiz", ru: "Манго и лимон / 0.25 л / без сахара" },
      desc:  {
        en: "Juicy tropical mango crashes into bright zingy lemonade — bold, vibrant and impossible to ignore. Mango Lemonade is Celsius turned up: more fruit, more sparkle, more personality. The one you grab before a workout when you need that extra push. Its thermogenic MetaPlus formula — green tea extract (EGCG), guarana and ginger — is clinically proven to accelerate metabolism and raise resting energy expenditure by up to 14% for 3 hours after drinking. 6 independent university studies back this up. Add taurine, glucuronolactone, a full B-vitamin complex (B2, B3, B5, B6, B7, B12) and vitamin C. Zero sugar, only 3 kcal. Not just an energy drink — a functional fitness drink that works for your body.",
        uz: "Sharbatli tropik mango yorqin, shiddatli limonadga uriladi — jasur, yorqin va e'tiborsiz qoldirib bo'lmaydigan. Mango Lemonade — bu kuchaytirilgan Celsius: ko'proq meva, ko'proq ko'pik, ko'proq shaxsiyat. Qo'shimcha itarishni xohlaganingizda mashqdan oldin oladigan narsa. Uning termogen MetaPlus formulasi — yashil choy ekstrakti (EGCG), guarana va zanjabil — metabolizmni tezlashtirishi va ichishdan keyin 3 soat davomida tinch holatdagi energiya sarfini 14% gacha oshirishi klinik jihatdan isbotlangan. 6 ta mustaqil universitet tadqiqoti buni tasdiqlaydi. Taurin, glyukuronolakton, to'liq B-vitamin kompleksi (B2, B3, B5, B6, B7, B12) va C vitamini. Shakar yo'q, atigi 3 kkal. Bu shunchaki energetik emas — tanangiz uchun ishlaydigan funksional fitness ichimligi.",
        ru: "Сочное тропическое манго врывается в яркий пикантный лимонад — смелый, живой и невозможно не заметить. Mango Lemonade — это Celsius на максимуме: больше фруктов, больше игристости, больше характера. Тот, который берёшь перед тренировкой, когда нужен дополнительный толчок. Термогенная формула MetaPlus — экстракт зелёного чая (EGCG), гуарана и имбирь — клинически доказано ускоряет метаболизм и повышает расход энергии в покое до 14% в течение 3 часов. 6 независимых университетских исследований это подтверждают. Плюс таурин, глюкуронолактон, полный комплекс витаминов B (B2, B3, B5, B6, B7, B12) и витамин C. Ноль сахара, всего 3 ккал. Не просто энергетик — функциональный фитнес-напиток, который работает на ваше тело."
     },
      specs: [
      { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "250 ml" },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "3 kcal" },
        { label: { en: "Sugar",    uz: "Shakar",   ru: "Сахар"   }, value: "0 g"    },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "75 mg"  }      
      ]
        },
    {
      image: "Celsius-Kiwi-Guava.jpg",
      name:  { en: "Celsius Kiwi Guava", uz: "Celsius Kiwi Guava", ru: "Celsius Kiwi Guava" },
      cat:   { en: "Celsius", uz: "Celsius", ru: "Celsius" },
      short: { en: "Kiwi & guava / 0.25 l / sugar-free", uz: "Kivi va guava / 0.25 l / shakarsiz", ru: "Киви и гуава / 0.25 л / без сахара" },
      desc:  {
        en: "Tart kiwi meets velvet-smooth guava in the most tropical Celsius yet. The contrast is the point — sour and sweet, sharp and soft — all in one impossibly refreshing can. The flavour that makes you forget you're drinking something that's actually good for you. Its thermogenic MetaPlus formula — green tea extract (EGCG), guarana and ginger — is clinically proven to accelerate metabolism and raise resting energy expenditure by up to 14% for 3 hours after drinking. 6 independent university studies back this up. Add taurine, glucuronolactone, a full B-vitamin complex (B2, B3, B5, B6, B7, B12) and vitamin C. Zero sugar, only 3 kcal. Not just an energy drink — a functional fitness drink that works for your body.",
        uz: "O'tkir kivi eng tropik Celsius da mayin guava bilan uchrashadir. Qarama-qarshilik maqsad — nordon va shirin, o'tkir va yumshoq — barchasi bir inanilmas yangilovchi qutida. Siz uchun chindan ham foydali narsa ichayotganingizni unuttiradigan ta'm. Uning termogen MetaPlus formulasi — yashil choy ekstrakti (EGCG), guarana va zanjabil — metabolizmni tezlashtirishi va ichishdan keyin 3 soat davomida tinch holatdagi energiya sarfini 14% gacha oshirishi klinik jihatdan isbotlangan. 6 ta mustaqil universitet tadqiqoti buni tasdiqlaydi. Taurin, glyukuronolakton, to'liq B-vitamin kompleksi (B2, B3, B5, B6, B7, B12) va C vitamini. Shakar yo'q, atigi 3 kkal. Bu shunchaki energetik emas — tanangiz uchun ishlaydigan funksional fitness ichimligi.",
        ru: "Кислый киви встречается с бархатистой гуавой в самом тропическом Celsius на сегодняшний день. Контраст — это и есть суть: кислое и сладкое, острое и мягкое — всё в одной невероятно освежающей банке. Тот вкус, от которого забываешь, что пьёшь что-то по-настоящему полезное. Термогенная формула MetaPlus — экстракт зелёного чая (EGCG), гуарана и имбирь — клинически доказано ускоряет метаболизм и повышает расход энергии в покое до 14% в течение 3 часов. 6 независимых университетских исследований это подтверждают. Плюс таурин, глюкуронолактон, полный комплекс витаминов B (B2, B3, B5, B6, B7, B12) и витамин C. Ноль сахара, всего 3 ккал. Не просто энергетик — функциональный фитнес-напиток, который работает на ваше тело."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "250 ml" },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "3 kcal" },
        { label: { en: "Sugar",    uz: "Shakar",   ru: "Сахар"   }, value: "0 g"    },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "75 mg"  }
      ]
    },

    /* ── MONSTER ── */
    {
      image: "monster-energy.png",
      name:  { en: "Monster Energy Original", uz: "Monster Energy Original", ru: "Monster Energy Original" },
      cat:   { en: "Monster", uz: "Monster", ru: "Monster" },
      short: { en: "Classic / 0.5 l", uz: "Klassik / 0.5 l", ru: "Классический / 0.5 л" },
      desc:  {
        en: "The original that started it all. Monster Energy Original is the benchmark — taurine, caffeine, B-vitamins, ginseng, L-carnitine and guarana in a 500 ml can that has become iconic worldwide. No gimmicks, just the beast.",
        uz: "Hammasini boshlagan asl mahsulot. Monster Energy Original — me'yor: taurin, kafein, B vitaminlari, ginseng, L-karnitin va guarana dunyo bo'ylab ikonik bo'lgan 500 ml bankada. Fokussiz, faqat hayvon.",
        ru: "Оригинал, с которого всё началось. Monster Energy Original — эталон: таурин, кофеин, витамины B, женьшень, L-карнитин и гуарана в 500 мл банке, ставшей иконой по всему миру. Без трюков — только зверь."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "500 ml"  },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "47 kcal" },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "160 mg"  },
        { label: { en: "Taurine",  uz: "Taurin",   ru: "Таурин"  }, value: "2000 mg" }
      ]
    },
    {
      image: "monster-mango-loco-NL-blik.jpg",
      name:  { en: "Monster Energy Mango Loco", uz: "Monster Energy Mango Loco", ru: "Monster Energy Mango Loco" },
      cat:   { en: "Monster", uz: "Monster", ru: "Monster" },
      short: { en: "Mango juice / 0.5 l", uz: "Mango sharbati / 0.5 l", ru: "Манго сок / 0.5 л" },
      desc:  {
        en: "Real mango juice blended with Monster's signature energy complex — the result is a tropical punch that tastes like a holiday and hits like a training partner. One of Monster's best-selling flavours worldwide.",
        uz: "Haqiqiy mango sharbati Monster'ning imzolangan energiya kompleksi bilan aralashtirilgan — natijada ta'tildek ta'mli va mashq sherigi kabi uriladigan tropik zarba paydo bo'ladi. Monster'ning dunyo bo'ylab eng ko'p sotiladigan ta'mlaridan biri.",
        ru: "Настоящий сок манго смешан с фирменным энергетическим комплексом Monster — результат это тропический удар со вкусом отпуска и эффектом партнёра по тренировке. Один из самых продаваемых вкусов Monster в мире."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "500 ml"  },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "52 kcal" },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "160 mg"  },
        { label: { en: "Juice",    uz: "Sharbat",  ru: "Сок"     }, value: "+"       }
      ]
    },
    {
      image: "monster-juiced-khaotic-3.jpeg",
      name:  { en: "Monster Energy Juiced Khaotic", uz: "Monster Energy Juiced Khaotic", ru: "Monster Energy Juiced Khaotic" },
      cat:   { en: "Monster", uz: "Monster", ru: "Monster" },
      short: { en: "Orange & tropical / 0.5 l", uz: "Apelsin va tropik / 0.5 l", ru: "Апельсин и тропик / 0.5 л" },
      desc:  {
        en: "A chaotic blend of orange and tropical juices unleashed into Monster's energy formula — bold, sweet, and full of character. The choice for those who want maximum flavour with maximum kick.",
        uz: "Apelsin va tropik sharbatlarning betartib aralashmasi Monster'ning energiya formulasiga qo'shildi — jasur, shirin va xarakterli. Maksimal ta'm va maksimal zarba istaganlar uchun tanlov.",
        ru: "Хаотичный микс апельсина и тропических соков в энергетической формуле Monster — смелый, сладкий и с характером. Выбор тех, кто хочет максимум вкуса и максимум удара."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "500 ml"  },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "55 kcal" },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "160 mg"  },
        { label: { en: "Juice",    uz: "Sharbat",  ru: "Сок"     }, value: "+"       }
      ]
    },
    {
      image: "Monster-Monarch-blik.jpg",
      name:  { en: "Monster Energy Juiced Monarch", uz: "Monster Energy Juiced Monarch", ru: "Monster Energy Juiced Monarch" },
      cat:   { en: "Monster", uz: "Monster", ru: "Monster" },
      short: { en: "Passion fruit & orange / 0.5 l", uz: "Marakuya va apelsin / 0.5 l", ru: "Маракуйя и апельсин / 0.5 л" },
      desc:  {
        en: "Monarch sits at the premium end of the Juiced line — passion fruit and orange in an elegant, complex taste profile. Rich juice content, full energy complex, and a finish that keeps you coming back.",
        uz: "Monarch Juiced liniyasining yuqori sifatli uchida joylashgan — nafis, murakkab ta'm profilida marakuya va apelsin. Boy sharbat tarkibi, to'liq energiya kompleksi va sizni qayta qaytishga majbur qiladigan oxiri.",
        ru: "Monarch занимает премиальный конец линейки Juiced — маракуйя и апельсин в элегантном, сложном вкусовом профиле. Богатое содержание сока, полный энергетический комплекс и послевкусие, которое заставит вернуться."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "500 ml"  },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "55 kcal" },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "160 mg"  },
        { label: { en: "Juice",    uz: "Sharbat",  ru: "Сок"     }, value: "+"       }
      ]
    },
    {
      image: "Monster-Bad-Apple-bestellen-bei-Five-Star-Trading-Holland.png",
      name:  { en: "Monster Energy Juiced Bad Apple", uz: "Monster Energy Juiced Bad Apple", ru: "Monster Energy Juiced Bad Apple" },
      cat:   { en: "Monster", uz: "Monster", ru: "Monster" },
      short: { en: "Apple juice / 0.5 l", uz: "Olma sharbati / 0.5 l", ru: "Яблочный сок / 0.5 л" },
      desc:  {
        en: "Don't let the name fool you — Bad Apple is dangerously good. Crisp apple juice fused with Monster's energy complex for a sweet and sharp combination that's refreshing, bold, and unmistakably Monster.",
        uz: "Ismiga aldanmang — Bad Apple xavfli darajada yaxshi. Crisp olma sharbati Monster'ning energiya kompleksi bilan birlashtirilgan — shirin va o'tkir, yangilovchi va jasur.",
        ru: "Не дайте названию обмануть вас — Bad Apple опасно хорош. Хрустящий яблочный сок слит с энергетическим комплексом Monster для сладкой и острой комбинации, которая освежает, смелая и неизменно Monster."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "500 ml"  },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "52 kcal" },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "160 mg"  },
        { label: { en: "Juice",    uz: "Sharbat",  ru: "Сок"     }, value: "+"       }
      ]
    },
    {
      image: "Monster-Absolutely-Zero-SA.jpg",
      name:  { en: "Monster Energy Absolutely Zero", uz: "Monster Energy Absolutely Zero", ru: "Monster Energy Absolutely Zero" },
      cat:   { en: "Monster", uz: "Monster", ru: "Monster" },
      short: { en: "Sugar-free / 0.5 l", uz: "Shakarsiz / 0.5 l", ru: "Без сахара / 0.5 л" },
      desc:  {
        en: "All of Monster's power, none of the sugar. Absolutely Zero delivers the same taurine, caffeine and B-vitamin complex as the Original — with a crisp, slightly sweet taste and zero calories. The smart choice for everyday energy.",
        uz: "Monster'ning barcha kuchi, hech qanday shakar yo'q. Absolutely Zero asliyatdagi bir xil taurin, kafein va B-vitamin kompleksini ta'minlaydi — crisp, biroz shirin ta'm va nol kalori bilan.",
        ru: "Вся сила Monster, никакого сахара. Absolutely Zero доставляет тот же комплекс таурина, кофеина и витаминов B, что и оригинал — с хрустящим, слегка сладким вкусом и нулевыми калориями."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "500 ml" },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "0 kcal" },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "160 mg" },
        { label: { en: "Sugar",    uz: "Shakar",   ru: "Сахар"   }, value: "0 g"    }
      ]
    },
    {
      image: "Monster-Lando-Norris-PL-bestellen-bei-Five-Star-Trading-Holland.png",
      name:  { en: "Monster Energy Lando Norris", uz: "Monster Energy Lando Norris", ru: "Monster Energy Lando Norris" },
      cat:   { en: "Monster", uz: "Monster", ru: "Monster" },
      short: { en: "Zero sugar / 0.5 l / F1 edition", uz: "Shakarsiz / 0.5 l / F1 nashr", ru: "Без сахара / 0.5 л / F1 издание" },
      desc:  {
        en: "Co-created with F1 driver Lando Norris, this limited edition zero-sugar Monster delivers racing-grade energy — caffeine, taurine, B-vitamins — in an exclusive can that collectors and fans alike will want.",
        uz: "F1 haydovchisi Lando Norris bilan birgalikda yaratilgan, bu cheklangan nashr shakarsiz Monster poyga darajasidagi energiyani ta'minlaydi — kafein, taurin, B vitaminlari — eksklyuziv bankada.",
        ru: "Созданный совместно с пилотом F1 Лэндо Норрисом, этот лимитированный безсахарный Monster предлагает энергию гоночного уровня — кофеин, таурин, витамины B — в эксклюзивной банке для коллекционеров и фанатов."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "500 ml"     },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "0 kcal"     },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "160 mg"     },
        { label: { en: "Edition",  uz: "Nashr",    ru: "Издание"  }, value: "F1 Limited" }
      ]
    },
    {
      image: "monster-aussie-style-lemonade-blik.jpg",
      name:  { en: "Monster Energy Aussie Style Lemonade", uz: "Monster Energy Aussie Style Lemonade", ru: "Monster Energy Aussie Style Lemonade" },
      cat:   { en: "Monster", uz: "Monster", ru: "Monster" },
      short: { en: "Lemonade / 0.5 l", uz: "Limonad / 0.5 l", ru: "Лимонад / 0.5 л" },
      desc:  {
        en: "A laid-back Australian take on classic lemonade — clean, refreshing, and unmistakably energising. Lighter in sweetness than typical Monster flavours, this one is for those who want to stay sharp without going heavy.",
        uz: "Klassik limonadning xotirjam Avstraliya talqini — toza, yangilovchi va shubhasiz energiyali. Odatiy Monster ta'mlariga qaraganda yengilroq, bu og'irliksiz o'tkir qolmoqchi bo'lganlar uchun.",
        ru: "Расслабленная австралийская интерпретация классического лимонада — чистый, освежающий и неизменно бодрящий. Легче по сладости чем типичные вкусы Monster — для тех, кто хочет оставаться в тонусе без тяжести."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "500 ml"   },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "47 kcal"  },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "160 mg"   },
        { label: { en: "Style",    uz: "Uslub",    ru: "Стиль"   }, value: "Lemonade" }
      ]
    },
    {
      image: "java_monster_mean_bean.jpg",
      name:  { en: "Java Monster Mean Bean", uz: "Java Monster Mean Bean", ru: "Java Monster Mean Bean" },
      cat:   { en: "Monster Coffee", uz: "Monster Qahva", ru: "Monster Кофе" },
      short: { en: "Coffee + energy / 0.443 l / USA", uz: "Qahva + energiya / 0.443 l / AQSh", ru: "Кофе + энергия / 0.443 л / США" },
      desc:  {
        en: "Java Monster is where premium coffee meets the Monster energy complex — and Mean Bean is the flagship. Rich, creamy vanilla bean coffee with a full energy hit. For those who refuse to choose between their morning coffee and their pre-workout.",
        uz: "Java Monster premium qahva Monster energiya kompleksi bilan uchrashgan joy — va Mean Bean flagmandir. To'liq energiya zarbasiga ega boy, kremli vanil qahvasi. Ertalabki qahvalari va mashqoldi o'rtasida tanlarishni rad etadiganlar uchun.",
        ru: "Java Monster — место встречи премиального кофе и энергетического комплекса Monster, Mean Bean — флагман. Богатый, кремовый кофе с ванильными бобами и полным энергетическим зарядом. Для тех, кто не хочет выбирать между утренним кофе и предтренировочным."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "443 ml"   },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "100 kcal" },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "188 mg"   },
        { label: { en: "Coffee",   uz: "Qahva",    ru: "Кофе"    }, value: "+"        }
      ]
    }
  ],

  /* ────────────────────────────────────────
     ПРОТЕИН
  ──────────────────────────────────────── */
  protein: [

    /* ── КОНЦЕНТРАТ МОЛОЧНОГО БЕЛКА (MPC) ── */
    {
      image: "MPC40.jpg",
      name:  { en: "Milk Protein Concentrate MPC-40", uz: "Sut oqsili kontsentrati MPC-40", ru: "Концентрат молочного белка MPC-40" },
      cat:   { en: "Milk Protein Concentrate", uz: "Sut oqsili kontsentrati", ru: "Концентрат молочного белка" },
      short: { en: "25 kg / 40% protein", uz: "25 kg / 40% oqsil", ru: "25 кг / 40% белка" },
      desc:  {
        en: "MPC-40 is an entry-level milk protein concentrate with a balanced ratio of protein and lactose. Ideal for cheese production, fermented dairy products and food applications where both protein and carbohydrate content matter. Sourced from Poland, certified BRC, IFS, Halal and Kosher.",
        uz: "MPC-40 — oqsil va laktoza muvozanatli nisbati bilan boshlang'ich darajadagi sut oqsili kontsentrati. Pishloq ishlab chiqarish, achitilgan sut mahsulotlari va oqsil hamda uglevodlar tarkibi muhim bo'lgan oziq-ovqat mahsulotlari uchun ideal. Polshadan yetkaziladi, BRC, IFS, Halal va Kosher sertifikatlangan.",
        ru: "MPC-40 — концентрат молочного белка начального уровня со сбалансированным соотношением белка и лактозы. Идеален для производства сыров, кисломолочных продуктов и пищевых применений, где важно содержание как белка, так и углеводов."
      },
      specs: [
        { label: { en: "Protein",   uz: "Oqsil",      ru: "Белок"    }, value: "~40%"   },
        { label: { en: "Packaging", uz: "Qadoqlash",  ru: "Фасовка"  }, value: "25 kg"  },
        { label: { en: "Origin",    uz: "Kelib chiqish", ru: "Происхождение" }, value: "EU" }
      ]
    },
    {
      image: "MPC70.jpg",
      name:  { en: "Milk Protein Concentrate MPC-70", uz: "Sut oqsili kontsentrati MPC-70", ru: "Концентрат молочного белка MPC-70" },
      cat:   { en: "Milk Protein Concentrate", uz: "Sut oqsili kontsentrati", ru: "Концентрат молочного белка" },
      short: { en: "25 kg / 70% protein", uz: "25 kg / 70% oqsil", ru: "25 кг / 70% белка" },
      desc:  {
        en: "MPC-70 is a versatile functional protein used in yoghurts, beverages and dry mixes. Its high solubility and clean dairy flavour make it a reliable ingredient for manufacturers who need consistent performance across multiple product formats.",
        uz: "MPC-70 — yogurt, ichimliklar va quruq aralashmalar uchun ishlatiluvchi ko'p qirrali funksional oqsil. Yuqori eruvchanlik va toza sut ta'mi uni bir nechta mahsulot formatlarida doimiy ishlashni talab qiladigan ishlab chiqaruvchilar uchun ishonchli ingredientga aylantiradi.",
        ru: "MPC-70 — универсальный функциональный белок для йогуртов, напитков и сухих смесей. Высокая растворимость и чистый молочный вкус делают его надёжным ингредиентом для производителей, которым нужна стабильная работа в различных форматах продуктов."
      },
      specs: [
        { label: { en: "Protein",   uz: "Oqsil",      ru: "Белок"    }, value: "~70%"   },
        { label: { en: "Packaging", uz: "Qadoqlash",  ru: "Фасовка"  }, value: "25 kg"  },
        { label: { en: "Origin",    uz: "Kelib chiqish", ru: "Происхождение" }, value: "EU" }
      ]
    },
    {
      image: "MPC80.jpg",
      name:  { en: "Milk Protein Concentrate MPC-80", uz: "Sut oqsili kontsentrati MPC-80", ru: "Концентрат молочного белка MPC-80" },
      cat:   { en: "Milk Protein Concentrate", uz: "Sut oqsili kontsentrati", ru: "Концентрат молочного белка" },
      short: { en: "25 kg / 80% protein", uz: "25 kg / 80% oqsil", ru: "25 кг / 80% белка" },
      desc:  {
        en: "MPC-80 is a high-protein dairy ingredient widely used in sports nutrition, dietary products and protein shakes. With ~80% protein content and low lactose, it delivers clean, complete milk protein — both casein and whey — in a single ingredient.",
        uz: "MPC-80 — sport ovqatlanishi, dietik mahsulotlar va protein kokteylarida keng qo'llaniladigan yuqori oqsillli sut ingredienti. ~80% oqsil tarkibi va past laktoza bilan u bitta ingredientda — kazein ham, zardob ham — toza, to'liq sut oqsilini ta'minlaydi.",
        ru: "MPC-80 — высокобелковый молочный ингредиент для спортивного питания, диетических продуктов и протеиновых коктейлей. При ~80% белка и низком содержании лактозы обеспечивает чистый, полный молочный белок — казеин и сыворотку — в одном компоненте."
      },
      specs: [
        { label: { en: "Protein",   uz: "Oqsil",      ru: "Белок"    }, value: "~80%"   },
        { label: { en: "Packaging", uz: "Qadoqlash",  ru: "Фасовка"  }, value: "25 kg"  },
        { label: { en: "Origin",    uz: "Kelib chiqish", ru: "Происхождение" }, value: "EU" }
      ]
    },
    {
      image: "MPC85.jpg",
      name:  { en: "Milk Protein Concentrate MPC-85", uz: "Sut oqsili kontsentrati MPC-85", ru: "Концентрат молочного белка MPC-85" },
      cat:   { en: "Milk Protein Concentrate", uz: "Sut oqsili kontsentrati", ru: "Концентрат молочного белка" },
      short: { en: "25 kg / 85% protein", uz: "25 kg / 85% oqsil", ru: "25 кг / 85% белка" },
      desc:  {
        en: "MPC-85 is a premium-grade concentrate used in specialised and medical nutrition where maximum protein density is critical. The highest MPC grade in our range — minimal lactose, maximum protein purity. Suitable for clinical nutrition, high-protein supplements and premium sports formulas.",
        uz: "MPC-85 — maksimal oqsil zichligi muhim bo'lgan ixtisoslashtirilgan va tibbiy ovqatlanishda qo'llaniladigan premium darajali kontsentrat. Bizning assortimentimizdagi eng yuqori MPC darajasi — minimal laktoza, maksimal oqsil tozaligi. Klinik ovqatlanish, yuqori oqsillli qo'shimchalar va premium sport formulalari uchun mos.",
        ru: "MPC-85 — концентрат премиум-класса для специализированного и медицинского питания, где критична максимальная плотность белка. Высшая марка MPC в нашем ассортименте — минимальная лактоза, максимальная чистота белка. Для клинического питания, высокобелковых добавок и премиальных спортивных формул."
      },
      specs: [
        { label: { en: "Protein",   uz: "Oqsil",      ru: "Белок"    }, value: "~85%"   },
        { label: { en: "Packaging", uz: "Qadoqlash",  ru: "Фасовка"  }, value: "25 kg"  },
        { label: { en: "Grade",     uz: "Daraja",     ru: "Класс"    }, value: "Premium" }
      ]
    },

    /* ── КОНЦЕНТРАТ СЫВОРОТОЧНОГО БЕЛКА (WPC) ── */
    {
      image: "WPC35.jpg",
      name:  { en: "Whey Protein Concentrate WPC-35", uz: "Zardob oqsili kontsentrati WPC-35", ru: "Концентрат сывороточного белка WPC-35" },
      cat:   { en: "Whey Protein Concentrate", uz: "Zardob oqsili kontsentrati", ru: "Концентрат сывороточного белка" },
      short: { en: "25 kg / 35% protein", uz: "25 kg / 35% oqsil", ru: "25 кг / 35% белка" },
      desc:  {
        en: "WPC-35 is a low-protein whey concentrate used primarily in baked goods, animal feed and industrial food applications. Its higher fat and lactose content contribute flavour and texture, making it a cost-effective ingredient for large-scale production.",
        uz: "WPC-35 — asosan pishirilgan mahsulotlar, hayvon ozuqasi va sanoat oziq-ovqat ilovalarida qo'llaniladigan past oqsillli zardob kontsentrati. Yuqori yog' va laktoza tarkibi ta'm va teksturaga hissa qo'shadi, bu esa uni katta miqyosli ishlab chiqarish uchun tejamkor ingredientga aylantiradi.",
        ru: "WPC-35 — низкобелковый концентрат сыворотки, применяемый в выпечке, кормах и промышленном производстве продуктов питания. Более высокое содержание жира и лактозы улучшает вкус и текстуру, делая его экономичным ингредиентом для крупнотоннажного производства."
      },
      specs: [
        { label: { en: "Protein",   uz: "Oqsil",      ru: "Белок"    }, value: "~35%"   },
        { label: { en: "Packaging", uz: "Qadoqlash",  ru: "Фасовка"  }, value: "25 kg"  },
        { label: { en: "Origin",    uz: "Kelib chiqish", ru: "Происхождение" }, value: "EU" }
      ]
    },
    {
      image: "WPC50.jpg",
      name:  { en: "Whey Protein Concentrate WPC-50", uz: "Zardob oqsili kontsentrati WPC-50", ru: "Концентрат сывороточного белка WPC-50" },
      cat:   { en: "Whey Protein Concentrate", uz: "Zardob oqsili kontsentrati", ru: "Концентрат сывороточного белка" },
      short: { en: "25 kg / 50% protein", uz: "25 kg / 50% oqsil", ru: "25 кг / 50% белка" },
      desc:  {
        en: "WPC-50 sits at the mid-range of whey concentrates — suitable for desserts, beverages and dairy-based drinks where a moderate protein boost is needed without a heavy whey character. A practical and affordable option for a wide range of food manufacturers.",
        uz: "WPC-50 zardob kontsentratlarining o'rta qatorida joylashgan — og'ir zardob xususiyatisiz mo'tadil oqsil ko'tarilishi kerak bo'lgan desert, ichimlik va sut asosidagi ichimliklar uchun mos. Keng doiradagi oziq-ovqat ishlab chiqaruvchilari uchun amaliy va hamyonbop variant.",
        ru: "WPC-50 занимает средний диапазон сывороточных концентратов — подходит для десертов, напитков и молочных продуктов, где нужно умеренное обогащение белком без выраженного вкуса сыворотки. Практичный и доступный вариант для широкого круга производителей."
      },
      specs: [
        { label: { en: "Protein",   uz: "Oqsil",      ru: "Белок"    }, value: "~50%"   },
        { label: { en: "Packaging", uz: "Qadoqlash",  ru: "Фасовка"  }, value: "25 kg"  },
        { label: { en: "Origin",    uz: "Kelib chiqish", ru: "Происхождение" }, value: "EU" }
      ]
    },
    {
      image: "WPC60.jpg",
      name:  { en: "Whey Protein Concentrate WPC-60", uz: "Zardob oqsili kontsentrati WPC-60", ru: "Концентрат сывороточного белка WPC-60" },
      cat:   { en: "Whey Protein Concentrate", uz: "Zardob oqsili kontsentrati", ru: "Концентрат сывороточного белка" },
      short: { en: "25 kg / 60% protein", uz: "25 kg / 60% oqsil", ru: "25 кг / 60% белка" },
      desc:  {
        en: "WPC-60 is a functional whey concentrate widely used in yoghurts, processed cheese and milk substitutes. Good emulsification and water-binding properties make it an effective texturiser and protein booster in one, valued by manufacturers of dairy-based and dairy-alternative products alike.",
        uz: "WPC-60 — yogurt, qayta ishlangan pishloq va sut o'rinbosarlarida keng qo'llaniladigan funksional zardob kontsentrati. Yaxshi emulsifikatsiya va suv bog'lash xususiyatlari uni bir vaqtning o'zida samarali teksturizator va oqsil kuchaytiruvchiga aylantiradi.",
        ru: "WPC-60 — функциональный сывороточный концентрат для йогуртов, плавленых сыров и заменителей молока. Хорошие эмульгирующие и водоудерживающие свойства делают его одновременно эффективным текстуризатором и белковым обогатителем."
      },
      specs: [
        { label: { en: "Protein",   uz: "Oqsil",      ru: "Белок"    }, value: "~60%"   },
        { label: { en: "Packaging", uz: "Qadoqlash",  ru: "Фасовка"  }, value: "25 kg"  },
        { label: { en: "Origin",    uz: "Kelib chiqish", ru: "Происхождение" }, value: "EU" }
      ]
    },
    {
      image: "WPC70.jpg",
      name:  { en: "Whey Protein Concentrate WPC-70", uz: "Zardob oqsili kontsentrati WPC-70", ru: "Концентрат сывороточного белка WPC-70" },
      cat:   { en: "Whey Protein Concentrate", uz: "Zardob oqsili kontsentrati", ru: "Концентрат сывороточного белка" },
      short: { en: "25 kg / 70% protein", uz: "25 kg / 70% oqsil", ru: "25 кг / 70% белка" },
      desc:  {
        en: "WPC-70 offers high solubility and a clean taste profile, making it a preferred ingredient for dietary supplements, protein-enriched beverages and meal replacement products. The balance between protein content and affordability puts it at the sweet spot for many B2B buyers.",
        uz: "WPC-70 yuqori eruvchanlik va toza ta'm profilini taklif etadi, bu esa uni dietik qo'shimchalar, oqsilga boy ichimliklar va ovqat almashtiruvchi mahsulotlar uchun afzal ingredient qiladi. Oqsil tarkibi va arzonlik o'rtasidagi muvozanat uni ko'p B2B xaridorlar uchun eng yaxshi tanlovga aylantiradi.",
        ru: "WPC-70 обеспечивает высокую растворимость и чистый вкусовой профиль — предпочтительный ингредиент для БАД, обогащённых белком напитков и продуктов для замены питания. Баланс между содержанием белка и ценой делает его оптимальным выбором для многих B2B-покупателей."
      },
      specs: [
        { label: { en: "Protein",   uz: "Oqsil",      ru: "Белок"    }, value: "~70%"   },
        { label: { en: "Packaging", uz: "Qadoqlash",  ru: "Фасовка"  }, value: "25 kg"  },
        { label: { en: "Origin",    uz: "Kelib chiqish", ru: "Происхождение" }, value: "EU" }
      ]
    },
    {
      image: "WPC80.jpg",
      name:  { en: "Whey Protein Concentrate WPC-80", uz: "Zardob oqsili kontsentrati WPC-80", ru: "Концентрат сывороточного белка WPC-80" },
      cat:   { en: "Whey Protein Concentrate", uz: "Zardob oqsili kontsentrati", ru: "Концентрат сывороточного белка" },
      short: { en: "25 kg / 80% protein", uz: "25 kg / 80% oqsil", ru: "25 кг / 80% белка" },
      desc:  {
        en: "WPC-80 is the industry benchmark for sports and therapeutic nutrition. Fast-absorbing, rich in essential amino acids and BCAAs — it is the go-to choice for protein shakes, sports bars and recovery products. Certified BRC, IFS, Halal and Kosher. Produced in Poland.",
        uz: "WPC-80 — sport va terapevtik ovqatlanish uchun sanoat standarti. Tez so'riluvchi, muhim aminokislotlar va BCAA bilan boy — u protein kokteyllari, sport batonlari va tiklanish mahsulotlari uchun asosiy tanlov. BRC, IFS, Halal va Kosher sertifikatlangan. Polshada ishlab chiqarilgan.",
        ru: "WPC-80 — отраслевой стандарт для спортивного и лечебного питания. Быстро усваивается, богат незаменимыми аминокислотами и BCAA — основной выбор для протеиновых коктейлей, спортивных батончиков и продуктов восстановления. Сертификаты BRC, IFS, Халяль, Кошер. Производство Польша."
      },
      specs: [
        { label: { en: "Protein",   uz: "Oqsil",      ru: "Белок"    }, value: "~80%"    },
        { label: { en: "Packaging", uz: "Qadoqlash",  ru: "Фасовка"  }, value: "25 kg"   },
        { label: { en: "Grade",     uz: "Daraja",     ru: "Класс"    }, value: "Sport / Medical" }
      ]
    }
  ]
};