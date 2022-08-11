import React from "react"
import ContentLoader from "react-content-loader"

const ProjectLoader = (props) => (
  <ContentLoader 
    speed={0.5}
    width={'100%'}
    height={'100%'}
    viewBox="0 0 595 900"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="108" y="281" rx="3" ry="3" width="333" height="21" /> 
    <rect x="107" y="352" rx="3" ry="3" width="309" height="8" /> 
    <rect x="107" y="373" rx="3" ry="3" width="145" height="8" /> 
    <rect x="7" y="9" rx="0" ry="0" width="580" height="201" /> 
    <rect x="108" y="455" rx="0" ry="0" width="386" height="189" /> 
    <rect x="128" y="688" rx="0" ry="0" width="76" height="74" /> 
    <rect x="215" y="688" rx="0" ry="0" width="76" height="74" /> 
    <rect x="304" y="687" rx="0" ry="0" width="76" height="74" /> 
    <rect x="391" y="688" rx="0" ry="0" width="76" height="74" /> 
    <rect x="109" y="328" rx="3" ry="3" width="333" height="8" />
  </ContentLoader>
)

export default ProjectLoader