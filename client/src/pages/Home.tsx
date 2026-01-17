import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Linkedin,
  Twitter,
  Mail,
  ChevronDown,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import logoImg from "@assets/DatAI_Africa_1767627232330.png";
import heroBg from "@assets/generated_images/dark_abstract_data_network_background.png";
import cityBg from "@assets/generated_images/modern_african_city_night_skyline.png";
import josephImg from "@assets/Gemini_Generated_Image_uxy6qhuxy6qhuxy6_1768663580224.png";
import patricImg from "@assets/Patric_1768602254402.jpeg";
import championImg from "@assets/Champion_1768602254401.jpeg";
import abelImg from "@assets/Abel_1768602254403.jpeg";

export default function Home() {
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
      title: "Chairman",
      bio: "Anouet currently serves as a Data & AI Product Owner at Morgan Stanley, where he builds enterprise-grade data solutions.",
      linkedin: "https://www.linkedin.com/in/legbedjy-joseph-parfait-anouet-578a14151/",
      img: josephImg,
      objectPos: "object-[center_15%]"
    },
    { 
      name: "Dr. Patrick Duhirwe", 
      title: "Head of Research & Innovation",
      bio: "Patrick leads AI research initiatives at the University of Texas, focusing on machine learning applications for emerging markets.",
      linkedin: "#",
      img: patricImg,
      objectPos: "object-center"
    },
    { 
      name: "Champion Musinde", 
      title: "Head of Operations & Delivery",
      bio: "Champion currently serves as a Business Solutions Expert and AI Business Analyst at Sanofi, where he delivers technology-driven solutions to business challenges.",
      linkedin: "#",
      img: championImg,
      objectPos: "object-center"
    },
    { 
      name: <>Abel<br />Gnonsoa</>, 
      title: "Head of Growth & Partnership",
      bio: "Abel is an MIT-certified Al transformation leader turning complex data into human-centric, innovation-driving intelligence.",
      linkedin: "#",
      img: abelImg,
      objectPos: "object-[center_15%]"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white antialiased">

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
              The Future of AI <br />
              <span className="text-gradient-primary">is African.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light tracking-wide italic">
              Welcome to a pan-African, practitioner-led <span className="text-primary font-semibold border-b border-primary/30 not-italic">movement</span> to accelerate the contextualized adoption of Data and AI across the continent.
            </motion.p>

            <motion.div variants={fadeIn} className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                className="h-16 px-12 text-xl rounded-full glass-button shadow-[0_0_40px_rgba(45,212,191,0.2)] hover:scale-105 transition-all duration-500 font-medium tracking-tight flex items-center justify-center"
                onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request an invitation now <ArrowRight className="ml-2 h-6 w-6" />
              </button>
              <Button variant="outline" size="lg" className="h-16 px-10 rounded-full border-primary/20 hover:border-primary/50 text-xl font-medium tracking-tight gap-2">
                <Heart className="h-6 w-6 text-primary fill-primary" /> Become a Patron
              </Button>
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
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter font-display uppercase">The challenges are real. <br/><span className="text-secondary">The opportunity is now.</span></h2>
            <p className="text-muted-foreground text-2xl max-w-3xl mx-auto font-light tracking-wide">A premium strategic imperative for the continent's sovereignty.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-left">
            {[
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
            ].map((item, index) => (
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
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter font-display uppercase">Movement founded by <span className="text-primary">Practitioners</span>, for Practitioners.</h2>
            <p className="text-white text-2xl max-w-3xl mx-auto font-light tracking-wide">Our only mission is to gather builders to create true impact.</p>
            <div className="mt-16 max-w-4xl mx-auto glass p-12 rounded-3xl border-primary/20 bg-primary/5 shadow-2xl relative group">
              <div className="absolute -top-6 -left-6 text-primary/20 text-9xl font-serif">"</div>
              <p className="text-3xl md:text-4xl font-display leading-tight italic text-primary-foreground/90 relative z-10 font-medium">
                "We are not here to observe the revolution. We are here to architect it. This is a power move for the continent—a shift from digital consumption to sovereign creation."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto mt-28 text-left">
            {[
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
            ].map((item, index) => (
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
            <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter font-display uppercase">Meet the <span className="text-secondary">Founding Team</span></h2>
            <p className="text-muted-foreground text-2xl font-light tracking-wide italic">The visionaries behind the marathon.</p>
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
                  <img src={founder.img} alt={founder.name} className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 ${founder.objectPos}`} />
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
            <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter font-display uppercase">A structured <span className="text-gradient-primary">impact approach</span> through our pillars</h2>
            <p className="text-muted-foreground text-2xl font-light tracking-wide">Rigorous methodology for a sovereign digital future.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto text-left">
            {[
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
            ].map((pillar, index) => (
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
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter font-display uppercase">Stay in the <span className="text-secondary">Loop</span></h2>
            <p className="text-2xl text-muted-foreground mb-16 font-light max-w-2xl mx-auto tracking-wide italic">
              Follow our journey and engage with the movement. Reach out to collaborate or learn more about our strategic mission.
            </p>
            
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              <a href="#" className="flex flex-col items-center gap-4 group">
                <div className="h-20 w-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <Linkedin className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-medium tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">LinkedIn</span>
              </a>
              <a href="#" className="flex flex-col items-center gap-4 group">
                <div className="h-20 w-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <Twitter className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-medium tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">Twitter</span>
              </a>
              <a href="mailto:contact@dataiafrica.com" className="flex flex-col items-center gap-4 group">
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
                DatAI Africa &copy; {new Date().getFullYear()} &bull; Architecting Sovereignty
              </p>
              <p className="text-xs text-muted-foreground/20 italic font-light">Building a digital future, made in Africa.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
