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
    <div>
        {
        categories?.map(cat =>(
          <p>{cat.strCategory}</p>
        ))
      }
    </div>
  )
}