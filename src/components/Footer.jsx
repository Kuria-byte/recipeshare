import React from 'react'
import logo from '../assets/img/logo-small.png'


const Footer = () => {
    return (
        <div>
            <footer class="padding-top-100px padding-bottom-70px background-dark">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 sm-mb-30px">
                            <div class="logo margin-bottom-10px"><img src={logo} alt="" /></div>
                            <div class="text-grey-2  font-weight-300">Find recipes organized by primary and important ingredients, like oils, flours and herbs..</div>
                            <ul class="list-inline text-left margin-tb-20px margin-lr-0px text-white">
                                <li class="list-inline-item"><a class="facebook" href="/"><i class="fab fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a class="youtube" href="/"><i class="fab fa-youtube"></i></a></li>
                                <li class="list-inline-item"><a class="linkedin" href="/"><i class="fab fa-linkedin"></i></a></li>
                                <li class="list-inline-item"><a class="google" href="/"><i class="fab fa-google-plus"></i></a></li>
                                <li class="list-inline-item"><a class="twitter" href="/"><i class="fab fa-twitter"></i></a></li>

                            </ul>

                        </div>

                        <div class="col-lg-4  col-md-4 sm-mb-30px">
                            <ul class="footer-menu-2 row margin-0px padding-0px list-unstyled">
                                <li class="col-6  padding-tb-5px"><a href="/" class="text-grey-2">Home</a></li>
                                <li class="col-6  padding-tb-5px"><a href="/" class="text-grey-2">Featured</a></li>
                                <li class="col-6  padding-tb-5px"><a href="https://kuriadev.tech/" class="text-grey-2">Feedback</a></li>
                                <li class="col-6  padding-tb-5px"><a href="https://kuriadev.tech/" class="text-grey-2">Ask a Question</a></li>
                                <li class="col-6  padding-tb-5px"><a href="https://kuriadev.tech/" class="text-grey-2">Team</a></li>
                                <li class="col-6  padding-tb-5px"><a href="/https://kuriadev.tech/" class="text-grey-2">Maintenance</a></li>
                                <li class="col-6  padding-tb-5px"><a href="/https://kuriadev.tech/" class="text-grey-2">Get a Quote</a></li>
                                <li class="col-6  padding-tb-5px"><a href="https://kuriadev.tech/" class="text-grey-2">Contact Us</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-4  col-md-4 sm-mb-30px">
                            <ul class="footer-menu-2 row margin-0px padding-0px list-unstyled">
                                <li class="col-6  padding-tb-5px"><a href="/" class="text-grey-2">Home</a></li>
                                <li class="col-6  padding-tb-5px"><a href="/" class="text-grey-2">Featured</a></li>
                                <li class="col-6  padding-tb-5px"><a href="https://kuriadev.tech/" class="text-grey-2">Feedback</a></li>
                                <li class="col-6  padding-tb-5px"><a href="https://kuriadev.tech/" class="text-grey-2">Ask a Question</a></li>
                                <li class="col-6  padding-tb-5px"><a href="https://kuriadev.tech/" class="text-grey-2">Team</a></li>
                                <li class="col-6  padding-tb-5px"><a href="https://kuriadev.tech/" class="text-grey-2">Maintenance</a></li>
                                <li class="col-6  padding-tb-5px"><a href="https://kuriadev.tech/" class="text-grey-2">Get a Quote</a></li>
                                <li class="col-6  padding-tb-5px"><a href="https://kuriadev.tech/" class="text-grey-2">Contact Us</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>


            <div class="padding-tb-10px background-main-color">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="text-white margin-tb-15px text-center text-lg-left">
                                SocialRecipes | @2021 All rights reserved
					</div>
                        </div>
                        <div class="col-md-6">
                            <ul class="list-inline text-lg-right text-center margin-lr-0px margin-tb-15px text-white">
                                <li class="list-inline-item margin-lr-8px"><a class="facebook" href="https://kuriadev.tech/"><i class="fab fa-facebook-f"></i></a></li>
                                <li class="list-inline-item margin-lr-8px"><a class="facebook" href="https://kuriadev.tech/"><i class="fab fa-youtube"></i></a></li>
                                <li class="list-inline-item margin-lr-8px"><a class="facebook" href="https://kuriadev.tech/"><i class="fab fa-linkedin"></i></a></li>
                                <li class="list-inline-item margin-lr-8px"><a class="facebook" href="https://kuriadev.tech/"><i class="fab fa-google-plus"></i></a></li>
                                <li class="list-inline-item margin-lr-8px"><a class="facebook" href="https://kuriadev.tech/"><i class="fab fa-twitter"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
