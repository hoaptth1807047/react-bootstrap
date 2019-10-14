import React, {Component} from 'react';

class SignUpPage extends Component {
    render() {
        return (
            <section className="home-slider owl-carousel img"
                     style="background-image: url(../../assets/images/bg_2.jpg);">
                <div className="slider-item" style="background-image: url(../../assets/images/bg_2.jpg);">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row slider-text justify-content-center align-items-center">

                            <div className="signin">
                                <form action="">
                                    <h2>Sign Up</h2>
                                    <input type="email" placeholder="Enter Email"/>
                                    <input type="text" placeholder="Enter Username"/>
                                    <input type="password" placeholder="Enter Password"/>
                                    <input type="text" placeholder="Enter Phonenumber"/>
                                    <button className="btnSignUp">Sign Up</button>
                                    <br></br>
                                    <button className="btnSWGG">Sign With Google</button>
                                    <br></br>
                                    <button className="btnSWFb">Sign With Facebook</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SignUpPage;