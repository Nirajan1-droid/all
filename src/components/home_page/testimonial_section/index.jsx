import React from 'react'
import {nanoid} from "nanoid"
import Card from "./card";
import Carousel from "./carousel";
import {data} from "./testimonial_data"
import "./style.css"
import Customer1 from "../../../img/testimonial_img/smith.jpeg"
import Customer2 from "../../../img/testimonial_img/tamanna.jpeg"
import Customer3 from "../../../img/testimonial_img/sudip.jpeg"
import Customer4 from "../../../img/testimonial_img/dolma.jpeg"
import Customer5 from "../../../img/testimonial_img/sadhana.jpeg"


export default function TestimonialSection()
{
	let customers = [
		Customer1,
		Customer2,
		Customer3,
		Customer4,
		Customer5,
	];
	let cards = data.map((testimonial, index) =>
		{
			return (
				{
				  key: nanoid(),
				  content: (
					<Card imagen={customers[index]} content={testimonial.content} fullName={testimonial.fullName} profession={testimonial.profession}/>
				  )
				}

			);
		});
	  return (
		<div className="testimonial__section--box flex__col flex__center">
				<div className="testimonial__title large__title--text">Hear From Our Customers</div>
			<div className="testimonial__section--container">
			<Carousel
				cards={cards}
				height="500px"
				width="100%"
				margin="0 auto"
				offset={200}
				showArrows={true}
			/>
			</div>
		</div>
	  );
}