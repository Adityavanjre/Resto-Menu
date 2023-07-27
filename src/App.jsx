import { useState } from 'react'
import Title from './Title'
import menu from './data'
import Menu from './Menu'
import Categories from './Categories'

// const tempCategories = menu.map((item) => item.category)
// const tempSet = new Set(tempCategories)
// const tempItems = ['all', ...tempSet]
// console.log(tempItems)

const cate = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categoies, setCategories] = useState(cate)
  const filterItem = (category) => {
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItem = menu.filter((items) => items.category === category)
    setMenuItems(newItem)
  }

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories catbtn={categoies} find={filterItem} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
