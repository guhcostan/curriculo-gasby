import UflaLogo from "../components/uflaLogo"
import CompLogo from "../components/compLogo"
import LemafLogo from "../components/lemafLogo"
import EqualsLogo from "../components/equalsLogo"
import React from "react"

export const timeline = [
  {
    image: () => <UflaLogo/>,
    text:
      <span>Em 2015 ingressei na faculdade de Ciência da Computação pela <b>Universidade Federal de Lavras (UFLA)</b>.</span>
  },
  {
    image: () => <CompLogo/>,
    text: <span>Em 2018 tive minha primeira experiencia como desenvolvedor web, graças à <b>COMP Junior.</b></span>
  },
  {
    image: () => <LemafLogo/>,
    text: <span>Ainda em 2018, consegui um estágio no <b>Laboratório de estudo e manejo florestal (LEMAF)</b>, como desenvolvedor fullstack.</span>
  },
  {
    image: () => <EqualsLogo/>,
    text: <span>Em 2019 consegui meu primeiro emprego na empresa <b>EQUALS</b>, onde trabalho até hoje.</span>
  }
]