import { Link } from 'react-router-dom'

const Image = ({AssestIcon, height, width, subRoute='', className}) => {
  return (
    <div className={className}>
      <Link to={`${subRoute}`}  aria-label="TrendlesLogo" >
        <img src={AssestIcon} alt='trendeleslogo' height={height} width={width} className={"object-contain"} />
      </Link>
    </div>
  )
}

export default Image  