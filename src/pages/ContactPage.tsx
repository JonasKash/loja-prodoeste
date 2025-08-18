import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { ContactForm } from '@/types';
import SuccessModal from '@/components/SuccessModal';
import axios from 'axios';
import { getSourceInfo, PAGE_SOURCES } from '@/utils/sourceTracker';

const ContactPage = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();



  const validatePhone = (phone: string): boolean => {
    // Se não tiver telefone, é válido (campo opcional)
    if (!phone || phone.trim() === '') {
      return true;
    }
    
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

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setError('');
    
    // Validação do telefone (se preenchido)
    if (data.phone && !validatePhone(data.phone)) {
      setError('Por favor, insira um telefone válido no formato (99)9 9999-9999 ou deixe em branco');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Debug: Verificar UTM e source
      const sourceInfo = getSourceInfo(PAGE_SOURCES.CONTACT);
      console.log('🔍 Debug UTM:', {
        currentUrl: window.location.href,
        searchParams: window.location.search,
        utmSource: new URLSearchParams(window.location.search).get('utm_source'),
        pageSource: PAGE_SOURCES.CONTACT,
        finalSource: sourceInfo
      });

      const payload = {
        ...data,
        timestamp: new Date().toISOString(),
        source: sourceInfo
      };

      console.log('🚀 Enviando dados do formulário de contato para o webhook...');
      console.log('📤 Payload:', payload);

      // Usa proxy CORS público para webhook de contato de produção
      const response = await axios.post('https://corsproxy.io/?https://wbn.araxa.app/webhook/contact-forms', payload);
      
      console.log('✅ Formulário de contato enviado com sucesso!');
      console.log('📊 Status da resposta:', response.status);
      
      setIsSuccessModalOpen(true);
      reset();
    } catch (err: any) {
      console.error('❌ Erro ao enviar formulário de contato:', err);
      setError('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a encontrar as peças ideais para seu veículo Mercedes-Benz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua Mensagem
            </h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Nome é obrigatório' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'E-mail é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'E-mail inválido'
                      }
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="(34) 9 9155-3467"
                  maxLength={15}
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
                <p className="text-xs text-gray-500 mt-1">Formato: (34) 9 9155-3467</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                                  <input
                    type="text"
                    {...register('subject', { required: 'Assunto é obrigatório' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Como podemos ajudar?"
                  />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                                  <textarea
                    {...register('message', { required: 'Mensagem é obrigatória' })}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Descreva sua necessidade..."
                  />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                  <p className="font-medium">Erro ao enviar</p>
                  <p>{error}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5 mr-2" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Telefone</p>
                    <p className="text-gray-600">(34)3691-1700</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">E-mail</p>
                    <p className="text-gray-600">contato@prodoeste.com.br</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Endereço</p>
                    <p className="text-gray-600">Araxá - Minas Gerais</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Horário de Funcionamento</p>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Por que escolher a Prodoeste?
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Peças 100% originais Mercedes-Benz</li>
                <li>• Mais de 30 anos de experiência</li>
                <li>• Entrega em todo Brasil</li>
                <li>• Suporte técnico especializado</li>
                <li>• Garantia de fábrica</li>
              </ul>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Nossa Localização
              </h3>
              <div className="rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.5713478969237!2d-46.97411558881491!3d-19.560008281670722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b036e1e82173a5%3A0x55a320d4cd9f7093!2sProdoeste%20Ve%C3%ADculos%20e%20Servi%C3%A7os!5e0!3m2!1sen!2sbr!4v1755459721083!5m2!1sen!2sbr" 
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Prodoeste"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        title="Mensagem Enviada!"
        message="Sua mensagem foi enviada com sucesso. Entraremos em contato em breve."
      />
    </div>
  );
};

export default ContactPage;
