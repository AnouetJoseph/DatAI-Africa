import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Linkedin,
  Twitter,
  Mail,
  ChevronDown,
  Heart,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import logoImg from "/logo-new.png";
import heroBg from "@assets/generated_images/dark_abstract_data_network_background.png";
import cityBg from "@assets/generated_images/modern_african_city_night_skyline.png";
import josephImg from "@assets/Gemini_Generated_Image_uxy6qhuxy6qhuxy6_1768663580224.png";
import patricImg from "@assets/Patric_1768602254402.jpeg";
import championImg from "@assets/Champion_1768602254401.jpeg";
import abelImg from "@assets/Abel_1768602254403.jpeg";

const translations = {
  en: {
    heroTitle: "The Future of AI",
    heroTitleSpan: "is African.",
    heroSubtitle: "Welcome to a pan-African, practitioner-led movement to accelerate the contextualized adoption of Data and AI across the continent.",
    ctaInvite: "Request an invitation now",
    ctaPatron: "Become a Patron",
    problemTitle: "The challenges are real.",
    problemTitleSpan: "The opportunity is now.",
    problemSubtitle: "A premium strategic imperative for the continent's sovereignty.",
    problemCards: [
      {
        title: "Digital Colonialism",
        desc: "Africa cannot remain a passive consumer of external algorithms. We are building the sovereign infrastructure to prevent a new era of digital extraction, ensuring African data fuels African prosperity."
      },
      {
        title: "The 'Context' Issue",
        desc: "Global solutions are biased. We need a new generation of solutions that breathe the African culture, catering to our unique languages, markets, and needs."
      },
      {
        title: "The Demographic Engine",
        desc: "Africa's young population is an incredible, untapped talent market. This is the workforce that will power the global AI economy."
      },
      {
        title: "The Data Goldmine",
        desc: "With rapid digitalization, NOW is the time to structure our data for an AI 'transformafrication'. Our data is our sovereign asset."
      }
    ],
    practitionerTitle: "Movement founded by Practitioners, for Practitioners.",
    practitionerSubtitle: "Our only mission is to gather builders to create true impact.",
    practitionerQuote: "We are not here to observe the revolution. We are here to architect it. This is a power move for the continent—a shift from digital consumption to sovereign creation.",
    valueProp: [
      {
        title: "Practitioner-Led",
        desc: "Our leadership knows what to build (Product Owners) and how to build it (AI/Data Practitioners)."
      },
      {
        title: "The Global-Local Breed",
        desc: "We are the bridge—Africans succeeding in global firms, translating best practices for the African context."
      },
      {
        title: "Execution-First Ethos",
        desc: "More than an 'idea-first' club; a 'product-first' society. We build and ship real solutions."
      },
      {
        title: "Authentic Pan-African DNA",
        desc: "We understand the nuances from Abidjan to Nairobi. We build relevant, homegrown solutions."
      }
    ],
    teamTitle: "Meet the Founding Team",
    teamSubtitle: "The visionaries behind the marathon.",
    pillarTitle: "A structured impact approach through our pillars",
    pillarSubtitle: "Rigorous methodology for a sovereign digital future.",
    pillars: [
      {
        title: "01 The Advisory",
        desc: "Strategic intelligence to architect the future. We provide rigorous analysis, high-level thought leadership, and trend forecasting that empowers decision-makers to navigate the evolving AI landscape with sovereign clarity."
      },
      {
        title: "02 The Research and Innovation Lab",
        desc: "Where theory meets radical execution. We don't just study potential; we build, test, and iterate on high-impact, real-world solutions designed to solve uniquely African challenges through cutting-edge technology."
      },
      {
        title: "03 The Social HUB",
        desc: "A powerful ecosystem of high-caliber practitioners. We drive deep engagement across the entire spectrum, fostering a community that empowers builders to scale their impact and define the next era of African excellence."
      }
    ],
    socialTitle: "Stay in the Loop",
    socialSubtitle: "Follow our journey and engage with the movement. Reach out to collaborate or learn more about our strategic mission.",
    footerTagline: "Architecting Sovereignty",
    footerSubtext: "Building a digital future, made in Africa."
  },
  fr: {
    heroTitle: "L'Avenir de l'IA",
    heroTitleSpan: "est Africain.",
    heroSubtitle: "Bienvenue dans un mouvement panafricain dirigé par des praticiens pour accélérer l'adoption contextualisée des données et de l'IA sur le continent.",
    ctaInvite: "Demandez une invitation maintenant",
    ctaPatron: "Devenir un Mécène",
    problemTitle: "Les défis sont réels.",
    problemTitleSpan: "L'opportunité est maintenant.",
    problemSubtitle: "Un impératif stratégique de premier plan pour la souveraineté du continent.",
    problemCards: [
      {
        title: "Colonialisme Numérique",
        desc: "L'Afrique ne peut rester un consommateur passif d'algorithmes externes. Nous construisons l'infrastructure souveraine pour empêcher une nouvelle ère d'extraction numérique, garantissant que les données africaines alimentent la prospérité africaine."
      },
      {
        title: "La Question du 'Contexte'",
        desc: "Les solutions mondiales sont biaisées. Nous avons besoin d'une nouvelle génération de solutions qui respirent la culture africaine, répondant à nos langues, nos marchés et nos besoins uniques."
      },
      {
        title: "Le Moteur Démographique",
        desc: "La jeune population africaine est un marché de talents incroyable et inexploité. C'est la main-d'œuvre qui alimentera l'économie mondiale de l'IA."
      },
      {
        title: "La Mine d'Or des Données",
        desc: "Avec la numérisation rapide, c'est MAINTENANT le moment de structurer nos données pour une 'transformafrication' par l'IA. Nos données sont notre atout souverain."
      }
    ],
    practitionerTitle: "Mouvement fondé par des Praticiens, pour des Praticiens.",
    practitionerSubtitle: "Notre seule mission est de rassembler les bâtisseurs pour créer un véritable impact.",
    practitionerQuote: "Nous ne sommes pas ici pour observer la révolution. Nous sommes ici pour l'architecturer. C'est un mouvement de pouvoir pour le continent—un passage de la consommation numérique à la création souveraine.",
    valueProp: [
      {
        title: "Dirigé par des Praticiens",
        desc: "Notre direction sait quoi construire (Product Owners) et comment le construire (Praticiens IA/Données)."
      },
      {
        title: "Le Brassage Global-Local",
        desc: "Nous sommes le pont—des Africains réussissant dans des firmes mondiales, traduisant les meilleures pratiques pour le contexte africain."
      },
      {
        title: "Éthos de l'Exécution d'Abord",
        desc: "Plus qu'un club 'd'idées d'abord' ; une société 'de produits d'abord'. Nous construisons et livrons des solutions réelles."
      },
      {
        title: "ADN Panafricain Authentique",
        desc: "Nous comprenons les nuances d'Abidjan à Nairobi. Nous construisons des solutions locales et pertinentes."
      }
    ],
    teamTitle: "Rencontrez l'Équipe Fondatrice",
    teamSubtitle: "Les visionnaires derrière le marathon.",
    pillarTitle: "Une approche d'impact structurée à travers nos piliers",
    pillarSubtitle: "Une méthodologie rigoureuse pour un avenir numérique souverain.",
    pillars: [
      {
        title: "01 Le Conseil (The Advisory)",
        desc: "Intelligence stratégique pour architecturer l'avenir. Nous fournissons des analyses rigoureuses, un leadership éclairé de haut niveau et des prévisions de tendances qui permettent aux décideurs de naviguer dans le paysage changeant de l'IA avec une clarté souveraine."
      },
      {
        title: "02 Le Laboratoire de Recherche et d'Innovation",
        desc: "Où la théorie rencontre l'exécution radicale. Nous n'étudions pas seulement le potentiel ; nous construisons, testons et itérons sur des solutions réelles à fort impact conçues pour résoudre les défis typiquement africains grâce à une technologie de pointe."
      },
      {
        title: "03 Le HUB Social",
        desc: "Un écosystème puissant de praticiens de haut calibre. Nous favorisons un engagement profond sur tout le spectre, encourageant une communauté qui permet aux bâtisseurs d'étendre leur impact et de définir la prochaine ère de l'excellence africaine."
      }
    ],
    socialTitle: "Restez Informés",
    socialSubtitle: "Suivez notre parcours et engagez-vous avec le mouvement. Contactez-nous pour collaborer ou en savoir plus sur notre mission stratégique.",
    footerTagline: "Architecturer la Souveraineté",
    footerSubtext: "Construire un avenir numérique, fabriqué en Afrique."
  }
};

