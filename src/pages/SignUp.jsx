/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { withRouter } from "react-router-dom";
import { auth, signinwithGoogle, createUserProfileDocument } from '../Firebase/firebase.utils'

class SignUp extends Component {



    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
          
        }


    }



    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password } = this.state;

        try {

            const { user } = await auth.createUserWithEmailAndPassword(
                email.trim(),
                password
            );

            await createUserProfileDocument(user, { displayName });
            this.props.history.push('/')
            this.setState({
                displayName: '',
                email: '',
                password: '',
              
            });


        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })

        console.log(this.state)
    };



    handleGoogleSign  = async () => {
        await signinwithGoogle()
        await setTimeout(this.props.history.push("/") ,7000)
    }









    render() {
        const { displayName, email, password } = this.state;

        return (
            <div>

                <div id="page-title" class="padding-tb-30px gradient-white text-center">
                    <div class="container">
                        <ol class="breadcrumb opacity-5">
                            <li><a href="/">Home</a></li>
                            <li class="active">Sign up </li>
                        </ol>
                        <h1 class="font-weight-300">Sign up </h1>
                    </div>
                </div>


                <div class="container margin-bottom-100px">

                    <div id="log-in" class="site-form log-in-form box-shadow border-radius-10">

                        <div class="form-output">
                            <form onSubmit={this.handleSubmit}>

                                <div class="form-group label-floating">
                                    <label class="control-label">Your Name</label>
                                    <input class="form-control" name='displayName' placeholder="" defaultValue={displayName} onChange={this.handleChange} type="text" />
                                </div>
                                <div class="form-group label-floating">
                                    <label class="control-label">Your Email</label>
                                    <input class="form-control" placeholder="" defaultValue={email} onChange={this.handleChange} type='email' name='email' />
                                </div>
                                <div class="form-group label-floating">
                                    <label class="control-label">Your Password</label>
                                    <input class="form-control" name='password' defaultValue={password} onChange={this.handleChange} placeholder="" />
                                </div>

                                <div class="remember">
                                    <div class="checkbox">
                                        <label>
                                            <input name="optionsCheckboxes" type="checkbox" />
								Remember Me
						</label>
                                    </div>
                                    <a href="/" class="forgot">Forgot my Password</a>
                                </div>

                                <button type='submit' class="btn btn-md btn-primary full-width">Sign Up</button>

                                <div class="or"></div>

                                <button style={{ backgroundColor: '#F44336', color: 'white' }} onClick={this.handleGoogleSign } class="btn btn-md bg-bg full-width btn-icon-left">
                                    <i class="fab fa-google margin-right-8px" aria-hidden="true"> </i> Login with Google</button>



                                <p>Don't you have an account? <a href="/login">Login Now!</a> </p>
                            </form>
                        </div>
                    </div>


                </div>
                <Footer />



            </div>

        )

    }
}
const mapStateToProps = (state) => ({
    user: state.user.currentUser,

})


export default withRouter(connect(mapStateToProps, null)(SignUp));
