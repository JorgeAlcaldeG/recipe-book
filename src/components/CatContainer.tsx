import CatElement from "./CatElement";
import type { Category } from "../types/category";

type Props = {
    categories:Category[]
}

export default function CatContainer({categories}: Props) {
  return (
    <div className="flex flex-col flex-wrap mt-2 mb-2">
        {
        categories?.map(cat =>(
          <CatElement text={cat.strCategory} key={cat.idCategory} img={cat.strCategoryThumb} route="/cat"/>
        ))
      }
    </div>
  )
}