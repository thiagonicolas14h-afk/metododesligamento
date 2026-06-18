import { createFileRoute } from "@tanstack/react-router";
import heroAwake from "@/assets/hero-awake.jpg";
import heroSleep from "@/assets/hero-sleep.jpg";
import productMockup from "@/assets/product-mockup.png";
import {
  Check, X, Zap, Brain, Moon, Heart, Star, Shield, ChevronDown,
  ArrowRight, Clock, Lock, BookOpen, Headphones, ClipboardList,
  Sparkles, Sun, Target, Flower2, User, Lightbulb,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método Desligamento Mental — Durma em até 15 minutos" },
      { name: "description", content: "Durma em até 15 minutos mesmo que sua mente não pare de pensar. Método natural usado por milhares de brasileiros." },
      { property: "og:title", content: "Método Desligamento Mental" },
      { property: "og:description", content: "Durma em até 15 minutos mesmo que sua mente não pare de pensar." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
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
      <footer className="bg-navy text-white/70 text-xs text-center py-8 px-4 space-y-2">
        <div className="flex flex-wrap justify-center gap-5 text-white/80">
          <span className="flex items-center gap-1"><Shield size={12}/> Compra segura</span>
          <span className="flex items-center gap-1"><Check size={12}/> Satisfação garantida</span>
          <span className="flex items-center gap-1"><Lock size={12}/> Privacidade protegida</span>
          <span className="flex items-center gap-1"><Clock size={12}/> Acesso imediato</span>
        </div>
        <p>© 2026 Método Desligamento Mental. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

function CTAButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href="#oferta" className={`group inline-flex items-center justify-between gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-4 rounded-full shadow-lg hover:scale-[1.02] transition w-full ${className}`}>
      <span className="flex-1 text-center text-sm md:text-base">{children}</span>
      <span className="bg-navy text-white rounded-full p-2"><ArrowRight size={16} /></span>
    </a>
  );
}

