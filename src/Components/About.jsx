import React, { useState } from "react";
import TopCars from '../Image/TopCars.png'

const About = () => {
  const [language, setLanguage] = useState("english"); // Default language

  const content = {
    english: {
      header: "About us",
      text: `Welcome to Car Care, the trusted marketplace where buying and selling quality used cars is simple, transparent, and secure. We believe that everyone deserves a smooth journey to their next vehicle, whether they're selling their car or hunting for a new ride. Our platform connects buyers and sellers through a seamless, user-friendly experience that prioritizes reliability and satisfaction at every step.`,
      footer: `At Car Care, we’re dedicated to making car ownership accessible and hassle-free. Our team works tirelessly to bring you an extensive selection of vetted vehicles, along with tools and resources that empower you to make confident choices. With us, you can say goodbye to the complexities of traditional car buying and selling, and hello to a modern, easy-to-navigate experience. Start your journey with Car Care and let us help you find the right car at the right price, from the comfort of your own home.`,
    },
    hindi: {
      header: "हमारे बारे में",
      text: `Car Care में आपका स्वागत है, जो कि एक भरोसेमंद बाज़ार है जहाँ गुणवत्तापूर्ण पुरानी कारों को खरीदना और बेचना सरल, पारदर्शी और सुरक्षित है। हमारा मानना है कि हर किसी को अपनी अगली गाड़ी तक पहुँचने का एक सहज सफर मिलना चाहिए, चाहे वे अपनी कार बेच रहे हों या नई गाड़ी की तलाश में हों। हमारा प्लेटफ़ॉर्म खरीदारों और विक्रेताओं को एक आसान, उपयोगकर्ता-अनुकूल अनुभव के माध्यम से जोड़ता है, जो हर कदम पर विश्वसनीयता और संतोष को प्राथमिकता देता है।`,
      footer: `Car Care में, हम कार मालिक बनने की प्रक्रिया को सुलभ और परेशानी-मुक्त बनाने के लिए प्रतिबद्ध हैं। हमारी टीम आपको अच्छी तरह से जांचे गए वाहनों का एक विस्तृत चयन प्रदान करने के लिए कड़ी मेहनत करती है, साथ ही ऐसे उपकरण और संसाधन प्रदान करती है जो आपको आत्मविश्वास से निर्णय लेने में सक्षम बनाते हैं। हमारे साथ, आप पारंपरिक कार खरीदने और बेचने की जटिलताओं को अलविदा कह सकते हैं और एक आधुनिक, उपयोग में आसान अनुभव का स्वागत कर सकते हैं। Car Care के साथ अपनी यात्रा शुरू करें और हमें आपके लिए सही कार सही कीमत पर खोजने में मदद करने दें।`,
    },
  };

  return (
    <div className="bg-[#8471FF] min-h-screen p-6">
      {/* Language Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setLanguage("english")}
          className={`px-4 py-2 rounded ${
            language === "english" ? "bg-white text-[#8471FF]" : "bg-[#8471FF] text-white"
          } border`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage("hindi")}
          className={`px-4 py-2 rounded ${
            language === "hindi" ? "bg-white text-[#8471FF]" : "bg-[#8471FF] text-white"
          } border`}
        >
          हिंदी
        </button>
      </div>

      {/* Header */}
      <div>
        <p className="text-center text-3xl md:text-4xl text-white my-5">
          {content[language].header}
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between ">
        {/* Text Section */}
        <p className="text-lg md:text-xl text-white w-full md:w-[50%] text-center md:text-left leading-relaxed">
          {content[language].text}
        </p>
        {/* Image Section */}
        <div>
        <img
          src={TopCars}
          alt="Car care"
          className="   h-56 mr-48"
        />
        </div>
       
      </div>

      {/* Footer Section */}
      <p className="text-lg md:text-xl text-white mt-6 text-center md:text-left leading-relaxed">
        {content[language].footer}
      </p>
    </div>
  );
};

export default About;
