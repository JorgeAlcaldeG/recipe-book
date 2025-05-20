type Props = {
    // id:number,
    text:string,
    img:string,
    // clickHandler:()=>string
}

export default function CatElement({text, img}: Props) {
  return (
    <div className="flex flex-row cursor-pointer border-solid border-2 border-stone-200 items-center p-1 ml-2 mr-2 mb-1 mt-1 text-center dark:shadow-stone-500 hover:shadow-lg bg-white dark:bg-stone-800 dark:border-stone-600">
        <div className="w-1/2">
            <p className="font-medium">{text}</p>
        </div>
        <div className="w-1/2">
            <img className="w-full" src={img} alt="" />
        </div>
    </div>
  )
}