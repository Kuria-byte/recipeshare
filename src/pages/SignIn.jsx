import React, { useState } from 'react'
import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { withRouter } from "react-router-dom";
import { auth, signinwithGoogle } from '../Firebase/firebase.utils'


const SignIn = ({ user, history }) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	let handleEmail = (e) => {
		setEmail(e.target.value)

	}
	let handlePassword = (e) => {
		setPassword(e.target.value)
	}

	let handleSubmit = async e => {
		e.preventDefault()

		try {

            await auth.signInWithEmailAndPassword(email, password)
             history.push('/')
			setEmail('')
			setPassword('')

        } catch (error) {
            console.error(error);
        }
	}

    let handleGoogleSign  = async () => {
        await signinwithGoogle()
        await setTimeout(history.push("/") ,6000)
    }



	return (
		<div>

			<div id="page-title" class="padding-tb-30px gradient-white text-center">
				<div class="container">
					<ol class="breadcrumb opacity-5">
						<li><a href="/">Home</a></li>
						<li class="active">Login Page</li>
					</ol>
					<h1 class="font-weight-300">Login Page</h1>
				</div>
			</div>


			<div class="container margin-bottom-100px">

				<div id="log-in" class="site-form log-in-form box-shadow border-radius-10">

					<div class="form-output">
						<form  onSubmit={handleSubmit}>
							<div class="form-group label-floating">
								<label class="control-label">Your Email</label>
								<input class="form-control" placeholder="" defaultValue={email} onChange={handleEmail} type="email" />
							</div>
							<div class="form-group label-floating">
								<label class="control-label">Your Password</label>
								<input class="form-control" placeholder="" defaultValue={password} onChange={handlePassword} type="password" />
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

							<button type='submit' class="btn btn-md btn-primary full-width">Login</button>

							<div class="or"></div>

							<button style={{ backgroundColor: '#F44336', color: 'white' }} onClick={handleGoogleSign } class="btn btn-md bg-bg full-width btn-icon-left">
                                    <i class="fab fa-google margin-right-8px" aria-hidden="true"> </i> Login with Google</button>


							<p>Don't you have an account? <a href="/signup">Register Now!</a> </p>
						</form>
					</div>
				</div>


			</div>
			<Footer />

		</div>
	)
}
const mapStateToProps = (state) => ({
	user: state.user.currentUser,

})

export default withRouter(connect(mapStateToProps)(SignIn))
