import Section1 from '@component/landing/Section1'
import { Box } from '@material-ui/system'

const IndexPage = () => {
  return (
    <Box id="top" overflow="hidden" bgcolor="background.paper" sx={{background: 'black'}}>
      <Section1 />
      {/*<Section2 />
      <Section3 />
      <Section4 /> 
      <Footer /> */}
    </Box>
  )
}

export default IndexPage
