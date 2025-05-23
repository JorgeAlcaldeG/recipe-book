import { useEffect, useState } from "react";
import type { Category, Categories } from "../types/category";

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

