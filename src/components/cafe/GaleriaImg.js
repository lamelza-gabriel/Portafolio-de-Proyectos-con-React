import React from "react";
import Img1 from "../../assets/cafe/1.jpg";
import Img2 from "../../assets/cafe/2.jpg";
import Img3 from "../../assets/cafe/3.jpg";
import Img4 from "../../assets/cafe/4.jpg";
import Img5 from "../../assets/cafe/5.jpg";
import Img6 from "../../assets/cafe/6.jpg";
import Img7 from "../../assets/cafe/7.jpg";
import Img8 from "../../assets/cafe/8.jpg";

const GaleriaImg = () => {
	return (
		<section id='galeria' className='galeria'>
			<div className='imgs-container'>
				<img src={Img1} alt='café' />
				<img src={Img2} alt='café' />
				<img src={Img3} alt='café' />
				<img src={Img4} alt='café' />
			</div>

			<div className='imgs-container'>
				<img src={Img5} alt='café' />
				<img src={Img6} alt='café' />
				<img src={Img7} alt='café' />
				<img src={Img8} alt='café' />
			</div>
		</section>
	);
};

export default GaleriaImg;
