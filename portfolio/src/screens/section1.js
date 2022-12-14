import "../styles/section1.css"

export function Screen1() {

    
    function fadeOutOnScroll(element) {
        if (!element) {
        console.log(element, "no element")
        return;
      }
      
      var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
      var elementHeight = element.offsetHeight;
      var scrollTop = document.documentElement.scrollTop;
      console.log(distanceToTop, elementHeight, scrollTop);
      
      var opacity = 1;
      
      if (scrollTop > distanceToTop) {
          opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
        }
        
        if (opacity >= 0) {
            element.style.opacity = opacity;
        }
    }
    
    function scrollHandler() {
        var contentContainer = document.getElementById('contentContainer');
      fadeOutOnScroll(contentContainer);
    }
    
    window.addEventListener('scroll', scrollHandler);
    

    return (
        <section className="fullpageContainer" id="fullpageContainer"> 
        <div className="mainContentContainer" id="contentContainer">
            <h5>(Full-Stack Web Developer)</h5>
            <div className="leftContainer">
                <div className="verticalText">
                    <h3>U</h3>
                    <h3>S</h3>
                    <h3>T</h3>
                    <h3>I</h3>
                    <h3>N</h3>
                </div>
            </div>
            <div className="rightContainer">
                <div className="horizontalText">
                    <h3>A</h3>
                    <h3>Y</h3>
                    <h3>L</h3>
                    <h3>O</h3>
                    <h3>R</h3>
                </div>
            </div>
            {/* Tropical trees font */}
            {/* <a href="/"><img src="https://see.fontimg.com/api/renderfont4/d9VDV/eyJyIjoiZnMiLCJoIjoxMDcsInciOjEwMDAsImZzIjoxMDcsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/SlQ/palmsprings-personal-use-regular.png" alt="Logo fonts"/></a> */}
        </div>
        </section>
    )
}

export default Screen1;