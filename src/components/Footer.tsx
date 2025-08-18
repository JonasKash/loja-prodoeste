import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/images/Logo+Completo-ab555413-1920w.png"
              alt="Prodoeste"
              className="h-12 w-auto"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialistas em peças originais Mercedes-Benz para caminhões, ônibus e vans. 
              Qualidade e confiança desde 1990.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Prodoeste/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/prodoeste/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://br.linkedin.com/company/prodoeste" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/pecas" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Catálogo de Peças
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/modelos" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Modelos Mercedes-Benz
                </Link>
              </li>
              <li>
                <Link to="/consorcio" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Consórcio
                </Link>
              </li>
              <li>
                <Link to="/plano-manutencao" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Plano de Manutenção
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Serviços Técnicos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">(34)3691-1700</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">contato@prodoeste.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">Araxá - MG</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Prodoeste. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/politica-privacidade" className="text-gray-400 hover:text-white transition-colors text-sm">
                Política de Privacidade
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
