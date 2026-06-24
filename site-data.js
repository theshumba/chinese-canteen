/*
  Chinese Canteen — site data
  Menu transcribed from the printed dinner menu.
  Key:  V = Vegetarian (may contain egg) · F = Contains fish / seafood · N = Contains nuts
  heat: 0 none · 1 mild · 2 medium · 3 hot
*/
window.SITE_DATA = {
  restaurant: {
    name: "Chinese Canteen",
    nameZh: "食府",
    city: "Cambridge",
    tagline: "Szechuan & Cantonese cooking in the centre of Cambridge",
    subtitle:
      "Generous portions, handmade dumplings and one of the few places in Cambridge making fresh bubble milk tea.",
    address: "30 Bridge Street, Cambridge CB2 1UJ",
    nearby: "Next to St John's & Magdalene College",
    mapUrl: "https://maps.google.com/?q=30+Bridge+Street+Cambridge+CB2+1UJ",
    mapEmbed:
      "https://www.google.com/maps?q=30+Bridge+Street+Cambridge+CB2+1UJ&output=embed",
    phoneDisplay: "01223 312415",
    phoneHref: "tel:+441223312415",
    notes: [
      "Walk in to dine, or order ahead for collection",
      "10% off for students with a valid ID",
      "Generous portions — plenty to take home"
    ],
    hours: [
      { day: "Monday", value: "11:00 – 22:00" },
      { day: "Tuesday", value: "11:00 – 22:00" },
      { day: "Wednesday", value: "11:00 – 22:00" },
      { day: "Thursday", value: "11:00 – 22:00" },
      { day: "Friday", value: "11:00 – 22:00" },
      { day: "Saturday", value: "11:00 – 22:00" },
      { day: "Sunday", value: "11:00 – 22:00" }
    ]
  },

  ordering: {
    // Every "Order for collection" button points here.
    url: "https://chinesecanteen.lifeintouch.net/"
  },

  // Category order on the menu page.
  categories: [
    "Starters",
    "Cold Starters",
    "Soups",
    "Vegetable Dishes",
    "Rice & Noodles",
    "Seafood",
    "Spicy Specialities",
    "Mild & Savoury",
    "Build Your Own Main",
    "Set Meals",
    "Hot Pot & Dry Pot"
  ],

  menu: [
    // ---------- Starters ----------
    { code: "001", name: "Prawn Crackers", nameZh: "虾片", category: "Starters", price: 3.0, tags: ["F"], heat: 0, description: "Light, crispy prawn crackers served with a sweet chilli dip." },
    { code: "002", name: "Crispy Seaweed", nameZh: "脆海苔", category: "Starters", price: 6.5, tags: ["V"], heat: 0, description: "Quick-fried shredded kelp, lightly salted." },
    { code: "003", name: "Sesame Prawn Toast", nameZh: "虾多士", category: "Starters", price: 8.5, tags: ["F"], heat: 0, description: "Golden fried bread topped with minced prawn and sesame seeds." },
    { code: "004", name: "Vegetable Spring Rolls (5)", nameZh: "素春卷", category: "Starters", price: 7.5, tags: ["V"], heat: 0, description: "Crispy rolls stuffed with shredded cabbage, carrots and mixed vegetables." },
    { code: "005", name: "Pan-Fried Dumplings", nameZh: "猪肉锅贴", category: "Starters", price: 8.0, tags: [], heat: 0, description: "Handmade, filled with seasoned pork, pan-seared until golden and crispy." },
    { code: "006", name: "Crispy Aromatic Duck", nameZh: "香酥鸭", category: "Starters", price: 14.5, tags: [], heat: 0, description: "Quarter duck prepared in-house, served with pancakes, cucumber, spring onion and Peking sauce." },
    { code: "007", name: "Satay Chicken Skewers", nameZh: "沙爹鸡串", category: "Starters", price: 8.5, tags: ["N"], heat: 0, description: "Tender chicken skewers served with a rich peanut sauce." },
    { code: "008", name: "Salt & Pepper King Prawns", nameZh: "椒盐大虾", category: "Starters", price: 9.5, tags: ["F"], heat: 0, description: "Lightly battered king prawns, wok-tossed with chillies and onions." },
    { code: "009", name: "Salt & Pepper Squid", nameZh: "椒盐鲜鱿", category: "Starters", price: 9.5, tags: ["F"], heat: 0, description: "Lightly battered squid, wok-tossed with chillies and onions." },
    { code: "010", name: "Salt & Pepper Tofu", nameZh: "椒盐豆腐", category: "Starters", price: 8.5, tags: ["V"], heat: 0, description: "Crispy fried tofu seasoned with salt and pepper." },
    { code: "011", name: "Salt & Pepper Chicken Wings", nameZh: "椒盐鸡翅", category: "Starters", price: 8.5, tags: [], heat: 0, description: "Crispy fried chicken wings seasoned with salt and pepper." },
    { code: "012", name: "Salt & Pepper Spare Ribs", nameZh: "椒盐排骨", category: "Starters", price: 9.5, tags: [], heat: 0, description: "Crispy fried spare ribs seasoned with salt and pepper." },
    { code: "013", name: "Spare Ribs in Peking Sauce", nameZh: "京骨", category: "Starters", price: 9.5, tags: [], heat: 0, description: "Crispy spare ribs glazed in a sweet Peking sauce." },

    // ---------- Cold Starters ----------
    { code: "014", name: "Marinated Cucumber with Bean Pastry", nameZh: "凉拌青儿粉皮", category: "Cold Starters", price: 9.5, tags: ["V"], heat: 0, description: "Translucent noodles with cucumber in salt, vinegar, garlic and sesame oil." },
    { code: "015", name: "Shredded Potato in Chilli", nameZh: "炝拌土豆丝", category: "Cold Starters", price: 7.5, tags: ["V"], heat: 1, description: "Finely shredded potato tossed with chillies, vinegar and sugar." },
    { code: "016", name: "Jellyfish Salad", nameZh: "麻油海蜇丝", category: "Cold Starters", price: 9.5, tags: ["F"], heat: 0, description: "Tenderised jellyfish in vinegar, garlic, soy sauce and sesame oil." },
    { code: "017", name: "Braised Beef in Five Spices", nameZh: "五香酱牛腱", category: "Cold Starters", price: 11.5, tags: [], heat: 0, description: "Thinly sliced beef shank infused with star anise, fennel, clove and cinnamon." },
    { code: "018", name: "Sichuan Steamed Chicken in Chilli Oil", nameZh: "川味口水鸡", category: "Cold Starters", price: 11.5, tags: ["N"], heat: 2, description: "Tender chicken in chilli oil and Sichuan sauce, topped with sesame seeds and peanuts." },
    { code: "019", name: "Sliced Beef Tripe", nameZh: "夫妻肺片", category: "Cold Starters", price: 11.5, tags: ["N"], heat: 2, description: "Slow-braised beef, cooled and garnished with sesame seeds and peanuts." },
    { code: "020", name: "Dried Bean Curd in Brine", nameZh: "卤水大豆干", category: "Cold Starters", price: 9.5, tags: ["V"], heat: 0, description: "Firm tofu infused with star anise, cloves, cinnamon, garlic and ginger." },
    { code: "021", name: "Tasty Tree Ears", nameZh: "爽口木耳", category: "Cold Starters", price: 8.5, tags: ["V"], heat: 0, description: "Black fungus with garlic, ginger, vinegar and sesame oil. Refreshingly crunchy." },
    { code: "022", name: "Hot & Sour Kelp", nameZh: "酸辣海带丝", category: "Cold Starters", price: 7.5, tags: ["V"], heat: 1, description: "Shredded kelp tossed with garlic, ginger, vinegar and sesame oil." },

    // ---------- Soups ----------
    { code: "023", name: "Seafood Soup", nameZh: "海鲜汤", category: "Soups", price: 5.0, tags: ["F"], heat: 0, description: "Light broth with prawns, crab sticks, squid and vegetables." },
    { code: "024", name: "Hot & Sour Soup", nameZh: "酸辣汤", category: "Soups", price: 5.0, tags: [], heat: 1, description: "Thick broth with egg, tofu and vegetables, seasoned with vinegar and pepper." },
    { code: "025", name: "Won Ton Soup", nameZh: "云吞汤", category: "Soups", price: 5.0, tags: [], heat: 0, description: "Light broth with handmade pork and vegetable won tons." },
    { code: "026", name: "West Lake Beef Soup", nameZh: "西湖牛肉羹", category: "Soups", price: 5.0, tags: [], heat: 0, description: "Thick, silky broth with minced beef and egg whites." },
    { code: "027", name: "Mixed Vegetable Soup", nameZh: "杂菜汤", category: "Soups", price: 5.0, tags: ["V"], heat: 0, description: "Light broth with cabbage, carrots and mushrooms." },
    { code: "028", name: "Sweet Corn Soup", nameZh: "粟米汤", category: "Soups", price: 5.0, tags: [], heat: 0, description: "Thick, creamy sweetcorn broth with egg whites. Choose plain, chicken or crab stick." },
    { code: "029", name: "Seaweed & Fish Ball Soup", nameZh: "紫菜鱼丸汤", category: "Soups", price: 5.0, tags: ["F"], heat: 0, description: "Light broth with seaweed and bouncy fish balls." },
    { code: "030", name: "Chicken & Mushroom Soup", nameZh: "蘑菇鸡汤", category: "Soups", price: 5.0, tags: [], heat: 0, description: "Light broth with tender chicken and mushrooms." },
    { code: "031", name: "Fish & Tofu Soup", nameZh: "鱼片豆腐汤", category: "Soups", price: 5.0, tags: ["F"], heat: 0, description: "Light broth with delicate fish slices and silky tofu." },
    { code: "032", name: "Egg & Tomato Soup", nameZh: "番茄蛋汤", category: "Soups", price: 5.0, tags: ["V"], heat: 0, description: "Light broth with beaten egg and fresh tomato." },

    // ---------- Vegetable Dishes ----------
    { code: "033", name: "Chinese Cabbage with Garlic", nameZh: "蒜蓉大白菜", category: "Vegetable Dishes", price: 12.0, tags: ["V"], heat: 0, description: "Stir-fried Chinese cabbage in a fragrant garlic sauce." },
    { code: "034", name: "Pak Choi in Garlic Sauce", nameZh: "蒜蓉小白菜", category: "Vegetable Dishes", price: 11.5, tags: ["V"], heat: 0, description: "Tender pak choi wok-tossed in fragrant garlic sauce." },
    { code: "035", name: "Pak Choi with Chinese Mushrooms", nameZh: "香菇小白菜", category: "Vegetable Dishes", price: 12.5, tags: ["V"], heat: 0, description: "Pak choi with Chinese mushrooms in oyster sauce." },
    { code: "036", name: "Lettuce in Oyster Sauce", nameZh: "蚝油生菜", category: "Vegetable Dishes", price: 11.5, tags: ["V"], heat: 0, description: "Crisp lettuce blanched and drizzled with oyster sauce." },
    { code: "037", name: "Mapo Tofu", nameZh: "麻婆豆腐", category: "Vegetable Dishes", price: 10.5, tags: [], heat: 3, description: "Silken tofu in a fiery Sichuan chilli-bean sauce. Numbing, spicy and aromatic." },
    { code: "038", name: "Home-Style Tofu", nameZh: "家常豆腐", category: "Vegetable Dishes", price: 11.5, tags: ["V"], heat: 0, description: "Braised tofu with mixed vegetables in a savoury soy sauce." },
    { code: "039", name: "Tofu in Black Bean Sauce", nameZh: "豉椒豆腐", category: "Vegetable Dishes", price: 11.5, tags: ["V"], heat: 0, description: "Tofu stir-fried with green peppers in black bean sauce." },
    { code: "040", name: "Tofu in Soy Sauce", nameZh: "红烧豆腐", category: "Vegetable Dishes", price: 11.5, tags: ["V"], heat: 0, description: "Braised tofu in a sweet and savoury soy sauce." },
    { code: "041", name: "Braised Aubergine in Soy Sauce", nameZh: "红烧茄子", category: "Vegetable Dishes", price: 11.5, tags: ["V"], heat: 0, description: "Tender aubergine braised in a sweet and savoury soy sauce." },
    { code: "042", name: "Yu Xiang Aubergine", nameZh: "鱼香茄子", category: "Vegetable Dishes", price: 11.5, tags: ["V"], heat: 1, description: "Aubergine in a spicy, sweet and sour fish-fragrance sauce. No fish." },
    { code: "043", name: "Potted Yu Xiang Aubergine (with Pork)", nameZh: "鱼香茄子煲", category: "Vegetable Dishes", price: 12.5, tags: [], heat: 1, description: "Clay pot aubergine with pork in a spicy, sweet and sour fish-fragrance sauce. No fish." },
    { code: "044", name: "Dragon Aubergine", nameZh: "龙虾茄子", category: "Vegetable Dishes", price: 15.5, tags: ["F"], heat: 1, description: "Whole aubergine in Yu Xiang sauce, crowned with king prawns." },
    { code: "045", name: "Aubergine in Black Bean Sauce", nameZh: "豉椒茄子", category: "Vegetable Dishes", price: 11.5, tags: ["V"], heat: 0, description: "Stir-fried aubergine with green peppers in black bean sauce." },
    { code: "046", name: "Earth Three Fresh", nameZh: "地三鲜", category: "Vegetable Dishes", price: 11.5, tags: [], heat: 0, description: "North-eastern classic. Potato, green pepper and aubergine sautéed in soy sauce." },
    { code: "047", name: "Dry-Fried String Beans with Chilli", nameZh: "干煸豆角", category: "Vegetable Dishes", price: 11.5, tags: ["V"], heat: 2, description: "String beans stir-fried with dried chillies and Sichuan peppercorn." },
    { code: "048", name: "Sautéed Hot & Sour Shredded Potato", nameZh: "酸辣土豆丝", category: "Vegetable Dishes", price: 9.0, tags: ["V"], heat: 1, description: "Shredded potato sautéed with dried chillies and Chinese vinegar." },
    { code: "049", name: "Five-Spiced Tofu with Chillies", nameZh: "辣椒香干", category: "Vegetable Dishes", price: 13.0, tags: [], heat: 1, description: "Five-spiced tofu stir-fried with chilli peppers." },
    { code: "050", name: "Chilli Stir-Fried Paper Tofu", nameZh: "辣椒千张", category: "Vegetable Dishes", price: 13.0, tags: [], heat: 1, description: "Thin tofu sheets, shredded and stir-fried with pork and dried chillies." },
    { code: "051", name: "Stir-Fried Mixed Vegetables", nameZh: "炒杂菜", category: "Vegetable Dishes", price: 10.5, tags: ["V"], heat: 0, description: "Seasonal vegetables, lightly seasoned and wok-fried." },
    { code: "052", name: "Scrambled Eggs with Tomatoes", nameZh: "西红柿炒鸡蛋", category: "Vegetable Dishes", price: 11.5, tags: ["V"], heat: 0, description: "Fluffy scrambled eggs with sweet tomatoes. A Chinese comfort classic." },
    { code: "053", name: "Broccoli with Garlic Sauce", nameZh: "蒜蓉西兰花", category: "Vegetable Dishes", price: 11.5, tags: ["V"], heat: 0, description: "Fresh broccoli stir-fried in fragrant garlic sauce." },

    // ---------- Rice & Noodles ----------
    { code: "054", name: "Peking Dumplings", nameZh: "北京水饺", category: "Rice & Noodles", price: 10.5, tags: [], heat: 0, description: "Handmade dumplings filled with seasoned pork and Chinese cabbage." },
    { code: "055", name: "Plain Noodles", nameZh: "净面", category: "Rice & Noodles", price: 7.5, tags: ["V"], heat: 0, description: "Simple fried noodles, no meat or vegetables." },
    { code: "056", name: "Steamed Rice", nameZh: "白米饭", category: "Rice & Noodles", price: 3.5, tags: ["V"], heat: 0, description: "Plain steamed rice." },
    { code: "057", name: "Egg Fried Rice", nameZh: "鸡蛋炒饭", category: "Rice & Noodles", price: 5.5, tags: ["V"], heat: 0, description: "Wok-fried rice with beaten egg and soy sauce." },
    { code: "058", name: "Chicken Fried Rice / Noodles", nameZh: "鸡肉炒饭/面", category: "Rice & Noodles", price: 9.0, tags: [], heat: 0, description: "Wok-fried with chicken, egg (rice option) and soy sauce." },
    { code: "059", name: "Beef Fried Rice / Noodles", nameZh: "牛肉炒饭/面", category: "Rice & Noodles", price: 10.0, tags: [], heat: 0, description: "Wok-fried with beef, egg (rice option) and soy sauce." },
    { code: "060", name: "King Prawn Fried Rice / Noodles", nameZh: "大虾炒饭/面", category: "Rice & Noodles", price: 11.5, tags: ["F"], heat: 0, description: "Wok-fried with king prawns, egg (rice option) and soy sauce." },
    { code: "061", name: "Seafood Fried Rice / Noodles", nameZh: "海鲜炒饭/面", category: "Rice & Noodles", price: 11.5, tags: ["F"], heat: 0, description: "Wok-fried with prawns, squid and crab sticks, egg (rice option) and soy sauce." },
    { code: "062", name: "Mushroom Fried Rice / Noodles", nameZh: "蘑菇炒饭/面", category: "Rice & Noodles", price: 8.5, tags: ["V"], heat: 0, description: "Wok-fried with mushrooms, egg (rice option) and soy sauce." },
    { code: "063", name: "Vegetable Fried Rice / Noodles", nameZh: "杂菜炒饭/面", category: "Rice & Noodles", price: 8.5, tags: ["V"], heat: 0, description: "Wok-fried with seasonal vegetables, egg (rice option) and soy sauce." },
    { code: "064", name: "Special Fried Rice / Noodles", nameZh: "扬州炒饭/面", category: "Rice & Noodles", price: 11.5, tags: ["F"], heat: 0, description: "Wok-fried with chicken, char siu, shrimp and egg (rice option)." },
    { code: "065", name: "House Special Fried Rice / Noodles / Noodle Soup", nameZh: "招牌炒饭/面/汤面", category: "Rice & Noodles", price: 11.5, tags: ["F"], heat: 0, description: "Our signature. Chicken, pork, prawns and vegetables in soy sauce." },
    { code: "066", name: "Singapore Fried Rice / Noodles / Vermicelli", nameZh: "星洲炒饭/面/米粉", category: "Rice & Noodles", price: 11.5, tags: ["F"], heat: 1, description: "Chicken, char siu, prawns and vegetables with turmeric, cumin and chillies." },
    { code: "067", name: "Beef Fried Ho Fan Noodles", nameZh: "牛肉炒河粉", category: "Rice & Noodles", price: 11.5, tags: [], heat: 0, description: "Thick, flat rice noodles stir-fried with beef in soy sauce." },
    { code: "068", name: "Seafood Fried Udon", nameZh: "海鲜炒乌冬", category: "Rice & Noodles", price: 11.0, tags: ["F"], heat: 0, description: "Thick udon noodles wok-fried with prawns, squid and crab sticks." },
    { code: "069", name: "Henan Noodle Soup (Beef / Lamb)", nameZh: "河南烩面", category: "Rice & Noodles", price: 12.5, tags: [], heat: 0, description: "Handmade, hand-stretched noodles in a hearty broth with beef or lamb." },
    { code: "070", name: "Tomato & Egg Noodle Soup", nameZh: "番茄鸡蛋面", category: "Rice & Noodles", price: 11.0, tags: ["V"], heat: 0, description: "Noodles in light broth topped with tomato and scrambled egg." },
    { code: "071", name: "Beef Noodle Soup", nameZh: "牛腩汤面", category: "Rice & Noodles", price: 11.5, tags: [], heat: 0, description: "Noodles with slow-stewed beef in star anise, cassia and ginger." },
    { code: "072", name: "Seafood Ho Fan Noodle Soup", nameZh: "海鲜汤河粉", category: "Rice & Noodles", price: 11.5, tags: ["F"], heat: 0, description: "Flat rice noodles in light broth with mixed seafood." },
    { code: "073", name: "Oil-Poured Noodles", nameZh: "油泼面", category: "Rice & Noodles", price: 9.5, tags: ["V"], heat: 1, description: "Noodles topped with chilli flakes, finished with a sizzle of hot oil." },
    { code: "074", name: "Hot & Sour Vermicelli", nameZh: "酸辣粉", category: "Rice & Noodles", price: 11.5, tags: [], heat: 2, description: "Rice noodles in a hot and sour broth." },
    { code: "075", name: "Sichuan Dan Dan Noodles", nameZh: "四川担担面", category: "Rice & Noodles", price: 11.5, tags: ["N"], heat: 2, description: "Noodles with minced pork in a rich, spicy sesame sauce." },
    { code: "076", name: "Hot & Sour Lamb Noodles", nameZh: "酸辣羊肉面", category: "Rice & Noodles", price: 12.5, tags: [], heat: 2, description: "Lamb noodle soup with a hot and sour kick." },

    // ---------- Seafood ----------
    { code: "077", name: "Steamed Sea Bass", nameZh: "清蒸鲈鱼", category: "Seafood", price: 24.5, tags: ["F"], heat: 0, description: "Whole fish steamed with ginger, spring onion and soy sauce, finished with hot oil." },
    { code: "078", name: "Braised Sea Bass", nameZh: "红烧鲈鱼", category: "Seafood", price: 24.5, tags: ["F"], heat: 1, description: "Whole sea bass braised in spicy broad-bean sauce and soy sauce." },
    { code: "079", name: "Dry Pan-Fried Sea Bass in Chilli", nameZh: "干烧鲈鱼", category: "Seafood", price: 24.5, tags: ["F"], heat: 2, description: "Sichuan speciality. Sea bass seared with chillies, ginger and chilli paste." },
    { code: "080", name: "Hot & Spicy Roast Fish", nameZh: "麻辣烤鱼", category: "Seafood", price: 28.5, tags: ["F"], heat: 3, description: "Whole sea bass roasted with potato, tree ears, chillies and Sichuan peppercorn." },
    { code: "081", name: "Steamed Turbot", nameZh: "清蒸多宝鱼", category: "Seafood", price: 57.0, tags: ["F"], heat: 0, description: "Whole turbot steamed with ginger, spring onion and soy sauce, finished with hot oil." },
    { code: "082", name: "Sichuan Poached Fish with Mustard Greens", nameZh: "酸菜鱼", category: "Seafood", price: 18.5, tags: ["F"], heat: 1, description: "Chongqing speciality. Fish slices poached in broth with pickled mustard greens." },
    { code: "083", name: "Sweet & Sour Sea Bass", nameZh: "松鼠鱼", category: "Seafood", price: 25.5, tags: ["F"], heat: 0, description: "Jiangsu-style. Whole sea bass, crispy outside, tender within, in sweet and sour sauce." },
    { code: "084", name: "Twice-Cooked Fish Slices", nameZh: "回锅鱼", category: "Seafood", price: 16.5, tags: ["F"], heat: 1, description: "Battered fish, deep-fried then wok-tossed with dried chillies and Sichuan peppercorn." },
    { code: "085", name: "Shuizhu-Style Fish", nameZh: "水煮鱼", category: "Seafood", price: 18.5, tags: ["F"], heat: 2, description: "Fish slices poached in a spicy, fragrant broth with vegetables." },
    { code: "086", name: "Fish & Tofu Clay Pot", nameZh: "鱼片豆腐煲", category: "Seafood", price: 18.5, tags: ["F"], heat: 0, description: "Fish slices with tofu and vegetables in a rich casserole." },
    { code: "087", name: "Seafood & Tofu Clay Pot", nameZh: "海鲜豆腐煲", category: "Seafood", price: 18.5, tags: ["F"], heat: 0, description: "Squid, prawns and tofu simmered in a light broth." },
    { code: "088", name: "Seafood Vermicelli Clay Pot", nameZh: "海鲜粉丝煲", category: "Seafood", price: 18.5, tags: ["F"], heat: 0, description: "Mixed seafood with translucent vermicelli in a light broth." },
    { code: "089", name: "King Prawns with Chilli & Pepper", nameZh: "盆盆虾", category: "Seafood", price: 18.5, tags: ["F"], heat: 3, description: "Whole king prawns with chillies, Sichuan pepper and bean paste." },
    { code: "090", name: "Dry-Fried Squid Tentacles with Garlic", nameZh: "干煸鱿鱼须", category: "Seafood", price: 16.5, tags: ["F"], heat: 1, description: "Squid tentacles dry-fried with garlic, chillies and vinegar." },
    { code: "091", name: "Lobster with Ginger & Spring Onion", nameZh: "姜葱龙虾", category: "Seafood", price: 75.0, tags: ["F"], heat: 0, description: "Whole lobster wok-fried with ginger and spring onion in soy sauce." },
    { code: "092", name: "Crab with Ginger & Spring Onion", nameZh: "姜葱蟹", category: "Seafood", price: 25.0, tags: ["F"], heat: 0, description: "Whole crab wok-fried with ginger and spring onion in soy sauce." },

    // ---------- Spicy Specialities ----------
    { code: "099", name: "Stir-Fried Chicken with Dried Chillies", nameZh: "辣子鸡", category: "Spicy Specialities", price: 15.5, tags: [], heat: 2, description: "Crispy chicken wok-tossed with dried chillies, garlic and Sichuan peppercorn. Boneless option available." },
    { code: "100", name: "Xinjiang Sautéed Sliced Lamb", nameZh: "新疆小炒羊肉", category: "Spicy Specialities", price: 17.5, tags: [], heat: 2, description: "Tender lamb stir-fried with chillies, Sichuan peppercorn and cumin." },
    { code: "101", name: "Beef with Cumin", nameZh: "孜然牛肉", category: "Spicy Specialities", price: 16.5, tags: [], heat: 2, description: "Beef slices sautéed with chillies and aromatic cumin." },
    { code: "102", name: "Shuizhu Meat", nameZh: "水煮肉片", category: "Spicy Specialities", price: 18.5, tags: [], heat: 3, description: "Pork, beef, fatty beef or beef tripe poached in a spicy, numbing broth with vegetables." },
    { code: "103", name: "Ma La Tang Pot", nameZh: "麻辣烫", category: "Spicy Specialities", price: 19.5, tags: ["F"], heat: 3, description: "Pork, beef, prawns, seafood and vegetables in a fiery, numbing broth." },
    { code: "104", name: "Dry Pot (Spicy Chicken / King Prawns / Crab)", nameZh: "干锅", category: "Spicy Specialities", price: 20.5, tags: ["F"], heat: 3, description: "Northern Sichuan classic. Stir-fried with layer upon layer of dried chillies." },
    { code: "105", name: "Pepper-Fried Beef with Chillies", nameZh: "尖椒牛肉", category: "Spicy Specialities", price: 16.5, tags: [], heat: 2, description: "Sautéed beef with fresh green chillies." },
    { code: "106", name: "Ants Climbing Trees", nameZh: "蚂蚁上树", category: "Spicy Specialities", price: 12.5, tags: [], heat: 2, description: "Minced pork with vermicelli in a spicy chilli bean sauce." },
    { code: "107", name: "Chilli Stir-Fried Pork", nameZh: "辣椒小炒肉", category: "Spicy Specialities", price: 15.5, tags: [], heat: 2, description: "Sautéed pork belly with fresh chillies." },
    { code: "108", name: "Twice-Cooked Pork", nameZh: "回锅肉", category: "Spicy Specialities", price: 15.5, tags: [], heat: 2, description: "Pork belly simmered, fried then wok-tossed with chillies and vegetables." },
    { code: "109", name: "Yu Xiang Pork", nameZh: "鱼香肉丝", category: "Spicy Specialities", price: 15.5, tags: [], heat: 1, description: "Shredded pork in a sweet, sour and spicy fish-fragrance sauce. No fish." },
    { code: "110", name: "Lamb with Ginger & Spring Onion", nameZh: "葱爆羊肉", category: "Spicy Specialities", price: 17.5, tags: [], heat: 0, description: "Lamb slices sautéed with ginger and spring onion." },
    { code: "111", name: "Mao Xue Wang", nameZh: "毛血旺", category: "Spicy Specialities", price: 19.5, tags: [], heat: 3, description: "Pig's blood and tripe in a spicy, numbing broth with vegetables." },
    { code: "112", name: "Hot & Spicy Lamb Ribs", nameZh: "香辣羊排", category: "Spicy Specialities", price: 18.5, tags: [], heat: 3, description: "Slow-cooked lamb ribs braised in spices, then stir-fried with garlic and chillies." },
    { code: "113", name: "Spicy Sliced Pig's Kidney", nameZh: "火爆腰花", category: "Spicy Specialities", price: 14.5, tags: [], heat: 2, description: "Sichuan-style stir-fry with chillies and Sichuan peppercorn." },
    { code: "114", name: "Hot & Spicy Pig's Intestine", nameZh: "香辣肥肠", category: "Spicy Specialities", price: 14.5, tags: [], heat: 2, description: "Crispy intestines stir-fried with dried chillies and Sichuan peppercorn." },
    { code: "115", name: "Sautéed Chicken Gizzards", nameZh: "野山椒鸡胗", category: "Spicy Specialities", price: 14.5, tags: [], heat: 2, description: "Stir-fried with fresh chillies and vegetables." },
    { code: "116", name: "Xinjiang Big Plate Chicken", nameZh: "新疆大盘鸡", category: "Spicy Specialities", price: 25.5, tags: [], heat: 2, description: "Fragrant, spicy chicken from Xinjiang. Perfect for sharing." },
    { code: "117", name: "Fatty Beef in Sour Soup", nameZh: "酸汤肥牛", category: "Spicy Specialities", price: 18.5, tags: [], heat: 2, description: "Thinly sliced fatty beef in a hot and sour broth." },
    { code: "118", name: "Chicken Curry", nameZh: "咖喱鸡", category: "Spicy Specialities", price: 14.5, tags: [], heat: 1, description: "Aromatic curry with turmeric, coriander, cumin, ginger and pepper." },
    { code: "119", name: "Beef Curry", nameZh: "咖喱牛", category: "Spicy Specialities", price: 15.5, tags: [], heat: 1, description: "Aromatic curry with turmeric, coriander, cumin, ginger and pepper." },
    { code: "120", name: "Crispy Chilli Beef", nameZh: "辣牛肉", category: "Spicy Specialities", price: 15.5, tags: [], heat: 1, description: "Shredded beef, battered and crispy, tossed in a spicy-sweet sauce." },
    { code: "121", name: "Salt & Pepper Sliced Pork", nameZh: "椒盐猪扒", category: "Spicy Specialities", price: 16.5, tags: [], heat: 1, description: "Crispy pork slices seasoned with salt, pepper, chillies and onions." },

    // ---------- Mild & Savoury ----------
    { code: "122", name: "Stewed Beef Flank", nameZh: "牛腩煲", category: "Mild & Savoury", price: 17.0, tags: [], heat: 0, description: "Tender beef flank stewed for hours with star anise, fennel and clove." },
    { code: "123", name: "Stir-Fried Pork with Tree Ears & Scrambled Egg", nameZh: "木须肉片", category: "Mild & Savoury", price: 14.5, tags: [], heat: 0, description: "Pork tenderloin sautéed with scrambled egg, tree ears and vegetables." },
    { code: "124", name: "Braised Pork Stew with Vermicelli", nameZh: "猪肉炖粉条", category: "Mild & Savoury", price: 15.5, tags: [], heat: 0, description: "Pork with flat vermicelli noodles, stewed with star anise, orange peel and ginger." },
    { code: "125", name: "Wok-Fried Pork", nameZh: "锅包肉", category: "Mild & Savoury", price: 18.0, tags: [], heat: 0, description: "Battered lean pork, double-fried in a sweet, vinegary sticky sauce. North-eastern classic." },
    { code: "126", name: "Country-Style Sautéed Pork", nameZh: "农家小炒", category: "Mild & Savoury", price: 15.5, tags: [], heat: 0, description: "Sautéed pork slices with seasonal vegetables." },
    { code: "127", name: "Chairman Mao Braised Pork Belly", nameZh: "毛氏红烧肉", category: "Mild & Savoury", price: 16.5, tags: [], heat: 0, description: "Hunan-style skin-on pork belly braised with ginger, star anise, clove and soy sauce." },
    { code: "128", name: "Peking-Style Pork with Pancakes", nameZh: "京酱肉丝", category: "Mild & Savoury", price: 15.5, tags: [], heat: 0, description: "Shredded pork in sweet bean sauce, served with pancakes for wrapping." },
    { code: "129", name: "Pig's Intestines in Broth", nameZh: "溜肥肠", category: "Mild & Savoury", price: 14.5, tags: [], heat: 0, description: "Tender intestines in a savoury soy-based sauce." },
    { code: "130", name: "Lemon Chicken", nameZh: "柠檬鸡", category: "Mild & Savoury", price: 14.5, tags: [], heat: 0, description: "Crispy sliced chicken drizzled with tangy lemon sauce." },
    { code: "131", name: "Garlic Chicken", nameZh: "蒜香鸡", category: "Mild & Savoury", price: 14.5, tags: [], heat: 0, description: "Chicken stir-fried with garlic, ginger and soy sauce." },
    { code: "132", name: "Sweet & Sour Pork", nameZh: "咕噜肉", category: "Mild & Savoury", price: 14.5, tags: [], heat: 0, description: "Battered pork in a tangy sweet and sour sauce." },
    { code: "133", name: "Sweet & Sour Chicken", nameZh: "咕噜鸡", category: "Mild & Savoury", price: 14.5, tags: [], heat: 0, description: "Battered chicken in a tangy sweet and sour sauce." },
    { code: "134", name: "Cantonese Roast Duck", nameZh: "广式烧鸭", category: "Mild & Savoury", price: 21.5, tags: [], heat: 0, description: "Braised in herb-infused sauce, then slow-roasted in a traditional duck oven." },
    { code: "135", name: "Crispy Chicken with Chive Oil", nameZh: "葱油脆皮鸡", category: "Mild & Savoury", price: 18.5, tags: [], heat: 0, description: "Deep-fried crispy chicken topped with ginger, spring onion and chive oil." }
  ],

  // ---------- Build Your Own Main (自选主菜) ----------
  buildYourOwn: {
    note: "Choose a protein, then a flavour, to create your own dish.",
    proteins: [
      { code: "093", name: "Chicken", nameZh: "鸡肉", price: 14.5, tags: [] },
      { code: "094", name: "Duck", nameZh: "鸭片", price: 16.5, tags: [] },
      { code: "095", name: "King Prawns", nameZh: "大虾", price: 17.5, tags: ["F"] },
      { code: "096", name: "Beef", nameZh: "牛肉", price: 15.5, tags: [] },
      { code: "097", name: "Fish Slices", nameZh: "鱼片", price: 16.5, tags: ["F"] },
      { code: "098", name: "Squid", nameZh: "鲜鱿", price: 16.5, tags: ["F"] }
    ],
    flavours: [
      { name: "Kung Po", nameZh: "宫保味道", tags: ["N"], heat: 2, description: "Sweet, sour and spicy with peanuts." },
      { name: "Sichuan", nameZh: "川味", tags: [], heat: 2, description: "Hot and spicy with Sichuan chillies and peppercorn." },
      { name: "Black Bean Sauce", nameZh: "豉椒味道", tags: [], heat: 0, description: "Rich, savoury fermented black bean sauce with green peppers." },
      { name: "Ginger & Spring Onion", nameZh: "姜葱味道", tags: [], heat: 0, description: "Classic savoury stir-fry with ginger and spring onion." },
      { name: "Yu Xiang Style", nameZh: "香鱼味道", tags: [], heat: 1, description: "\u201CFish-fragrance\u201D with no fish. Sweet, sour and spicy." },
      { name: "Black Pepper Sauce", nameZh: "黑椒味道", tags: [], heat: 0, description: "Zesty and peppery with vegetables." },
      { name: "Peking Style", nameZh: "酱爆味道", tags: [], heat: 0, description: "Savoury-sweet bean sauce glaze." },
      { name: "Satay", nameZh: "沙爹味道", tags: ["N"], heat: 0, description: "Rich peanut-based sauce." },
      { name: "Oyster Sauce", nameZh: "蚝油味道", tags: [], heat: 0, description: "Savoury and slightly sweet. Particularly good with beef." },
      { name: "With Cashew Nuts", nameZh: "腰果", tags: ["N"], heat: 0, description: "Nutty, savoury and light." }
    ]
  },

  // ---------- Set Meals (套餐) ----------
  setMeals: [
    {
      name: "Set Meal A",
      price: 23.5,
      per: "per person",
      min: "Minimum 2 people",
      dishes: ["Crispy Seaweed", "Salt & Pepper Spare Ribs", "Beef in Black Bean Sauce", "Sweet & Sour Chicken", "Stir-Fried Mixed Vegetables", "Egg Fried Rice"]
    },
    {
      name: "Set Meal B",
      price: 26.5,
      per: "per person",
      min: "Minimum 2 people",
      dishes: ["Prawn Crackers", "Crispy Seaweed", "Crispy Aromatic Duck", "Salt & Pepper Chicken Wings", "Beef in Oyster Sauce", "Sweet & Sour Pork", "Kung Po Chicken", "Stir-Fried Mixed Vegetables", "Egg Fried Rice"]
    },
    {
      name: "Set Meal C",
      price: 32.5,
      per: "per person",
      min: "Minimum 4 people",
      dishes: ["Prawn Crackers", "Crispy Seaweed", "Crispy Aromatic Duck", "Deep-Fried Spicy Squid", "Chicken with Cashew Nuts", "Beef with Ginger & Spring Onion", "Kung Po King Prawns", "Wok-Fried Pork", "Dry-Fried String Beans with Chilli", "Mapo Tofu", "Egg Fried Rice"]
    },
    {
      name: "Set Meal V — Vegetarian",
      price: 21.5,
      per: "per person",
      min: "Minimum 2 people",
      dishes: ["Vegetable Spring Rolls", "Sweet Corn Soup", "Pak Choi in Garlic Sauce", "Tofu in Black Bean Sauce", "Yu Xiang Aubergine", "Steamed Rice"]
    }
  ],

  // ---------- Custom Hot Pot & Dry Pot (自选火锅/干锅) ----------
  hotPot: {
    note: "Choose your base, then pick a minimum of 4 items.",
    bases: [
      { code: "136", name: "Dry Pot", nameZh: "干锅", heat: 2, description: "No broth. Intensely flavoured and aromatic." },
      { code: "137", name: "Ma La Tang Pot", nameZh: "麻辣烫", heat: 3, description: "Numbing and spicy broth." }
    ],
    meatItems: { price: 6.5, label: "Meat & Seafood items", items: ["Fatty Beef", "Fish Balls", "Luncheon Meat", "Crab Sticks", "Fish Slices", "Beef Tripe", "Pig Intestine", "Squid"] },
    vegItems: { price: 4.5, label: "Vegetable & Tofu items", items: ["Bean Curd Skin", "Tofu", "Kelp", "Black Fungus", "Vermicelli", "Paper Tofu", "Mushrooms", "Pak Choi", "Chinese Cabbage"] }
  }
};

