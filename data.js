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
//    sells : list of items sold by the NPC  (array of strings)
// ─────────────────────────────────────────────────────────────────────────────

const CITY_DATA = [
  { city: "Kelan",      icon: "🏚️",  note: "",             sells: ["Clay"] },
  { city: "Welling",    icon: "🌲",  note: "",             sells: ["Woods"] },
  { city: "Holy",       icon: "⛪",  note: "",             sells: ["Ores"] },
  { city: "Rome",       icon: "🏛️",  note: "",             sells: ["Flowers"] },
  { city: "Korea",      icon: "🏯",  note: "",             sells: ["Cottons"] },
  { city: "China",      icon: "🀄",  note: "Inside house", sells: ["Dyes"] },
  { city: "Chang An",   icon: "🔮",  note: "",             sells: ["White Crystals", "Ruby"] },
  { city: "Cornwall",   icon: "🐄",  note: "",             sells: ["Leathers"] },
  { city: "Mayan",      icon: "🗿",  note: "",             sells: ["White Silveries", "Bluestone"] },
  { city: "South Pole", icon: "🧊",  note: "",             sells: ["Furs", "Skins"] },
  { city: "Persia",     icon: "🪬",  note: "",             sells: ["Jades"] },
  { city: "Bangkok",    icon: "⚗️",  note: "",             sells: ["Sulfur", "Sealed Potion"] },
];
