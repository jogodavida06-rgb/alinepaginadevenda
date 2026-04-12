import React from 'react';

interface MembershipBenefitsProps {
  onRedirect: () => void;
}

const MembershipBenefits: React.FC<MembershipBenefitsProps> = ({ onRedirect }) => {
  return (
    <section className="py-8 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section - Imagens responsivas */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl mb-12 md:mb-16">
          {/* Imagem para desktop */}
          <div className="hidden md:block">
            <img
              src="https://fznhzqgulsyrjfrzcdqi.supabase.co/storage/v1/object/public/beneficios/conputador.jpg"
              alt="Clube de benefícios Federal Associados - Desktop"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          {/* Imagem para mobile */}
          <div className="block md:hidden">
            <img
              src="https://fznhzqgulsyrjfrzcdqi.supabase.co/storage/v1/object/public/beneficios/celular.jpg"
              alt="Clube de benefícios Federal Associados - Mobile"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Como funciona o Clube */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
            Como funciona o nosso Clube de Benefícios.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Passo 01 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">01</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-3">Se torne um associado</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Faça parte do nosso Clube 
                e tenha acesso aos nossos 
                benefícios.
              </p>
            </div>

            {/* Passo 02 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">02</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-3">Escolha</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                São centenas de benefícios 
                que você pode escolher e 
                usar quantas vezes quiser.
              </p>
            </div>

            {/* Passo 03 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">03</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-3">Apresente-se</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Depois de escolher o 
                benefício que você quer, é 
                só se apresentar no 
                estabelecimento desejado e 
                informar que você e um 
                associado para receber seu 
                desconto especial.
              </p>
            </div>

            {/* Passo 04 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">04</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-3">Economize</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Pronto! Você já está 
                economizando. Use 
                quantas vezes quiser e 
                aproveite todos os seus 
                benefícios de ser um de 
                nossos associados.
              </p>
            </div>
          </div>
        </div>

        {/* Grandes marcas com descontos exclusivos */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Veja grandes marcas parceiras da Federal Associados com descontos exclusivos para você que é associado em qualquer lugar do Brasil!
          </h3>
          
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://qkbeuebapuqnlpjgcvxb.supabase.co/storage/v1/object/public/imagem/parceiros.jpeg"
              alt="Marcas parceiras da Federal Associados"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Descontos imperdíveis para você aproveitar */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            São centenas de parceiros com descontos<br />
            imperdíveis para você aproveitar sendo um associado da Federal Associados.
          </h3>
        </div>

        {/* Bloco de perfumes */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-gray-200 text-center">
            <p className="text-base md:text-lg font-bold text-gray-900 mb-2">
              Todo associado também tem direito a 1 PERFUME MENSAL GRÁTIS da Federal Cosméticos!
            </p>
            <p className="text-sm md:text-base text-gray-600">
              Isso mesmo: todo mês você recebe um perfume exclusivo, direto da Federal Cosméticos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MembershipBenefits;