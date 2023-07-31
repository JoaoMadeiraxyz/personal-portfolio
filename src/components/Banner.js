import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = ({ language }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 700;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const welcomeEnglish = "Welcome to my Portfolio";
  const bemvindoPortugues = "Bem vindo ao meu Portfolio"

  const presentationEnglish = "Hi! I'm João. I'm a"
  const apresentacaoPortugues = "Olá! Eu sou o João. Eu sou um"

  const contentEnglish = "Hello and welcome to my portfolio! My name is João Victor, and I am from Brazil. I'm primarily a web developer, but I also have skills in web design and UI/UX design. I'm passionate about web development and web design, and I'm constantly striving to improve my skills and expand my knowledge in these areas."
  const conteudoPortugues = "Olá e bem vindo ao meu portfolio! Meu nome é João Victor, e eu sou do Brasil. Sou primáriamente um desenvolvedor web, mas também tenho conhecimento em web design e UI/UX design. Sou apaixonado por desenvolvimento web e web design, e estou constantemente buscando aprimorar minhas habilidades e expandir meu conhecimento nessas áreas."

  const buttonEnglish = "Let's Connect"
  const botaoPortugues = "Entrar em contato"

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">{language === "us" ? welcomeEnglish : bemvindoPortugues}</span>
                <h1>{language === "us" ? presentationEnglish : apresentacaoPortugues} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>{language === "us" ? contentEnglish : conteudoPortugues}</p>
                  <button onClick={() => window.open("https://www.linkedin.com/in/jo%C3%A3o-victor-madeira", "_blank")}>{language === "us" ? buttonEnglish : botaoPortugues} <ArrowRightCircle size={25} /></button>
              </div>} 
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}