import { Linkedin, Mail, MapPin, Phone, Send, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm("service_jgnbqc6", "template_7eufy88", e.target, "rK-VP4Nle2nuvJeRM").then(
            () => {
                toast({
                    title: "Mensagem enviada!",
                    description: "Obrigado pelo seu contato. Em breve retornarei.",
                });
                setIsSubmitting(false);
                e.target.reset();
            },
            (error) => {
                toast({
                    title: "Erro ao enviar",
                    description: "Tente novamente mais tarde.",
                    variant: "destructive",
                });
                console.error("Erro:", error.text);
                setIsSubmitting(false);
            }
        );
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Entre em <span className="text-primary"> Contato </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Tem um projeto em mente? Entre em contato. Estou sempre aberto a discutir novas
                    oportunidades.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contatos </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email </h4>
                                    <a
                                        href="mailto:joao37725@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        joao37725@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Telefone </h4>
                                    <a
                                        href="tel:+5596984029858"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        +55 (96) 98402-9858
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Local </h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Macapá, AP, Brasil
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Redes Sociais </h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/jo%C3%A3o-arthur-135835237/"
                                    target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://github.com/Arthur-olive" target="_blank">
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Mande uma mensagem </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Seu Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Seu Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="seuemail@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Sua Mensagem
                                </label>
                                <textarea
                                    id="title"
                                    name="title"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Olá, eu gostaria de falar sobre..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}>
                                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}{" "}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
