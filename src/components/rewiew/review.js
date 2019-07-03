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
                    <img src={require(`../../images/review/${this.props.avatar}.jpg`)} alt={this.props.customer}/>
                    <h1 className='customer'>{this.props.customer}</h1>
                    <p className='reviewText'>{this.props.review}</p>
                </div>
                <div></div>
            </div>
            </div>
        )
    }
}

export default Review;
