const Categories = ({ catbtn, find }) => {
  return (
    <div className="btn-container">
      {catbtn.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => find(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
export default Categories
