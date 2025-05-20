import UseDarkMode from "../hooks/UseDarkMode"
import MoonIcon from "./MoonIcon"
import SunIcon from "./SunIcon"
type Props = {}

export default function TopBar({}: Props) {
    const {darkMode, toggleDarkMode} = UseDarkMode();
    const iconStyle = 'w-2/3 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 inline-block text-stone-900 dark:text-stone-300 hover:text-blue-900 dark:hover:text-yellow-500'

    return (
        <div className="absolute top-0 w-full">
            <div className="mx-auto w-1/2 flex flex-row items-center p-4 rounded-b-xl bg-white border-solid border-2 border-stone-200 dark:bg-stone-800 dark:border-stone-600">
                <form className="w-full">
                    <input className="w-5/6 bg-stone-100 dark:bg-stone-600" type="text" name="" id="" />
                    <button type="submit">Buscar</button>
                </form>

                <button onClick={toggleDarkMode}>
                    {darkMode ? <SunIcon style={iconStyle} /> : <MoonIcon style={iconStyle} />}
                </button>
            </div>
        </div>
    )
}