import { motion } from 'framer-motion';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const AboutPage = () => {
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
            Sobre a Prodoeste
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 30 anos de experiência em peças originais Mercedes-Benz para caminhões, ônibus e vans.
          </p>
        </motion.div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-lg shadow-md p-8 mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Nossa História
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Prodoeste nasceu da paixão por veículos Mercedes-Benz e do compromisso com a qualidade. 
                Desde 1990, temos sido referência no mercado de peças originais para caminhões, ônibus e vans.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa missão é fornecer peças de qualidade superior, garantindo a segurança e durabilidade 
                dos veículos de nossos clientes, sempre com o compromisso de excelência e confiança.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/images/Logo+Completo-ab555413-1920w.png"
                alt="Prodoeste"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          {[
            { icon: Clock, value: '30+', label: 'Anos de Experiência' },
            { icon: Users, value: '1000+', label: 'Clientes Satisfeitos' },
            { icon: Award, value: '100%', label: 'Peças Originais' },
            { icon: MapPin, value: 'Todo Brasil', label: 'Cobertura Nacional' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
                              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Qualidade',
                description: 'Compromisso com a excelência em todos os produtos e serviços oferecidos.'
              },
              {
                title: 'Confiança',
                description: 'Construir relacionamentos duradouros baseados na transparência e honestidade.'
              },
              {
                title: 'Inovação',
                description: 'Sempre em busca de novas soluções para atender melhor nossos clientes.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage; 