import React from 'react'
import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/layout'

const IndexPage = props => (
<Layout>
  <div className="homepage text--secondary">
    <div className="header">
      <div className="container row header__wrap">
      <div className="col-12 col-md-6 header__logo">
        <Img fixed={props.data.imageOne.childImageSharp.fixed} style={{ position: `relative`}} />
        </div>
        <div className="col-12 col-md-6">
        <div className="header__phone ml-md-2 mt-sm-6 mt-xl-5">
          <p className="text--secondary mb-md-1 f-2">telefon</p>
          <h1 className="text--secondary mb-md-1 text--third"><b>777 110 065</b></h1>
          <p className="text--secondary f-2 header__phone__name">Numerolog Radovan Plachý</p>
        </div>
        </div>
      </div>
    </div>
    <div className="content container">
    <hr className="mt-2 mt-4-lg content__hr" />
      <h2 className="text-center pt-2 p-1 p-lg-2"><b>Tě bůh lidi,</b></h2>
      <p>
        jmenuji se Radovan Plachý a momentálně mě můžete slyšet na rádiu Impuls.
        Dříve jsem také působil na rádiu Frekvence 1 v pořadu Jitky Asterové.
        Tam jsem lidem zprostředkovával informace, které potřebovali vědět a
        taky na Věštírně rád poradím i Vám. Také mě najdete na{' '}
        <u><a href="http://www.vykladzive.cz" target="okenko">
          www.vykladzive.cz
        </a></u>
      </p>
      <p className="mt-2">
        Numerologii se věnuji od roku 1995, kdy mě ze dne na den pohltila. Čísla
        z data narození mně ukazují, jací lidé doopravdy jsou, ne jak se jeví
        navenek. Numerologie mě dovedla k mnohému poznání, ale především k tomu,
        že city a láska jsou základem našeho žití a bytí, a že bez lásky není
        svobody.
      </p>
      <hr className="mt-3 mt-lg-5" />
    </div>
    <div className="portfolio--bg">
    <div className="portfolio container text-center p-2 pb-2 pb-lg-5 mt-1 mt-lg-3">
      <p className="pb-2">Také jsem byl v pořadu Všechnopárty u Karla Šípa</p>
      <a href="http://www.ceskatelevize.cz/ivysilani-jako-driv/210522161600029-vsechnoparty/obsah/127960-radovan-plachy/"><Img
          fluid={props.data.imageTwo.childImageSharp.fluid} style={{ position: `relative` }} /></a>
      <a className="f-1" href="http://www.ceskatelevize.cz/ivysilani-jako-driv/210522161600029-vsechnoparty/obsah/127960-radovan-plachy/"
        target="okenko">
        Video - archív ČT
      </a>
    </div>
    </div>
    <div className="footer p-2">
      <div className="container footer__wrap">
        <div className="footer__left">
          © 2018 Radovan Plachý
        </div>
        <div className="footer-right">
          Vytvořil <a href="https://dollys.eu" title="Tvorba webu, Webdesign, Webové aplikace">
            Dollys
          </a>
        </div>
      </div>
    </div>
  </div>
</Layout>

)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 800) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imageTwo: file(relativePath: { eq: "karelsip.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`