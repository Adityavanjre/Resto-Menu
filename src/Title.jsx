const Title = ({ text }) => {
  return (
    <div className="title">
      <h2> {text || 'Defualt title'} </h2>
      <div className="title-underline"></div>
    </div>
  )
}
export default Title