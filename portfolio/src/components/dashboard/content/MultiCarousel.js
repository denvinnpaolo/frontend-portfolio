import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import html5 from '../../../assets/html.png';
import css3 from '../../../assets/css.png';
import js from '../../../assets/javascript.png';
import reactredux from '../../../assets/reactredux.png';
import python from '../../../assets/python.png';
import node from '../../../assets/node.png';
import aws from '../../../assets/aws.png';




const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 7
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

const MultiCarousel = () => {
    return(
      <Carousel 
        responsive={responsive}
        ssr={true}
        sliderClass={true}
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1500}
        keyBoardControl={true}
        customTransition="transform"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
        deviceType={"desktop"}
        itemClass="carousel-item"
      >
          <img  src={html5}/>
          <img src={css3}/>
          <img src={js}/>
          <img src={reactredux}/>
          <img src={python}/>
          <img src={node} />
          <img src={aws} />
      </Carousel>
    );
};

export default MultiCarousel