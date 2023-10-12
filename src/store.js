import {persistentAtom} from '@nanostores/persistent'
// import {atom} from 'nanostores'

const theme = persistentAtom('theme','dark')
// const theme = atom('dark')

const toggleTheme = () => {
    const change = theme.get() === 'light' ? 'dark' : 'light'
    theme.set(change)

    const body = document.querySelector('body')
    body.className = change === 'dark' ? 'bg-dark-1' : 'bg-light-1'

    const popupElements = document.querySelectorAll('.popup')
    popupElements.forEach(element => {
        element.style.backgroundColor = change === 'dark' ? '#03001C' : '#5B8FB9'
    });
}

export {
    theme,
    toggleTheme
}