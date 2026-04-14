import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "MADAGASCAR CENTELLA AMPOULE",
    price: "$25.099",
    category: "Sérum",
    image: "/images/products/madagascar-centella-ampoule.webp",
    gallery: ["/images/gallery/madagascar-centella-ampoule/2.webp", "/images/gallery/madagascar-centella-ampoule/3.jpeg"],
    description: "<strong>Sérum de textura liviana pensado para calmar piel sensible, enrojecida, irritada o alterada por brotes.</strong> La centella asiática se usa para ayudar a disminuir la inflamación, reforzar la barrera cutánea y mejorar la recuperación de la piel cuando está reactiva, deshidratada o sensibilizada por otros activos. Es una opción muy buena para quienes sienten tirantez, ardor, rojeces o piel “estresada”.",
    idealFor: "piel sensible, con rojeces, sensibilizada, mixta o con tendencia al acné."
  },
  {
    id: 2,
    name: "TEA-TRICA RELIEF AMPOULE",
    price: "$23.199",
    category: "Sérum",
    image: "/images/products/tea-trica-relief-ampoule.webp",
    gallery: ["/images/gallery/tea-trica-relief-ampoule/2.webp", "/images/gallery/tea-trica-relief-ampoule/3.jpeg"],
    description: "<strong>Sérum orientado a piel con acné, granitos activos, textura irregular y exceso de sebo.</strong> Su perfil está pensado para ayudar a desinflamar brotes, bajar rojeces post-granito y mantener la piel más equilibrada, sin sensación pesada. Sirve especialmente cuando hay piel grasa o mixta que necesita tratamiento, pero sin resecar de más.",
    idealFor: "piel grasa, acneica, con brotes, puntos rojos o poros congestionados."
  },
  {
    id: 3,
    name: "POREMIZING FRESH AMPOULE",
    price: "$22.899",
    category: "Sérum",
    image: "/images/products/poremizing-fresh-ampoule.webp",
    gallery: ["/images/gallery/poremizing-fresh-ampoule/2.webp", "/images/gallery/poremizing-fresh-ampoule/3.jpeg"],
    description: "<strong>Sérum para quienes buscan una piel con menos brillo, textura más uniforme y poros visualmente menos marcados.</strong> Está orientado a ayudar a regular el exceso de grasa y a mejorar la apariencia de poros dilatados, sobre todo en zona T. Es útil en rutinas para piel mixta o grasa que quiere tratamiento específico pero con acabado liviano.",
    idealFor: "piel mixta/grasa, poros visibles, textura irregular."
  },
  {
    id: 4,
    name: "TONE BRIGHTENING CAPSULE AMPOULE",
    price: "$20.999",
    category: "Sérum",
    image: "/images/products/tone-brightening-capsule-ampoule.webp",
    gallery: ["/images/gallery/tone-brightening-capsule-ampoule/2.webp", "/images/gallery/tone-brightening-capsule-ampoule/3.jpeg"],
    description: "<strong>Sérum iluminador pensado para tono desigual, piel apagada, marcas post-acné o manchas leves.</strong> Su función principal es ayudar a que la piel se vea más luminosa, pareja y descansada, mejorando visualmente la opacidad. Es una buena opción cuando la preocupación principal no es el acné activo, sino las marcas o falta de brillo.",
    idealFor: "piel opaca, con manchas, marcas post-brote o tono desparejo."
  },
  {
    id: 5,
    name: "PROBIO CICA INTENSIVE AMPOULE",
    price: "$30.499",
    category: "Sérum",
    image: "/images/products/probio-cica-intensive-ampoule.webp",
    gallery: ["/images/gallery/probio-cica-intensive-ampoule/2.webp", "/images/gallery/probio-cica-intensive-ampoule/3.jpeg"],
    description: "<strong>Sérum reparador pensado para reforzar la piel cuando está sensible, débil, deshidratada o fácilmente irritable.</strong> Ayuda a mejorar la sensación de confort, a reducir reactividad y a complementar rutinas de recuperación cutánea.",
    idealFor: "piel sensible, seca, enrojecida o sensibilizada por activos. Ideales para pieles maduras también."
  },
  {
    id: 6,
    name: "MADAGASCAR CENTELLA LIGHT CLEANSING OIL",
    price: "$30.999",
    category: "Limpiador Facial",
    image: "/images/products/madagascar-centella-light-cleansing-oil.webp",
    gallery: ["/images/gallery/madagascar-centella-light-cleansing-oil/2.webp", "/images/gallery/madagascar-centella-light-cleansing-oil/3.jpeg"],
    description: "<strong>Aceite limpiador para el primer paso de la doble limpieza.</strong> Su función es disolver protector solar, maquillaje, exceso de sebo e impurezas acumuladas durante el día, ayudando a dejar la piel más limpia sin frotar de más. Es especialmente útil si se usa protector solar todos los días o maquillaje resistente.",
    idealFor: "todo tipo de piel; muy útil en rutinas nocturnas."
  },
  {
    id: 7,
    name: "MADAGASCAR CENTELLA AMPOULE FOAM",
    price: "$28.399",
    category: "Limpiador Facial",
    image: "/images/products/madagascar-centella-ampoule-foam.webp",
    gallery: ["/images/gallery/madagascar-centella-ampoule-foam/2.webp", "/images/gallery/madagascar-centella-ampoule-foam/3.jpeg"],
    description: "<strong>Limpiador al agua pensado para el segundo paso de limpieza, o como limpiador principal si no usás maquillaje.</strong> Ayuda a retirar restos de suciedad y oleosidad sin dejar sensación agresiva. Al estar orientado a una línea de centella, apunta a una limpieza que se sienta más respetuosa con piel sensible o sensibilizada.",
    idealFor: "piel sensible, normal, mixta o quienes buscan limpieza sin resecar."
  },
  {
    id: 8,
    name: "POREMIZING DEEP CLEANSING FOAM",
    price: "$28.099",
    category: "Limpiador Facial",
    image: "/images/products/poremizing-deep-cleansing-foam.webp",
    gallery: ["/images/gallery/poremizing-deep-cleansing-foam/2.webp", "/images/gallery/poremizing-deep-cleansing-foam/3.jpeg"],
    description: "<strong>Limpiador enfocado en piel con poros notorios, sensación de grasa y necesidad de limpieza más profunda.</strong> Ayuda a retirar suciedad y sebo acumulado para que la piel se vea más fresca y con textura más uniforme.",
    idealFor: "piel mixta, grasa o con tendencia a congestión."
  },
  {
    id: 9,
    name: "ACNE SKIN RELIEF CLEANSER",
    price: "$28.399",
    category: "Limpiador Facial",
    image: "/images/products/acne-skin-relief-cleanser.webp",
    gallery: ["/images/gallery/acne-skin-relief-cleanser/2.webp", "/images/gallery/acne-skin-relief-cleanser/3.jpeg"],
    description: "<strong>Limpiador orientado a piel con brotes, exceso de sebo y sensación de suciedad acumulada.</strong> Su función es acompañar rutinas antiacné limpiando la piel sin dejarla pesada, y ayudar a mantener una superficie más limpia para reducir congestión.",
    idealFor: "piel grasa, acneica o con brotes frecuentes."
  },
  {
    id: 10,
    name: "MADAGASCAR CENTELLA TONING TONER",
    price: "$33.199",
    category: "Tónico",
    image: "/images/products/madagascar-centella-toning-toner.webp",
    gallery: ["/images/gallery/madagascar-centella-toning-toner/2.webp", "/images/gallery/madagascar-centella-toning-toner/3.jpeg"],
    description: "<strong>Tónico diseñado para usar después de limpiar, con foco en hidratar, suavizar y preparar la piel para que reciba mejor serums y cremas.</strong> Ayuda a que la piel no quede tirante después del lavado y aporta una primera capa de humectación. Puede venir muy bien cuando la piel está deshidratada pero no necesariamente seca.",
    idealFor: "todo tipo de piel, especialmente deshidratada o sensible."
  },
  {
    id: 11,
    name: "POREMIZING TONER",
    price: "$31.399",
    category: "Tónico",
    image: "/images/products/poremizing-toner.webp",
    gallery: ["/images/gallery/poremizing-toner/2.webp", "/images/gallery/poremizing-toner/3.jpeg"],
    description: "<strong>Tónico pensado para complementar una rutina orientada a poros, textura y control de oleosidad.</strong> Ayuda a que la piel se vea más equilibrada y a mantener una sensación más fresca después de la limpieza.",
    idealFor: "piel con poros visibles, mixta o grasa."
  },
  {
    id: 12,
    name: "PROBIO-CICA ESSENCE TONER",
    price: "$34.299",
    category: "Tónico",
    image: "/images/products/probio-cica-essence-toner.webp",
    gallery: ["/images/gallery/probio-cica-essence-toner/2.webp", "/images/gallery/probio-cica-essence-toner/3.jpeg"],
    description: "<strong>Tónico con enfoque reparador, pensado para piel que necesita calma + hidratación + refuerzo de barrera.</strong> La combinación “cica + ceramidas” apunta a ayudar en casos de piel frágil, sensibilizada o que pierde agua con facilidad.",
    idealFor: "piel sensible, seca, deshidratada o con barrera debilitada, y pieles maduras."
  },
  {
    id: 13,
    name: "MADAGASCAR CENTELLA SOOTHING CREAM",
    price: "$32.699",
    category: "Crema Hidratante",
    image: "/images/products/madagascar-centella-soothing-cream.webp",
    gallery: ["/images/gallery/madagascar-centella-soothing-cream/2.webp", "/images/gallery/madagascar-centella-soothing-cream/3.jpeg"],
    description: "<strong>Crema hidratante pensada para calmar, sellar hidratación y mantener la piel confortable.</strong> Ayuda a disminuir la sensación de ardor, tirantez o sensibilidad, y acompaña bien rutinas donde se usan activos más fuertes o donde la piel necesita recuperación.",
    idealFor: "piel sensible, enrojecida, deshidratada o alterada."
  },
  {
    id: 14,
    name: "POREMIZING LIGHT GEL CREAM",
    price: "$27.599",
    category: "Crema Hidratante",
    image: "/images/products/poremizing-light-gel-cream.webp",
    gallery: ["/images/gallery/poremizing-light-gel-cream/2.webp", "/images/gallery/poremizing-light-gel-cream/3.jpeg"],
    description: "<strong>Hidratante en gel de textura liviana, ideal para quienes necesitan hidratación pero no toleran cremas pesadas.</strong> Está pensada para dejar la piel hidratada, más fresca y sin sensación grasosa, acompañando rutinas de poros o control de sebo.",
    idealFor: "piel mixta, grasa o con tendencia a brillo."
  },
  {
    id: 15,
    name: "PROBIO-CICA ENRICH CREAM",
    price: "$34.099",
    category: "Crema Hidratante",
    image: "/images/products/probio-cica-enrich-cream.webp",
    gallery: ["/images/gallery/probio-cica-enrich-cream/2.webp", "/images/gallery/probio-cica-enrich-cream/3.jpeg"],
    description: "<strong>Crema pensada para reforzar la barrera cutánea y mejorar la retención de hidratación.</strong> Está más orientada a pieles que sienten sequedad, descamación, sensibilidad o incomodidad, y que necesitan una crema con rol más reparador y protector.",
    idealFor: "piel seca, sensibilizada, con barrera alterada o deshidratada."
  },
  {
    id: 16,
    name: "TEA-TRICA INTENSIVE SOOTHING CREAM",
    price: "$27.799",
    category: "Crema Hidratante",
    image: "/images/products/tea-trica-intensive-soothing-cream.webp",
    gallery: ["/images/gallery/tea-trica-intensive-soothing-cream/2.webp", "/images/gallery/tea-trica-intensive-soothing-cream/3.jpeg"],
    description: "<strong>Crema calmante enfocada en piel irritada, enrojecida o sensibilizada.</strong> Su objetivo dentro de la rutina es bajar la sensación de incomodidad, aportar confort y ayudar a mantener la piel más estable cuando está reactiva.",
    idealFor: "piel sensible, con rojeces, alterada o reseca."
  },
  {
    id: 17,
    name: "HYALU-CICA WATER-FIT SUN SERUM FPS 50+",
    price: "$30.999",
    category: "Protector Solar",
    image: "/images/products/hyalu-cica-water-fit-sun-serum-fps-50+.webp",
    gallery: ["/images/gallery/hyalu-cica-water-fit-sun-serum-fps-50+/2.webp", "/images/gallery/hyalu-cica-water-fit-sun-serum-fps-50+/3.jpeg"],
    description: "<strong>Protector solar de uso diario con textura tipo sérum, pensado para quienes quieren protección alta sin sensación pesada ni acabado pastoso.</strong> Ayuda a proteger la piel del daño solar que favorece manchas, envejecimiento prematuro y sensibilización, mientras deja un acabado más hidratante y cómodo que un protector tradicional muy denso.",
    idealFor: "todo tipo de piel, especialmente quienes buscan un protector liviano para uso diario."
  },
  {
    id: 18,
    name: "SMOOTH MILK TYPE SUNSCREEN FPS 50+",
    price: "$28.999",
    category: "Protector Solar",
    image: "/images/products/smooth-milk-type-sunscreen-fps-50+.webp",
    gallery: ["/images/gallery/smooth-milk-type-sunscreen-fps-50+/2.webp", "/images/gallery/smooth-milk-type-sunscreen-fps-50+/3.jpeg"],
    description: "<strong>Protector solar de textura tipo leche, pensado para quienes buscan una aplicación más fluida, ligera y pareja.</strong> Ayuda a proteger del daño solar diario mientras deja una sensación más liviana que un protector denso.",
    idealFor: "uso diario, personas que prefieren texturas fluidas."
  },
  {
    id: 19,
    name: "HYALU-CICA SILKY-FIT SUN STICK FPS 50+",
    price: "$31.999",
    category: "Protector Solar",
    image: "/images/products/hyalu-cica-silky-fit-sun-stick-fps-50+.webp",
    gallery: ["/images/gallery/hyalu-cica-silky-fit-sun-stick-fps-50+/2.webp", "/images/gallery/hyalu-cica-silky-fit-sun-stick-fps-50+/3.jpeg"],
    description: "<strong>Protector solar en barra pensado especialmente para la reaplicación durante el día.</strong> Sirve mucho para zonas expuestas como frente, pómulos, nariz y mentón, y es práctico para llevar en cartera. Ayuda a mantener la protección solar sin necesidad de ensuciarse las manos y suele ser cómodo para retocar encima del maquillaje o en salidas.",
    idealFor: "reaplicación, uso urbano, personas prácticas, piel normal/mixta."
  },
  {
    id: 20,
    name: "BAKUCHIOL EYE CREAM",
    price: "$29.999",
    category: "Corrector de Ojos",
    image: "/images/products/bakuchiol-eye-cream.webp",
    gallery: ["/images/gallery/bakuchiol-eye-cream/2.webp", "/images/gallery/bakuchiol-eye-cream/3.jpeg"],
    description: "<strong>Contorno de ojos orientado a líneas finas, falta de elasticidad y aspecto cansado en la zona periocular.</strong> El bakuchiol suele usarse como alternativa cosmética suave para trabajar signos de edad, ayudando a que el contorno se vea más liso, hidratado y descansado.",
    idealFor: "primeras líneas, sequedad en contorno, mirada cansada."
  },
  {
    id: 21,
    name: "POREMIZING QUICK CLAY STICK MASK",
    price: "$25.099",
    category: "Mascarilla",
    image: "/images/products/poremizing-quick-clay-stick-mask.webp",
    gallery: ["/images/gallery/poremizing-quick-clay-stick-mask/2.webp", "/images/gallery/poremizing-quick-clay-stick-mask/3.jpeg"],
    description: "<strong>Mascarilla de arcilla en barra orientada a limpieza de poros, control de oleosidad y mejora visual de puntos negros.</strong> Al mismo tiempo, el enfoque en centella sugiere una acción más amable con la piel que una arcilla muy agresiva.",
    idealFor: "piel mixta/grasa, poros, brillo y congestión."
  },
  {
    id: 22,
    name: "MASCARILLAS POREMIZING CLARIFYING CENTELLA",
    price: "$6.000",
    category: "Mascarilla",
    image: "/images/products/mascarillas-poremizing-clarifying-centella.webp",
    gallery: ["/images/gallery/mascarillas-poremizing-clarifying-centella/2.webp"],
    description: "<strong>Mascarilla de tela pensada para dar un extra de hidratación y calma en poco tiempo.</strong> Es útil cuando la piel se siente cansada, tirante, apagada o sensibilizada, porque deja una sensación más fresca y confortable.",
    idealFor: "piel deshidratada, sensible o como “rescate” antes de un evento."
  }
];