/* ============================================================
   AUGMENTATION — photography map + editorial content
   Added on top of the verified menu data above.
   ============================================================ */

// Map of menu code -> photograph. Only dishes we have shot appear here.
window.SITE_DATA.dishImages = {
  "004": "images/dishes/spring-rolls.jpg",
  "005": "images/dishes/pan-fried-dumplings.jpg",
  "006": "images/dishes/crispy-aromatic-duck.jpg",
  "012": "images/dishes/salt-pepper-ribs.jpg",
  "017": "images/dishes/braised-beef-five-spice.jpg",
  "018": "images/dishes/sichuan-steamed-chicken.jpg",
  "019": "images/dishes/sliced-beef-tripe.jpg",
  "025": "images/dishes/won-ton-soup.jpg",
  "026": "images/dishes/west-lake-soup.jpg",
  "035": "images/dishes/pak-choi-mushrooms.jpg",
  "037": "images/dishes/mapo-tofu.jpg",
  "044": "images/dishes/dragon-aubergine.jpg",
  "047": "images/dishes/string-beans-chilli.jpg",
  "057": "images/dishes/egg-fried-rice.jpg",
  "058": "images/dishes/chicken-fried-noodles.jpg",
  "059": "images/dishes/beef-fried-rice.jpg",
  "064": "images/dishes/special-fried-rice.jpg",
  "066": "images/dishes/singapore-noodles.jpg",
  "067": "images/dishes/beef-ho-fan.jpg",
  "069": "images/dishes/henan-noodle-soup.jpg",
  "071": "images/dishes/beef-noodle-soup.jpg",
  "122": "images/dishes/stewed-beef-flank.jpg",
  "134": "images/dishes/roast-duck.jpg",
  "135": "images/dishes/crispy-chicken.jpg"
};

