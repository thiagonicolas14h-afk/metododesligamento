import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/salgados-hero.jpg";
import mockup from "@/assets/salgados-mockup.png";
import coxinhas from "@/assets/coxinhas.jpg";
import assados from "@/assets/salgados-assados.jpg";
import garantia from "@/assets/garantia-7dias.png";
import {
  Check, X, ChevronDown, ArrowRight, Shield, Lock, Clock, Star,
  ChefHat, Flame, DollarSign, Home, TrendingUp, Heart, Sparkles,
  Snowflake, Cookie, Award, ShoppingCart, Zap, Gift,
} from "lucide-react";

const CHECKOUT_URL = "https://pay.cakto.com.br/38dee85_926622";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Segredos dos Salgados Lucrativos — Fature com Salgados em Casa" },
      { name: "description", content: "Aprenda a fazer salgados profissionais e transforme sua cozinha em fonte de renda. Receitas testadas, técnicas e bônus exclusivos." },
      { property: "og:title", content: "Segredos dos Salgados Lucrativos" },
      { property: "og:description", content: "Receitas testadas e técnicas profissionais para você começar a vender salgados ainda esta semana." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Hero />
      <Pains />
      <Learn />
      <Benefits />
      <Bonuses />
      <Transformation />
      <Testimonials />
      <Guarantee />
      <Offer />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function CTA({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <a
      id={id}
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-3 bg-primary hover:bg-[color:var(--brand-red-dark)] text-primary-foreground font-extrabold px-6 py-4 md:py-5 rounded-full shadow-[0_10px_30px_-10px_rgba(220,38,38,0.6)] hover:scale-[1.02] active:scale-100 transition w-full text-sm md:text-base uppercase tracking-wide ${className}`}
    >
      <ShoppingCart size={20} className="shrink-0" />
      <span className="text-center">{children}</span>
      <ArrowRight size={18} className="shrink-0 group-hover:translate-x-1 transition" />
    </a>
  );
}

function TrustRow({ light = false }: { light?: boolean }) {
  const cls = light ? "text-white/90" : "text-foreground/80";
  return (
    <div className={`flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs ${cls}`}>
      <span className="flex items-center gap-1.5"><Lock size={14}/> Compra 100% segura</span>
      <span className="flex items-center gap-1.5"><Zap size={14}/> Acesso imediato</span>
      <span className="flex items-center gap-1.5"><Shield size={14}/> Garantia de 7 dias</span>
    </div>
  );
}

function SectionTitle({ kicker, children }: { kicker?: string; children: React.ReactNode }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {kicker && (
        <span className="inline-block bg-secondary text-secondary-foreground text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md mb-3">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight font-display">
        {children}
      </h2>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[color:var(--brand-red-dark)] via-primary to-[color:var(--brand-red-dark)] text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-5 pt-10 pb-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-secondary text-navy text-[11px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full">
            <Flame size={14}/> Método comprovado
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] font-display">
            Aprenda a fazer <span className="text-secondary">salgados profissionais</span> e transforme sua cozinha em uma fonte de renda.
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/90 max-w-lg">
            Descubra receitas testadas, massas perfeitas e técnicas que podem ajudar você a começar a <strong>vender ainda esta semana</strong>.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {["Receitas passo a passo", "Ingredientes acessíveis", "Lucro real comprovado"].map(i => (
              <li key={i} className="flex items-center gap-2"><Check className="text-secondary" size={18}/> {i}</li>
            ))}
          </ul>
          <div className="mt-7 max-w-md"><CTA>Quero começar agora</CTA></div>
          <div className="mt-5"><TrustRow light /></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-secondary/30 blur-3xl rounded-full" />
          <img
            src={mockup}
            alt="Mockup do ebook Segredos dos Salgados Lucrativos"
            width={1024}
            height={1024}
            className="relative w-full max-w-md mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function Pains() {
  const pains = [
    "Você não sabe por onde começar.",
    "Tem medo de errar as receitas e desperdiçar ingredientes.",
    "Já tentou fazer salgados e não conseguiu vender.",
    "Precisa aumentar a renda da família agora.",
    "Quer trabalhar em casa e ter mais liberdade.",
  ];
  return (
    <section className="px-5 py-16 bg-cream">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img src={coxinhas} alt="Salgados fritos crocantes" width={1024} height={768} loading="lazy" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
        <div>
          <SectionTitle kicker="Você se identifica?">
            Cansado de tentar e não ter <span className="text-primary">resultado</span>?
          </SectionTitle>
          <ul className="mt-6 space-y-3">
            {pains.map(p => (
              <li key={p} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4 shadow-sm">
                <span className="bg-primary/10 text-primary rounded-full p-1 mt-0.5 shrink-0"><X size={16}/></span>
                <span className="text-sm text-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-foreground/80 text-center md:text-left">
            <strong>Você não está sozinho.</strong> E a boa notícia é que existe um caminho simples e testado.
          </p>
        </div>
      </div>
    </section>
  );
}

function Learn() {
  const items = [
    { icon: ChefHat, t: "Massa profissional", d: "A massa perfeita para salgados fritos, lisa, fácil de modelar e que não racha." },
    { icon: Sparkles, t: "Técnicas de modelagem", d: "Coxinha, risole, kibe e bolinha de queijo no formato profissional." },
    { icon: Cookie, t: "Recheios mais vendidos", d: "Os recheios que mais geram pedidos e fidelizam clientes." },
    { icon: Flame, t: "Sequinhos e crocantes", d: "O segredo da fritura para salgados douradinhos e que não embebem óleo." },
    { icon: DollarSign, t: "Custos e precificação", d: "Saiba quanto cobrar, calcular margem e nunca mais vender no prejuízo." },
    { icon: TrendingUp, t: "Como vender mais", d: "Estratégias práticas para conseguir os primeiros clientes e crescer." },
  ];
  return (
    <section className="px-5 py-16 bg-background">
      <SectionTitle kicker="Conteúdo do curso">
        O que você vai <span className="text-primary">aprender</span>
      </SectionTitle>
      <div className="mt-10 max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
            <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4">
              <Icon size={22}/>
            </div>
            <h3 className="font-bold text-navy text-lg">{t}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 max-w-md mx-auto"><CTA>Quero garantir meu acesso</CTA></div>
    </section>
  );
}

function Benefits() {
  const list = [
    "Receitas simples e explicadas passo a passo",
    "Ingredientes acessíveis e baratos",
    "Ideal para quem está começando do zero",
    "Técnicas profissionais usadas por salgadeiras de sucesso",
    "Gere renda extra trabalhando da sua casa",
    "Acesso imediato após a compra",
  ];
  return (
    <section className="px-5 py-16 bg-navy text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-secondary text-navy text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md mb-3">
            Por que funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display">
            Por que este método é <span className="text-secondary">diferente</span>?
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {list.map(b => (
            <div key={b} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur">
              <span className="bg-secondary text-navy rounded-full p-1 shrink-0"><Check size={16}/></span>
              <span className="text-sm md:text-base">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bonuses() {
  return (
    <section className="px-5 py-16 bg-cream">
      <SectionTitle kicker="🎁 Bônus exclusivos">
        Comprando hoje você <span className="text-primary">ganha também</span>
      </SectionTitle>
      <div className="mt-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border-2 border-primary/30 shadow-lg overflow-hidden">
          <div className="bg-primary text-primary-foreground px-5 py-3 flex items-center gap-2 font-bold">
            <Gift size={18}/> BÔNUS 1
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Snowflake className="text-primary" size={28}/>
              <h3 className="font-extrabold text-xl text-navy">Guia de Congelamento de Salgados</h3>
            </div>
            <ul className="space-y-2 text-sm text-foreground">
              {["Como congelar corretamente sem perder textura", "Prazo de validade de cada tipo", "Armazenamento profissional", "Técnicas para produzir em escala"].map(i => (
                <li key={i} className="flex gap-2"><Check className="text-primary shrink-0 mt-0.5" size={16}/> {i}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground line-through">De R$ 47,00</p>
            <p className="text-sm font-bold text-primary">GRÁTIS para você hoje</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border-2 border-primary/30 shadow-lg overflow-hidden">
          <div className="bg-primary text-primary-foreground px-5 py-3 flex items-center gap-2 font-bold">
            <Gift size={18}/> BÔNUS 2
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Cookie className="text-primary" size={28}/>
              <h3 className="font-extrabold text-xl text-navy">Curso Extra de Salgados Assados</h3>
            </div>
            <ul className="space-y-2 text-sm text-foreground">
              {["Esfihas abertas e fechadas", "Enroladinhos saborosos", "Empadas profissionais", "Receitas extras para faturar ainda mais"].map(i => (
                <li key={i} className="flex gap-2"><Check className="text-primary shrink-0 mt-0.5" size={16}/> {i}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground line-through">De R$ 67,00</p>
            <p className="text-sm font-bold text-primary">GRÁTIS para você hoje</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <img src={assados} alt="Salgados assados" width={1024} height={768} loading="lazy" className="max-w-2xl mx-auto rounded-2xl shadow-xl w-full h-auto object-cover" />
      </div>
    </section>
  );
}

function Transformation() {
  const before = ["Sem renda extra no fim do mês", "Receitas que não dão certo", "Falta de confiança para vender", "Sem saber por onde começar"];
  const after = ["Produz salgados de nível profissional", "Vende para amigos, vizinhos e empresas", "Uma nova fonte de renda em casa", "Mais liberdade e tempo com a família"];
  return (
    <section className="px-5 py-16 bg-background">
      <SectionTitle kicker="Sua transformação">
        O <span className="text-primary">antes</span> e <span className="text-primary">depois</span> do método
      </SectionTitle>
      <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-5">
        <div className="bg-white border-2 border-border rounded-2xl p-6">
          <div className="text-center mb-4">
            <span className="inline-block bg-muted text-muted-foreground text-xs font-bold uppercase px-3 py-1 rounded">Antes</span>
            <h3 className="font-bold text-lg text-navy mt-2">Sem o método</h3>
          </div>
          <ul className="space-y-3">
            {before.map(b => (
              <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                <X className="text-red-500 shrink-0 mt-0.5" size={18}/> {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border-2 border-primary rounded-2xl p-6 shadow-xl relative">
          <div className="text-center mb-4">
            <span className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase px-3 py-1 rounded">Depois</span>
            <h3 className="font-bold text-lg text-navy mt-2">Com o método</h3>
          </div>
          <ul className="space-y-3">
            {after.map(b => (
              <li key={b} className="flex items-start gap-2 text-sm text-foreground font-medium">
                <Check className="text-green-600 shrink-0 mt-0.5" size={18}/> {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { n: "Maria S.", a: 42, c: "Recife - PE", q: "Comecei fazendo salgados para amigos e hoje tenho encomendas toda semana. Mudou minha vida!" },
    { n: "Joana P.", a: 35, c: "São Paulo - SP", q: "As massas finalmente ficaram do jeito que eu queria. Hoje vendo mais de 300 salgados por semana." },
    { n: "Carla R.", a: 50, c: "Belo Horizonte - MG", q: "Eu não acreditava que conseguiria. Em 2 semanas paguei o curso e ainda sobrou dinheiro." },
    { n: "Rodrigo M.", a: 29, c: "Curitiba - PR", q: "Comprei pensando em renda extra, hoje é minha renda principal. Recomendo demais." },
    { n: "Patrícia A.", a: 38, c: "Salvador - BA", q: "Receitas testadas e que funcionam de verdade. Meus clientes amam, vivo cheia de pedidos." },
    { n: "Lúcia F.", a: 55, c: "Porto Alegre - RS", q: "Achei que na minha idade não daria certo. Hoje vendo para uma cantina e ganho meu próprio dinheiro." },
  ];
  return (
    <section className="px-5 py-16 bg-cream">
      <SectionTitle kicker="Quem já comprou">
        Histórias reais de quem está <span className="text-primary">faturando</span>
      </SectionTitle>
      <div className="mt-10 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.map(x => (
          <div key={x.n} className="bg-white border border-border rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[color:var(--brand-red-dark)] text-white font-extrabold flex items-center justify-center text-lg">
                {x.n[0]}
              </div>
              <div>
                <p className="font-bold text-navy text-sm">{x.n}, {x.a}</p>
                <p className="text-[11px] text-muted-foreground">{x.c}</p>
                <div className="flex text-secondary mt-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor"/>)}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-foreground italic leading-relaxed">"{x.q}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="px-5 py-16 bg-gradient-to-br from-[color:var(--brand-red-dark)] to-primary text-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-[auto_1fr] gap-8 items-center text-center md:text-left">
        <img src={garantia} alt="Selo Garantia 7 dias" width={1024} height={1024} loading="lazy" className="w-40 md:w-48 mx-auto drop-shadow-2xl" />
        <div>
          <span className="inline-block bg-secondary text-navy text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md mb-3">
            Risco zero
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display">Garantia Incondicional de 7 Dias</h2>
          <p className="mt-4 text-white/90 leading-relaxed">
            Você tem <strong>7 dias completos</strong> para testar o material. Se por qualquer motivo não gostar, basta enviar um e-mail e devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas, sem burocracia, sem risco para você.
          </p>
        </div>
      </div>
    </section>
  );
}

function Offer() {
  const perks = [
    "Curso completo Segredos dos Salgados Lucrativos",
    "Bônus 1: Guia de Congelamento de Salgados",
    "Bônus 2: Curso Extra de Salgados Assados",
    "Acesso imediato e vitalício",
    "Atualizações futuras gratuitas",
    "Suporte humanizado por e-mail",
  ];
  return (
    <section id="oferta" className="px-5 py-16 bg-background">
      <SectionTitle kicker="Oferta especial">
        Tudo isso por um <span className="text-primary">preço simbólico</span>
      </SectionTitle>
      <div className="mt-10 max-w-2xl mx-auto bg-white border-2 border-primary rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-primary text-primary-foreground text-center py-3 font-extrabold uppercase tracking-wider text-sm flex items-center justify-center gap-2">
          <Flame size={18}/> Oferta promocional por tempo limitado
        </div>
        <div className="p-7 md:p-10 text-center">
          <ul className="text-left space-y-3 mb-7">
            {perks.map(p => (
              <li key={p} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                <span className="bg-green-500 text-white rounded-full p-0.5 shrink-0 mt-0.5"><Check size={14}/></span>
                {p}
              </li>
            ))}
          </ul>
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">De <span className="line-through">R$ 197,00</span> por apenas</p>
            <div className="mt-2 flex items-start justify-center">
              <span className="text-xl text-navy font-bold mt-2">R$</span>
              <span className="text-6xl md:text-7xl font-extrabold text-primary leading-none">27</span>
              <span className="text-2xl text-navy font-bold mt-2">,00</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">à vista ou em até 12x no cartão</p>
            <p className="mt-3 inline-block bg-secondary text-navy text-xs font-bold px-3 py-1 rounded-full">
              💰 Você economiza R$ 170,00
            </p>
          </div>
          <div className="mt-7"><CTA>Sim, quero começar a lucrar</CTA></div>
          <div className="mt-5"><TrustRow /></div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "O acesso é realmente imediato?", a: "Sim! Assim que o pagamento é confirmado, você recebe o acesso no seu e-mail em poucos minutos." },
    { q: "Preciso ter experiência prévia em cozinha?", a: "Não. O método foi feito para iniciantes. Tudo é explicado passo a passo, do básico ao avançado." },
    { q: "Posso assistir pelo celular?", a: "Sim. O material é 100% compatível com celular, tablet e computador." },
    { q: "O material é atualizado?", a: "Sim. Você tem acesso vitalício e recebe todas as atualizações futuras sem custo adicional." },
    { q: "Como recebo o acesso?", a: "Por e-mail, com login e senha para a área de membros exclusiva." },
    { q: "Existe garantia?", a: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-5 py-16 bg-cream">
      <SectionTitle kicker="Dúvidas">
        Perguntas <span className="text-primary">frequentes</span>
      </SectionTitle>
      <div className="mt-10 max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center gap-3 p-4 text-left font-bold text-navy"
            >
              {f.q}
              <ChevronDown size={20} className={`shrink-0 transition ${open === i ? "rotate-180 text-primary" : ""}`} />
            </button>
            {open === i && <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative px-5 py-16 bg-navy text-white overflow-hidden">
      <img src={heroImg} alt="Salgados profissionais" width={1024} height={1024} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="relative max-w-3xl mx-auto text-center">
        <Award className="mx-auto text-secondary mb-4" size={48}/>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight">
          Comece hoje. <span className="text-secondary">Lucre ainda esta semana.</span>
        </h2>
        <p className="mt-4 text-white/90 max-w-xl mx-auto">
          Você está a um clique de transformar sua cozinha em uma fonte real de renda. Não deixe essa oportunidade passar.
        </p>
        <div className="mt-7 max-w-md mx-auto"><CTA>Quero garantir meu acesso</CTA></div>
        <div className="mt-5"><TrustRow light /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--brand-red-dark)] text-white/80 text-xs text-center py-8 px-4 space-y-2">
      <div className="flex flex-wrap justify-center gap-5">
        <span className="flex items-center gap-1"><Shield size={12}/> Compra segura</span>
        <span className="flex items-center gap-1"><Check size={12}/> Satisfação garantida</span>
        <span className="flex items-center gap-1"><Lock size={12}/> Privacidade protegida</span>
        <span className="flex items-center gap-1"><Clock size={12}/> Acesso imediato</span>
      </div>
      <p>© 2026 Segredos dos Salgados Lucrativos. Todos os direitos reservados.</p>
      <p className="text-white/60 max-w-2xl mx-auto">Este produto não garante a obtenção de resultados. Qualquer referência a renda é apenas ilustrativa.</p>
    </footer>
  );
}
