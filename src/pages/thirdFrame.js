import Grid from "@material-ui/core/Grid"
import React from "react"
import styled from "styled-components"
import { Colors } from "../contants/Colors"
import { timeline } from "../contants/timeline"
import Box from "@material-ui/core/Box"

const ContainerScreen = styled.div`
  min-height: 100vh;
  padding: 10% 0;
    position: relative;
`

const ContainerTimeline = styled.div`
  min-height: 100vh;
  padding: 10% 0;
  position: relative;
`

const Title = styled.div`
  font-family: Montserrat;
  font-weight: 300;
  font-size: 4rem;
  text-align: center;
  margin-top: 2rem;
  line-height: 4rem;
  color: ${Colors.SECONDARYTEXT};
`
const Text = styled.div`
  font-family: Montserrat;
  font-weight: 300;
  font-size: 2rem;
  margin-top: 2rem;
  line-height: 2.5rem;
  color: ${Colors.PRIMARYTEXT};
  
  b{
  font-weight: 400;
  color: ${Colors.SECONDARYTEXT};
  }
`
const ImageContainer = styled.div`
border: 2px solid #000000;
width: 303px;
    position: relative;
    max-height: 225px;
    height: 100%;
    overflow: hidden;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;

  .gatsby-image-wrapper{
    display: contents;
    }
`

const FlexAlignCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Line = styled.div`
  position: absolute;
  height: 150%;
  width: 3px;
  top: ${props => props.first && "50%"};
  bottom: ${props => props.last && "50%"};
  left: calc(50% - 1px);
  background: ${Colors.PRIMARYTEXT};
`

const Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 20px;
  z-index: 1;
  background: ${Colors.SECONDARYTEXT};
`


const ThirdFrame = () => {
  return (
    <ContainerScreen>
      <Grid container justify={"center"} alignItems={"center"} style={{
        "margin-bottom": "5rem"
      }}>
        <Grid item xs={12}>
          <Title>Minha linha do tempo</Title>
        </Grid>
      </Grid>

      <ContainerTimeline>
        {timeline.map((line, index) => {
          return <Grid container justify={"center"} alignItems={"center"}
                       direction={index % 2 === 0 ? "row" : "row-reverse"}
                       style={{ margin: "5rem 0 ", position: "relative" }}>
            <Grid item xs={10} md={5}>
              <FlexAlignCenter>
                <ImageContainer>{line.image()}</ImageContainer>
              </FlexAlignCenter>
            </Grid>
            <Box
              component={Grid}
              item
              xs={3}
              md={2}
              display={{ xs: "none", md: "block" }}
            >
              <FlexAlignCenter>
                <Dot/>
                <Line first={index === 0} last={index === timeline.length - 1}/>
              </FlexAlignCenter>
            </Box>
            <Grid item xs={8} md={5}>
              <Text>{line.text}</Text>
            </Grid>
          </Grid>
        })}
      </ContainerTimeline>


    </ContainerScreen>
  )
}
export default ThirdFrame