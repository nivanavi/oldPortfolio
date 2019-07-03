import React, {Component} from 'react';
import './headerAboutMe.css'


class HeaderAboutMe extends Component {

    render() {
        return(
<div className="header">
    <div className="myPhoto">
        <img alt='gg' src={require('../../images/avatar/avatar.png')}/>
    </div>
    <div className="shortInfo">
        <h1>
        Здравствуйте, меня зовут Никита
        </h1>
        <p>
            distinctio dolorum earum ex excepturi hic molestias numquam odit perferendis quidem quisquam recusandae rem repellat repudiandae ut vel voluptas. Ab accusamus architecto autem beatae debitis fugit hic labore numquam recusandae, rem.
        </p>
    </div>
</div>
        )
    }
}

export default HeaderAboutMe;
