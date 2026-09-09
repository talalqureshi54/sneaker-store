// Central Store Config & Inventory
const STORE_SETTINGS = {
  defaultBrand: "VORTEX KICKS",
  tagline: "Streetwear Silhouettes & Athletic Foam",
  currency: "PKR",
  adminWhatsApp: "923001234567", // Apna WhatsApp number (92 ke sath)
  deliveryTerms: "Open Parcel Cash on Delivery (Rider ke samnay parcel check karein)",
  exchangeGuarantee: "3-Day Hassle-Free Size Replacement"
};

// Initial Fresh Catalog
const CATALOG_ITEMS = [
  {
    id: "vortex-strata-01",
    title: "Strata Chunky Platform Sneaker",
    category: "Streetwear",
    tag: "Trending 2026",
    price: 4450,
    comparePrice: 6200,
    inStock: true,
    rating: "4.9 (112 reviews)",
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=1000&auto=format&fit=crop&q=80"
    ],
    sizes: ["40", "41", "42", "43", "44"],
    highlight: "Dual-density gum-rubber sole, memory foam insole cushioning, double-stitched leather panels."
  },
  {
    id: "vortex-phantom-02",
    title: "Phantom Low-Top Vintage Skate",
    category: "Skate Silhouette",
    tag: "High Demand",
    price: 3950,
    comparePrice: 5500,
    inStock: true,
    rating: "4.8 (88 reviews)",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1000&auto=format&fit=crop&q=80"
    ],
    sizes: ["41", "42", "43"],
    highlight: "Vulcanized reinforced bumper, breathable side perforations, anti-slip tread traction."
  },
  {
    id: "vortex-glide-03",
    title: "Hyper-Glide Carbon Mesh Runner",
    category: "Running & Gym",
    tag: "Ultra Light",
    price: 4200,
    comparePrice: 5800,
    inStock: true,
    rating: "5.0 (64 reviews)",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=1000&auto=format&fit=crop&q=80"
    ],
    sizes: ["40", "41", "42", "43", "44"],
    highlight: "Ultra-breathable honeycomb mesh upper, energy return rebound midsole, lightweight athletic construction."
  }
];

function getInventory() {
  const local = localStorage.getItem("vortex_inventory_v2");
  if (local) {
    try { return JSON.parse(local); } catch (e) { return CATALOG_ITEMS; }
  }
  return CATALOG_ITEMS;
}

function getBrandName() {
  return localStorage.getItem("vortex_brand_name") || STORE_SETTINGS.defaultBrand;
}

function getWhatsAppNumber() {
  return localStorage.getItem("vortex_whatsapp_number") || STORE_SETTINGS.adminWhatsApp;
}