// Homepage signature gallery — the showpieces, in display order.
window.SITE_DATA.signature = [
  { code: "018", name: "Sichuan Steamed Chicken", nameZh: "川味口水鸡", image: "images/dishes/sichuan-steamed-chicken.jpg",
    blurb: "“Saliva chicken” — poached, chilled, then drowned in a glossy chilli oil with sesame and crushed peanuts.", heat: 2 },
  { code: "044", name: "Dragon Aubergine", nameZh: "龙虾茄子", image: "images/dishes/dragon-aubergine.jpg",
    blurb: "Whole aubergine lacquered in fish-fragrant sauce, crowned with king prawns. Our most photographed plate.", heat: 1 },
  { code: "037", name: "Mapo Tofu", nameZh: "麻婆豆腐", image: "images/dishes/mapo-tofu.jpg",
    blurb: "Silken tofu suspended in a fiery, numbing Sichuan chilli-bean sauce. The dish that built Sichuan's reputation.", heat: 3 },
  { code: "069", name: "Henan Hand-Pulled Noodle Soup", nameZh: "河南烩面", image: "images/dishes/henan-noodle-soup.jpg",
    blurb: "Noodles stretched to order by hand, dropped into a slow, hearty broth of beef or lamb.", heat: 0 },
  { code: "006", name: "Crispy Aromatic Duck", nameZh: "香酥鸭", image: "images/dishes/crispy-aromatic-duck.jpg",
    blurb: "Prepared in-house and shredded at the table — pancakes, cucumber, spring onion, Peking sauce.", heat: 0 },
  { code: "067", name: "Beef Fried Ho Fan", nameZh: "牛肉炒河粉", image: "images/dishes/beef-ho-fan.jpg",
    blurb: "Wide rice noodles tossed over a roaring flame until they carry that elusive smoke — wok hei.", heat: 0 }
];

