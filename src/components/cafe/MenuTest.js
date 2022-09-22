import React from "react";

const MenuTest = ({ menuItems }) => {
	return (
		<>
			<div id='menu' className='section-center'>
				{menuItems.map((item) => {
					//por cada item vamos a destructurar sus propiedades, esto garantiza un acceso mas facil a los datos
					const { id, title, img, desc, price } = item;

					return (
						<article key={id} className='menu-item'>
							<img src={img} alt={title} className='photo' />
							<div className='item-info'>
								<div>
									<h4>{title}</h4>
									<h4 className='price'>${price}</h4>
								</div>
								<p className='item-text'>{desc}</p>
							</div>
						</article>
					);
				})}
			</div>
		</>
	);
};

export default MenuTest;
