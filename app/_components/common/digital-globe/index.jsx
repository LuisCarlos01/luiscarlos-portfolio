/**
 * @param {Object} props
 * @param {string} [props.className]
 */
export function DigitalGlobe({ className = '' }) {
  const classes = ['digital-globe', className].filter(Boolean).join(' ');

  return (
    <div className={classes} aria-hidden='true'>
      <div className='digital-globe__wrap'>
        <div className='digital-globe__circle' />
        <div className='digital-globe__circle' />
        <div className='digital-globe__circle' />
        <div className='digital-globe__circle-horizontal' />
        <div className='digital-globe__circle-horizontal-middle' />
      </div>
    </div>
  );
}
