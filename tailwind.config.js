module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px',
      },
      colors: {
        'primary': '#1ED860',
        'secondary': '#2941AB',
      },
      backgroundImage: theme => ({
        'img-desk': 'url(\'/svg/bursts.svg\')',
        'img-tablet': 'url(\'/svg/bursts-tablet.svg\')',
        'img-mobile': 'url(\'/svg/bursts-mobile.svg\')',
      }),
      backgroundSize: {
        '175%': '175%',
        '153%': '153%',
        '215%': '215%',
      },
      backgroundPosition: {
        'banner-desk': '46% 4%',
        'banner-tablet': 'right 40% center',
        'banner-mobile': 'center top 40%',
      },
      fontSize: {
        '9xl': '9rem',
      },
    },
  },
  plugins: [],
}
