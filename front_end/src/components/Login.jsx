import { useState } from 'react'
import { loginUser } from '../Global/apiCall'
import '../style/Login.css'

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const getInfo = (i) => {
        const { name, value, type, checked } = i.target;
        setUser({
            ...user,
            [name]: type === 'checkbox' ? checked : value,
        });
    };
    const handleLoginForm = (e) => {
        e.preventDefault();
        loginUser(user)
            .then((response) => {
                console.log(response.data);
                window.location.href = "/";
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    };
    return (
        <div className="d-flex align-items-center py-2 login" cz-shortcut-listen="true">

            <main className="form-signin m-auto form">
                <form className='log-form' onSubmit={handleLoginForm}>
                    <h1 className="h3 mb-3 fw-normal">Login</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" name='email' id="floatingInput" placeholder="name@example.com" onChange={getInfo} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" name='password' id="floatingPassword" placeholder="Password" onChange={getInfo} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                    {/* <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p> */}
                </form>
            </main>
            <img src="login.png" alt="" />
            <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>



            <use-chat-gpt-ai id="USE_CHAT_GPT_AI_ROOT" className="close" data-version="4.3.5"></use-chat-gpt-ai><use-chat-gpt-ai-content-menu id="USE_CHAT_GPT_AI_ROOT_Context_Menu"></use-chat-gpt-ai-content-menu><use-chat-gpt-ai id="MAXAI_GLOBAL_VIDEO_POPUP_CONTAINER_ID" data-status="hide"></use-chat-gpt-ai><max-ai-minimum-app id="USE_CHAT_GPT_AI_ROOT_Minimize_Container" data-version="4.3.5"></max-ai-minimum-app><div id="MAXAI_SNACKBAR_CONTAINER" style={{ "zIndex": "2147483647", "color": "rgb(255, 255, 255)", "position": "absolute" }}></div></div>
    )
}

export default Login;