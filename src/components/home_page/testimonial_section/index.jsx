import React from 'react'
import {nanoid} from "nanoid"
import Card from "./card";
import Carousel from "./carousel";
import {data} from "./testimonial_data"
import "./style.css"

export default function TestimonialSection()
{
	let cards = data.map(testimonial =>
		{
			return (
				{
				  key: nanoid(),
				  content: (
					<Card imagen={testimonial.person} content={testimonial.content} fullName={testimonial.fullName} profession={testimonial.profession}/>
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
				showArrows={false}
			/>
			</div>
		</div>
	  );
}