import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I have aquired numerous skills throughout the years which a lot of are non-related to software here are my most relevant Skills.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Web development skill" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Penetration testing skill" />
                  <h5>Penetration testing</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Language skill" />
                  <h5>english, arabic and french</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Mobile and cross platform skill" />
                  <h5>mobile and cross platform</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Programming language skill" />
                  <h5>c,c++,assembly</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Game development skill" />
                  <h5>game Development(unity and unreal)</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="strip"></div>
      <div className="strip2"></div>
      <img className="background-image-left" src={colorSharp} alt="Background design" />
      <img className="background-image-right2" src={colorSharp2} alt="Background design" />
    </section>
  )
}
