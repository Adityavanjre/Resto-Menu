import Menuitems from './Menuitems'

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <Menuitems key={menuItem.id} {...menuItem} />
      })}
    </div>
  )
}
export default Menu
