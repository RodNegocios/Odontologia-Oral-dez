// Decorative variant of the supplied DriftWall. The track moves by one complete
// group, so the seam stays invisible at every responsive tile size.
const columns = [
  ['ezequiel-na-clinica', 'protese', 'fachada-640', 'implante'],
  ['prevencao', 'ezequiel', 'implante', 'fachada-640'],
  ['fachada-640', 'implante', 'ezequiel-na-clinica', 'protese'],
  ['implante', 'ezequiel-na-clinica', 'prevencao', 'ezequiel'],
  ['ezequiel', 'protese', 'fachada-640', 'prevencao']
];

export default function DriftWall({ running }) {
  return (
    <div aria-hidden="true" className={'drift-wall' + (running ? '' : ' is-paused')}>
      <div className="drift-plane">
        {columns.map((items, i) => (
          <div key={i} className="drift-column" style={{ '--duration': (69 + i * 7) + 's', '--delay': (-9 - i * 13) + 's' }}>
            <div className="drift-track">
              {[0, 1, 2].map(copy => (
                <div key={copy} className="drift-group">
                  {items.map(name => <img key={name} src={'./media/' + name + '.webp'} alt="" draggable="false" decoding="async" className={'tile-' + name}/>)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
