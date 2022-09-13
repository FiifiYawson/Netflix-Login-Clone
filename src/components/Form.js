import Input from './Input.js'

export default function Form({title}){
    return(
        <form>
            <div id="form-title">
                {title}
            </div>
            <Input type='email' placeholder='Email or phone number'/>
            <Input type='password' placeholder='Password'/>
            <Input type='button' value='Sign In'/>

            <footer>
                <section>
                   <Input text='Remeber me' name='remember-me' type='checkbox' /> <a id='need-help'>Need help?</a>
                </section>
                <section>
                    <a id='fb-link'>
                      <img id='facebook-logo' src='/images/fbf-logo.png'/> <span>Login with Facebook</span>
                    </a>
                </section>
                <section id='new'>
                   New to Netflix? <a id='sign-up'>Sign up now</a>
                </section>

                <section>
                    This page is protected by Google reCAPTCHA  to ensure you're not a bot. <a href='#' id='learn-more'>Learn more</a>
                </section>
            </footer>
        </form>
    )
}