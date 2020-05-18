import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import FirstFrame from "./firstFrame"
import SecondFrame from "./secondFrame"
import ThirdFrame from "./thirdFrame"
import Typewriter from "typewriter-effect/dist/core"

const IndexPage = () => {
  useEffect(() => {

    new Typewriter("#title", {
      strings: "Bem vindo ao meu curriculo.",
      autoStart: true,
      deleteChars: 0
    })

  }, [])

  const [mouseHouver, setMouseHouver] = useState(null)
  return (
    <Layout>
      <FirstFrame mouseHouver={mouseHouver} setMouseHouver={setMouseHouver}/>
      <SecondFrame/>
      <ThirdFrame/>
    </Layout>
  )
}

export default IndexPage
