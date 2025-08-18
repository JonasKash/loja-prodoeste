import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, CheckCircle } from 'lucide-react';

interface CookiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiesModal = ({ isOpen, onClose }: CookiesModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Política de Cookies
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência em nosso site. 
                  Os cookies são pequenos arquivos de texto que são armazenados no seu dispositivo.
                </p>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Tipos de Cookies:</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Cookies Essenciais</p>
                        <p className="text-sm text-gray-600">
                          Necessários para o funcionamento básico do site
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Cookies de Performance</p>
                        <p className="text-sm text-gray-600">
                          Ajudam a entender como os visitantes interagem com o site
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Cookies de Funcionalidade</p>
                        <p className="text-sm text-gray-600">
                          Permitem que o site lembre suas escolhas e preferências
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Importante:</strong> Ao continuar navegando em nosso site, 
                    você concorda com o uso de cookies conforme nossa política de privacidade.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-6 border-t border-gray-200">
                <button
                  onClick={onClose}
                  className="text-gray-600 hover:text-gray-800 transition-colors font-medium"
                >
                  Entendi
                </button>
                <button
                  onClick={onClose}
                  className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Aceitar Todos
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookiesModal; 