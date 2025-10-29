import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic, Sparkles, Zap } from "lucide-react";

const Hero = () => {
    const navigate = useNavigate();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Generate random floating letters with random movement
    const floatingLetters = Array.from({ length: 30 }, (_, i) => ({
        char: String.fromCharCode(65 + Math.floor(Math.random() * 26)),
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${10 + Math.random() * 10}s`,
        moveX: `${Math.random() * 300 - 100}px`,
        moveY: `${Math.random() * 300 - 100}px`,
        rotate: `${Math.random() * 360}deg`,
    }));

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

                {/* Floating Alphabets */}
                {floatingLetters.map((letter, i) => (
                    <div
                        key={i}
                        className="absolute text-primary/30 font-bold pointer-events-none select-none"
                        style={{
                            left: letter.left,
                            top: letter.top,
                            fontSize: '14px',
                            animation: `floatRandom-${i} ${letter.duration} ease-in-out ${letter.delay} infinite`,
                            willChange: 'transform',
                        }}
                    >
                        <style>{`
              @keyframes floatRandom-${i} {
                0%, 100% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(${letter.moveX}, ${letter.moveY}) rotate(${letter.rotate}); }
                50% { transform: translate(${-parseFloat(letter.moveX) / 2}px, ${-parseFloat(letter.moveY) / 2}px) rotate(${-parseFloat(letter.rotate) / 2}deg); }
                75% { transform: translate(${-letter.moveX}, ${-letter.moveY}) rotate(${-letter.rotate}); }
              }
            `}</style>
                        {letter.char}
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className={`text-center space-y-8 transition-all duration-1000 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}>
                    {/* Audio Waveform Decoration */}
                    <div className="flex justify-center items-end space-x-1 mb-8">
                        {[...Array(9)].map((_, i) => (
                            <div
                                key={i}
                                className="w-2 bg-gradient-to-t from-primary to-secondary rounded-full animate-pulse"
                                style={{
                                    height: `${Math.random() * 60 + 20}px`,
                                    animationDelay: `${i * 0.1}s`,
                                }}
                            />
                        ))}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-float">
                        Clone Any Voice
                        <br />
                        In Seconds
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Transform text into lifelike speech with our cutting-edge AI voice cloning technology.
                        Professional quality, unlimited possibilities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 glow-effect text-lg px-8"
                            onClick={() => navigate("/signup")}
                        >
                            <Mic className="mr-2" />
                            Start Cloning
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
                        >
                            Watch Demo
                        </Button>
                    </div>

                    {/* Feature Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
                        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary transition-all hover:glow-effect">
                            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">99% Accuracy</h3>
                            <p className="text-muted-foreground text-sm">
                                Industry-leading voice replication technology
                            </p>
                        </div>

                        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary transition-all hover:glow-effect">
                            <Zap className="w-12 h-12 text-secondary mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
                            <p className="text-muted-foreground text-sm">
                                Generate hours of audio in minutes
                            </p>
                        </div>

                        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary transition-all hover:glow-effect">
                            <Mic className="w-12 h-12 text-accent mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Natural Sound</h3>
                            <p className="text-muted-foreground text-sm">
                                Indistinguishable from human speech
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
