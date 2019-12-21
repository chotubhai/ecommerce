import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/header";
import BackPllText from "./components/BackPllText/BackPllText"; //background parallal and text
import BackPllText2 from "./components/BackPllText2/BackPllText"; //background parallal and text
import LImgandRText from "./components/LImgandRText/LImgandRText"; //right text and left img
import PllBackText from "./components/parallaxBackandText/parallaxBackandText"; //parallax background and text
import LtextandrImg from "./components/LtextandrImg/LtextandrImg"; //left img and r text
import ThreeColGrid from "./components/ThreeColGrid/ThreeColGrid"; // three grid with img
// import twoColGrid from "./components/twoColumnGrid/twoColumnGrid";
const App = () => {
  //leave backgroundposition blank string for left-right movement
  function parallax(
    toMove,
    parent,
    start = 300,
    background = false,
    backgroundPosition = "center"
  ) {
    if (!background) {
      var heroTop = toMove.getBoundingClientRect().top;
      // var parentTop =
      // parent.getBoundingClientRect().top;
      // var topDiff = heroTop - parentTop;
      if (heroTop + 20 < 0) {
        toMove.style.opacity = 0.3;
        return;
      } else {
        toMove.style.opacity = 1;
      }
      var yPos = window.pageYOffset;
      // console.log({yPos,parent,heroTop})
      //  var top = (yPos - parentTop/100) - topDiff;
      //  toMove.style.top = top + 'vh';

      // toMove.style.top = start - yPos / 4 + "px";previous parallax function
    } else {
      var yPos = window.scrollY;
      toMove.style.backgroundAttachment = "fixed";
      toMove.style.backgroundPosition = `${backgroundPosition} ${50 -
        yPos / 5}px`;
    }
  }
  function parallax1(
    toMove,
    parent = null,
    start = 80,
    background = false,
    backgroundPosition = "center"
  ) {
    if (!background) {
      var heroTop = toMove.getBoundingClientRect().top;
      var parentTop = parent.getBoundingClientRect().top;
      var topDiff = heroTop - parentTop;
      var winHeigth = window.innerHeight;
      var winWidth = window.innerWidth;
      if (heroTop + 20 < 0) {
        toMove.style.opacity = 0.3;
        return;
      } 
      else {
        toMove.style.opacity = 1;
      }
     start = winHeigth<420 ? 20:start;
      var top = (parentTop / window.innerHeight) * topDiff;
      toMove.style.top = start + top + "px";

      // toMove.style.top = start - yPos / 4 + "px";previous parallax function
    } else {
      var yPos = window.scrollY;
      toMove.style.backgroundAttachment = "fixed";
      toMove.style.backgroundPosition = `${backgroundPosition} ${50 -
        yPos / 5}px`;
    }
  }
  return (
    <Router>
      <Header pathname={window.location.pathname} />
      <BackPllText parallax={parallax1}>
        <a href="./">Link Here &#8594;</a>
      </BackPllText>
      <PllBackText parallax={parallax1} />
      <LImgandRText parallax={parallax} />
      <LtextandrImg parallax={parallax} />
      <BackPllText2 parallax={parallax}>
        <a href="./">Link Here &#8594;</a>
      </BackPllText2>
      <ThreeColGrid
        header={["Headphones", "Speakers", "Televisions"]}
        imgSrc={[
          "./media/A9-smoked.png",
          "./media/A9-smoked.png",
          "./media/A9-smoked.png"
        ]}
        buttonText={["View All", "View All", "View All"]}
      />
      {/* <twoColGrid imgSrc="./media/mail.png"/> */}
    </Router>
  );
};
export default App;
