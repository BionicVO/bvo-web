import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import appInterface from "@/assets/app-interface.jpg";

const features = [
  "Real-time voice synthesis with zero latency",
  "Advanced emotion and tone control",
  "Multi-speaker conversation support",
  "Export in multiple audio formats",
  "Cloud-based processing for instant results",
  "Intuitive drag-and-drop interface",
];

const AppShowcase = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Powerful Voice Cloning Platform
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the most advanced voice cloning technology with our
              intuitive platform. Create, customize, and export professional-quality
              voice content in minutes.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-500 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: inView ? `${index * 0.1 + 0.3}s` : "0s" }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`order-1 lg:order-2 transition-all duration-1000 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity" />
              <img
                src={appInterface}
                alt="Voice Cloning App Interface"
                className="relative rounded-2xl border border-border shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
