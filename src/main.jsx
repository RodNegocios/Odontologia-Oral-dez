import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import DriftWall from './effects/DriftWall';
import ScrollStack, { ScrollStackItem } from './effects/ScrollStack';
import Doctor from './Doctor';
import Icon from './Icon';
import './style.css';

const whatsapp = 'https://wa.me/5569999820063';
const mapQuery = encodeURIComponent('Clínica Odontológica Oral Dez, Rua Moçambique, 6563, Parque São Paulo, Vilhena, RO');
const routes = [['Tratamentos', '#tratamentos'], ['O doutor', '#doutor'], ['Contato', '#contato']];
const treatments = [
  { name: 'Implantes dentários', image: 'implante', alt: 'Ilustração de uma coroa dentária e um implante', body: 'Converse sobre as opções para substituir dentes perdidos e recuperar conforto ao mastigar.' },
  { name: 'Próteses e reabilitação', image: 'protese', alt: 'Modelo ilustrativo de uma arcada dentária', body: 'Prótese total, troca ou adaptação. A avaliação considera o encaixe, o conforto e o que você precisa no dia a dia.' },
  { name: 'Saúde e prevenção', image: 'prevencao', alt: 'Escova de dentes sobre um apoio claro', body: 'Da prevenção de cáries às orientações sobre bruxismo, o cuidado começa com uma conversa sobre sua rotina.' }
];