// Editorial copy.
window.SITE_DATA.about = {
  eyebrow: "食府 · Since Bridge Street",
  heading: "A canteen in name. A kitchen with ambition.",
  lead: "We are a family kitchen on Bridge Street, a few doors from St John's and Magdalene. “Canteen” is our promise, not our ceiling — generous, unfussy, made for sharing — but the cooking reaches for the real thing: the numbing heat of Sichuan, the clean precision of Cantonese, hand-pulled noodles from Henan.",
  body: [
    "Our dumplings are folded by hand each morning. Our duck is braised and roasted in-house, not bought in. Our noodles for the Henan soup are stretched to order — you can hear them snap against the bench.",
    "We are one of the only places in Cambridge pulling fresh bubble milk tea, and the only one many of our regulars will trust with a proper Shuizhu fish or a Ma La Tang pot."
  ],
  stats: [
    { value: "130+", label: "Dishes, all made to order" },
    { value: "11–10", label: "Open every day, 11am til late" },
    { value: "10%", label: "Off for students, always" }
  ]
};

window.SITE_DATA.craft = [
  { image: "images/chef-kitchen.jpg", kicker: "The Wok", title: "Cooked over open flame",
    text: "Every stir-fry meets a flame hot enough to char the air. That breath of smoke — wok hei — is the difference between a takeaway and a kitchen." },
  { image: "images/szechuan-cook.jpg", kicker: "Sichuan", title: "Heat with a memory",
    text: "Dried chillies, Sichuan peppercorn, chilli-bean paste. We build heat in layers so it lingers and warms rather than simply burns." },
  { image: "images/cantonese-cook.jpg", kicker: "Cantonese", title: "Restraint as a craft",
    text: "Steamed sea bass, ginger and spring onion, a whisper of soy and a pour of hot oil. The hardest cooking is the cooking that hides its hand." }
];

