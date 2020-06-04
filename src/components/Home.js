import React,{Component} from 'react';
import Header from './Header';
import { Slide } from 'react-slideshow-image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel'
class Home extends Component{
    
    render(){
        // function ControlledCarousel() {
        //     const [index, setIndex] = useState(0);
        
          
        //     const handleSelect = (selectedIndex, e) => {
        //       setIndex(selectedIndex);
        //     }}
        const slideImages = [
            './images/img1.png',
            './images/img2.png',
            './images/img3.jpeg'
          ];
          const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true,
            pauseOnHover: true,
            onChange: (oldIndex, newIndex) => {
              //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
            }
          }
          const Slideshow = () => {
            return (
              <div className="slide-container">
                <Slide {...properties}>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                      <span>Slide 1</span>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                      <span>Slide 2</span>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                      <span>Slide 3</span>
                    </div>
                  </div>
                </Slide>
              </div>
            )
        }
        return(
            

                
            <div>
                 <Header/>
                <h1>This is sample react app</h1>
                {/* <h3>
                    This app contains two Component Form and Table
                </h3> */}
                <div>
                    <h3>Image carousel in react :</h3>
                    {/* <h5>
                        This Form Component explains how to use form elements and how componet handles form data using state.
                    </h5>
                    <h5>

                    </h5> */}
                    <div style={{marginTop:30,'background-color':'aqua'}} >

                   
                    <div className="col-xs-offset-5 col-xs-3"  >
                    <div>
                <Slide {...properties}>
                  <div >
                    <div >
                        <img src="./images/img1.png" height="250px" width="auto"/>
                      {/* <span>Slide 1</span> */}
                    </div>
                  </div>
                  <div>
                    <div>
                    <img src="./images/img2.png" height="250px" width="auto"/>
                      {/* <span>Slide 2</span> */}
                    </div>
                  </div>
                  <div>
                    <div>
                    <img src="./images/img3.jpeg" height="250px" width="auto"/>
                      {/* <span>Slide 3</span> */}
                    </div>
                  </div>
                </Slide>
              </div>
              {/* <Carousel>
                <div>
                    <img src="./images/img1.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./images/img2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./images/img3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
            {/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/img1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/img1.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/img1.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
 
                    </div>
                    </div>
                    <div className="row col-xs-12">
                        
                        <h3>App Intro:</h3>
                    </div>
                    <div className="row col-xs-12">
                        
                        <h3>This app contains two other components those are Form and Table</h3>
                    </div>
                    <div className="row col-xs-12">
                        
                        <h3>Form component explains how form is using and how form data is handled by component</h3>
                    </div>
                    <div className="row col-xs-12">
                        
                        <h3>Table component explains how data dynamically inserted into Datatable in react</h3>
                    </div>
                   
                </div>
            </div>
        );
    }
}
export default Home;