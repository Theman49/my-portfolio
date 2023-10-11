import {persistentAtom} from '@nanostores/persistent'
// import {atom} from 'nanostores'

const theme = persistentAtom('theme','dark')
// const theme = atom('dark')

const toggleTheme = () => {
    const change = theme.get() === 'light' ? 'dark' : 'light'
    theme.set(change)

    const body = document.querySelector('body')
    body.className = change === 'dark' ? 'bg-dark-1' : 'bg-light-1'
}

export {
    theme,
    toggleTheme
}