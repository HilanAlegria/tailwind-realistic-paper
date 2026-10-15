const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
  const paperUtilities = {
    '.paper-container': {
      width: '100%',
      maxWidth: '850px',
      height: '1100px',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 24px 38px 3px rgb(0 0 0 / 0.14)',
      flexShrink: '0',
    },
    '.paper-text-sync': {
      lineHeight: 'var(--line-height, 28px)',
      paddingTop: 'calc(var(--offset-top, 56px) + 0.15rem)',
      height: '100%',
      overflow: 'hidden',
      outline: 'none',
    },
    '.paper-lines': {
      '--line-height': '28px',
      '--line-color': '#cbd5e1',
      '--offset-top': '56px',
      backgroundImage: 'linear-gradient(transparent calc(var(--line-height) - 1px), var(--line-color) calc(var(--line-height) - 1px), var(--line-color) var(--line-height))',
      backgroundSize: '100% var(--line-height)',
      backgroundPosition: '0 var(--offset-top)',
    },
    '.paper-grid': {
      '--grid-size': '28px',
      '--line-color': '#cbd5e1',
      '--offset-top': '56px',
      backgroundImage: `
        linear-gradient(transparent calc(var(--grid-size) - 1px), var(--line-color) calc(var(--grid-size) - 1px), var(--line-color) var(--grid-size)),
        linear-gradient(90deg, transparent calc(var(--grid-size) - 1px), var(--line-color) calc(var(--grid-size) - 1px), var(--line-color) var(--grid-size))
      `,
      backgroundSize: '100% var(--grid-size), var(--grid-size) 100%',
      backgroundPosition: '0 var(--offset-top), 0 var(--offset-top)',
    },
    '.paper-dots': {
      '--dot-space': '28px',
      '--dot-size': '1.5px',
      '--dot-color': '#94a3b8',
      '--offset-top': '56px',
      backgroundImage: 'radial-gradient(circle, var(--dot-color) var(--dot-size), transparent calc(var(--dot-size) + 0.5px))',
      backgroundSize: 'var(--dot-space) var(--dot-space)',
      backgroundPosition: '0 calc(var(--offset-top) - (var(--dot-space) / 2))',
    },
    '.paper-texture': {
      backgroundColor: '#fdfdfc',
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E")`,
    },
    '.paper-margin-red': {
      backgroundImage: 'linear-gradient(90deg, transparent calc(4rem - 1px), #fca5a5 calc(4rem - 1px), #fca5a5 4rem, transparent 4rem)',
    },
    '.marker-yellow': {
      backgroundColor: '#fef08a',
      mixBlendMode: 'multiply',
      padding: '0 0.25rem',
      borderRadius: '2px',
    }
  };

  addUtilities(paperUtilities);
});