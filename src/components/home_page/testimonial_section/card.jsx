import Styles from "./card.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import DoubleQuote from "../../../img/testimonial_img/double_quote.png"

function Card({ imagen, content, fullName, profession }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className={Styles.card + " testimonial__card flex__col flex__center"}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
		<div className="case__belt"></div>

      <img className="testimonial__person" src={imagen} alt="A Person" />
	  <div className="double__quote--up--box flex__row">
      	<img className="double__quote--up" src={DoubleQuote} alt="Double Quote" />
	  </div>
      <p className="testimonial__content medium__paragraph--text">{content}</p>
	  <div className="double__quote--down--box flex__row">
      	<img className="double__quote--down" src={DoubleQuote} alt="Double Quote" />
	  </div>
      <h2 className="testimonial__full--name subheading__title--text">{fullName}</h2>
      <h2 className="testimonial__profession mini__heading--text">{profession}</h2>
      <div className={Styles.btnn}>
      </div>
    </animated.div>
  );
}

export default Card;
