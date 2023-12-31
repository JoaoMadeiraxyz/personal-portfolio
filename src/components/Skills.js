import check from "../assets/img/check.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = ({ language }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const sectionTitleEnglish = "Skills"
  const tituloSecaoPortugues = "Habilidades"

  const sectionContentEnglish = "Those are some of the skill that I have acquired during my 3 years of web development and web design studies, as well as my 6 months of professional experience in these areas."
  const conteudoSecaoPortugues = "Essas são algumas das habilidades que eu obti durante meus 3 anos de estudo sobre desenvolvimento web e web design, e nos meus 6 meses de experiência profissional nessas áreas."

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>{language === "us" ? sectionTitleEnglish : tituloSecaoPortugues}</h2>
                        <p>{language === "us" ? sectionContentEnglish : conteudoSecaoPortugues}</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={check} alt="Check icon" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={check} alt="Check icon" />
                                <h5>Web Design</h5>
                            </div>
                            <div className="item">
                                <img src={check} alt="Check icon" />
                                <h5>UI Design</h5>
                            </div>
                            <div className="item">
                                <img src={check} alt="Check icon" />
                                <h5>UX Design</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="gradient background" />
    </section>
  )
}