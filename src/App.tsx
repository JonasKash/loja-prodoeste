import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookiesModal from '@/components/CookiesModal';
import HomePage from '@/pages/HomePage';
import CatalogPage from '@/pages/CatalogPage';
import ProductPage from '@/pages/ProductPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import CategoryPage from '@/pages/CategoryPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import ImageTest from '@/components/ImageTest';
import SimpleImageTest from '@/components/SimpleImageTest';

// Componente para scrollar ao topo quando a rota mudar
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function App() {
  const [isCookiesModalOpen, setIsCookiesModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <HomePage />
                </motion.div>
              } 
            />
            
            {/* Rotas do Menu Principal */}
            <Route 
              path="/modelos" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-black mb-6">Modelos Mercedes-Benz</h1>
                    <p className="text-gray-600 mb-8">
                      Conheça nossa linha completa de caminhões, ônibus e vans Mercedes-Benz.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-xl font-semibold mb-2 text-black">Caminhões</h3>
                        <p className="text-gray-600">Linha completa de caminhões para transporte de carga.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-xl font-semibold mb-2 text-black">Ônibus</h3>
                        <p className="text-gray-600">Ônibus urbanos e rodoviários para passageiros.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-xl font-semibold mb-2 text-black">Vans</h3>
                        <p className="text-gray-600">Vans comerciais para transporte de passageiros e carga.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              } 
            />
            
            <Route 
              path="/consorcio" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-black mb-6">Consórcio</h1>
                    <p className="text-gray-600 mb-8">
                      Consórcio Mercedes-Benz - A melhor forma de adquirir seu veículo.
                    </p>
                    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                      <h2 className="text-2xl font-semibold mb-4 text-black">Vantagens do Consórcio</h2>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Taxas reduzidas</li>
                        <li>• Prazos flexíveis</li>
                        <li>• Sem entrada</li>
                        <li>• Aprovação facilitada</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              } 
            />
            
            <Route 
              path="/plano-manutencao" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-black mb-6">Plano de Manutenção</h1>
                    <p className="text-gray-600 mb-8">
                      Mantenha seu veículo sempre em perfeitas condições com nossos planos de manutenção.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-xl font-semibold mb-2 text-black">Manutenção Preventiva</h3>
                        <p className="text-gray-600">Inspeções regulares para evitar problemas futuros.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-xl font-semibold mb-2 text-black">Manutenção Corretiva</h3>
                        <p className="text-gray-600">Reparo e substituição de peças quando necessário.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              } 
            />
            
            <Route 
              path="/servicos" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-black mb-6">Serviços</h1>
                    <p className="text-gray-600 mb-8">
                      Serviços autorizados Mercedes-Benz para seu veículo.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-xl font-semibold mb-2 text-black">Revisão</h3>
                        <p className="text-gray-600">Revisões completas com peças originais.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-xl font-semibold mb-2 text-black">Reparo</h3>
                        <p className="text-gray-600">Reparos especializados em todos os sistemas.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-xl font-semibold mb-2 text-black">Diagnóstico</h3>
                        <p className="text-gray-600">Diagnóstico computadorizado avançado.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              } 
            />
            
            <Route 
              path="/pecas" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CatalogPage />
                </motion.div>
              } 
            />
            
            {/* Rotas do Footer */}
            <Route 
              path="/politica-privacidade" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-black mb-6">Política de Privacidade</h1>
                    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                      <div className="text-gray-700 leading-relaxed space-y-6">
                        <p>
                          Nossa empresa objetivando a prática de contato com seus serviços, por intermédio deste site, ative em você o entusiasmo e diversão para se sentir bem. Portanto, aconselhamos a leitura minuciosa da política de privacidade, refletida na sequência abaixo.
                        </p>

                        <div>
                          <h2 className="text-xl font-semibold text-black mb-3">Finalidade</h2>
                          <p>
                            Esta Política de Privacidade é aceitável a todos os (sites/lps) pertencentes a nossa empresa.
                          </p>
                        </div>

                        <div>
                          <h2 className="text-xl font-semibold text-black mb-3">Dados informados no acesso</h2>
                          <p>
                            Você pode visitar o (s) Site (s) mesmo sem informar seus dados pessoais. Significa que, tem a liberdade de acessar todo e qualquer tema do (s) Site (s) sobre os serviços dessa empresa sem obrigatoriedade de mencionar informações que identifique você, ou ainda que de a possibilidade de ser usufruída pela nossa empresa para fazer contato com você, isso se inclui, nome, endereço, número de telefone e e-mail. De outra forma, é provável que a nossa empresa peça alguns dados pessoais, com intuito de melhorar a sua prática de navegação no (site/lps), como customização de páginas e participação e envolvimentos em promoções. Dados como, nome, endereço e e-mail, são coletados, dado devido tratamento e depois armazenados de forma adequada e em segurança para natureza dos dados, assim estando seguindo, conforme disposto abaixo a devida atenção à legislação aplicável.
                          </p>
                        </div>

                        <div>
                          <h2 className="text-xl font-semibold text-black mb-3">Colhimento, Recebimento e Tratamento dos Dados Informados</h2>
                          <p>
                            Nossa empresa reconhece a privacidade dos usuários visitantes do (site/Lps) e trata com zelo à confidencialidade o registro de informações provinda do seu acesso, podendo ser este, através do registro estatístico de suas informações de acesso ou, ainda, pelo seu cadastro para navegação em áreas de participações em promoções ou acesso restrito.
                          </p>
                          <p className="mt-3">
                            Para amparar seus dados pessoais, nossa empresa aplica constantemente esforços, usando sistemas de proteção para tecnologias de informações, seguindo os critérios atuais de confiabilidade do mercado, assim garantindo, que as informações sejam mantidas em sigilo e de forma alguma compartilhada sem prévia autorização. Salvo apenas, em circunstâncias exigidas por lei e determinação judicial.
                          </p>
                          <p className="mt-3">
                            Você, sem deixar dúvida, consente que os dados informados através do (sites,Lps), ainda que sejam através do seu cadastro para navegação em áreas de acesso restrito, manifestando interesse de participação em promoções ou em compras, sejam guardadas, tratadas, processadas, utilizadas e protegidas pela nossa empresa, sendo ocluso a cedência, comercialização ou qualquer outro meio de divulgação e transferência dessas informações a terceiros, sendo possível apenas nos casos que seguem abaixo:
                          </p>
                          <ul className="list-disc list-inside mt-3 space-y-1">
                            <li>Quando usuário permite prévio consentimento;</li>
                            <li>Através de ordem judicial ou requerimento de autoridade administrativa competente;</li>
                          </ul>
                          <p className="mt-3">
                            Manifestando interesse em serviços oferecidos pela nossa empresa ou compra de produtos através do preenchimento de formulário específico no (site/lp), você indiscutivelmente permite que suas informações sejam encaminhados a um representante nosso para, eventualmente, conhecer, um pouco mais os serviços ou produtos e/ou até mesmo para comprá-lo.
                          </p>
                          <p className="mt-3">
                            Seus dados são capturados, armazenados, tratados, processados e utilizado pela nossa empresa com as seguintes finalidades:
                          </p>
                          <ul className="list-disc list-inside mt-3 space-y-1">
                            <li>Possibilitar a entrega de serviços mais personalizados e adequados ao seu perfil;</li>
                            <li>Tornar viável sua participação em eventos promovidos por nossa empresa como: promoções e sorteios;</li>
                            <li>Possibilitar que agentes autorizados da empresa contate você para oferecer produtos e serviços, de acordo com o tipo de interesse feito através de algum formulário;</li>
                            <li>Possibilitar a comunicação entre nós e você, até mesmo, através de envio e recebimento de e-mails.</li>
                          </ul>
                          <p className="mt-3">
                            Você tem a liberdade, independente de tempo de, acessar, alterar, corrigir, excluir ou bloquear suas informações pessoais coletados enviando uma solicitação em forma de texto, ou seja, por escrito para o e-mail: atendimento@autoshop.com.br.
                          </p>
                        </div>

                        <div>
                          <h2 className="text-xl font-semibold text-black mb-3">Segurança da Informação</h2>
                          <p>
                            O tempo que você estiver navegando no Site/Lp eventualmente poderá se deparar com links para sites de terceiros. Caso isso ocorra nossa empresa fica eximida da responsabilidade pela aplicação desta Política de Privacidade e ao que se vincula a ela, bem como, seus termos de segurança, armazenagem e divulgação de informação e armazenagens de informações nesses sites de terceiros, assim também, válido para segurança e conteúdo de tais sites. A empresa reforça ainda que sob qualquer hipótese ser responsabilizada por possíveis danos ou perdas sofridos em virtude da utilização de referidos frames ou links. Aconselhamos você a ler toda Política de Privacidade de sites detidos por terceiros antes de ter quaisquer ação nestes frames ou links. Nós ressaltamos, mesmo com as atualizações de tecnologias e esforços encaminhados sejam feitos com grande frequência no intuito de dar mais segurança nas informações armazenadas e transmitidas, na nossa atualidade, ainda não é possível ter sistemas que garanta 100% (cem por cento) de segurança e imunes a ataques cibernéticos realizados por terceiros, como hackers. De tal forma, NÃO PODEMOS GARANTIR UMA SEGURANÇA ABSOLUTA DE NOSSOS SERVIDORES E BANCOS DE DADOS, E FICA EXIMIDA DE RESPONDER, SE RESPONSABILIZAR POR POSSÍVEIS PERDAS E DANOS PROVINDAS DE AÇÃO DE TERCEIROS EM SEUS SISTEMAS E QUE POSSA LEVAR A UM VAZAMENTO DE INFORMAÇÕES PESSOAIS DOS USUÁRIOS DO SEU SITE/LP.
                          </p>
                        </div>

                        <div>
                          <h2 className="text-xl font-semibold text-black mb-3">A usabilidade de dados anônimos</h2>
                          <p>
                            A empresa pode coletar e guardar alguns dados anônimos sobre a sua visita, isso inclui o tipo de navegador e sistema operacional utilizado para acessar nosso site, a data e hora de acesso, e as páginas visitadas (click-through) o nome de seu provedor de acesso à internet (ISP). São informações que da uma identificação pessoal e são colhidas e usadas para gerar estatísticas de acesso e aprimorar a utilidade do Site/LP.
                          </p>
                        </div>

                        <div>
                          <h2 className="text-xl font-semibold text-black mb-3">Usabilidade de cookies</h2>
                          <p>
                            São arquivos de internet que armazenam temporariamente o que o internauta está visitando na rede, é um arquivo de texto ou identificador de texto inserido em seu computador que ajuda na prestação de serviços customizados. Utilizamos cookies para dar à você um recurso rápido para poupar tempo e proporcionar uma experiência personalizada em nosso site/lp. Fazemos uso, também, de informações para análise dos interesses e comportamentos dos usuários, para assim, ter um entendimento mais aprofundado a suas preferências. Você tem a capacidade de aceitar ou recusar cookies, o que pode ser feito mediante a configuração de seu navegador de internet, de acordo com as instruções do desenvolvedor.
                          </p>
                        </div>

                        <div>
                          <h2 className="text-xl font-semibold text-black mb-3">Política para atualizações e revisões</h2>
                          <p>
                            Se porventura esta Política de Privacidade for de alguma forma alterada, toda e qualquer mudança, serão publicadas nesta página, assim você estará sempre por dentro do conteúdo atualizado. Sugerimos visitar periodicamente esta página para rever as nossas políticas e os nossos procedimentos.
                          </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <h2 className="text-xl font-semibold text-black mb-3">REDES SOCIAIS:</h2>
                          <p>© 2021. Mercedes-Benz do Brasil Ltda.</p>
                          <p>Política de Privacidade</p>
                          <p>Cookies</p>
                          <p>SITES MERCEDES-BENZ:</p>
                          <p>Site Institucional</p>
                          <p>Showroom</p>
                          <p>Caminhões</p>
                          <p>Ônibus</p>
                          <p>Vans</p>
                          <p>Desenvolvido por: Motorleads Marketing Digital Automotivo</p>
                          <p>Share by:</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              } 
            />
            
            <Route 
              path="/cookies" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="container mx-auto px-4 py-8">
                    <div className="text-center">
                      <h1 className="text-3xl font-bold text-black mb-6">Política de Cookies</h1>
                      <p className="text-gray-600 mb-8">
                        Clique no botão abaixo para visualizar nossa política de cookies.
                      </p>
                      <button
                        onClick={() => setIsCookiesModalOpen(true)}
                        className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                      >
                        Cookies
                      </button>
                    </div>
                  </div>
                </motion.div>
              } 
            />
            
            {/* Rotas Existentes */}
            <Route 
              path="/catalogo" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CatalogPage />
                </motion.div>
              } 
            />
            
            <Route 
              path="/categoria/:categorySlug" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CategoryPage />
                </motion.div>
              } 
            />
            
            <Route 
              path="/produto/:productSlug" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductPage />
                </motion.div>
              } 
            />
            
            <Route 
              path="/produto-detalhes/:slug" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductDetailPage />
                </motion.div>
              } 
            />
            
            <Route 
              path="/sobre" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <AboutPage />
                </motion.div>
              } 
            />
            
            <Route 
              path="/contato" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContactPage />
                </motion.div>
              } 
            />
            
            {/* Rota de teste para imagens */}
            <Route 
              path="/teste-imagens" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageTest />
                </motion.div>
              } 
            />
            
            {/* Rota de teste simples para imagens */}
            <Route 
              path="/teste-simples" 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <SimpleImageTest />
                </motion.div>
              } 
            />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
      
      <CookiesModal 
        isOpen={isCookiesModalOpen} 
        onClose={() => setIsCookiesModalOpen(false)} 
      />
    </div>
  );
}

export default App; 