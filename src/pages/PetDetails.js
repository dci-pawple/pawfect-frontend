import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";

import Dog1 from "../dummy/images/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg";
import Dog2 from "../dummy/images/alan-king-KZv7w34tluA-unsplash.jpg";
import Dog3 from "../dummy/images/charles-deluvio-Mv9hjnEUHR4-unsplash.jpg";
import Dog4 from "../dummy/images/charles-deluvio-pOUA8Xay514-unsplash.jpg";

const breakPoints = [
	{ width: 1, itemsToShow: 1, pagination: false },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];

const PetDetails = () => {
	return (
		<div className='app-container container pet__container'>
            
			<button className='btn-go-back'>
				<Link to='/'>Go Back</Link>
			</button>

			<Carousel
				itemsToShow={3}
				breakPoints={breakPoints}
				className='pet__gallery-container'>
				<div className='pet__image-container'>
					<img src={Dog1} alt='' />
				</div>
				<div className='pet__image-container'>
					<img src={Dog2} alt='' />
					<i class='fas fa-video'></i>
				</div>
				<div className='pet__image-container'>
					<img src={Dog3} alt='' />
				</div>
				<div className='pet__image-container'>
					<img src={Dog4} alt='' />
				</div>
				<div className='pet__image-container'>
					<img src={Dog1} alt='' />
				</div>
				<div className='pet__image-container'>
					<img src={Dog2} alt='' />
				</div>
				<div className='pet__image-container'>
					<img src={Dog3} alt='' />
				</div>
				<div className='pet__image-container'>
					<img src={Dog4} alt='' />
				</div>
			</Carousel>

			<div className='pet__content-container'>
				<div className='pet__info-container'>
					<h2>Hi, I am Henry</h2>
					<div className='pet__info-data-container'>
						<p className='pet__info-data'>Type of pet:</p>
						<p>Dog</p>
					</div>
					<div className='pet__info-data-container'>
						<p className='pet__info-data'>Age:</p>
						<p>3 years</p>
					</div>
					<div className='pet__info-data-container'>
						<p className='pet__info-data'>Size:</p>
						<p>Small</p>
					</div>
					<div className='pet__info-data-container'>
						<p className='pet__info-data'>Gender:</p>
						<p>Female</p>
					</div>
					<div className='pet__info-data-container'>
						<p className='pet__info-data'>Likes:</p>
						<p>Cucumbers</p>
					</div>
					<div className='pet__info-data-container'>
						<p className='pet__info-data'>Dislikes:</p>
						<p>People with hats</p>
					</div>
					<div className='pet__info-data-container'>
						<p className='pet__info-data'>Habits:</p>
						<p>Loves to wake up at 4am</p>
					</div>
					<div className='pet__info-data-about'>
						<p className='pet__info-data'>About:</p>
						<p>
							Henry enjoys playing in the yard and going for walks around the
							neighborhood. Her foster is working on her leash training so an
							adopter would need to be committed to continuing to work with her
							to walk nicely on leash when she sees squirrels. Henry also must
							be the only pet in the home, she cannot live with other dogs or
							cats. Henry would love an adopter where she was the central pet in
							their lives and would much prefer to be with her people than other
							animals so she will not be a dog park or play date type dog but
							will love you endlessly if you do the same!
						</p>
					</div>
				</div>

				<div className='owner__container'>
					<div className='owner__icons'>
						<div className='owner__icon-container'>
							<i class='fas fa-heart'></i>
							<p>Add to favourites</p>
						</div>

						<div className='owner__icon-container'>
							<i class='fas fa-share'></i>
							<p>Share this ad</p>
						</div>
					</div>

					<div className='owner__data-container'>
						<div className='owner__image-container'>
							<img
								src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
								alt=''
							/>
						</div>
						<div className='owner__info-container'>
							<p>Owner of Henry</p>
							<h5>Mark</h5>
						</div>
					</div>

                    <div className="owner__btn-container">
                        <button className='btn__chat'>
                            <Link to='/chat'>Chat with Mark</Link>
                            <i class='fas fa-comment-alt'></i>
                        </button>
                    </div>
					
				</div>
			</div>
		</div>
	);
};

export default PetDetails;
