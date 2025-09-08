import { Heart } from "lucide-react";

const ServicesTextContainer = () => {
  const services = [
    {
      icon: Heart,
      title: "Genel Muayene",
      description:
        "Kuşunuzun genel sağlık durumunu değerlendirmek için kapsamlı muayene.",
    },
    {
      icon: Heart,
      title: "Hastalık Tedavisi",
      description:
        "Kuşunuzun hastalıklarını teşhis ve tedavi etmek için uzman bakım.",
    },
    {
      icon: Heart,
      title: "Acil Müdahale",
      description:
        "Kuşunuzun genel sağlık durumunu değerlendirmek için kapsamlı muayene.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* heading */}
      <h2 className="text-3xl font-bold text-gray-900">
        Hayvan Sağlığında Uzman Hizmetler
      </h2>
      {/* Services array */}
      <div className="space-y-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="flex items-center gap-4">
              {/* Icon Container */}
              <div className="bg-teal-100 p-2 rounded-full">
                <Icon className="h-5 w-5 text-teal-500" />
              </div>
              {/* Text Container */}
              <div>
                <h3 className="font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Button */}
      <a
        href="/"
        className="inline-block bg-teal-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-teal-700 transition-colors"
      >
        Tüm Hizmetlerimiz
      </a>
    </div>
  );
};

export default ServicesTextContainer;
