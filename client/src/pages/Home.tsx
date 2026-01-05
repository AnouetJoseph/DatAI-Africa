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
  CheckCircle2 
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
import founder1 from "@assets/generated_images/professional_african_man_headshot.png";
import founder2 from "@assets/generated_images/professional_african_woman_headshot.png";
import founder3 from "@assets/generated_images/professional_african_tech_professional_headshot.png";

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
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="DatAI Africa Logo" className="h-16 w-16 object-contain" />
            <span className="text-2xl font-bold font-display tracking-tight text-white">DatAI <span className="text-primary">Africa</span></span>
          </div>
          <Button className="glass-button hidden md:flex rounded-full px-8 h-12" onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}>
            Join Waitlist
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Network Background" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background"></div>
        </div>

        <div className="container relative z-10 px-6 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.div variants={fadeIn} className="flex justify-center mb-8">
              <div className="p-2 glass rounded-2xl inline-block bg-white/5 backdrop-blur-xl">
                <img src={logoImg} alt="DatAI Africa" className="h-48 w-48 md:h-64 md:w-64 object-contain drop-shadow-[0_0_30px_rgba(45,212,191,0.4)]" />
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              The Future of AI <br />
              <span className="text-gradient-primary">is African.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A pan-African, practitioner-led society accelerating the contextualized adoption of Data and AI across the continent.
            </motion.p>

            <motion.div variants={fadeIn} className="pt-8">
              <Button 
                size="lg" 
                className="h-14 px-8 text-lg rounded-full glass-button shadow-[0_0_30px_rgba(45,212,191,0.15)] animate-pulse"
                onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the 'Pioneer 54' Waitlist <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0 opacity-20">
           {/* Abstract grid pattern could go here */}
        </div>
        <div className="container px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Africa Cannot Be a <span className="text-secondary">Mere Consumer</span>.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: "The Global AI Tsunami",
                desc: "AI is ubiquitous, but Africa must be a co-creator, not just a user."
              },
              {
                icon: Layers,
                title: "The 'Context' Issue",
                desc: "Global solutions are biased. We need a new generation of solutions that breathe the African culture."
              },
              {
                icon: Users,
                title: "The Demographic Engine",
                desc: "Africa's young population is an incredible, untapped talent market."
              },
              {
                icon: Database,
                title: "The Data Goldmine",
                desc: "With rapid digitalization, NOW is the time to structure our data for an AI 'transformafrication'."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 group"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Value Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110 z-0"></div>
        <div className="container px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Founded by <span className="text-primary">Practitioners</span>, for Practitioners.</h2>
            <p className="text-muted-foreground">Building trust through expertise and execution.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Briefcase,
                title: "Practitioner-Led",
                desc: "Our leadership knows what to build (Product Owners) and how to build it (AI/Data Practitioners)."
              },
              {
                icon: Network,
                title: "The Global-Local Breed",
                desc: "We are the bridge—Africans succeeding in global firms, translating best practices for the African context."
              },
              {
                icon: Cpu,
                title: "Execution-First Ethos",
                desc: "More than an 'idea-first' club; a 'product-first' society. We build and ship real solutions."
              },
              {
                icon: Lightbulb,
                title: "Authentic Pan-African DNA",
                desc: "We understand the nuances from Abidjan to Nairobi. We build relevant, homegrown solutions."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 glass p-6 rounded-xl border-l-4 border-l-primary"
              >
                <div className="mt-1">
                  <item.icon className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
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
            <p className="text-muted-foreground">Global expertise, locally grounded.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Anouet Joseph",
                role: "AI Product Owner, Morgan Stanley",
                img: founder1
              },
              {
                name: "Sarah Okeke",
                role: "Data Scientist, Google AI Accra",
                img: founder2
              },
              {
                name: "David Mwangi",
                role: "Tech Lead, Microsoft Nairobi",
                img: founder3
              }
            ].map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card overflow-hidden group text-center p-6"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                  <img src={founder.img} alt={founder.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                <p className="text-primary text-sm font-medium">{founder.role}</p>
                <div className="mt-4 flex justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                   {/* LinkedIn Icon placeholder */}
                   <div className="h-1 w-8 bg-white/20 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 relative bg-black/20">
         <div className="absolute inset-0 z-0">
          <img src={cityBg} alt="City Background" className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay" />
        </div>
        <div className="container px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">A Structured <span className="text-gradient-primary">Innovation Pipeline</span></h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             {["The Mentorship", "The Lab", "The SOCIAL HUB", "THE CONNECT"].map((item, i) => (
               <div key={i} className="glass p-8 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors cursor-default border border-white/5">
                 <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 text-white font-bold text-xl">
                   0{i+1}
                 </div>
                 <h3 className="font-bold text-lg tracking-wider">{item}</h3>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent z-0"></div>
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 lg:p-16 border-primary/20 shadow-[0_0_50px_rgba(45,212,191,0.1)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">Become a <span className="text-secondary">'Pioneer 54'</span></h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our first program is launching for the first 54 practitioners, founders, and researchers. Join the waitlist for priority access and to receive the <span className="text-white font-medium">DatAI Africa Briefing</span>.
                </p>
                <div className="flex items-center gap-3 text-sm text-primary/80">
                  <CheckCircle2 className="h-4 w-4" /> <span>Priority Access</span>
                  <CheckCircle2 className="h-4 w-4" /> <span>Weekly Intelligence</span>
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
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Kwame" {...field} className="glass border-white/10 bg-white/5 focus-visible:ring-primary" />
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
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Mensah" {...field} className="glass border-white/10 bg-white/5 focus-visible:ring-primary" />
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
                          <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="kwame@example.com" {...field} className="glass border-white/10 bg-white/5 focus-visible:ring-primary" />
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
                          <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">I am a...</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="glass border-white/10 bg-white/5 focus:ring-primary text-muted-foreground">
                                <SelectValue placeholder="Select your role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-background border-white/10 text-foreground">
                              <SelectItem value="practitioner">AI Practitioner</SelectItem>
                              <SelectItem value="founder">Founder</SelectItem>
                              <SelectItem value="researcher">Researcher</SelectItem>
                              <SelectItem value="aspiring">Aspiring Professional</SelectItem>
                              <SelectItem value="investor">Investor</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full glass-button mt-4 h-12 text-lg font-bold">
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
      <footer className="py-8 border-t border-white/5 bg-black/40 text-center">
        <div className="container px-6">
          <div className="flex justify-center items-center gap-2 mb-4">
             <img src={logoImg} alt="Logo" className="h-6 w-6 rounded-full opacity-70" />
             <span className="text-sm font-display text-muted-foreground">DatAI Africa &copy; {new Date().getFullYear()}</span>
          </div>
          <p className="text-xs text-muted-foreground/50">Building a digital future, made in Africa.</p>
        </div>
      </footer>
    </div>
  );
}
