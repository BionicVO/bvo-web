import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mic, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";



const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { toast } = useToast();
    const { theme, setTheme } = useTheme();
    const navigate = useNavigate();

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginFormValues) => {
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            toast({
                title: "Login successful!",
                description: "Welcome back to BionicVO",
            });
            navigate("/");
        } catch (error) {
            toast({
                title: "Error",
                description: "Invalid credentials. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 px-4">
            {/* 🔥 Sticky Theme Button */}
        {/*    <Button*/}
        {/*        variant="outline"*/}
        {/*        size="icon"*/}
        {/*        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}*/}
        {/*        className="*/}
        {/*  fixed left-0 bottom-20 z-50*/}
        {/*  border-border hover:bg-accent/10*/}
        {/*  rounded-r-full rounded-l-none*/}
        {/*  shadow-lg p-6*/}
        {/*"*/}
        {/*    >*/}
        {/*        {theme === "dark" ? (*/}
        {/*            <Sun className="!h-8 !w-8 text-white-400" />*/}
        {/*        ) : (*/}
        {/*            <Moon className="!h-8 !w-8 text-black-400" />*/}
        {/*        )}*/}
        {/*    </Button>*/}
            {/* Animated Background */}
            <Header />
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div
                ref={ref}
                className={`w-full max-w-md relative z-10 transition-all duration-1000 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                {/* Back Button */}
                <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                {/* Card Container */}
                <div className="bg-card/50 backdrop-blur-xl rounded-2xl p-8 border border-border shadow-2xl animate-scale-in">
                    {/* Logo & Title */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 animate-pulse">
                            <Mic className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-3xl font-bold gradient-text mb-2">Welcome Back</h1>
                        <p className="text-muted-foreground">Log in to your BionicVO account</p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="john@example.com"
                                                {...field}
                                                className="transition-all duration-300 focus:scale-[1.02]"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Password */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="••••••••"
                                                {...field}
                                                className="transition-all duration-300 focus:scale-[1.02]"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Forgot Password Link */}
                            <div className="text-right">
                                <Link to="#" className="text-sm text-primary hover:underline">
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full mt-6 glow-effect"
                                size="lg"
                                disabled={isLoading}
                            >
                                {isLoading ? "Logging in..." : "Log In"}
                            </Button>
                        </form>
                    </Form>

                    {/* Login Link */}
                    <p className="text-center text-sm text-muted-foreground mt-6">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-primary hover:underline font-medium">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
