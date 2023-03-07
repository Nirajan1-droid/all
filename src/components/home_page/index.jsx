import React from 'react'
import Navbar from "../common/navbar"
import BuyBar from "../common/buybar"
import Hero from "./hero_section"
import FeatureIconSection from "./feature_icon_section"
import SpeakerSection from "./speaker_section"
import NoiseCancelSection from './noise_cancel_section'
import ComfortSection from './comfort_section'
import TouchFeature from './touch_feature'
import PowerSection from './power_section'
import ConnectivitySection from './connectivity_section'
import TestimonialSection from './testimonial_section'
import BadgeSection from './badge_section'
import DevileryPartner from './delivery-partner'
import Footer from "../common/footer"

export default function HomePage()
{
	return (
		<div id="home__id" className="home__page">
			<Navbar/>
			<BuyBar/>
			<Hero/>
			<FeatureIconSection/>
			<SpeakerSection/>
			<NoiseCancelSection/>
			<ComfortSection/>
			<TouchFeature/>
			<PowerSection/>
			<ConnectivitySection/>
			<TestimonialSection/>
			<DevileryPartner/>
			<BadgeSection/>
			<Footer/>
		</div>
	);
}