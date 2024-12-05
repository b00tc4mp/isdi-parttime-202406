const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, addComponents }) {
    addBase({
        ':root': {
            '--base-dark': '#1E3231',
            '--base-light': '#344c4a',
            '--focus': '#385655',
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
        'input, textarea': {
            backgroundColor: 'var(--base-light)',
            color: 'var(--text)',
            border: '0.01em solid var(--focus)',
            borderRadius: '0.05em',
            padding: '0.25rem 0.5rem'
        },
        'input::placeholder': {
            color: 'var(--text-dark)',
        },
        'input:focus-visible, textarea:focus-visible': {
            outline: '0.15rem solid var(--focus)'
        },
        'input[type="date"]': {
            maxWidth: '8.75rem',
            padding: '0.25rem 0.5rem'
        },
        'button': {
            border: '0.01em solid var(--focus)',
            borderRadius: '0.05em',
            boxShadow: '0.1rem 0.05rem var(--shadow)',
            padding: '0.25rem 0.5rem',
            fontWeight: '600'
        },
        'button:hover': {
            boxShadow: '0.01rem 0.01rem var(--shadow)',
            fontWeight: '700'
        },
        'a': {
            fontWeight: '500'
        },
        'a:hover': {
            textDecoration: 'underline'
        },
        'form': {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            border: '0.01em solid var(--focus)',
            borderRadius: '0.05em',
            boxShadow: '0.035rem 0.05rem var(--shadow)',
            padding: '0.5rem 1rem',
        }
    }),
        addComponents({
            '.container': {
                display: 'flex',
                flexDirection: 'column',
                padding: '3rem 1.5rem 2rem'
            }
        })
})
