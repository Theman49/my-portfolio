
import {useStore} from '@nanostores/react'
import {theme, toggleTheme} from '@/store'

export default function ToggleTheme() {

    const $theme = useStore(theme)

    return (
        <div id="toggleTheme" className="flex gap-2 bg-gray-2 rounded-full py-1 px-2 opacity-80"  onClick={toggleTheme}>
            <div className={`
                    flex justify-center items-center p-1 rounded-full 
                    ${$theme !== 'dark' ? 'bg-gray-2' : 'bg-white'}
                `}>
                <i className={`cil-moon text-[30px] ${$theme !== 'dark' ? 'text-gray-2' : 'text-gray-1'}`}></i>
            </div>
            <div className={`
                flex justify-center items-center p-1 rounded-full 
                ${$theme !== 'light' ? 'bg-gray-2' : 'bg-white'}
                `}>
                <i className={`cil-sun text-[30px] ${$theme !== 'light' ? 'text-gray-2' : 'text-yellow-500'}`}></i>
            </div>
        </div>

    )

}