import Grid from "@material-ui/core/Grid"
import React from "react"
import styled from "styled-components"
import { Colors } from "../contants/Colors"
import { tecnologias } from "../contants/tecnologias"

const ContainerScreen = styled.div`
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
const ImageContainer = styled.div`
  height: 120px;
  padding: 10px;
  width: 120px;
`
const FlexAlignCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SecondFrame = () => {
  return (
    <ContainerScreen>
      <Grid container justify={"center"} alignItems={"center"} style={{
        "margin-bottom": "10rem"
      }}>
        <Grid item xs={12}>
          <Title>Tecnologias com que trabalho</Title>
        </Grid>
      </Grid>
      <Grid container justify={"center"} alignItems={"center"} style={{
        "padding": "3rem 5rem"
      }}>
        {tecnologias.map(tecnologia => {
          return <Grid item xs={6} sm={4} md={2}>
            <FlexAlignCenter>
              <ImageContainer>
                {tecnologia.image && tecnologia.image()}
              </ImageContainer>
            </FlexAlignCenter>
          </Grid>
        })}
      </Grid>

    </ContainerScreen>
  )
}
export default SecondFrame