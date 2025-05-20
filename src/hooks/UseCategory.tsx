import { useEffect, useState } from "react";
export interface Categories {
    categories: Category[];
}

export interface Category {
    idCategory:             string;
    strCategory:            string;
    strCategoryThumb:       string;
    strCategoryDescription: string;
}
const APIURL:string = 'https://www.themealdb.com/api/json/v1/1/categories.php';


export default function UseCategory() {

    const [categories, setCategories] = useState<Category[]>([])

    useEffect(()=>{
        async function getCategories(){
            const response = await fetch(APIURL);
    
            if(!response.ok){
                throw new Error('error')
            }
    
            var data:Categories= await response.json();
            setCategories(data.categories)
        }
        getCategories()
    }, [])

    function getCategory(id: number): Category {
        return categories[id];
    }

    return {categories, getCategory};
}

