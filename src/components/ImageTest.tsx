const ImageTest = () => {
  const testImages = [
    '/images/model_middle_webp_comprar-kit-filtro-mercedes-benz_d70b13ac0b.png.webp',
    '/images/model_middle_webp_comprar-embreagem-mercedes-benz_2037e0836b.png.webp',
    '/images/model_middle_webp_comprar-oleo-mercedes-benz_1d356af2a3.png.webp',
    '/images/model_middle_webp_comprar-disco-de-freio-mercedes-benz_eb2fd9168e.png.webp',
    '/images/model_middle_webp_comprar-amortecedor-mercedes-benz_cb7ebc79ef.png.webp',
    '/images/model_middle_webp_comprar-radiador-mercedes-benz_e70debccb1.png.webp',
    '/images/model_middle_webp_comprar-intercooler-mercedes-benz_db3062ac80.png.webp',
    '/images/model_middle_webp_comprar-kit-correia-ploy-v-inversoras-tensor-e-polia_1b2f01e5d6.png.webp',
    '/images/model_middle_webp_comprar-kit-do-motor-mercedes-benz_43abcef723.jpg.webp',
    '/images/model_middle_webp_comprar-pecas-alliance-mercedes-benz_547a9eaeaa.png.webp',
    '/images/model_middle_webp_comprar-pecas-alliance-mercedes-benz-2251_79a35204c1.png.webp',
    '/images/model_middle_webp_comprar-pre-filtro-arla-32-mercedes-benz_93f8257553.png.webp'
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Teste de Imagens</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testImages.map((imagePath, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium mb-2">Imagem {index + 1}</h3>
            <img
              src={imagePath}
              alt={`Teste ${index + 1}`}
              className="w-full h-32 object-cover rounded"
              onError={(e) => {
                console.error(`Erro ao carregar imagem ${index + 1}:`, imagePath);
                e.currentTarget.style.border = '2px solid red';
                e.currentTarget.style.backgroundColor = '#fee';
              }}
              onLoad={() => {
                console.log(`Imagem ${index + 1} carregada com sucesso:`, imagePath);
              }}
            />
            <p className="text-xs text-gray-600 mt-2 break-all">{imagePath}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest;
