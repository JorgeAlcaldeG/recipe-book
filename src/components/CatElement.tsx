type Props = {
    // id:number,
    text:string,
    img:string,
    // clickHandler:()=>string
}

export default function CatElement({text, img}: Props) {
  return (
    <div className="flex flex-row items-center p-2 text-center">
        <div className="w-1/2">
            <p className="font-medium">{text}</p>
        </div>
        <div className="w-1/2">
            <img className="w-full" src={img} alt="" />
        </div>
    </div>
  )
}