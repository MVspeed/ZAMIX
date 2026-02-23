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
    hero_eyebrow:         "Quality in every bottle.",
    hero_title:           "Energy.<br>Power.<br>Balance.",
    hero_sub:             "Products for those who value efficiency and results — no unnecessary additives.",
    nav_water:            "Sports water",
    nav_energy:           "Energy drinks",
    nav_protein:          "Protein concentrates",
    cat_count_water:      "7 types",
    cat_count_energy:     "14 types",
    cat_count_protein:    "3 types",
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
    hero_eyebrow:         "Har bir shishada sifat.",
    hero_title:           "Energiya.<br>Kuch.<br>Muvozanat.",
    hero_sub:             "Samaradorlik va natijalarni qadrlaydiganlar uchun mahsulotlar — ortiqcha qo'shimchalarsiz.",
    nav_water:            "Sport suvi",
    nav_energy:           "Energetiklar",
    nav_protein:          "Protein konsentratlar",
    cat_count_water:      "7 tur",
    cat_count_energy:     "14 tur",
    cat_count_protein:    "3 tur",
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
    hero_eyebrow:         "Качество в каждой банке.",
    hero_title:           "Энергия.<br>Сила.<br>Баланс.",
    hero_sub:             "Продукты для тех, кто ценит результат и эффективность — без лишних добавок.",
    nav_water:            "Спортивная вода",
    nav_energy:           "Энергетики",
    nav_protein:          "Протеиновые концентраты",
    cat_count_water:      "7 видов",
    cat_count_energy:     "14 видов",
    cat_count_protein:    "3 вида",
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
        en: "Cold, clean and instantly refreshing — Arctic Vibe delivers a steady energy lift from green tea extract, guarana and ginger, with zero sugar and no crash. Cool berry taste, strong performance, modern format.",
        uz: "Sovuq, toza va darhol yangilovchi — Arctic Vibe yashil choy ekstrakti, guarana va zanjabildan barqaror energiya ko'tarilishini ta'minlaydi, shakarsiz va tushishsiz. Salqin rezavor ta'mi, kuchli ishlash, zamonaviy format.",
        ru: "Холодный, чистый и мгновенно освежающий — Arctic Vibe даёт стабильный подъём энергии из экстракта зелёного чая, гуараны и имбиря, без сахара и без спада. Свежий ягодный вкус, высокая производительность, современный формат."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "250 ml" },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "3 kcal" },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "75 mg"  },
        { label: { en: "Sugar",    uz: "Shakar",   ru: "Сахар"   }, value: "0 g"    }
      ]
    },
    {
      image: "Celsius-Peach-Vibe.jpg",
      name:  { en: "Celsius Peach Vibe", uz: "Celsius Peach Vibe", ru: "Celsius Peach Vibe" },
      cat:   { en: "Celsius", uz: "Celsius", ru: "Celsius" },
      short: { en: "White peach / 0.25 l / sugar-free", uz: "Oq shaftoli / 0.25 l / shakarsiz", ru: "Белый персик / 0.25 л / без сахара" },
      desc:  {
        en: "Soft, sweet white peach with a gentle energy boost from green tea and guarana. The choice for those who want smooth alertness and refined taste — without the jitters or the sugar.",
        uz: "Yashil choy va guaranadan yumshoq energiya oshishi bilan nozik, shirin oq shaftoli. Titrashsiz va shakarsiz yumshoq tetiklik va nafis ta'm istaydiganlar uchun tanlov.",
        ru: "Нежный сладкий белый персик с мягким энергетическим подъёмом от зелёного чая и гуараны. Выбор для тех, кто хочет плавную бодрость и утончённый вкус — без дрожи и без сахара."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "250 ml" },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "3 kcal" },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "75 mg"  },
        { label: { en: "Sugar",    uz: "Shakar",   ru: "Сахар"   }, value: "0 g"    }
      ]
    },
    {
      image: "Celsius-Mango-Lemonade.jpg",
      name:  { en: "Celsius Mango Lemonade", uz: "Celsius Mango Lemonade", ru: "Celsius Mango Lemonade" },
      cat:   { en: "Celsius", uz: "Celsius", ru: "Celsius" },
      short: { en: "Mango & lemon / 0.25 l / sugar-free", uz: "Mango va limon / 0.25 l / shakarsiz", ru: "Манго и лимон / 0.25 л / без сахара" },
      desc:  {
        en: "Tropical mango meets zesty lemonade in Celsius's most vibrant flavour. Energised by green tea and guarana, it delivers clean, focused energy — perfect before a workout or a long workday.",
        uz: "Tropik mango Celsius'ning eng yorqin ta'mida limonad bilan uchrashadi. Yashil choy va guarana bilan kuchaytirilib, u mashq yoki uzoq ish kunidan oldin mukammal toza, e'tiborli energiyani ta'minlaydi.",
        ru: "Тропическое манго встречается с пикантным лимонадом в самом ярком вкусе Celsius. Заряженный зелёным чаем и гуараной, он даёт чистую, сфокусированную энергию — идеально перед тренировкой или долгим рабочим днём."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "250 ml" },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "3 kcal" },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "75 mg"  },
        { label: { en: "Sugar",    uz: "Shakar",   ru: "Сахар"   }, value: "0 g"    }
      ]
    },
    {
      image: "Celsius-Kiwi-Guava.jpg",
      name:  { en: "Celsius Kiwi Guava", uz: "Celsius Kiwi Guava", ru: "Celsius Kiwi Guava" },
      cat:   { en: "Celsius", uz: "Celsius", ru: "Celsius" },
      short: { en: "Kiwi & guava / 0.25 l / sugar-free", uz: "Kivi va guava / 0.25 l / shakarsiz", ru: "Киви и гуава / 0.25 л / без сахара" },
      desc:  {
        en: "A bold tropical duo — tart kiwi and sweet guava — backed by Celsius's clean energy formula: green tea, guarana, ginger, and a full B-vitamin complex. Zero sugar, zero compromise.",
        uz: "Jasur tropik duo — o'tkir kivi va shirin guava — Celsius'ning toza energiya formulasi bilan: yashil choy, guarana, zanjabil va to'liq B-vitamin kompleksi. Shakarsiz, murosasiz.",
        ru: "Смелый тропический дуэт — кислый киви и сладкая гуава — поддержанный чистой энергетической формулой Celsius: зелёный чай, гуарана, имбирь и полный комплекс витаминов B. Без сахара, без компромиссов."
      },
      specs: [
        { label: { en: "Volume",   uz: "Hajm",     ru: "Объём"   }, value: "250 ml" },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "3 kcal" },
        { label: { en: "Caffeine", uz: "Kafein",   ru: "Кофеин"  }, value: "75 mg"  },
        { label: { en: "Sugar",    uz: "Shakar",   ru: "Сахар"   }, value: "0 g"    }
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
    {
      image: "",
      name:  { en: "Whey Classic",  uz: "Whey Classic",    ru: "Whey Classic"        },
      cat:   { en: "Protein",       uz: "Protein",         ru: "Протеин"             },
      short: { en: "Whey, vanilla", uz: "Zardob, vanil",   ru: "Сывороточный, ваниль" },
      desc:  {
        en: "Classic whey protein with a complete amino acid profile. Fast-absorbing, ideal post-workout.",
        uz: "To'liq aminokislota profili bilan klassik zardob proteini. Tez hazm bo'ladi.",
        ru: "Классический сывороточный протеин с полным аминокислотным профилем. Быстро усваивается, идеален после тренировки."
      },
      specs: [
        { label: { en: "Serving",  uz: "Porsiya",  ru: "Порция"  }, value: "30 g"     },
        { label: { en: "Protein",  uz: "Oqsil",    ru: "Белок"   }, value: "24 g"     },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "122 kcal" },
        { label: { en: "BCAA",     uz: "BCAA",     ru: "BCAA"    }, value: "5.5 g"    }
      ]
    },
    {
      image: "",
      name:  { en: "Plant Protein",      uz: "Plant Protein",      ru: "Plant Protein"         },
      cat:   { en: "Protein",            uz: "Protein",            ru: "Протеин"               },
      short: { en: "Vegan, chocolate",   uz: "O'simlik, shokolad", ru: "Растительный, шоколад" },
      desc:  {
        en: "Protein from peas and brown rice. Suitable for vegans and lactose-intolerant individuals. Dark chocolate flavour.",
        uz: "No'xat va jigarrang guruch proteini. Vegan va laktoza bag'rimsizligi uchun. Qora shokolad ta'mi.",
        ru: "Протеин из гороха и коричневого риса. Для веганов и людей с непереносимостью лактозы. Тёмный шоколад."
      },
      specs: [
        { label: { en: "Serving",  uz: "Porsiya",  ru: "Порция"  }, value: "32 g"     },
        { label: { en: "Protein",  uz: "Oqsil",    ru: "Белок"   }, value: "22 g"     },
        { label: { en: "Calories", uz: "Kaloriya", ru: "Калории" }, value: "128 kcal" },
        { label: { en: "Lactose",  uz: "Laktoza",  ru: "Лактоза" }, value: "None"     }
      ]
    },
    {
      image: "",
      name:  { en: "Recovery Mix",  uz: "Recovery Mix",   ru: "Recovery Mix"              },
      cat:   { en: "Protein",       uz: "Protein",        ru: "Протеин"                   },
      short: { en: "Protein + carbs, strawberry", uz: "Protein + uglevodlar, qulupnay", ru: "Протеин + углеводы, клубника" },
      desc:  {
        en: "Recovery formula combining fast protein with a carbohydrate complex. Ideal for endurance training.",
        uz: "Tez proteinni uglevodlar kompleksi bilan birlashtiruvchi tiklanish formulasi.",
        ru: "Формула восстановления: быстрый протеин + углеводный комплекс. Идеально для тренировок на выносливость."
      },
      specs: [
        { label: { en: "Serving",  uz: "Porsiya",    ru: "Порция"   }, value: "60 g"     },
        { label: { en: "Protein",  uz: "Oqsil",      ru: "Белок"    }, value: "20 g"     },
        { label: { en: "Carbs",    uz: "Uglevodlar", ru: "Углеводы" }, value: "28 g"     },
        { label: { en: "Calories", uz: "Kaloriya",   ru: "Калории"  }, value: "210 kcal" }
      ]
    }
  ]
};
