import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary"> Mim</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Desenvolvedor Front-End</h3>

                        <p className="text-muted-foreground">
                            Meu nome é João Arthur de Oliveira Pereira, sou graduando em Engenharia
                            da Computação e atuo como desenvolvedor front-end. Tenho como foco a
                            criação de experiências web modernas, funcionais e intuitivas, sempre
                            alinhando tecnologia e design para entregar soluções que realmente fazem
                            a diferença.
                        </p>

                        <p className="text-muted-foreground">
                            Meu estilo combina o minimalismo com o design moderno, resultando em
                            interfaces que não apenas funcionam de forma eficiente, mas também
                            proporcionam uma experiência visual marcante e envolvente. Busco
                            constantemente aprimorar minhas habilidades e acompanhar as tendências
                            do setor para desenvolver projetos que unam qualidade, inovação e
                            impacto.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Entre em contato
                            </a>

                            <a
                                target="_blank"
                                href="https://drive.google.com/file/d/1tf9e175HupM20kfAu_uFUCNX7cylnvst/view?usp=drive_link"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Desenvolvimento Web</h4>
                                    <p className="text-muted-foreground">
                                        Criação de sites e aplicativos web responsivos com
                                        frameworks modernos.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Projetando interfaces de usuário intuitivas e experiências
                                        de usuário fascinantes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Gerenciamento de projetos
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Liderando projetos desde a concepção até a conclusão com
                                        metodologias eficientes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
