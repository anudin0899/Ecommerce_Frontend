// ProductDetailsCarousel.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ProductCarousel.css";
import { generatedPublicUrl } from "../../../utilities/urlConfig";





const ProductDetailsCarousel = ({ img }) => {


  const renderCustomIndicator = (clickHandler, isSelected, index, label) => {
    return (
      <div
        style={{
          background: isSelected ? '#333' : '#fff',
          border: '1px solid #333',
          borderRadius: '50%',
          display: 'inline-block',
          height: 8,
          margin: '0 8px',
          width: 8,
          cursor: 'pointer'
        }}
        onClick={clickHandler}
        aria-label={`${label} ${index + 1}`}
        role="button"
        tabIndex={0}
      />
    );
  };

  const handleItemClick = (index, item) => {
    console.log(`Clicked on item ${index}`);
  };

  const handleChange = (index, item) => {
    // console.log(`Selected item is ${index}`);
  };



  return (
    <div className="product-carousel-container">
      <Carousel
        ariaLabel="Example Carousel"
        axis="horizontal"
        autoFocus={false}
        autoPlay={true}
        centerMode={false}
        centerSlidePercentage={50}
        dynamicHeight={false}
        emulateTouch={true}
        infiniteLoop={true}
        interval={3000}
        labels={{
          leftArrow: 'Previous Slide',
          rightArrow: 'Next Slide',
          item: 'Slide Item'
        }}
        onClickItem={handleItemClick}
        onChange={handleChange}
        onSwipeStart={() => console.log('Swipe started')}
        onSwipeEnd={() => console.log('Swipe ended')}
        onSwipeMove={() => console.log('Swiping')}
        preventMovementUntilSwipeScrollTolerance={true}
        // renderArrowPrev={(clickHandler, hasPrev, label) => (
        //   <button onClick={clickHandler} disabled={!hasPrev} aria-label={label}>
        //     Previous
        //   </button>
        // )}
        // renderArrowNext={(clickHandler, hasNext, label) => (
        //   <button onClick={clickHandler} disabled={!hasNext} aria-label={label}>
        //     Next
        //   </button>
        // )}
        renderIndicator={renderCustomIndicator}
        selectedItem={0}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={true}
        statusFormatter={(currentItem, totalCount) =>
          <span style={{ color: 'black', fontSize: "12px", letterSpacing: '1px', marginRight: '30px' }}>
            Slide {currentItem + 1} of {totalCount}
          </span>
        }
        stopOnHover={true}
        swipeable={true}
        swipeScrollTolerance={5}
        thumbWidth={80}
        transitionTime={500}
        useKeyboardArrows={true}
        verticalSwipe="standard"
        width="100%"
      >
        {img?.map((image, index) => (
          <img src={generatedPublicUrl(image?.img)} alt={image?._id} />
        ))}


      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
