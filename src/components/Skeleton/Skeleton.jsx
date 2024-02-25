import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={0}
    width={280}
    height={475}
    viewBox="0 0 280 475"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="127" cy="117" r="117" /> 
    <rect x="10" y="273" rx="10" ry="10" width="245" height="66" /> 
    <rect x="10" y="239" rx="10" ry="10" width="245" height="16" /> 
    <rect x="164" y="359" rx="10" ry="10" width="95" height="24" /> 
    <rect x="0" y="359" rx="10" ry="10" width="95" height="24" />
  </ContentLoader>
)

export default Skeleton