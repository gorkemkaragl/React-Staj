const HeroTextContainer = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Kuşlarınızın Sağlığı
        <span className="block text-orange-600">Bizim Önceliğimiz</span>
      </h1>
      <p className="text-gray-600 mb-8 text-xl leading-tight">
        Ankara'da kuş sağlığında uzmanlaşmış veteriner kliniği. Sevimli
        dostlarınızın sağlık ihtiyaçları için profesyonel ve güvenilir hizmet.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href=""
          className="text-white bg-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors text-center"
        >
          Randevu Al
        </a>
        <a
          href=""
          className="text-orange-600 border-2 border-orange-600 bg-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors text-center"
        >
          Hemen Ara
        </a>
      </div>
    </div>
  );
};

export default HeroTextContainer;