export default function Home() {
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const t = translations[lang];

  useEffect(() => {
    // Language detection removed to default to English
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const founders = [
    { 
      name: <>Anouet<br />Joseph</>, 
      title: lang === 'en' ? "Chairman" : "Président",
      bio: lang === 'en' ? "Anouet currently serves as a Data & AI Product Owner at Morgan Stanley, where he builds enterprise-grade data solutions." : "Anouet occupe actuellement le poste de Data & AI Product Owner chez Morgan Stanley, où il construit des solutions de données de classe entreprise.",
      linkedin: "https://www.linkedin.com/in/legbedjy-joseph-parfait-anouet-578a14151/",
      img: josephImg,
      objectPos: "object-[center_15%]"
    },
    { 
      name: "Dr. Patrick Duhirwe", 
      title: lang === 'en' ? "Head of Research & Innovation" : "Responsable de la Recherche et de l'Innovation",
      bio: lang === 'en' ? "Patrick is a Postdoctoral Fellow at the University of Texas at San Antonio. His work focuses on intelligent sensing, data-driven optimization, and trustworthy machine-learning models for energy and building automation systems." : "Patrick est chercheur postdoctoral à l'Université du Texas à San Antonio. Ses travaux portent sur la détection intelligente, l'optimisation basée sur les données et les modèles d'apprentissage automatique fiables pour les systèmes d'énergie et d'automatisation des bâtiments.",
      linkedin: "#",
      img: patricImg,
      objectPos: "object-center"
    },
    { 
      name: "Champion Musinde", 
      title: lang === 'en' ? "Head of Operations & Delivery" : "Responsable des Opérations et de la Livraison",
      bio: lang === 'en' ? "Champion currently serves as a Business Solutions Expert and AI Business Analyst at Sanofi, where he delivers technology-driven solutions to business challenges." : "Champion occupe actuellement le poste d'Expert en Solutions d'Affaires et Analyste d'Affaires IA chez Sanofi, où il livre des solutions technologiques aux défis de l'entreprise.",
      linkedin: "#",
      img: championImg,
      objectPos: "object-center"
    },
    { 
      name: <>Abel<br />Gnonsoa</>, 
      title: lang === 'en' ? "Head of Growth & Partnership" : "Responsable de la Croissance et des Partenariats",
      bio: lang === 'en' ? "Abel is an MIT-certified Al transformation leader turning complex data into human-centric, innovation-driving intelligence." : "Abel est un leader de la transformation IA certifié par le MIT, transformant des données complexes en une intelligence centrée sur l'humain et moteur d'innovation.",
      linkedin: "#",
      img: abelImg,
      objectPos: "object-[center_15%]"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white antialiased">
      
      {/* Language Toggle */}
      <div className="fixed top-8 right-8 z-50">
        <button 
          onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-all group"
          data-testid="button-lang-toggle"
        >
          <Globe className="h-4 w-4 text-primary group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-bold tracking-widest uppercase">{lang === 'en' ? 'FR' : 'EN'}</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Network Background" className="w-full h-full object-cover opacity-50 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background"></div>
        </div>

        <div className="container relative z-10 px-6 text-center -mt-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-10"
          >
            <motion.div variants={fadeIn} className="flex justify-center mb-4">
              <div className="inline-block relative">
                <img src={logoImg} alt="DatAI Africa" className="h-44 w-44 md:h-64 md:w-64 object-contain drop-shadow-[0_0_60px_rgba(45,212,191,0.8)]" />
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter font-display uppercase">
              {t.heroTitle} <br />
              <span className="text-gradient-primary">{t.heroTitleSpan}</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light tracking-wide italic">
              {t.heroSubtitle}
            </motion.p>

            <motion.div variants={fadeIn} className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={lang === 'en' ? "https://docs.google.com/forms/d/e/1FAIpQLSdy1mSu5rldQJJ2mDkztHfsz5iRY1XjVjpIJoX2GTNSRa5mCg/viewform?usp=dialog" : "https://docs.google.com/forms/d/e/1FAIpQLSeQ7numsuNxq0iAcrxH9zr4Q6wqKrYpG7Tlb2R30m4sNEKg_A/viewform?usp=publish-editor"}
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 px-12 text-xl rounded-full glass-button shadow-[0_0_40px_rgba(45,212,191,0.2)] hover:scale-105 transition-all duration-500 font-medium tracking-tight flex items-center justify-center no-underline"
                data-testid="link-request-invitation"
              >
                {t.ctaInvite} <ArrowRight className="ml-2 h-6 w-6" />
              </a>
              <a 
                href={lang === 'en' ? "https://docs.google.com/forms/d/e/1FAIpQLSdppYge-mLmt2OMtjejebl5zyjf7ZFIN1ZhPV131LqdNS_AJw/viewform?usp=dialog" : "https://docs.google.com/forms/d/e/1FAIpQLScjmKtYUtNLYy7O3xP5JFDryaOWaKmwSkQgdM6jLFyL5NMlVw/viewform?usp=publish-editor"}
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 px-10 rounded-full border-2 border-primary/30 hover:border-primary/50 text-xl font-medium tracking-tight flex items-center justify-center gap-2 no-underline hover:bg-primary/5 transition-all"
                data-testid="link-become-patron"
              >
                <Heart className="h-6 w-6 text-primary fill-primary" /> {t.ctaPatron}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Visual Only */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="text-muted-foreground/40"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section - Why Now */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-24"
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter font-display uppercase">{t.problemTitle} <br/><span className="text-secondary">{t.problemTitleSpan}</span></h2>
            <p className="text-muted-foreground text-2xl max-w-3xl mx-auto font-light tracking-wide">{t.problemSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-left">
            {t.problemCards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="glass-card p-10 group border-t-2 border-t-primary/50 flex flex-col hover:bg-white/[0.03] transition-colors"
              >
                <div className="text-primary font-display text-5xl mb-8 opacity-10 group-hover:opacity-100 transition-all duration-500 font-black">0{index + 1}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">{item.title}</h3>
                <div className="h-1 w-16 bg-secondary mb-6 group-hover:w-full transition-all duration-700"></div>
                <p className="text-muted-foreground leading-relaxed text-base font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Value Section - Who Are We */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter font-display uppercase">{t.practitionerTitle}</h2>
            <p className="text-white text-2xl max-w-3xl mx-auto font-light tracking-wide">{t.practitionerSubtitle}</p>
            <div className="mt-16 max-w-4xl mx-auto glass p-12 rounded-3xl border-primary/20 bg-primary/5 shadow-2xl relative group">
              <div className="absolute -top-6 -left-6 text-primary/20 text-9xl font-serif">"</div>
              <p className="text-3xl md:text-4xl font-display leading-tight italic text-white relative z-10 font-medium">
                "{t.practitionerQuote}"
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto mt-28 text-left">
            {t.valueProp.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4 group"
              >
                <h3 className="text-3xl font-bold text-primary tracking-tight group-hover:translate-x-2 transition-transform uppercase">{item.title}</h3>
                <p className="text-muted-foreground text-xl leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-32 relative">
        <div className="container px-6 mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter font-display uppercase">{t.teamTitle}</h2>
            <p className="text-muted-foreground text-2xl font-light tracking-wide italic">{t.teamSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto items-stretch">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="glass-card text-center p-10 group hover:border-primary/50 transition-all duration-700 shadow-xl w-full flex flex-col items-center h-full"
              >
                <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary group-hover:scale-105 transition-all duration-700 shadow-2xl">
                  <img src={founder.img} alt={typeof founder.name === 'string' ? founder.name : 'Founder'} className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 ${founder.objectPos}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight uppercase">{founder.name}</h3>
                <p className="text-primary/60 text-xs font-semibold mb-1 uppercase tracking-widest">Co-Founder</p>
                <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">{founder.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed font-light mb-6 flex-grow">{founder.bio}</p>
                <a 
                  href={founder.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground/50 hover:text-primary transition-colors"
                  data-testid={`link-linkedin-${index}`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="py-32 relative overflow-hidden bg-black/30">
        <div className="absolute inset-0 z-0">
          <img src={cityBg} alt="City" className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
        </div>
        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-24"
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter font-display uppercase">{t.pillarTitle}</h2>
            <p className="text-muted-foreground text-2xl font-light tracking-wide">{t.pillarSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto text-left">
            {t.pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass p-12 rounded-3xl border-t-4 border-t-secondary relative group hover:bg-white/[0.04] transition-all duration-500 shadow-2xl"
              >
                <div className="absolute -top-6 -right-2 text-9xl font-black opacity-5 group-hover:opacity-10 transition-opacity font-display">
                  {index + 1}
                </div>
                <h3 className="text-3xl font-bold mb-8 text-secondary tracking-tight uppercase">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links / Contact Section */}
      <section id="join" className="py-32 relative overflow-hidden bg-primary/5">
        <div className="container px-6 mx-auto text-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter font-display uppercase">{t.socialTitle}</h2>
            <p className="text-2xl text-muted-foreground mb-16 font-light max-w-2xl mx-auto tracking-wide italic">
              {t.socialSubtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              <a href="https://www.linkedin.com/company/datai-africa/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group" data-testid="link-linkedin-company">
                <div className="h-20 w-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <Linkedin className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-medium tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">LinkedIn</span>
              </a>
              <a href="mailto:contact@dataiafrica.com" className="flex flex-col items-center gap-4 group" data-testid="link-email">
                <div className="h-20 w-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <Mail className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-medium tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black/40 text-center">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center gap-8">
            <img src={logoImg} alt="Logo" className="h-16 w-16 object-contain grayscale opacity-30 hover:opacity-80 transition-opacity duration-700" />
            <div className="space-y-2">
              <p className="text-base text-muted-foreground/40 font-display uppercase tracking-[0.3em]">
                DatAI Africa &copy; {new Date().getFullYear()} &bull; {t.footerTagline}
              </p>
              <p className="text-xs text-muted-foreground/20 italic font-light">{t.footerSubtext}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
