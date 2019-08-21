import React, {Component} from 'react';
import './headerAboutMe.css'


window.addEventListener('scroll', moonMove);

const moon = document.getElementById('moon');
console.log(this.moon)

const data = new Date();
let time = data.getHours();

if (time > 12) {
    moon.style.backgroundImage = 'url("../../images/weather/moon.png")';

}

function moonMove() {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight + document.documentElement.clientHeight;
    let move = windowScroll / windowHeight * 2000;
    this.moon.style.marginLeft = `${-10 + move}%`;
    this.moon.style.marginTop = `${0 + (move / 4.5)}%`;

    if (move > 150) {
        this.moon.style.display = 'none';
    } else {
        this.moon.style.display = 'block';
    }

}

class HeaderAboutMe extends Component {

    render() {
        return(
<div className="header">

    <div className='moon' id='moon'></div>

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
