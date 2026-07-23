import React, { createContext, useContext, useState } from "react";

// Translation Dictionary
export const translations = {
  EN: {
    helpline: "Helpline:",
    secretariat: "Constituency Secretariat Office",
    mpOffice: "Office of the MP",
    portalTitle: "Constituency Portal",
    applyDoLetter: "Apply for DO Letter",
    menu: {
      home: "Home",
      about: "About MP",
      constituency: "Constituency",
      constituencyProfile: "Constituency Profile & Map",
      projects: "Development Projects",
      unions: "Union & Ward Representation",
      hearings: "Public Hearing Schedule",
      services: "Services & Aid",
      doLetter: "DO Recommendation Letter",
      stipends: "Educational Stipends",
      medicalAid: "Emergency Medical Aid",
      certificate: "Character Certificate",
      speeches: "Parliamentary Speeches",
      contact: "Contact",
    },
    // Add page-level translations here
    homeWelcome: "Welcome to the Official MP Portal",
  },
  BN: {
    helpline: "হেল্পলাইন:",
    secretariat: "সংসদীয় আসন সচিবালয় কার্যালয়",
    mpOffice: "এমপি মহোদয়ের কার্যালয়",
    portalTitle: "সংসদীয় এলাকা পোর্টাল",
    applyDoLetter: "ডি.ও লেটারের জন্য আবেদন",
    menu: {
      home: "মূল পাতা",
      about: "এমপি সম্পর্কে",
      constituency: "সংসদীয় এলাকা",
      constituencyProfile: "এলাকার প্রোফাইল ও মানচিত্র",
      projects: "উন্নয়ন প্রকল্পসমূহ",
      unions: "ইউনিয়ন ও ওয়ার্ড প্রতিনিধিত্ব",
      hearings: "গণশুনানি সময়সূচী",
      services: "সেবা ও সহায়তা",
      doLetter: "ডি.ও সুপারিশপত্র",
      stipends: "শিক্ষা উপবৃত্তি",
      medicalAid: "জরুরি চিকিৎসা সহায়তা",
      certificate: "চারিত্রিক সনদপত্র",
      speeches: "সংসদে প্রদত্ত বক্তব্য",
      contact: "যোগাযোগ",
    },
    homeWelcome: "মাননীয় সংসদ সদস্যের অফিসিয়াল পোর্টালে স্বাগতম",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("EN");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "EN" ? "BN" : "EN"));
  };

  // Helper function to get translated string
  const t = (path) => {
    const keys = path.split(".");
    let result = translations[lang];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return path; // Fallback to key name if not found
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);