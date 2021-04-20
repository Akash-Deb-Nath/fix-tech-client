import React, {useState, useEffect} from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviewsData, setReviewsData] = useState([]);
    useEffect(() => {
        fetch('http://lit-brook-14009.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviewsData(data))
    }, [])
    return (
       <section style={{backgroundColor: '#F6F8FA'}} className="reviews my-5 py-5 text-center">
           <div className="container">
               <div className="section-header">
                   <h5 className="fw-bolder">REVIEWS</h5>
               </div>
               <div className="row mt-5">
                    {
                        reviewsData.map(reviews => <Review reviews={reviews} key={reviews.name}></Review>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Reviews;