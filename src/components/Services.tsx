import { useInView } from "react-intersection-observer";
import { Mic, Headphones, Radio, Volume2 } from "lucide-react";
import "@/styles/style.css";

const features = [
  {
    icon: Mic,
    title: "High-Quality Voice Cloning",
    description: "Our AI technology captures the unique characteristics of any voice with stunning accuracy and naturalness.",
  },
  {
    icon: Headphones,
    title: "Professional Audio Output",
    description: "Generate broadcast-quality audio suitable for podcasts, audiobooks, videos, and commercial projects.",
  },
  {
    icon: Radio,
    title: "Instant Processing",
    description: "Clone voices and generate speech in seconds, not hours. Our optimized pipeline delivers results fast.",
  },
  {
    icon: Volume2,
    title: "Emotion & Tone Control",
    description: "Fine-tune the emotional delivery and speaking style to match your exact requirements.",
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10" 
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-3.5 about-title">
            About Our Voice Cloning Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide cutting-edge AI voice cloning technology that transforms how you create audio content. 
            One service, unlimited possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-card rounded-xl p-8 border border-border hover:border-primary transition-all duration-500 hover:glow-effect ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  transitionDelay: inView ? `${index * 0.15}s` : "0s"
                }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
