import './App.css'
import UseCategory from './hooks/UseCategory'
import CatContainer from './components/CatContainer';
import TopBar from './components/TopBar';
import Home from './components/pages/Home';
import CatPage from './components/pages/CatPage';
import { Routes, Route } from 'react-router-dom';
import CatElement from './components/CatElement';
function App() {
  const {categories} = UseCategory();
  // console.log(getCategory(1))
  // console.log(categories)
  return (
    <div className='h-screen flex w-full flex-row bg-stone-100 text-black dark:bg-stone-700 dark:text-white transition-colors duration-300'>
      <div className='w-1/6 overflow-y-auto h-full'>
        <CatElement text={'Home'} key='home' img="/placeholder.png" route='/' />
        <h1 className='text-center text-xl font-bold m-2'>Categories</h1>
        <hr className='w-5/6 m-auto border-1 border-stone-700 dark:border-stone-100 transition-colors duration-300' />
        <CatContainer categories={categories} />
      </div>
      <div className='relative w-5/6 overflow-y-auto h-full'>
        <TopBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cat' element={<CatPage/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
