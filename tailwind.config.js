module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Lato', 'ui-sans-serif', 'system-ui', '"Segoe UI"', 'sans-serif'],
      "serif": ['Gelasio', 'Georgia', 'Cambria', 'serif']
    },
    extend: {
      typography: (theme) => ({
        light: {
          css: [
            {
              color: theme('colors.gray.300'),
              '[class~="lead"]': {
                color: theme('colors.gray.200'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.500'),
              },
              hr: {
                borderColor: theme('colors.gray.200'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.500'),
              },
              h1: {
                color: theme('colors.gray.100'),
              },
              h2: {
                color: theme('colors.gray.100'),
              },
              h3: {
                color: theme('colors.gray.100'),
              },
              h4: {
                color: theme('colors.gray.100'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
