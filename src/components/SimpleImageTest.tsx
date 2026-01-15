const SimpleImageTest = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Teste Simples de Imagens</h1>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Logo Prodoeste</h3>
          <img
            src="/images/logo-prodoeste-0c9b6d90-1920w.png"
            alt="Logo Prodoeste"
            className="w-32 h-32 object-contain border border-gray-300"
          />
          <p className="text-sm text-gray-600 mt-2">/images/logo-prodoeste-0c9b6d90-1920w.png</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Logo Completo</h3>
          <img
            src="/images/Logo+Completo-ab555413-1920w.png"
            alt="Logo Completo"
            className="w-32 h-32 object-contain border border-gray-300"
          />
          <p className="text-sm text-gray-600 mt-2">/images/Logo+Completo-ab555413-1920w.png</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Kit Filtro</h3>
          <img
            src="/images/model_middle_webp_comprar-kit-filtro-mercedes-benz_d70b13ac0b.png.webp"
            alt="Kit Filtro"
            className="w-32 h-32 object-contain border border-gray-300"
          />
          <p className="text-sm text-gray-600 mt-2">/images/model_middle_webp_comprar-kit-filtro-mercedes-benz_d70b13ac0b.png.webp</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Embreagem</h3>
          <img
            src="/images/model_middle_webp_comprar-embreagem-mercedes-benz_2037e0836b.png.webp"
            alt="Embreagem"
            className="w-32 h-32 object-contain border border-gray-300"
          />
          <p className="text-sm text-gray-600 mt-2">/images/model_middle_webp_comprar-embreagem-mercedes-benz_2037e0836b.png.webp</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleImageTest;
