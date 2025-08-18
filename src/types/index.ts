export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  categorySlug: string;
  image: string;
  isOriginal: boolean;
  brand: string;
  model: string;
  year?: string;
  stock: number;
  specifications?: Record<string, string>;
  images?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface NewsletterForm {
  email: string;
}

export interface QuoteForm {
  nome: string;
  whatsapp: string;
  empresa: string;
  quantidade: number;
  email?: string;
  observacoes?: string;
}

export interface QuoteRequest {
  produto: {
    nome: string;
    codigo: string;
    categoria: string;
  };
  cliente: {
    nome: string;
    whatsapp: string;
    empresa: string;
    email?: string;
  };
  pedido: {
    quantidade: number;
    observacoes?: string;
    data_solicitacao: string;
  };
}

export interface SearchFilters {
  category?: string;
  priceRange?: [number, number];
  inStock?: boolean;
  original?: boolean;
  search?: string;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

export interface MenuItem {
  name: string;
  href: string;
  icon?: string;
  children?: MenuItem[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
}

export interface SocialMedia {
  name: string;
  url: string;
  icon: string;
} 