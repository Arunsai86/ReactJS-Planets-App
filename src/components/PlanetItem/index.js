import './index.css'

const PlanetItem = props => {
  const {eachItem} = props
  const {imageUrl, name, description} = eachItem
  return (
    <div className="container">
      <img src={imageUrl} alt={`planet ${name}`} className="image-size" />
      <h1 className="heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
