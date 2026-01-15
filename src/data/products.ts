import { Product, Category } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Kit de Filtro Mercedes-Benz',
    slug: 'kit-filtro-mercedes-benz',
    description: 'JOGO DE FILTROS DO MOTOR. Kit completo de filtros para motores Mercedes-Benz, incluindo filtro de ar, óleo e combustível.',
    price: 518.98,
    originalPrice: 650.00,
    category: 'Filtros',
    categorySlug: 'filtros',
    image: '/images/model_middle_webp_comprar-kit-filtro-mercedes-benz_d70b13ac0b.png.webp',
    isOriginal: true,
    brand: 'Mercedes-Benz',
    model: 'Actros',
    year: '2018-2024',
    stock: 25,
    specifications: {
      'Tipo': 'Kit de Filtros',
      'Código': 'A 0001808909',
      'Material': 'Papel Sintético',
      'Inclui': 'Ar, Óleo e Combustível',
      'Compatibilidade': 'Actros, Atego, Axor',
      'Estoque': '25 unidades'
    },
    images: [
      '/images/model_middle_webp_comprar-kit-filtro-mercedes-benz_d70b13ac0b.png.webp'
    ]
  },
  {
    id: '2',
    name: 'Kit de Embreagem Mercedes-Benz',
    slug: 'kit-embreagem-mercedes-benz',
    description: 'JOGO DE PECAS EMBREAGEM A SECO. Kit completo de embreagem para caminhões Mercedes-Benz, incluindo platô, disco e rolamento.',
    price: 36339.33,
    originalPrice: 45000.00,
    category: 'Embreagem',
    categorySlug: 'embreagem',
    image: '/images/model_middle_webp_comprar-embreagem-mercedes-benz_2037e0836b.png.webp',
    isOriginal: true,
    brand: 'Mercedes-Benz',
    model: 'Actros',
    year: '2015-2024',
    stock: 5,
    specifications: {
      'Tipo': 'Kit Completo',
      'Código': 'A 0292506101',
      'Material': 'Ferro Fundido',
      'Diâmetro': '430mm',
      'Compatibilidade': 'Actros, Atego, Axor',
      'Estoque': '5 unidades'
    },
    images: [
      '/images/model_middle_webp_comprar-embreagem-mercedes-benz_2037e0836b.png.webp'
    ]
  },
  {
    id: '3',
    name: 'Óleo Motor Mercedes-Benz',
    slug: 'oleo-motor-mercedes-benz',
    description: 'MOBIL MX15W40 BALDE. Óleo de motor de alta performance para caminhões Mercedes-Benz, garantindo proteção e durabilidade.',
    price: 450.00,
    originalPrice: 550.00,
    category: 'Óleos',
    categorySlug: 'oleos',
    image: '/images/model_middle_webp_comprar-oleo-mercedes-benz_1d356af2a3.png.webp',
    isOriginal: true,
    brand: 'Mercedes-Benz',
    model: 'Todos',
    year: 'Universal',
    stock: 252,
    specifications: {
      'Tipo': 'MOBIL MX15W40',
      'Viscosidade': '15W-40',
      'Capacidade': 'Balde',
      'API': 'CI-4',
      'Estoque': '252 unidades'
    },
    images: [
      '/images/model_middle_webp_comprar-oleo-mercedes-benz_1d356af2a3.png.webp'
    ]
  },
  {
    id: '4',
    name: 'Lonas do Freio Mercedes-Benz',
    slug: 'disco-freio-mercedes-benz',
    description: 'JG.LONAS DO FREIO C/REBITE-NAO MONTADA. Lonas de freio de alta qualidade para caminhões Mercedes-Benz, garantindo segurança e durabilidade.',
    price: 590.99,
    originalPrice: 750.00,
    category: 'Freios',
    categorySlug: 'freios',
    image: '/images/model_middle_webp_comprar-disco-de-freio-mercedes-benz_eb2fd9168e.png.webp',
    isOriginal: true,
    brand: 'Mercedes-Benz',
    model: 'Actros',
    year: '2016-2024',
    stock: 8,
    specifications: {
      'Tipo': 'Lonas do Freio',
      'Código': 'A 6954232010',
      'Material': 'Material Composto',
      'Característica': 'C/REBITE-NAO MONTADA',
      'Compatibilidade': 'Actros, Atego, Axor',
      'Estoque': '8 unidades'
    },
    images: [
      '/images/model_middle_webp_comprar-disco-de-freio-mercedes-benz_eb2fd9168e.png.webp'
    ]
  },
  {
    id: '5',
    name: 'AMORTECEDOR EIXO DIANTEIRO',
    slug: 'amortecedor-mercedes-benz',
    description: 'Amortecedor de suspensão para eixo dianteiro de caminhões Mercedes-Benz, garantindo conforto e estabilidade.',
    price: 392.46,
    originalPrice: 420.00,
    category: 'Suspensão',
    categorySlug: 'suspensao',
    image: '/images/model_middle_webp_comprar-amortecedor-mercedes-benz_cb7ebc79ef.png.webp',
    isOriginal: true,
    brand: 'Mercedes-Benz',
    model: 'Actros',
    year: '2017-2024',
    stock: 4,
    specifications: {
      'Tipo': 'Amortecedor Hidráulico',
      'Código': 'A 3843231100',
      'Material': 'Aço Inoxidável',
      'Comprimento': '580mm',
      'Compatibilidade': 'Actros, Atego',
      'Estoque': '4 unidades'
    },
    images: [
      '/images/model_middle_webp_comprar-amortecedor-mercedes-benz_cb7ebc79ef.png.webp'
    ]
  },
  {
    id: '6',
    name: 'LU RADIADOR',
    slug: 'radiador-mercedes-benz',
    description: 'Radiador de motor para caminhões Mercedes-Benz, garantindo resfriamento eficiente.',
    price: 7809.89,
    originalPrice: 8500.00,
    category: 'Sistema de Arrefecimento',
    categorySlug: 'sistema-arrefecimento',
    image: '/images/model_middle_webp_comprar-radiador-mercedes-benz_e70debccb1.png.webp',
    isOriginal: true,
    brand: 'Mercedes-Benz',
    model: 'Actros',
    year: '2015-2024',
    stock: 1,
    specifications: {
      'Tipo': 'Radiador de Água',
      'Código': 'A 9405001803',
      'Material': 'Alumínio',
      'Capacidade': '25L',
      'Compatibilidade': 'Actros, Atego, Axor',
      'Estoque': '1 unidade'
    },
    images: [
      '/images/model_middle_webp_comprar-radiador-mercedes-benz_e70debccb1.png.webp'
    ]
  },
  {
    id: '7',
    name: 'Intercooler Mercedes-Benz',
    slug: 'intercooler-mercedes-benz',
    description: 'Intercooler de alta eficiência para motores turbo Mercedes-Benz, melhorando a performance.',
    price: 650.00,
    originalPrice: 850.00,
    category: 'Sistema de Arrefecimento',
    categorySlug: 'sistema-arrefecimento',
    image: '/images/model_middle_webp_comprar-intercooler-mercedes-benz_db3062ac80.png.webp',
    isOriginal: true,
    brand: 'Mercedes-Benz',
    model: 'Actros',
    year: '2016-2024',
    stock: 4,
    specifications: {
      'Tipo': 'Intercooler',
      'Material': 'Alumínio',
      'Capacidade': '15L',
      'Compatibilidade': 'Actros, Atego'
    },
    images: [
      '/images/model_middle_webp_comprar-intercooler-mercedes-benz_db3062ac80.png.webp'
    ]
  },
  {
    id: '8',
    name: 'JOGO DE CORREIA V (PAR)',
    slug: 'kit-correia-poly-v-mercedes-benz',
    description: 'Jogo de correia V em par para caminhões Mercedes-Benz, garantindo transmissão eficiente de potência.',
    price: 176.06,
    originalPrice: 220.00,
    category: 'Motor',
    categorySlug: 'motor',
    image: '/images/model_middle_webp_comprar-kit-correia-ploy-v-inversoras-tensor-e-polia_1b2f01e5d6.png.webp',
    isOriginal: true,
    brand: 'Mercedes-Benz',
    model: 'Actros',
    year: '2015-2024',
    stock: 9,
    specifications: {
      'Tipo': 'Jogo de Correia V',
      'Código': 'A 0079971692',
      'Material': 'Borracha Sintética',
      'Quantidade': 'Par',
      'Compatibilidade': 'Actros, Atego',
      'Estoque': '9 unidades'
    },
    images: [
      '/images/model_middle_webp_comprar-kit-correia-ploy-v-inversoras-tensor-e-polia_1b2f01e5d6.png.webp'
    ]
  },
  {
    id: '9',
    name: 'KIT MOTOR C/CAMISA S/REFRI.SUPER.OM457LA',
    slug: 'kit-motor-mercedes-benz',
    description: 'Kit completo de motor com camisa sem refrigeração superior OM457LA para Mercedes-Benz, incluindo todas as peças necessárias.',
    price: 4306.68,
    originalPrice: 5000.00,
    category: 'Motor',
    categorySlug: 'motor',
    image: '/images/model_middle_webp_comprar-kit-do-motor-mercedes-benz_43abcef723.jpg.webp',
    isOriginal: true,
    brand: 'Mercedes-Benz',
    model: 'Actros',
    year: '2016-2024',
    stock: 6,
    specifications: {
      'Tipo': 'Kit do Motor Completo',
      'Código': 'A 4570102744',
      'Motor': 'OM457LA',
      'Característica': 'C/CAMISA S/REFRI.SUPER',
      'Compatibilidade': 'Actros, Atego, Axor',
      'Estoque': '6 unidades'
    },
    images: [
      '/images/model_middle_webp_comprar-kit-do-motor-mercedes-benz_43abcef723.jpg.webp'
    ]
  },
  {
    id: '10',
    name: 'Peças Alliance Mercedes-Benz',
    slug: 'pecas-alliance-mercedes-benz',
    description: 'Peças de alta qualidade da marca Alliance para caminhões Mercedes-Benz.',
    price: 180.00,
    originalPrice: 240.00,
    category: 'Motor',
    categorySlug: 'motor',
    image: '/images/model_middle_webp_comprar-pecas-alliance-mercedes-benz_547a9eaeaa.png.webp',
    isOriginal: false,
    brand: 'Alliance',
    model: 'Actros',
    year: '2015-2024',
    stock: 20,
    specifications: {
      'Tipo': 'Peças Genéricas',
      'Marca': 'Alliance',
      'Qualidade': 'Premium',
      'Compatibilidade': 'Actros, Atego, Axor'
    },
    images: [
      '/images/model_middle_webp_comprar-pecas-alliance-mercedes-benz_547a9eaeaa.png.webp'
    ]
  },
  {
    id: '11',
    name: 'Peças Alliance Mercedes-Benz 2251',
    slug: 'pecas-alliance-mercedes-benz-2251',
    description: 'Peças específicas da linha 2251 da marca Alliance para Mercedes-Benz.',
    price: 220.00,
    originalPrice: 290.00,
    category: 'Motor',
    categorySlug: 'motor',
    image: '/images/model_middle_webp_comprar-pecas-alliance-mercedes-benz-2251_79a35204c1.png.webp',
    isOriginal: false,
    brand: 'Alliance',
    model: 'Actros',
    year: '2016-2024',
    stock: 15,
    specifications: {
      'Tipo': 'Peças Específicas',
      'Marca': 'Alliance 2251',
      'Qualidade': 'Premium',
      'Compatibilidade': 'Actros, Atego'
    },
    images: [
      '/images/model_middle_webp_comprar-pecas-alliance-mercedes-benz-2251_79a35204c1.png.webp'
    ]
  },
  {
    id: '12',
    name: 'Pré-filtro Arla 32 Mercedes-Benz',
    slug: 'pre-filtro-arla-32-mercedes-benz',
    description: 'VALVULA DOSADORA DO ADITIVO ARLA 32. Válvula dosadora do aditivo Arla 32 para motores Mercedes-Benz, garantindo dosagem precisa do aditivo.',
    price: 15704.72,
    originalPrice: 17000.00,
    category: 'Filtros',
    categorySlug: 'filtros',
    image: '/images/model_middle_webp_comprar-pre-filtro-arla-32-mercedes-benz_93f8257553.png.webp',
    isOriginal: true,
    brand: 'Mercedes-Benz',
    model: 'Actros',
    year: '2017-2024',
    stock: 1,
    specifications: {
      'Tipo': 'Válvula Dosadora',
      'Código': 'A 0001404139',
      'Material': 'Metal/Plástico',
      'Função': 'Dosagem do Aditivo Arla 32',
      'Compatibilidade': 'Actros, Atego, Axor',
      'Estoque': '1 unidade'
    },
    images: [
      '/images/model_middle_webp_comprar-pre-filtro-arla-32-mercedes-benz_93f8257553.png.webp'
    ]
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Filtros',
    slug: 'filtros',
    description: 'Filtros de ar, óleo e combustível para Mercedes-Benz',
    image: '/images/model_middle_webp_comprar-kit-filtro-mercedes-benz_d70b13ac0b.png.webp',
    productCount: 2
  },
  {
    id: '2',
    name: 'Embreagem',
    slug: 'embreagem',
    description: 'Kits de embreagem completos para Mercedes-Benz',
    image: '/images/model_middle_webp_comprar-embreagem-mercedes-benz_2037e0836b.png.webp',
    productCount: 1
  },
  {
    id: '3',
    name: 'Óleos',
    slug: 'oleos',
    description: 'Óleos de motor, transmissão e diferencial',
    image: '/images/model_middle_webp_comprar-oleo-mercedes-benz_1d356af2a3.png.webp',
    productCount: 1
  },
  {
    id: '4',
    name: 'Freios',
    slug: 'freios',
    description: 'Discos, pastilhas e cilindros de freio',
    image: '/images/model_middle_webp_comprar-disco-de-freio-mercedes-benz_eb2fd9168e.png.webp',
    productCount: 1
  },
  {
    id: '5',
    name: 'Suspensão',
    slug: 'suspensao',
    description: 'Amortecedores, molas e buchas',
    image: '/images/model_middle_webp_comprar-amortecedor-mercedes-benz_cb7ebc79ef.png.webp',
    productCount: 1
  },
  {
    id: '6',
    name: 'Sistema de Arrefecimento',
    slug: 'sistema-arrefecimento',
    description: 'Radiadores, bombas d\'água e termostatos',
    image: '/images/model_middle_webp_comprar-radiador-mercedes-benz_e70debccb1.png.webp',
    productCount: 2
  },
  {
    id: '7',
    name: 'Motor',
    slug: 'motor',
    description: 'Peças e kits para motor Mercedes-Benz',
    image: '/images/model_middle_webp_comprar-kit-do-motor-mercedes-benz_43abcef723.jpg.webp',
    productCount: 4
  }
];
