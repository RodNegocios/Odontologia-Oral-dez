const paths = {
  arrow: <><path d="M4 12h15m-6-6 6 6-6 6"/></>,
  diagonal: <><path d="M5 19 19 5M6 5h13v13"/></>,
  down: <><path d="M12 3v17m-6-6 6 6 6-6"/></>,
  pin: <><path d="M19.5 10c0 5.5-7.5 11-7.5 11S4.5 15.5 4.5 10a7.5 7.5 0 1 1 15 0Z"/><circle cx="12" cy="10" r="2.4"/></>,
  pause: <><path d="M8 5v14M16 5v14" strokeWidth="2.5"/></>,
  play: <path d="m8 4 12 8-12 8z"/>,
  menu: <path d="M3 7h18M3 16h18"/>,
  close: <path d="m5 5 14 14M19 5 5 19"/>,
  flip: <><path d="M5 8a8 8 0 0 1 14 1m0-5v5h-5M19 16a8 8 0 0 1-14-1m0 5v-5h5"/></>,
  whatsapp: <><path d="M20.5 11.7a8.6 8.6 0 0 1-12.8 7.6l-4.9 1.2L4 15.8a8.6 8.6 0 1 1 16.5-4.1Z"/><path d="M8.1 7.5c.3-.5 1.1-.4 1.3.1l.9 1.9c.2.5-.3.9-.7 1.3.7 1.5 1.8 2.6 3.5 3.2.4-.4.8-1.3 1.4-1.1l2 .9c.5.2.5.7.2 1.2-.7 1.3-2 1.4-3.3.9-2.6-.8-5.2-3.3-6.1-5.7-.3-1.1.1-2.1.8-2.7Z" strokeWidth="1.2"/></>
};

export default function Icon({ name, size = 20 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}
