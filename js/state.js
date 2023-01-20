
class WrapComponent extends React.Component {
    render() {
        return (
            <div id="wrap">
                <HeatherComponent/>
                <SectionComponent/>
                <FooterComponent/>
            </div>
        );
    }
}

class HeatherComponent extends React.Component {
    render() {
        return (
            <header id="header" className="header">
                <img src="./img/heart_peach.png" alt=""></img>
                <h1>jQuery</h1>
                <img src="./img/heart_peach.png" alt=""></img>
            </header>
        );
    }
}


class SectionComponent extends React.Component {
    render() {
        return (
            <section id="section" className="sectionwrap">
                <section id="section1" className="section1">
                <div className="imgwrap">
                    <a href="./01_scroll/index.html" target="_blank">
                        <img src="./img/01_Scroll.png" alt=""/>
                    </a>
                </div>
                <div className="imgwrap">
                    <a href="./03_leftRightSlide/index.html" target="_blank">
                        <img src="./img/03_left_right_side.png" alt=""/>
                    </a>
                </div>
                <div className="imgwrap">
                    <a href="./05_draggable/index.html" target="_blank">
                        <img src="./img/05_draggable.png" alt=""/>
                    </a>
                </div>
                <div className="imgwrap">
                    <a href="./07_line/index.html" target="_blank">
                        <img src="./img/07_line.png" alt=""/>
                    </a>
                </div>
                <div className="imgwrap">
                    <a href="./09_zoom/index.html" target="_blank">
                        <img src="./img/09_zoom.png" alt=""/>
                    </a>
                </div>
                <div className="imgwrap">
                    <a href="./11_당구공/index.html" target="_blank">
                        <img src="./img/11_당구공.png" alt=""/>
                    </a>
                </div>
                <div className="imgwrap">
                    <a href="./13_Form_Jquery_UI/index.html" target="_blank">
                        <img src="./img/13_formUI.png" alt=""/>
                    </a>
                </div>
                <div className="imgwrap">
                    <a href="./15_Masonry/index.html" target="_blank">
                        <img src="./img/15_Masonry.png" alt=""/>
                    </a>
                </div>
                </section>
                <section id="section2" className="section2">
                    <div className="imgwrap">
                        <a href="./02_360vr/index.html" target="_blank">
                            <img src="./img/02_360vr.png" alt=""/>
                        </a>
                    </div>
                    <div className="imgwrap">
                        <a href="./04_mouseMoving/index.html" target="_blank">
                            <img src="./img/04_mousemoving.png" alt=""/>
                        </a>
                    </div>
                    <div className="imgwrap">
                        <a href="./06_hoverSlide/index.html" target="_blank">
                            <img src="./img/06_hoverslide.png" alt=""/>
                        </a>
                    </div>
                    <div className="imgwrap">
                        <a href="./08_weatherAPI/index.html" target="_blank">
                            <img src="./img/08_weather.png" alt=""/>
                        </a>
                    </div>
                    <div className="imgwrap">
                        <a href="./10_progress/index1.html" target="_blank">
                            <img src="./img/10_progress.png" alt=""/>
                        </a>
                    </div>
                    <div className="imgwrap">
                        <a href="./12_video/index.html" target="_blank">
                            <img src="./img/12_video.png" alt=""/>
                        </a>
                    </div>
                    <div className="imgwrap">
                        <a href="./14_건강보험 회원가입/index.html" target="_blank">
                            <img src="./img/14_건강보험회원가입.png" alt=""/>
                        </a>
                    </div>
                    <div className="imgwrap">
                        <a href="./16_TheFaceShop/index.html" target="_blank">
                            <img src="./img/16_TheFaceShop.png" alt=""/>
                        </a>
                    </div>
                </section>
            </section>
        );
    }
}
class FooterComponent extends React.Component {
    render() {
        return (
            <div id="loader" className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        )
    }
}

ReactDOM.render(
    <WrapComponent/>,
    document.getElementById('root')
)