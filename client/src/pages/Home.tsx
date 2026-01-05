import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  ArrowRight, 
  Globe, 
  Users, 
  Cpu, 
  Database, 
  Lightbulb, 
  Layers, 
  Network, 
  Briefcase, 
  GraduationCap, 
  Rocket, 
  CheckCircle2,
  Linkedin,
  Twitter,
  Mail,
  User
} from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Assets
import logoImg from "@assets/DatAI_Africa_1767627232330.png";
import heroBg from "@assets/generated_images/dark_abstract_data_network_background.png";
import cityBg from "@assets/generated_images/modern_african_city_night_skyline.png";
import founder1Img from "@assets/generated_images/professional_african_man_headshot.png";
import founder2Img from "@assets/generated_images/professional_african_woman_headshot.png";
import founder3Img from "@assets/generated_images/professional_african_tech_professional_headshot.png";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(1, "Please select a role"),
});

export default function Home() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Welcome to Pioneer 54!",
      description: "You've been added to the waitlist.",
    });
    form.reset();
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      
      {/* Navigation - Removed branding and CTA */}
      <nav className="fixed top-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <div className="invisible">
            <img src={logoImg} alt="Logo" className="h-16 w-16" />
          </div>
          <div className="invisible">
            <Button>Join</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Network Background" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background"></div>
        </div>

        <div className="container relative z-10 px-6 text-center -mt-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-6"
          >
            <motion.div variants={fadeIn} className="flex justify-center mb-6">
              <div className="inline-block relative">
                <img src={logoImg} alt="DatAI Africa" className="h-48 w-48 md:h-64 md:w-64 object-contain drop-shadow-[0_0_50px_rgba(45,212,191,0.7)]" />
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              The Future of AI <br />
              <span className="text-gradient-primary">is African.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Welcome to a pan-African, practitioner-led <span className="text-primary font-bold px-2 py-1 glass rounded-lg border-primary/30">movement</span> to accelerate the contextualized adoption of Data and AI across the continent.
            </motion.p>

            <motion.div variants={fadeIn} className="pt-4 space-y-4">
              <Button 
                size="lg" 
                className="h-14 px-8 text-lg rounded-full glass-button shadow-[0_0_30px_rgba(45,212,191,0.15)] animate-pulse"
                onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the movement now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section - Why Now */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-6xl font-bold mb-6">The challenges are real. <br/><span className="text-secondary">The opportunity is now.</span></h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">A premium strategic imperative for the continent's digital sovereignty.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "The Global AI Tsunami",
                desc: "AI is ubiquitous, but Africa must be a co-creator, not just a user. We are at a critical juncture where we either define our future or have it defined for us."
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 group border-t-2 border-t-primary/50"
              >
                <div className="text-primary font-display text-4xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">0{index + 1}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <div className="h-1 w-12 bg-secondary mb-4"></div>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Value Section - Who Are We */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Movement founded by <span className="text-primary">Practitioners</span>, for Practitioners.</h2>
            <p className="text-white text-xl max-w-3xl mx-auto font-medium">Our only mission is to gather builders to create true impact.</p>
            <div className="mt-12 max-w-4xl mx-auto glass p-8 rounded-2xl border-primary/20 bg-primary/5">
              <p className="text-2xl md:text-3xl font-display leading-tight italic text-primary-foreground/90">
                "We are not here to observe the revolution. We are here to architect it. This is a power move for the continent—a shift from digital consumption to sovereign creation."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-20">
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
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 relative">
        <div className="container px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet the <span className="text-secondary">Founding Team</span></h2>
            <p className="text-muted-foreground">The visionaries architecting the African AI renaissance.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Founder 1", role: "Co-Founder", bio: "AI Strategist with global perspective.", img: founder1Img },
              { name: "Founder 2", role: "Co-Founder", bio: "Data Engineering & Infrastructure lead.", img: founder2Img },
              { name: "Founder 3", role: "Co-Founder", bio: "Product Innovation & Scale specialist.", img: founder3Img },
              { name: "Founder 4", role: "Co-Founder", bio: "Community & Ecosystem strategist.", img: founder1Img }
            ].map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card text-center p-8 group hover:border-primary/50 transition-all duration-500"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary group-hover:scale-105 transition-all duration-500">
                  <img src={founder.img} alt={founder.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{founder.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{founder.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 relative overflow-hidden bg-black/20">
        <div className="absolute inset-0 z-0">
          <img src={cityBg} alt="City" className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay" />
        </div>
        <div className="container px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">A structured <span className="text-gradient-primary">impact approach</span> through our pillars</h2>
            <p className="text-muted-foreground">Rigorous methodology for a sovereign digital future.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-2xl border-t-4 border-t-secondary relative group"
              >
                <div className="absolute top-4 right-6 text-6xl font-bold opacity-5 group-hover:opacity-10 transition-opacity">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-secondary">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-24 relative overflow-hidden">
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">Become a <span className="text-secondary">'Pioneer 54'</span></h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join the elite circle of builders shaping Africa's AI destiny.
                </p>
                <div className="flex gap-6 mt-8">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
                  <a href="mailto:contact@dataiafrica.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-6 w-6" /></a>
                </div>
              </div>

              <div className="bg-black/20 p-6 rounded-xl border border-white/5">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="First Name" {...field} className="glass" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Last Name" {...field} className="glass" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Email Address" {...field} className="glass" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="glass">
                                <SelectValue placeholder="Select your role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="practitioner">AI Practitioner</SelectItem>
                              <SelectItem value="founder">Founder</SelectItem>
                              <SelectItem value="researcher">Researcher</SelectItem>
                              <SelectItem value="investor">Investor</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full glass-button h-12 text-lg font-bold">
                      Secure My Spot
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/40 text-center">
        <div className="container px-6">
          <div className="flex flex-col items-center gap-6">
            <img src={logoImg} alt="Logo" className="h-12 w-12 object-contain grayscale opacity-50" />
            <div className="flex gap-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="mailto:contact@dataiafrica.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
            <p className="text-sm text-muted-foreground/50 font-display uppercase tracking-widest">
              DatAI Africa &copy; {new Date().getFullYear()} &bull; Architecting Sovereignty
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