function TrustRow() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/80">
      <span className="flex items-center gap-1.5"><Check size={14} className="text-primary"/> Acesso imediato</span>
      <span className="flex items-center gap-1.5"><Shield size={14} className="text-primary"/> Pagamento seguro</span>
      <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary"/> 7 dias de garantia</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 md:left-1/2">
        <img src={heroAwake} alt="Mulher acordada à noite" className="w-full h-full object-cover opacity-40 md:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent md:from-navy md:via-navy/60" />
      </div>
      <div className="relative max-w-6xl mx-auto px-5 pt-10 pb-12 md:py-20 md:grid md:grid-cols-2 md:gap-8">
        <div>
          <span className="inline-block bg-primary/90 text-navy text-[11px] font-semibold px-3 py-1.5 rounded-md">
            Chega de noites em claro e pensamentos que não param.
          </span>
          <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
            Durma em até 15 minutos<br/>
            mesmo que sua mente<br/>
            <span className="text-primary">não pare de pensar</span>
          </h1>
          <p className="mt-5 text-sm md:text-base text-white/80 max-w-md">
            O Método Desligamento Mental já ajudou milhares de pessoas a silenciar a mente e ter noites profundas e restauradoras.
          </p>
          <div className="mt-6 max-w-md">
            <CTAButton>QUERO DORMIR MELHOR HOJE</CTAButton>
          </div>
          <div className="mt-5"><TrustRow /></div>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  const items = [
    "Você dá de 1 a 2 horas (ou mais) para conseguir dormir.",
    "Fica revivendo situações e diálogos na mente.",
    "Pensa em problemas, tarefas e preocupações.",
    "Tem ansiedade ou aperto no peito na hora de deitar.",
    "Acorda cansado mesmo após dormir 7, 8 ou 9 horas.",
  ];
  return (
    <section className="px-5 py-14 bg-background">
      <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 md:gap-10 md:items-center">
        <div className="rounded-xl overflow-hidden shadow-lg mb-8 md:mb-0">
          <img src={heroSleep} alt="Mente inquieta" className="w-full h-auto" loading="lazy" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl text-navy font-bold leading-tight">
            Sua mente não desliga<br/>quando você mais precisa?
          </h2>
          <p className="text-muted-foreground text-sm mt-3">
            Se você se identifica com algum desses sinais, você não está sozinho.
          </p>
          <ul className="mt-6 space-y-2.5">
            {items.map((it) => (
              <li key={it} className="bg-card flex items-start gap-3 px-4 py-3 rounded-md border border-border shadow-sm">
                <X className="text-red-500 shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-foreground">{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function WhyNotSleep() {
  const causes = [
    { icon: Brain, title: "Pensamentos acelerados", desc: "Sua mente não para de pensar, mesmo quando seu corpo está exausto." },
    { icon: Zap, title: "Excesso de estímulos", desc: "Celular, redes sociais e notícias deixam seu cérebro sempre em estado de alerta." },
    { icon: Sparkles, title: "Ansiedade e estresse", desc: "Sua mente associa a noite ao cansaço, cobrança e preocupações do dia." },
    { icon: Heart, title: "Impacta todo o seu dia", desc: "Mau humor, falta de foco, cansaço e queda na produtividade." },
  ];
  return (
    <section className="px-5 py-14 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-center text-navy font-bold">
        Por que você não consegue dormir?
      </h2>
      <p className="text-center text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
        Muitas pessoas acreditam que o problema é falta de sono. Na verdade, o que acontece é que a mente entra em um ciclo de ruminação e não desacelera.
      </p>
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {causes.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-card border border-border rounded-xl p-5 text-center shadow-sm">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
              <Icon size={22} className="text-navy" />
            </div>
            <p className="text-sm font-bold text-navy">{title}</p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-accent border border-primary/40 p-5 rounded-xl text-center">
        <p className="font-bold text-navy flex items-center justify-center gap-2"><Lightbulb size={18}/> A boa notícia?</p>
        <p className="text-sm text-foreground mt-2">
          Você não precisa lutar contra a mente. Você só precisa aprender a desligá-la. Isso é exatamente o que o <strong>Método Desligamento Mental</strong> ensina.
        </p>
      </div>
    </section>
  );
}

function Method() {
  const bullets = [
    "Técnicas simples e eficazes",
    "Baseado em ciência + experiência prática",
    "Funciona mesmo se você já tentou de tudo",
    "Resultados rápidos e duradouros",
  ];
  return (
    <section className="bg-navy text-white px-5 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center font-bold">
          Conheça o <span className="text-primary">Método Desligamento Mental</span>
        </h2>
        <div className="mt-8 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <img src={productMockup} alt="Método Desligamento Mental" className="w-full max-w-sm mx-auto" loading="lazy" />
          <div className="mt-6 md:mt-0">
            <p className="text-sm md:text-base text-white/85 leading-relaxed">
              Um método prático, passo a passo, criado para ajudar você a interromper o ciclo de pensamentos acelerados que impede seu cérebro de relaxar e entrar naturalmente no sono.
            </p>
            <ul className="mt-5 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm">
                  <span className="bg-primary text-navy rounded-full p-0.5"><Check size={14}/></span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-6"><CTAButton>QUERO DORMIR MELHOR AGORA</CTAButton></div>
            <div className="mt-5"><TrustRow /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const list = [
    { icon: Moon, t: "Adormecer mais rápido" },
    { icon: User, t: "Mente tranquila durante a noite" },
    { icon: Sun, t: "Acordar com mais energia e disposição" },
    { icon: Target, t: "Mais foco e clareza para o seu dia" },
    { icon: Flower2, t: "Melhor qualidade de sono" },
    { icon: Heart, t: "Reduzir ansiedade e estresse" },
  ];
  return (
    <section className="px-5 py-14 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-center text-navy font-bold">
        Depois de aplicar o método, você poderá:
      </h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        {list.map(({ icon: Icon, t }) => (
          <div key={t} className="flex flex-col items-center">
            <Icon className="text-navy mb-2" size={32} strokeWidth={1.5} />
            <p className="text-xs md:text-sm font-semibold text-navy leading-snug">{t}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-accent border border-primary/40 rounded-xl py-4 px-5 text-center">
        <p className="text-sm font-semibold text-navy">Transforme suas noites. Transforme seus dias. Transforme sua vida.</p>
      </div>
    </section>
  );
}

function Inside() {
  const items = [
    { icon: BookOpen, t: "MÉTODO COMPLETO", d: "Passo a passo para silenciar sua mente e dormir melhor." },
    { icon: Headphones, t: "ÁUDIOS EXCLUSIVOS", d: "Exercícios de relaxamento e meditações guiadas." },
    { icon: ClipboardList, t: "ROTINA NOTURNA", d: "Um plano simples para preparar sua mente e corpo." },
    { icon: Brain, t: "ESTRATÉGIAS PRÁTICAS", d: "Técnicas para lidar com pensamentos acelerados." },
    { icon: Moon, t: "BÔNUS EXTRAS", d: "Materiais complementares para acelerar seus resultados." },
  ];
  return (
    <section className="bg-cream px-5 py-14">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center text-navy font-bold">
          Dentro do Método Desligamento Mental você recebe:
        </h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 text-center">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t}>
              <Icon className="mx-auto text-navy mb-3" size={36} strokeWidth={1.5} />
              <p className="text-xs font-bold text-navy">{t}</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { n: "Mariana S.", c: "Curitiba - PR", q: "Em menos de uma semana já notei a diferença. Minha mente finalmente desacelerou e hoje durmo muito melhor!" },
    { n: "Ricardo A.", c: "São Paulo - SP", q: "As técnicas são simples, práticas e realmente funcionam. Melhor compra que fiz esse ano." },
    { n: "Ana Paula", c: "Belo Horizonte - MG", q: "Eu sofria com pensamentos a noite inteira. O método mudou completamente minhas noites." },
    { n: "Juliano R.", c: "Porto Alegre - RS", q: "Já tentei de tudo e nada funcionava. O Método Desligamento Mental realmente funciona." },
  ];
  return (
    <section className="px-5 py-14 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-center text-navy font-bold">
        Eles também achavam que nunca conseguiriam dormir melhor
      </h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {t.map((x) => (
          <div key={x.n} className="bg-card border border-border rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold">
                {x.n[0]}
              </div>
              <div>
                <p className="text-sm font-bold text-navy">{x.n}</p>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor"/>)}
                </div>
              </div>
            </div>
            <p className="text-xs text-foreground italic mt-3 leading-relaxed">"{x.q}"</p>
            <p className="text-[11px] font-semibold text-muted-foreground mt-3">{x.c}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const perks = [
    "Acesso imediato após a compra",
    "Ambiente seguro e criptografado",
    "7 dias de garantia incondicional",
    "Suporte humanizado",
  ];
  return (
    <section id="oferta" className="bg-cream px-5 py-14">
      <div className="max-w-5xl mx-auto md:grid md:grid-cols-5 md:gap-8 md:items-center">
        <img src={productMockup} alt="Método" className="hidden md:block md:col-span-2 w-full max-w-xs mx-auto" loading="lazy" />
        <div className="md:col-span-3 bg-card rounded-2xl border border-border shadow-lg p-7 text-center">
          <h2 className="text-xl md:text-2xl text-navy font-bold leading-tight">
            Você está a poucos minutos de dormir com mais tranquilidade
          </h2>
          <div className="mt-4 inline-block border border-red-400 text-red-600 text-[11px] font-bold px-3 py-1 rounded-md uppercase">
            Oferta por tempo limitado
          </div>
          <p className="text-xs text-muted-foreground mt-4 line-through">De R$ 67,00</p>
          <p className="text-xs text-muted-foreground">apenas</p>
          <div className="mt-1">
            <span className="text-lg text-foreground align-top">R$</span>
            <span className="text-5xl md:text-6xl font-bold text-navy">27,00</span>
          </div>
          <div className="mt-5"><CTAButton>QUERO MEU ACESSO AGORA</CTAButton></div>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2 text-xs text-foreground">
                <span className="bg-green-500 text-white rounded p-0.5"><Check size={12}/></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="bg-accent px-5 py-14">
      <div className="max-w-3xl mx-auto md:flex md:items-center md:gap-8 text-center md:text-left">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-navy text-primary shrink-0 mx-auto md:mx-0 mb-4 md:mb-0 border-4 border-primary">
          <div className="text-center">
            <Shield size={28} className="mx-auto"/>
            <p className="text-[9px] font-bold mt-0.5">7 DIAS</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl text-navy font-bold">Garantia de 7 Dias</h2>
          <p className="mt-3 text-sm text-foreground leading-relaxed">
            Você tem 7 dias para testar o Método Desligamento Mental. Se por qualquer motivo não ficar satisfeito, basta solicitar o reembolso que devolvemos 100% do seu dinheiro. Sem perguntas. Sem risco para você.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "O método funciona para qualquer pessoa?", a: "Sim, foi desenvolvido para qualquer adulto com dificuldades para dormir." },
    { q: "Preciso de algum equipamento específico?", a: "Não. Você só precisa de um celular ou computador para acessar o conteúdo." },
    { q: "Recebo por e-mail ou aplicativo?", a: "Você recebe acesso imediato por e-mail à área de membros." },
    { q: "É seguro?", a: "Sim, o pagamento é processado em ambiente 100% seguro e criptografado." },
    { q: "Por quanto tempo terei acesso?", a: "Você terá acesso vitalício ao conteúdo, incluindo atualizações futuras." },
    { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional para pedir reembolso." },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="px-5 py-14 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center text-navy font-bold mb-8">
          Perguntas Frequentes
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden h-fit">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center gap-3 p-4 text-left text-sm font-medium text-navy"
              >
                {f.q}
                <ChevronDown size={18} className={`shrink-0 transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-4 pb-4 text-sm text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
