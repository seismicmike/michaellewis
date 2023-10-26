/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  safelist: [],
  theme: {
    screens: {
      xxs: '384px',
      xs: '512px',
      sm: '672px',
      md: '896px',
      lg: '1152px',
      xl: '1440px',
      xl2: '1760px',
      xl3: '2112px'
    },
    colors: {
      // https://coolors.co/2274a5-e7dfc6-e9f1f7-131b23-816c61
      transparent: 'transparent',
      current: 'currentColor',
      black: { 100: '#000000' },
      'rich-black': {
        50: '#1d2935',
        '075': '#131b23', // Called "Rich Black"
        '085': '#0e141b',
        100: '#070a0d'
      },
      blue: {
        '010': '#99cdea',
        '020': '#88c4e7',
        '030': '#78bce3',
        '040': '#67b3e0',
        '050': '#56abdc',
        '060': '#45a3d9',
        '070': '#349ad5',
        '080': '#2a90cb',
        '090': '#2684ba',
        100: '#2274A5' // Called UCLA Blue
      },
      pearl: {
        '025': '#f9f7f1',
        '050': '#f3efe2',
        '075': '#ede7d4',
        100: '#E7DFC6' // Called "Pearl" on the palette.
      },
      gray: {
        100: '#e9f1f7' // Called "Alice Blue on the palette"
      },
      // https://coolors.co/2274a5-e7dfc6-e9f1f7-131b23-a1869e
      purple: {
        '010': '#f6f3f6',
        '025': '#d3c5d1',
        '050': '#A186de',
        '075': '#8A6A87',
        100: '#453543'
      },
      copper: {
        '010': '#c2b5ae',
        '015': '#b9aaa2',
        '025': '#b09f96',
        '035': '#a7958b',
        '050': '#9f8a7f',
        '065': '#967f73',
        '075': '#8c7569',
        100: '#806b60' // Called "Cinereous"
      },
      white: { 100: '#ffffff' }
    },
    fontFamily: {
      franklin: ['Libre Franklin', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif']
    },
    fontSize: {
      xs: ['.5rem', '1rem'], // 8px 16px cookie banner
      xs2: ['.625rem', '.875rem'], // 10px 14px utility nav
      xs3: ['.625rem', '1rem'], // 10px 22px export PDF
      xs4: ['.625rem', '1.375rem'], // 10px 22px export PDF
      sm: ['.75rem', '1rem'], // 12px 16px Jump Links, disclosures
      sm2: ['.875rem', '1rem'], // 14px 16px
      sm3: ['.875rem', '1.125rem'], // 14px 18px
      sm4: ['1rem', '1.375rem'], // 16px 22px
      sm5: ['1.125rem', '1.5rem'], // 18px 24px
      md: ['1.375rem', '1.75rem'], // 22px 28px
      md2: ['1.375rem', '2.1875rem'], // 22px 35px
      md3: ['1.5rem', '2.375rem'], // 24px 38px
      md4: ['1.75rem', '2.1875rem'], // 28px 35px
      md5: ['1.75rem', '2.375rem'], // 28px 38px
      lg: ['2rem', '2.375rem'], // 32px 38px
      lg2: ['2rem', '2.75rem'], // 32px 44px
      lg3: ['2.375rem', '2.375rem'], // 38px 38px
      lg4: ['2.375rem', '3rem'], // 38px 48px
      xl: ['2.875rem', '3rem'], // 46px 48px
      xxl: ['3.125rem', '3.875rem'], // 50px 62px
      xxl2: ['4rem', '5rem'], // 50px 62px
      xxl4: ['6rem', '8rem'] // 50px 62px
    },
    extend: {
      spacing: {
        18: '4.5rem' // 72px
      },
      borderRadius: {
        0: 0, // 0px
        1: '0.25rem', // 4px
        2: '0.5rem', // 48px
        3: '0.75rem', // 12px
        4: '1rem', // 16px
        5: '1.25rem', // 20px
        6: '1.5rem', // 24px
        7: '1.75rem', // 28px
        8: '2rem', // 32px
        9: '2.25rem', // 36px
        10: '2.5rem', // 40px
        11: '2.75rem', // 44px
        12: '3rem', // 48px
        13: '3.25rem', // 52px
        14: '3.5rem', // 56px
        15: '3.75rem', // 60px
        16: '4rem', // 64px
        17: '4.25rem', // 68px
        18: '4.5rem', // 72px
        19: '4.75rem', // 76px
        20: '5rem' // 80px
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))'
      },
      width: {
        25: '6.25rem', // 100px
        27: '6.75rem', // 108px
        37.5: '9.375rem', // 150px
        38: '9.5rem', // 152px
        62: '15.5rem', // 248px
        114: '28.5rem' // 458px
      },
      height: {
        37.5: '9.375rem' // 150px
      },
      borderWidth: {
        5: '5px'
      },
      flex: {
        'f-16': '0 0 4rem',
        'f-20': '0 0 5rem'
      },
      maxWidth: {
        '30p': '30%',
        '35p': '35%',
        '40p': '40%',
        '50p': '50%',
        '55p': '55%',
        '60p': '60%',
        '65p': '65%',
        '70p': '70%',
        '75p': '75%',
        '80p': '80%',
        '85p': '85%',
        '90p': '90%'
      },
      padding: {
        4.5: '1.125rem' // 18px
      },
      margin: {
        4.5: '1.125rem' // 18px
      },
      zIndex: {
        9999: '9999'
      }
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)'
        },
        '.container': {
          maxWidth: '100%',
          '@screen xxs': {
            '--container-size': '384px',
            maxWidth: '384px'
          },
          '@screen xs': {
            '--container-size': '480px',
            maxWidth: '480px'
          },
          '@screen sm': {
            '--container-size': '640px',
            maxWidth: '640px'
          },
          '@screen md': {
            '--container-size': '832px',
            maxWidth: '832px'
          },
          '@screen lg': {
            '--container-size': '1088px',
            maxWidth: '1088px'
          },
          '@screen xl': {
            '--container-size': '1312px',
            maxWidth: '1312px'
          },
          '@screen xl2': {
            '--container-size': '1632px',
            maxWidth: '1632px'
          },
          '@screen xl3': {
            '--container-size': '1856px',
            maxWidth: '1856px'
          }
        },
        '.half-container': {
          maxWidth: '100%',
          '@screen xxs': {
            maxWidth: '192px'
          },
          '@screen xs': {
            maxWidth: '240px'
          },
          '@screen sm': {
            maxWidth: '320px'
          },
          '@screen md': {
            maxWidth: '416px'
          },
          '@screen lg': {
            maxWidth: '544px'
          },
          '@screen xl': {
            maxWidth: '656px'
          },
          '@screen xl2': {
            maxWidth: '816px'
          },
          '@screen xl3': {
            maxWidth: '928px'
          }
        },
        '.forty-container': {
          maxWidth: '100%',
          '@screen xxs': {
            maxWidth: '153px'
          },
          '@screen xs': {
            maxWidth: '192px'
          },
          '@screen sm': {
            maxWidth: '256px'
          },
          '@screen md': {
            maxWidth: '332px'
          },
          '@screen lg': {
            maxWidth: '435px'
          },
          '@screen xl': {
            maxWidth: '524px'
          },
          '@screen xl2': {
            maxWidth: '652px'
          },
          '@screen xl3': {
            maxWidth: '742px'
          }
        },
        '.sixty-container': {
          maxWidth: '100%',
          '@screen xxs': {
            maxWidth: '230px'
          },
          '@screen xs': {
            maxWidth: '288px'
          },
          '@screen sm': {
            maxWidth: '384px'
          },
          '@screen md': {
            maxWidth: '499px'
          },
          '@screen lg': {
            maxWidth: '652px'
          },
          '@screen xl': {
            maxWidth: '787px'
          },
          '@screen xl2': {
            maxWidth: '979px'
          },
          '@screen xl3': {
            maxWidth: '1113px'
          }
        }
      });
    }
  ]
};
