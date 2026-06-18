import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-sleep.jpg";
import { Check, X, Zap, Brain, Moon, Heart, Star, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método Desligamento Mental — Durma em até 15 minutos" },
      { name: "description", content: "Durma em até 15 minutos mesmo que sua mente não pare de pensar. Conheça o Método Desligamento Mental." },
      { property: "og:title", content: "Método Desligamento Mental" },
      { property: "og:description", content: "Durma em até 15 minutos mesmo que sua mente não pare de pensar." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-navy text-white text-center text-xs py-2 px-4">
        🔥 OFERTA LIMITADA: 70% OFF apenas hoje — vagas se esgotando
      </div>

      <Hero />
      <Problems />
      <WhyNotSleep />
      <Method />
      <Benefits />
      <Inside />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <FAQ />

      <footer className="bg-navy text-white/70 text-xs text-center py-6 px-4">
        <p>© 2026 Método Desligamento Mental. Todos os direitos reservados.</p>
        <p className="mt-2">Termos de Uso · Política de Privacidade · Contato</p>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <section className="px-4 pt-10 pb-12 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
        Durma em até 15 minutos<br />mesmo que sua mente não<br />pare de pensar
      </h1>
      <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
        <img src={heroImg} alt="Mulher dormindo tranquilamente" className="w-full h-auto" />
      </div>
      <p className="mt-5 text-muted-foreground text-sm md:text-base">
        Descubra o método natural usado por mais de 8 mil brasileiros para finalmente desligar a mente, relaxar o corpo e pegar no sono em minutos.
      </p>
      <a href="#oferta" className="inline-block mt-6 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full shadow-md hover:scale-105 transition w-full md:w-auto">
        QUERO DORMIR MELHOR HOJE →
      </a>
    </section>
  );
}

