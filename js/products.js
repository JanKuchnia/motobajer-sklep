const products = [
  {
    id: 1,
    name: "Olej Silnikowy Castrol EDGE 5W-30 LL 4L",
    price: 189.00,
    category: "oleje",
    description: "Syntetyczny olej silnikowy z technologią Fluid STRENGTH Technology. Zapobiega zużyciu silnika, redukuje opory pracy.",
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Olej Silnikowy Motul 8100 X-clean 5W-40 5L",
    price: 215.00,
    category: "oleje",
    description: "W 100% syntetyczny olej opracowany do nowoczesnych silników benzynowych i diesla, zgodny z normami Euro 4, 5 i 6.",
    imageUrl: "https://images.unsplash.com/photo-1620962080277-2ef64d7e8ab8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Filtr Oleju Filtron OP 647/1",
    price: 28.50,
    category: "filtry",
    description: "Wysokiej jakości filtr puszkowy zatrzymujący najdrobniejsze cząstki sadzy i zanieczyszczeń metalicznych.",
    imageUrl: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Filtr Kabinowy Węglowy Filtron K 1111A",
    price: 49.00,
    category: "filtry",
    description: "Filtr kabinowy z aktywnym węglem. Zatrzymuje pyłki, kurz oraz szkodliwe gazy i nieprzyjemne zapachy z otoczenia.",
    imageUrl: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Żarówka H7 Philips WhiteVision Ultra",
    price: 85.00,
    category: "oswietlenie",
    description: "Żarówki halogenowe dające intensywne, białe światło o temperaturze barwowej do 4200K. Komplet 2 sztuki.",
    imageUrl: "https://images.unsplash.com/photo-1552656967-7a0991a13906?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Wycieraczki Bosch AeroTwin (Komplet)",
    price: 110.00,
    category: "wycieraczki",
    description: "Płaskie pióra wycieraczek z dedykowanym adapterem. Doskonałe oczyszczanie szyby bez smug i pisków w każdych warunkach.",
    imageUrl: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Akumulator Bosch S4 12V 74Ah 680A",
    price: 399.00,
    category: "akumulatory",
    description: "Bezobsługowy akumulator rozruchowy w technologii wapniowej (PowerFrame). Pewny rozruch w niskich temperaturach.",
    imageUrl: "https://images.unsplash.com/photo-1620962080277-2ef64d7e8ab8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Zimowy Płyn do Spryskiwaczy K2 Claren 5L",
    price: 24.90,
    category: "plyny",
    description: "Pachnący płyn do spryskiwaczy odporny na zamarzanie do -22°C. Bezpieczny dla lakieru, gumy i reflektorów ksenonowych.",
    imageUrl: "https://images.unsplash.com/photo-1607136566006-cfc505b114fc?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Szampon Samochodowy z Woskiem K2 Express 1L",
    price: 18.00,
    category: "kosmetyki",
    description: "Skoncentrowany szampon do mycia ręcznego. Skutecznie czyści brud drogowy i pozostawia cienką warstwę wosku nabłyszczającego.",
    imageUrl: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=600&auto=format&fit=crop"
  }
];

// Make it globally accessible for our scripts
window.productsDatabase = products;
