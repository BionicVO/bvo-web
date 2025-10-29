import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import actor1 from "@/assets/actor-1.jpg";
import actor2 from "@/assets/actor-2.jpg";
import actor3 from "@/assets/actor-3.jpg";
import actor4 from "@/assets/actor-4.jpg";
import actor5 from "@/assets/actor-5.jpg";
import actor6 from "@/assets/actor-6.jpg";
import actor7 from "@/assets/actor-7.jpg";
import actor8 from "@/assets/actor-8.jpg";
import actor9 from "@/assets/actor-9.jpg";

const actors = [
  {
    name: "Marcus Sterling",
    image: actor1,
    description: "Deep, authoritative voice for documentaries",
    tags: ["Documentary", "Corporate"],
  },
  {
    name: "Emma Richardson",
    image: actor2,
    description: "Warm, engaging tone for audiobooks",
    tags: ["Audiobook", "Narration"],
  },
  {
    name: "James Patterson",
    image: actor3,
    description: "Versatile voice for characters",
    tags: ["Character", "Gaming"],
  },
  {
    name: "Robert Chen",
    image: actor4,
    description: "Professional business presentations",
    tags: ["Business", "Training"],
  },
  {
    name: "Sofia Martinez",
    image: actor5,
    description: "Energetic voice for commercials",
    tags: ["Commercial", "Marketing"],
  },
  {
    name: "David Williams",
    image: actor6,
    description: "Clear, articulate e-learning voice",
    tags: ["E-Learning", "Tutorial"],
  },
  {
    name: "Raj Patel",
    image: actor7,
    description: "Friendly customer service voice",
    tags: ["Assistant", "Support"],
  },
  {
    name: "Olivia Harper",
    image: actor8,
    description: "Elegant luxury brand voice",
    tags: ["Luxury", "Premium"],
  },
  {
    name: "Alex Thompson",
    image: actor9,
    description: "Dynamic sports & entertainment voice",
    tags: ["Sports", "Entertainment"],
  },
];

const VoiceActors = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="actors" className="py-24 bg-card/30">
      <div ref={ref} className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Professional Voice Actors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse roster of premium AI voice models
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actors.map((actor, index) => (
            <div
              key={index}
              className={`group bg-background rounded-xl p-6 border border-border hover:border-primary transition-all duration-500 hover:glow-effect ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ 
                transitionDelay: inView ? `${index * 0.05}s` : "0s"
              }}
            >
              <div className="flex items-start gap-4">
                <img
                  src={actor.image}
                  alt={actor.name}
                  className="w-16 h-16 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 ring-2 ring-border group-hover:ring-primary"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors truncate">
                    {actor.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{actor.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4 mt-4">
                {actor.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Get Started
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <Play className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceActors;
