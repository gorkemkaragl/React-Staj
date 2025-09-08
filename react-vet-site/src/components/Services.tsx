import ServicesImageContainer from "./ServicesImageContainer";
import ServicesTextContainer from "./ServicesTextContainer";

const Services = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-50 to-orange-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2 col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <ServicesTextContainer></ServicesTextContainer>
          <ServicesImageContainer></ServicesImageContainer>
        </div>
      </div>
    </section>
  );
};

export default Services;
