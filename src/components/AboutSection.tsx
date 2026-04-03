const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          <span className="text-primary">01.</span> Sobre mim
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-8 box-glow" />

        <div className="bg-card border border-border rounded-xl p-8">
          <div className="font-[var(--font-display)] text-sm text-muted-foreground mb-4">
            <span className="text-primary">const</span> <span className="text-accent">dev</span> = {'{'}
          </div>
          <div className="pl-6 space-y-2 font-[var(--font-display)] text-sm">
            <p>
              <span className="text-muted-foreground">nome:</span>{" "}
              <span className="text-primary">"Seu Nome"</span>,
            </p>
            <p>
              <span className="text-muted-foreground">cargo:</span>{" "}
              <span className="text-primary">"Desenvolvedor Full Stack"</span>,
            </p>
            <p>
              <span className="text-muted-foreground">experiência:</span>{" "}
              <span className="text-primary">"3+ anos"</span>,
            </p>
            <p>
              <span className="text-muted-foreground">paixão:</span>{" "}
              <span className="text-primary">"Criar soluções que impactam pessoas"</span>,
            </p>
          </div>
          <div className="font-[var(--font-display)] text-sm text-muted-foreground mt-4">
            {'}'};
          </div>

          <p className="text-muted-foreground mt-6 leading-relaxed">
            Sou apaixonado por tecnologia e desenvolvimento de software. 
            Tenho experiência construindo aplicações web completas, desde o design 
            da interface até a arquitetura do backend. Busco sempre escrever código 
            limpo, performático e escalável.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
