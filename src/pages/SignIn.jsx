import React from 'react'
import { connect } from 'react-redux'
import Footer from '../components/Footer'


const SignIn = ({user}) => {
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
				<form>
					<div class="form-group label-floating">
						<label class="control-label">Your Email</label>
						<input class="form-control" placeholder="" type="email"/>
					</div>
					<div class="form-group label-floating">
						<label class="control-label">Your Password</label>
						<input class="form-control" placeholder="" type="password"/>
					</div>

					<div class="remember">
						<div class="checkbox">
							<label>
							<input name="optionsCheckboxes" type="checkbox"/>
								Remember Me
						</label>
						</div>
						<a href="/" class="forgot">Forgot my Password</a>
					</div>

					<a href="dashboard-home.html" class="btn btn-md btn-primary full-width">Login</a>

					<div class="or"></div>

					<a href="/" class="btn btn-md bg-facebook full-width btn-icon-left"><i class="fab fa-google margin-right-8px" aria-hidden="true"></i> Login with Facebook</a>



					<p>Don't you have an account? <a href="/signup">Register Now!</a> </p>
				</form>
			</div>
		</div>
		

	</div>
    <Footer/>
            
        </div>
    )
}
const mapStateToProps = (state) => ({
    user: state.user.currentUser,
  
  })

export default connect(mapStateToProps)( SignIn)