function Problems() {
  const items = [
    "Deita na cama exausto, mas a mente não para de pensar",
    "Fica horas rolando de um lado para o outro",
    "Pensa em problemas do dia ou do dia seguinte",
    "Já tentou de tudo, mas nada parece funcionar de verdade",
    "Acorda cansado, irritado e sem energia para o dia",
  ];
  return (
    <section className="bg-cream px-4 py-14">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center text-navy font-bold">
          Sua mente não desliga quando você mais precisa?
        </h2>
        <p className="text-center text-muted-foreground text-sm mt-3">
          Se você se identifica com alguma dessas situações, você não está só.
        </p>
        <ul className="mt-8 space-y-3">
          {items.map((it) => (
            <li key={it} className="bg-card flex items-start gap-3 p-4 rounded-lg border border-border shadow-sm">
              <X className="text-red-500 shrink-0 mt-0.5" size={20} />
              <span className="text-sm text-foreground">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WhyNotSleep() {
  const causes = [
    { icon: Brain, title: "Pensamentos acelerados", desc: "Sua mente fica trabalhando mesmo depois que o dia termina, repassando tudo." },
    { icon: Zap, title: "Ansiedade e estresse", desc: "O corpo permanece em estado de alerta, impedindo o relaxamento natural." },
    { icon: Moon, title: "Excesso de telas", desc: "A luz azul e o estímulo constante atrapalham a produção de melatonina." },
    { icon: Heart, title: "Rotina desregulada", desc: "Horários inconstantes confundem o relógio biológico do seu corpo." },
  ];
  return (
    <section className="px-4 py-14 max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-center text-navy font-bold">
        Por que você não consegue dormir?
      </h2>
      <p className="text-center text-muted-foreground text-sm mt-3 max-w-md mx-auto">
        Médicos e especialistas em sono apontam quatro principais causas para a insônia moderna.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 gap-3">
        {causes.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-card border border-border rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 text-navy font-semibold">
              <Icon size={18} className="text-primary" />
              <span className="text-sm">{title}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-accent border-l-4 border-primary p-5 rounded-lg">
        <p className="text-center text-sm font-semibold text-navy">Ótima notícia!</p>
        <p className="text-center text-sm text-foreground mt-2">
          Existe um jeito simples e natural de resolver tudo isso. Conheça o método criado especialmente para isso: o <strong>Desligamento Mental</strong>.
        </p>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="bg-cream px-4 py-14">
      <div className="max-w-2xl mx-auto text-center">
        <Moon className="mx-auto text-primary mb-4" size={36} />
        <h2 className="text-2xl md:text-3xl text-navy font-bold">
          Conheça o Método Desligamento Mental
        </h2>
        <p className="mt-5 text-sm text-foreground leading-relaxed">
          O Método Desligamento Mental é um método simples, prático e natural, criado para ajudar você a adormecer rápido sem precisar de remédios, sem rituais complicados e sem técnicas que exigem horas de meditação ou aplicativos cheios de etapas.
        </p>
        <p className="mt-4 text-sm text-foreground leading-relaxed">
          Diferente de tudo que você já viu, o Método Desligamento Mental foi criado para atacar a verdadeira causa da insônia: a mente que não desliga e o corpo cheio de tensão.
        </p>
      </div>
    </section>
  );
}

function Benefits() {
  const list = [
    "Adormecer muito rápido",
    "Acordar com mais energia e disposição",
    "Voltar a ter noites tranquilas e contínuas",
    "Reduzir ansiedade noturna",
    "Melhorar a qualidade do sono",
    "Estabilizar seu humor durante o dia",
  ];
  return (
    <section className="px-4 py-14 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-center text-navy font-bold">
        Depois de aplicar o método, você poderá:
      </h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {list.map((b) => (
          <div key={b} className="bg-card border border-border rounded-lg p-5 text-center shadow-sm">
            <Star className="mx-auto text-primary mb-2" size={22} />
            <p className="text-sm font-medium text-foreground">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Inside() {
  const items = [
    "Método completo passo a passo para desligar a mente em minutos",
    "Técnicas de respiração que acalmam o sistema nervoso",
    "Rotina noturna ideal para preparar corpo e mente",
    "Como criar um ambiente perfeito para dormir",
    "Áudios de relaxamento para acelerar o processo",
    "Checklist para automatizar seu ritual de sono",
  ];
  return (
    <section className="bg-cream px-4 py-14">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center text-navy font-bold">
          Dentro do Método Desligamento Mental
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          {items.map((it) => (
            <div key={it} className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
              <Check className="text-primary shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-foreground">{it}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { n: "Mariana S.", q: "Faz anos que tomo remédio para dormir. Aplicando o método consegui largar tudo em duas semanas." },
    { n: "Carlos R.", q: "Achei que nunca mais ia ter uma noite de sono boa. Estou impressionado com a simplicidade." },
    { n: "Fernanda L.", q: "Comecei a dormir em menos de 15 minutos já na primeira semana. Acordo outra pessoa." },
    { n: "Roberto M.", q: "Como pai recente, precisava aproveitar cada minuto de sono. Esse método salvou minha rotina." },
    { n: "Ana Paula", q: "Saí da insônia crônica para dormir profundamente. Sem remédios, sem rituais complicados." },
    { n: "João V.", q: "Recomendo para todo mundo. Mudou completamente como eu encaro a hora de dormir." },
  ];
  return (
    <section className="px-4 py-14 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-center text-navy font-bold">
        Eles também achavam que nunca conseguiriam dormir melhor
      </h2>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {t.map((x) => (
          <div key={x.n} className="bg-card border border-border rounded-lg p-5 shadow-sm">
            <div className="flex text-primary mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-sm text-foreground italic">"{x.q}"</p>
            <p className="text-xs font-semibold text-navy mt-3">{x.n}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="oferta" className="bg-cream px-4 py-14">
      <div className="max-w-md mx-auto bg-card rounded-2xl border border-border shadow-lg p-8 text-center">
        <h2 className="text-2xl md:text-3xl text-navy font-bold leading-tight">
          Você está a poucos minutos de dormir com mais tranquilidade
        </h2>
        <div className="mt-5 inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
          ATENÇÃO: VAGAS LIMITADAS
        </div>
        <p className="text-xs text-muted-foreground mt-4">DE R$ 197,00 POR APENAS</p>
        <div className="mt-2">
          <span className="text-xl text-foreground align-top">R$</span>
          <span className="text-6xl font-bold text-navy">27,00</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">ou 3x de R$ 9,67</p>
        <a href="#" className="block mt-6 bg-primary text-primary-foreground font-bold py-4 rounded-full shadow-md hover:scale-105 transition">
          QUERO DORMIR MELHOR AGORA →
        </a>
        <div className="mt-5 flex justify-center gap-4 text-xs text-muted-foreground flex-wrap">
          <span className="flex items-center gap-1"><Shield size={12} /> Compra 100% segura</span>
          <span className="flex items-center gap-1"><Check size={12} /> Acesso imediato</span>
          <span className="flex items-center gap-1"><Heart size={12} /> Garantia 7 dias</span>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="px-4 py-14 max-w-2xl mx-auto text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent border-4 border-primary mb-5">
        <Shield className="text-primary" size={36} />
      </div>
      <h2 className="text-2xl md:text-3xl text-navy font-bold">Garantia de 7 Dias</h2>
      <p className="mt-4 text-sm text-foreground leading-relaxed">
        Experimente o Método Desligamento Mental por 7 dias. Se você não sentir nenhuma melhora no seu sono, basta nos enviar um e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
      </p>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "O método funciona mesmo para insônia crônica?", a: "Sim. O método foi desenvolvido especificamente para quem já tentou de tudo e nada funcionou." },
    { q: "Em quanto tempo verei resultados?", a: "A maioria das pessoas relata melhoras já na primeira semana de aplicação." },
    { q: "Preciso de remédios ou suplementos?", a: "Não. O método é 100% natural e não exige nenhum tipo de medicação." },
    { q: "Como recebo o material?", a: "Imediatamente após a compra, por e-mail, com acesso à área de membros." },
    { q: "Quem pode utilizar?", a: "Qualquer adulto que esteja com dificuldades para dormir, independente da idade." },
    { q: "Posso pedir reembolso?", a: "Sim, você tem 7 dias de garantia incondicional para testar o método." },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-cream px-4 py-14">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center text-navy font-bold mb-8">
          Perguntas Frequentes
        </h2>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-4 text-left text-sm font-medium text-foreground"
              >
                {f.q}
                <ChevronDown size={18} className={`transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-4 pb-4 text-sm text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
