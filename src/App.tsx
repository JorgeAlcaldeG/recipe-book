import './App.css'
import UseCategory from './hooks/UseCategory'
import CatContainer from './components/CatContainer';
function App() {
  const {categories,getCategory} = UseCategory();
  console.log(getCategory(1))
  // console.log(categories)
  return (
    <div>
      <CatContainer categories={categories} />
    </div>
  )
}

export default App
