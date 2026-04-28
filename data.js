// ─────────────────────────────────────────────────────────────────────────────
//  Wonderland Online — NPC Shop Data
//
//  Edit this file directly to update city/item info.
//  You can also use the "Add Info" button in the UI — then click "Export data.js"
//  and replace this file with the downloaded one to save your changes permanently.
//
//  Each entry:
//    city  : display name (string)
//    icon  : any emoji  (string)
//    note  : optional subtitle, e.g. "Inside house"  (string)
//    sells : list of items  — each item is { name, price }
//            leave price as "" if unknown
// ─────────────────────────────────────────────────────────────────────────────

const CITY_DATA = [
  { city: "Kelan",      icon: "🏚️",  note: "",             sells: [
    { name: "Black Clay",      price: 30      },
    { name: "White Clay",      price: 30      },
    { name: "Shale",           price: 35      },
    { name: "Clay",            price: 10      },
    { name: "Grey Clay",       price: 30      },
    { name: "Dry Clay",        price: 50      },
    { name: "Red Clay",        price: 30      },
    { name: "Star",            price: 250000  },
    { name: "Coconut",         price: 50      },
    { name: "Yellow Clay",     price: 30      },
  ]},
  { city: "Welling",    icon: "🌲",  note: "",             sells: [
    { name: "Cypress",         price: 70      },
    { name: "Delicate Wood",   price: 460     },
    { name: "Fine Wood",       price: 280     },
    { name: "Bamboo",          price: 30      },
    { name: "Oak",             price: 50      },
    { name: "Lauan",           price: 30      },
    { name: "Cutted Fruit Tree", price: 130   },
    { name: "Wood",            price: 10      },
  ]},
  { city: "Oysla",      icon: "⛵",  note: "",             sells: [
    { name: "Sea Salt",        price: 10      },
    { name: "Seawater",        price: 10      },
    { name: "Fresh Water",     price: 30      },
    { name: "Red Coral",       price: 100     },
    { name: "Iron Sand",       price: 70      },
  ]},
  { city: "Holy",       icon: "⛪",  note: "",             sells: [
    { name: "Ores",            price: ""      },
  ]},
  { city: "Athens",     icon: "🏺",  note: "",             sells: [
    { name: "Saltpeter",       price: 30      },
    { name: "Refined Gold",    price: 4000    },
    { name: "Refined Titanium", price: 3700   },
    { name: "Refined Tin",     price: 3400    },
    { name: "Grey Rock",       price: 240     },
  ]},
  { city: "Rome",       icon: "🏛️",  note: "",             sells: [
    { name: "Flowers",         price: ""      },
  ]},
  { city: "Korea",      icon: "🏯",  note: "",             sells: [
    { name: "Fine Feather",    price: 3200    },
    { name: "Orchid",          price: 30      },
    { name: "Cotton",          price: 50      },
    { name: "Fine Grass",      price: 2400    },
    { name: "Small Daisy",     price: 30      },
  ]},
  { city: "China",      icon: "🀄",  note: "Inside house", sells: [
    { name: "Dyes",            price: ""      },
  ]},
  { city: "Chang An",   icon: "🔮",  note: "",             sells: [
    { name: "White Crystals",  price: ""      },
    { name: "Ruby",            price: ""      },
  ]},
  { city: "Cornwall",   icon: "🐄",  note: "",             sells: [
    { name: "Leathers",        price: ""      },
  ]},
  { city: "Mayan",      icon: "🗿",  note: "",             sells: [
    { name: "White Silveries", price: ""      },
    { name: "Bluestone",       price: ""      },
  ]},
  { city: "South Pole", icon: "🧊",  note: "",             sells: [
    { name: "Furs",            price: ""      },
    { name: "Skins",           price: ""      },
  ]},
  { city: "Persia",     icon: "🪬",  note: "",             sells: [
    { name: "Jades",           price: ""      },
  ]},
  { city: "Bangkok",    icon: "⚗️",  note: "",             sells: [
    { name: "Sulfur",          price: ""      },
    { name: "Sealed Potion",   price: ""      },
  ]},
];
