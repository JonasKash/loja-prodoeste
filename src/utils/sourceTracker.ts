// Utilitário para rastrear a origem do tráfego
export const getSourceInfo = (pageName: string): string => {
  // Debug: Log para verificar o que está acontecendo
  console.log('🔍 getSourceInfo chamado com:', pageName);
  console.log('🔍 URL atual:', window.location.href);
  console.log('🔍 Search params:', window.location.search);
  
  // Pega UTM source da URL se existir (aceita tanto underscore quanto hífen)
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source') || urlParams.get('utm-source');
  
  console.log('🔍 UTM Source encontrado:', utmSource);
  
  // Constrói o source com página + UTM
  if (utmSource) {
    const finalSource = `${pageName}+${utmSource}`;
    console.log('🔍 Source final com UTM:', finalSource);
    return finalSource;
  }
  
  // Se não tiver UTM, retorna apenas a página
  console.log('🔍 Source final sem UTM:', pageName);
  return pageName;
};

// Lista de páginas para rastreamento
export const PAGE_SOURCES = {
  CONTACT: 'contact-page',
  PRODUCT_DETAIL: 'product-detail-page',
  PRODUCT: 'product-page',
  HOME: 'home-page',
  CATALOG: 'catalog-page',
  ABOUT: 'about-page'
} as const;