window.SITE_DATA.experience = [
  { icon: "dine", title: "Dine In", text: "Walk in and share a table of plates in the heart of the city. No occasion required." },
  { icon: "collect", title: "Order & Collect", text: "Order ahead online and skip the wait — ready when you arrive, packed to travel well." },
  { icon: "book", title: "Reserve", text: "Bringing a group, or a date you care about? Reserve a table and let us look after the rest." }
];

// Reservation form configuration.
// To go live, replace `endpoint` with a Formspree/Basin URL (https://formspree.io).
// Until then the form falls back to opening the guest's email client.
window.SITE_DATA.reservation = {
  endpoint: "",                       // e.g. "https://formspree.io/f/xxxxxx"
  email: "info@chinesecanteen.co.uk", // fallback mailto + where requests are sent
  maxPartyOnline: 8,
  note: "For parties of 9 or more, or same-day bookings within 2 hours, please call us on 01223 312415."
};

window.SITE_DATA.faq = [
  { q: "Do I need to book a table?", a: "Walk-ins are always welcome — that's the canteen spirit. For weekends, larger groups or a guaranteed table, we'd recommend reserving ahead." },
  { q: "Can I order for collection?", a: "Yes. Order online any time and we'll have it freshly cooked and packed for the time you choose. Everything travels well." },
  { q: "Do you cater for vegetarians and allergies?", a: "Plenty of the menu is vegetarian (look for the V), and there's a dedicated vegetarian set meal. Tell us about any allergies when you order or arrive — fish, nuts and seafood are marked on the menu." },
  { q: "Is there a student discount?", a: "Always. 10% off for students with a valid ID, dine-in or collection." }
];

// Curated highlights for the homepage menu teaser (code references into the menu).
window.SITE_DATA.menuTeaser = ["006","018","037","044","067","069","082","134"];
