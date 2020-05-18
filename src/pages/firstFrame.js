import Grid from "@material-ui/core/Grid"
import AvatarDrawn from "../components/avatarDrawn"
import AvatarReal from "../components/avatarReal"
import React from "react"
import styled from "styled-components"
import { Colors } from "../contants/Colors"
import Icon from "@mdi/react"
import { mdiArrowDown, mdiCursorPointer } from "@mdi/js"

const ContainerScreen = styled.div`
  height: 100vh;
  padding: 10% 0;
  position: relative;
`

const Arrow = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`
const Title = styled.div`
  font-family: Montserrat;
  font-weight: 300;
  font-size: 4.5rem;
  margin-bottom: 5rem;
  line-height: 4.5rem;
  color: ${Colors.SECONDARYTEXT};
`
const Subtitle = styled.div`
  font-family: Montserrat;
  font-weight: 300;
  text-align: center;
  font-size: 2.625rem;
  margin-bottom: 10rem;
  line-height: 2.625rem;
  color: ${Colors.PRIMARYTEXT};
`
const B = styled.span`
  font-weight: 400;
  color: ${Colors.SECONDARYTEXT};
`

const ImageContainer = styled.div`
  border: 2px solid #000000;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  border-radius: 900px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const HideAnimation = styled.div`
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 1s ease-in-out;
`
const AvatarRealAbsolute = styled.div`
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 1s ease-in-out;
  position: absolute;
  height: 100%;
  top: 0;
  width: 100%;
`
const Text = styled.div`
font-family: Montserrat;
font-size: 1.5rem;
line-height: 1.5rem;
  color: ${Colors.PRIMARYTEXT};
text-align: center;
`

const Tutorial = styled.div`
  background: rgba(0, 0, 0, 0.6);
    height: 100%;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 1s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
`

const FirstFrame = ({ mouseHouver, setMouseHouver }) => {
  return (
    <ContainerScreen>
      <Grid container justify={"center"} alignItems={"center"} style={{
        "margin-bottom": "10rem"
      }}>
        <Grid item md={7} xs={12}>
          <Title id={"title"}/>
        </Grid>
        <Grid item md={3} xs={7} sm={6}>
          <ImageContainer onMouseOver={() => {
            setMouseHouver(true)
          }} onMouseOut={() => {
            setMouseHouver(false)
          }}>
            <HideAnimation show={!mouseHouver}><AvatarDrawn/></HideAnimation>
            <AvatarRealAbsolute show={mouseHouver}><AvatarReal/></AvatarRealAbsolute>
            <Tutorial show={mouseHouver === null}>
              <Icon path={mdiCursorPointer} size={3} color={"white"}/>
            </Tutorial>
          </ImageContainer>
        </Grid>
      </Grid>

      <Grid container justify={"center"} alignItems={"center"}>
        <Grid item xs={12}>
          <Subtitle>Me chamo <B>Gustavo Costa</B> e sou desenvolvedor <B>web e mobile.</B></Subtitle>
        </Grid>
      </Grid>

      <Arrow>
        <Grid container justify={"center"} alignItems={"center"}>
          <Grid item xs={12}>
            <Text>Para saber mais, role para baixo</Text>
          </Grid>
          <Grid item>
            <Icon path={mdiArrowDown} size={1} color={Colors.SECONDARYTEXT} style={{ margin: "1rem 0" }}/>
          </Grid>
        </Grid>
      </Arrow>
    </ContainerScreen>
  )
}

export default FirstFrame