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
        <div className='aboutMe'>
        <p>
            Mне 21 год и уже около года я стремлюсь стать full-stack разработчиком. В 2018 году я закончил МТК по специальности "логистика" ниже вы можете ознакомиться с моими проектами или
            &nbsp; <span className='showLinks'>
            <div className='hideLinks'>
                 <a href="https://github.com/nivanavi">
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://vk.com/nivanavi">
                        <i className="fa fa-vk" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/nivanavi/">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
            </div>
            связаться со мной,</span>&nbsp;
            а так же &nbsp; <a className='headHunter' href='https://vk.com/nivanavi'><span>посмотреть мое резюме на HeadHunter.</span></a>
        </p>
        </div>
    </div>
</div>
        )
    }
}

export default HeaderAboutMe;
