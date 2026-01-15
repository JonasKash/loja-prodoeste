import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Truck, Shield, Loader2 } from 'lucide-react';
import { products } from '@/data/products';
import { useState } from 'react';
import axios from 'axios';

interface FormData {
  name: string;
  company: string;
  phone: string;
  quantity: string;
}

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    quantity: '1'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const formatPhone = (value: string) => {
    // Remove tudo que não é número
    let numbers = value.replace(/\D/g, '');
    
    // Limita a 11 dígitos (DDD + 9 dígitos)
    if (numbers.length > 11) {
      numbers = numbers.slice(0, 11);
    }
    
    // Aplica a máscara (99)9 9999-9999
    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 3) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3)}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3, 7)}-${numbers.slice(7)}`;
    }
    
    return value;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Aplica formatação automática para telefone
      const formattedPhone = formatPhone(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedPhone
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validatePhone = (phone: string): boolean => {
    // Remove tudo que não é número
    const numbers = phone.replace(/\D/g, '');
    
    // Verifica se tem exatamente 11 dígitos (DDD + 9 dígitos)
    if (numbers.length !== 11) {
      return false;
    }
    
    // Verifica se o DDD é válido (começa com 1-9)
    if (!/^[1-9]/.test(numbers.slice(0, 2))) {
      return false;
    }
    
    // Verifica se o nono dígito é válido (começa com 9)
    if (numbers.slice(2, 3) !== '9') {
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Validação do telefone
    if (!validatePhone(formData.phone)) {
      setError('Por favor, insira um telefone válido no formato (99)9 9999-9999');
      setIsSubmitting(false);
      return;
    }
    
    try {
      const discountPercentage = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

      const payload = {
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        quantity: formData.quantity,
        productName: product?.name,
        productCategory: product?.category,
        productBrand: product?.brand,
        productModel: product?.model,
        productYear: product?.year,
        productPrice: product?.price,
        productOriginalPrice: product?.originalPrice,
        productDiscount: discountPercentage,
        productDescription: product?.description,
        productStock: product?.stock
      };

      console.log('🚀 Tentando enviar dados para o webhook via proxy CORS público...');
      console.log('📤 Payload sendo enviado:', payload);

      // Usa proxy CORS público para webhook de produção
      const response = await axios.post('https://corsproxy.io/?https://wbn.araxa.app/webhook/receive-data', payload);
      
      console.log('✅ Resposta do webhook:', response.data);
      console.log('📊 Status da resposta:', response.status);
      
      console.log('✅ Dados enviados com sucesso!');
      setIsSuccess(true);
      
      // Resetar o formulário e a mensagem de sucesso
      setFormData({ name: '', company: '', phone: '', quantity: '1' });
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (err) {
      console.error('❌ Erro ao enviar formulário:', err);
      setError('Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produto não encontrado</h1>
          <Link to="/pecas" className="text-black hover:underline">Voltar ao catálogo</Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Link
            to="/pecas"
            className="inline-flex items-center text-black hover:text-gray-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Catálogo
          </Link>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="p-6">
              {/* Category */}
              <div className="mb-4">
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  {product.category}
                </span>
              </div>

              {/* Product Name */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Brand & Model */}
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-lg text-gray-600">
                  {product.brand} {product.model}
                </span>
                {product.year && (
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                    {product.year}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mb-6">
                {product.originalPrice && product.originalPrice > product.price ? (
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-black">
                      {formatPrice(product.price)}
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                      <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full font-medium">
                        -{discountPercentage}%
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-black">
                    {formatPrice(product.price)}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Stock Status */}
              <div className="mb-6">
                {product.stock > 0 ? (
                  <div className="flex items-center space-x-2 text-green-600">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Em Estoque ({product.stock} unidades)</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-red-600">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-medium">Sem Estoque</span>
                  </div>
                )}
              </div>

              {/* Contact Form */}
              <div className="mb-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Solicitar Orçamento</h3>
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
                    <p className="font-medium">Solicitação enviada com sucesso!</p>
                    <p>Entraremos em contato em breve.</p>
                  </div>
                )}
                {error && (
                  <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                    <p className="font-medium">Erro ao enviar</p>
                    <p>{error}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Seu nome completo"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Nome da sua empresa"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="(34) 3691-1700"
                        required
                        disabled={isSubmitting}
                        maxLength={15}
                        inputMode="numeric"
                        pattern="[0-9]*"
                      />
                      <p className="text-xs text-gray-500 mt-1">Formato: (34) 3691-1700</p>
                    </div>
                    
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantidade *</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Quantidade desejada"
                        min="1"
                        required
                        disabled={isSubmitting}
                        inputMode="numeric"
                        pattern="[0-9]*"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin mr-3 h-6 w-6" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <span>Enviar Solicitação</span>
                      )}
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    * Campos obrigatórios
                  </p>
                </form>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Peça Original Mercedes-Benz</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Entrega em todo Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Specifications */}
        {product.specifications && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6 mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Especificações Técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Direcionais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-lg shadow-md p-6 mt-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Como Chegar</h2>
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Estamos localizados em Araxá, Minas Gerais
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <span>📍 Araxá-MG</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
