import Slider from 'react-slick'

import './index.css'

import PlanetItem from '../PlanetItem'

const settings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="title">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
