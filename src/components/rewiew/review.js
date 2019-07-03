import React, {Component} from 'react';
import './review.css'


class Review extends Component {

    render() {
        return(
            <div>
                <h1 className='reviewTitle'>отзывы и характеристики</h1>
            <div className='review'>
                <div></div>
                <div className='oneReview'>
                    <img src={require('../../images/review/turok.jpg')} alt="turok"/>
                    <p className='reviewText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloremque fugiat ipsa minima tempore ullam! A adipisci at consectetur cum cumque dolorem eos error excepturi, fuga in libero molestias mollitia obcaecati placeat quaerat reiciendis repellendus sed totam! Adipisci animi cumque, debitis eos eum facilis in ipsum iste iure maxime, molestiae nihil numquam pariatur quibusdam rerum totam vel voluptate voluptatem. A adipisci aliquam amet, debitis deserunt doloremque enim expedita fugiat mollitia natus nobis, nostrum quia quis sunt tempora temporibus vero voluptas voluptatem voluptates voluptatibus! Ab, architecto corporis delectus deleniti ducimus est iste magnam molestiae officiis recusandae, repudiandae similique tempore temporibus. Sunt!</p>
                </div>
                <div></div>
            </div>
            </div>
        )
    }
}

export default Review;
