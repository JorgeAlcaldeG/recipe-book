import CatElement from "./CatElement";
export interface Category {
  idCategory:             string;
  strCategory:            string;
  strCategoryThumb:       string;
  strCategoryDescription: string;
}
type Props = {
    categories:Category[]
}

export default function CatContainer({categories}: Props) {
  return (
    <div className="flex flex-col flex-wrap">
        {
        categories?.map(cat =>(
          <CatElement text={cat.strCategory} key={cat.idCategory} img={cat.strCategoryThumb} />
        ))
      }
    </div>
  )
}