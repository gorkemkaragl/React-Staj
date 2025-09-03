import {
  Clock,
  Heart,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  X,
} from "lucide-react";

const Footer = () => {
  const contactItems = [
    {
      icon: Phone,
      text: "+90(500) 661 61 61",
    },
    {
      icon: MapPin,
      text: "Trabzon, Türkiye",
    },
    {
      icon: Clock,
      text: "09:00 - 18:00",
    },
  ];

  const socialItems = [
    {
      icon: Instagram,
      text: "@gorkemkaragl",
    },
    {
      icon: Linkedin,
      text: "@gorkemkaragol",
    },
    {
      icon: X,
      text: "@elonmusk",
    },
  ];
  return (
    <footer className="bg-gray-900 text-white space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 3 Cols Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-start md:place-items-center">
          {/* Clinic info 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Icon*/}
              <div className="bg-orange-500 p-2 rounded-full">
                <Heart className="h-5 w-5 text-white"></Heart>
              </div>
              {/* Name and Title */}
              <div>
                <h3 className="text-lg font-bold ">Görkem Karagöl</h3>
                <p className="text-orange-400">Veteriner Kliniği</p>
              </div>
            </div>
            {/* Text Container */}
            <p className="text-gray-300 leading-relaxed">
              Kuş sağlığında uzmanlaşmış veteriner kliniği dostlarınızın sağlığı
              için buradayız.
            </p>
          </div>
          {/* Contact info 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            {/* Contact items */}
            {contactItems.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <Icon className="h-5 w-5 text-orange-400"></Icon>
                  <span className="text-gray-300">{contact.text}</span>
                </div>
              );
            })}
          </div>
          {/* Social media links 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sosyal Medya</h3>
            {socialItems.map((items, index) => {
              const Icon = items.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <Icon className="h-5 w-5 text-gray-300"></Icon>
                  <a className="text-gray-300 cursor-pointer ">{items.text}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hairline */}
      <div className="border-t border-gray-800 p-8 text-center">
        <p className=" text-gray-400"> © 2025 Görkem Karagöl. Tüm hakları saklıdır.</p>  
      </div>
    </footer>
  );
};

export default Footer;
