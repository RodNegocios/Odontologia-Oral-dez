import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon';

export default function Doctor({ reduced }) {
  const scene = useRef(null);
  const controller = useRef(null);
  const [Effect, setEffect] = useState(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const onUnavailable = useCallback(() => setFailed(true), []);
  const interactive = !reduced && !failed;
  useEffect(() => {
    if (!interactive) {
      setReady(false);
      return;
    }
    let active = true;
    const watcher = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      watcher.disconnect();
      import('./effects/Lanyard').then(module => {
        if (active) setEffect(() => module.default);
      }).catch(onUnavailable);
    }, { rootMargin: '220px' });
    watcher.observe(scene.current);
    return () => { active = false; watcher.disconnect(); };
  }, [interactive, onUnavailable]);

  const turn = () => {
    if (interactive && ready && controller.current) controller.current();
    else setFlipped(value => !value);
  };
  return (
    <section className="doctor section shell" id="doutor" aria-labelledby="doctor-title">
      <div className={'badge-scene' + (interactive && ready ? ' is-ready' : '')} ref={scene}>
        <div className="badge-halo" aria-hidden="true"/>
        <div className="static-badge">
          <img loading="lazy" src={'./media/cracha-' + (flipped ? 'verso' : 'frente') + '.webp'} width="640" height="900" alt={flipped ? 'Verso do crachá com o logotipo da Oral Dez' : 'Crachá com a foto do Dr. Ezequiel de Azevedo'}/>
        </div>
        {interactive && Effect && <Effect frontImage="./media/cracha-frente.webp" backImage="./media/cracha-verso.webp" cardColor="#f5f2e8" size={0.61} finish="matte" breeze={0} intro strapColor="#15514c" strapLength={0.38} metal="silver" controller={controller} onReady={onReady} onUnavailable={onUnavailable}/>}
        <button type="button" className="turn-badge" onClick={turn}><Icon name="flip" size={16}/> Virar crachá</button>
      </div>
      <div className="doctor-copy">
        <p className="eyebrow"><span/> O cirurgião-dentista</p>
        <h2 id="doctor-title">Dr. Ezequiel<br/><em>de Azevedo.</em></h2>
        <p>Natural de Assis Chateaubriand, no Paraná, o Dr. Ezequiel começou sua trajetória como técnico em prótese dentária. Formou-se em Odontologia pela Faculdade de Ciências Biomédicas de Cacoal.</p>
        <p>Hoje, atende na Oral Dez, em Vilhena, onde dedica tempo a ouvir a história de cada paciente.</p>
        <a className="text-link" href="#contato">Conheça a clínica <Icon name="arrow" size={17}/></a>
      </div>
    </section>
  );
}