function useMedia(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);
  return matches;
}

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    const dismiss = event => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const hashChanged = () => setOpen(false);
    window.addEventListener('keydown', dismiss);
    window.addEventListener('hashchange', hashChanged);
    return () => {
      window.removeEventListener('keydown', dismiss);
      window.removeEventListener('hashchange', hashChanged);
    };
  }, [open]);
  return <header className="topbar">
    <div className="nav-inner">
      <a className="brand" href="#inicio" aria-label="Oral Dez, início"><img src="./media/oral-dez.webp" width="130" height="64" alt="Oral Dez Odontologia"/></a>
      <nav className={'navigation' + (open ? ' is-open' : '')} id="main-nav" aria-label="Navegação principal">
        {routes.map(([label, target]) => <a href={target} key={target} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <div className="nav-actions"><a className="book-nav" href={whatsapp}><Icon name="whatsapp" size={18}/> Agendar <span>avaliação</span></a>
        <button ref={toggle} className="menu-button" type="button" aria-controls="main-nav" aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'}/></button>
      </div>
    </div>
  </header>;
}

function Hero({ reduced, visible, heroRef }) {
  const [paused, setPaused] = useState(false);
  return <section className="hero" id="inicio" ref={heroRef} aria-labelledby="main-title">
    <DriftWall running={visible && !reduced && !paused}/>
    <div className="hero-shade"/>
    <div className="hero-copy">
      <p className="eyebrow hero-kicker"><span/> Clínica odontológica <span/></p>
      <h1 id="main-title">Seu sorriso,<br/><em>em boas mãos.</em></h1>
      <p className="hero-summary">Odontologia em Vilhena, com tempo para ouvir<br className="desktop-break"/> e atenção a cada detalhe.</p>
      <a className="button-light" href={whatsapp}>Agendar minha avaliação <Icon name="diagonal" size={16}/></a>
    </div>
    <div className="hero-meta">
      <a className="explore" href="#tratamentos">Ver tratamentos <Icon name="down" size={15}/></a>
      {!reduced && <button type="button" className="motion-button" aria-label={paused ? 'Retomar animação de fundo' : 'Pausar animação de fundo'} title={paused ? 'Retomar animação' : 'Pausar animação'} onClick={() => setPaused(!paused)}><Icon name={paused ? 'play' : 'pause'} size={16}/></button>}
    </div>
  </section>;
}

function Treatments({ simple }) {
  const cards = treatments.map(({ name, body, image, alt }, index) =>
    <ScrollStackItem key={name} itemClassName={'treatment treatment-' + image}>
      <div className="treatment-copy">
        <span className="card-index" aria-label={'Tratamento ' + (index + 1) + ' de 3'}>0{index + 1} <span>/ 03</span></span>
        <h3>{name}</h3>
        <p>{body}</p>
        <a className="text-link" href={whatsapp + '?text=' + encodeURIComponent('Olá! Gostaria de agendar uma avaliação na Oral Dez sobre ' + name.toLowerCase() + '.')}>Conversar sobre o tratamento <Icon name="diagonal" size={16}/></a>
      </div>
      <img loading="lazy" src={'./media/' + (image === 'implante' ? 'implante-card' : image) + '.webp'} alt={alt} width="508" height="876"/>
    </ScrollStackItem>);
  return <section id="tratamentos" className="treatments section shell" aria-labelledby="treatment-title">
    <div className="section-intro"><div><p className="eyebrow"><span/> Tratamentos</p>
      <h2 id="treatment-title">Cuidado em <em>cada detalhe.</em></h2></div>
      <p>Conheça as opções de cuidado para a saúde, a função e a estética do seu sorriso.</p></div>
    {simple ? <div className="simple-stack">{cards}</div> :
      <ScrollStack useWindowScroll smoothScroll={false} stackPosition={32} itemStackDistance={15} itemDistance={35} holdDistance={65} dimAmount={0.12} itemScale={0.025}>{cards}</ScrollStack>}
  </section>;
}

function Contact() {
  const [mapOpen, setMapOpen] = useState(false);
  return <section className="contact section" id="contato" aria-labelledby="contact-title">
    <div className="contact-grid shell">
      <div className="contact-copy">
        <p className="eyebrow"><span/> Localização e contato</p>
        <h2 id="contact-title">Visite a <em>Oral Dez.</em></h2>
        <address>Rua Moçambique, 6563 · Parque São Paulo<br/>Vilhena, RO · CEP 76987-302</address>
        <dl className="hours"><div><dt>Segunda a sexta</dt><dd>8h às 12h e 14h às 18h</dd></div><div><dt>Sábado</dt><dd>8h às 12h</dd></div></dl>
        <a className="button-dark" href={whatsapp}><Icon name="whatsapp" size={19}/> (69) 99982-0063</a>
      </div>
      <div className="contact-visual">
        {mapOpen ? <iframe title="Localização da Oral Dez em Vilhena" src={'https://maps.google.com/maps?q=' + mapQuery + '&output=embed'} referrerPolicy="no-referrer-when-downgrade" allowFullScreen/> :
          <img loading="lazy" alt="Fachada da Clínica Oral Dez na Rua Moçambique, em Vilhena" src="./media/fachada.webp" srcSet="./media/fachada-640.webp 640w, ./media/fachada.webp 1250w" sizes="(max-width: 720px) 90vw, 50vw" width="1250" height="722"/>}
        <div className="map-actions"><button type="button" onClick={() => setMapOpen(!mapOpen)}><Icon name="pin" size={15}/>{mapOpen ? 'Ver fachada' : 'Ver mapa'}</button><a href={'https://www.google.com/maps/search/?api=1&query=' + mapQuery}>Como chegar <Icon name="diagonal" size={14}/></a></div>
      </div>
    </div>
  </section>;
}

function App() {
  const reduced = useMedia('(prefers-reduced-motion: reduce)');
  const short = useMedia('(max-height: 560px)');
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.intersectionRatio >= 0.05), { threshold: [0, 0.05] });
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);
  return <>
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <Header/>
    <main id="conteudo"><Hero visible={visible} heroRef={heroRef} reduced={reduced}/><Treatments simple={reduced || short}/><Doctor reduced={reduced}/><Contact/></main>
    <footer className="footer shell"><a className="brand" href="#inicio"><img src="./media/oral-dez.webp" width="100" height="50" alt="Oral Dez, voltar ao início"/></a><p>Clínica Odontológica Oral Dez · Vilhena, RO</p><a className="footer-social" href="https://www.instagram.com/oral_dez/">Instagram <Icon name="diagonal" size={14}/></a></footer>
    {!visible && <a className="floating" href={whatsapp} aria-label="Conversar com a Oral Dez no WhatsApp"><Icon name="whatsapp" size={25}/></a>}
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
