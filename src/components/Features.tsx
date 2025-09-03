import { Clock, Heart, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Kuş Sağlığı Uzmanı",
      description:
        "Kuşların sağlığı ve bakımında uzmanlaşmış veteriner hekimlik",
    },
    {
      icon: Shield,
      title: "Güvenilir Hizmet",
      description:
        "Kuşlarınızın sağlığı için güvenilir ve kaliteli veteriner hizmeti",
    },
    {
      icon: Clock,
      title: "Acil Durum Müdahalesi",
      description: "Acil durumlarda hızlı ve etkili müdahale",
    },
  ];
  return (
    <div className="bg-white py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8 space-y-3">
        {/* Text Container */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kuş sağlığında uzman ekibimizle, en iyi hizmeti sunuyoruz. Modern
            klinik altyapımız ve kişiye özel bakım anlayışımızla, evcil
            dostlarınızın sağlığını ön planda tutuyoruz.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              //card container
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors duration-100 space-y-4"
              >
                {/* Icon */}
                <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center ">
                  <Icon className="w-8 h-8 text-orange-600"></Icon>
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 ">
                  {feature.title}
                </h3>
                {/* Description */}
                <div className="text-gray-600  leading-relaxed">
                  {feature.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
