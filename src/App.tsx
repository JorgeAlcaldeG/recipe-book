import './App.css'
import UseCategory from './hooks/UseCategory'
import CatContainer from './components/CatContainer';
import TopBar from './components/TopBar';
function App() {
  const {categories,getCategory} = UseCategory();
  // console.log(getCategory(1))
  // console.log(categories)
  return (
    <div className='h-screen flex w-full flex-row bg-stone-100 text-black dark:bg-stone-700 dark:text-white'>
      <div className='w-1/6 overflow-y-auto h-full'>
        <h1 className='text-center text-xl font-bold m-2'>Categories</h1>
        <hr className='w-5/6 m-auto border-1 border-stone-700 dark:border-stone-100' />
        <CatContainer categories={categories} />
      </div>
      <div className='relative w-5/6 overflow-y-auto h-full'>
        <TopBar />
      </div>
    </div>
  )
}

export default App
