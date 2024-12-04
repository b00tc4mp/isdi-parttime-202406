const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase }) {
    addBase({
        ':root': {
            '--base-dark': '#1E3231',
            '--base-light': '#344c4a',
            '--shadow': '#485665',
            '--text-dark': '#8E7C93',
            '--text': '#D0A5C0',
            '--text-light': '#F6C0D0',
            '--danger': '#920000',
            '--danger-text': '#3d0000',
            '--success': '#0d4800',
            '--success-text': '#031200'
        },
        'body': {
            backgroundColor: 'var(--base-dark)',
            color: 'var(--text)',
        },
        'h1': {
            fontSize: '1.65em',
            color: 'var(--text-light)',
            fontWeight: '700'
        },
        'h2': {
            fontSize: '1.5em',
            color: 'var(--text-light)',
            fontWeight: '500'
        },
        'h3': {
            fontSize: '1.35em',
            color: 'var(--text)',
            fontWeight: '500'
        },
        'h4': {
            fontSize: '1.35em',
            color: 'var(--text)',
        },
        'h5': {
            fontSize: '1.15em',
            color: 'var(--text)',
        },
        'p': {
            paddingTop: '0.5rem',
            color: 'var(--text-dark)'
        },
        'input': {
            backgroundColor: 'var(--base-light)',
            color: 'red',
            border: '0.01em solid var(--base-red)',
            borderRadius: '0.05em',
        }
    })
})
