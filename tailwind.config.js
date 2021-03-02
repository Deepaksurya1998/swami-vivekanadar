module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: { 
        backgroundImage: theme => ({
        'hero-pattern': "url('../../assets/images/front.jpg')",
        'about-banner': "url('../../assets/images/banner/af82b1b22f25aa21e8cc3f8b9268ae74.jpg')",
        'contact-banner': "url('../../assets/images/banner/b75441f975ac0b5fbcf7c073b1c58baf.jpg')",
        
       })},
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
