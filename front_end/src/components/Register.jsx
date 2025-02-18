import { useState, useContext } from 'react'
import { RegisterUser } from '../Global/apiCall';
import '../style/Register.css'
import { AuthContext } from '../store/AuthContext';

const Register = () => {
    const { login,setDetail} = useContext(AuthContext);
    const [registerUser, setregisterUser] = useState({ fullname: "", phone: "", email: "", address: { streetAddress: "", country: "", state: "", city: "", postalCode: "" } });
    const getInfo = (e) => {
        const { name, value } = e.target;
        if (name in registerUser.address) {
            setregisterUser(prevState => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [name]: value
                }
            }));
        } else {
            setregisterUser(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };
    const handleInsertUser = (e) => {
        e.preventDefault(); // Prevent default form submission
        RegisterUser(registerUser)
            .then((response) => {
                console.log(response.data);
                setDetail(response.data.data);
                localStorage.setItem("Details", JSON.stringify(response.data.data));
                localStorage.setItem("Details", JSON.stringify(registerUser));
                alert("User registered successfully!");
                setregisterUser({
                    fullname: "", phone: "", email: "", password: "", address: { streetAddress: "", country: "", state: "", city: "", postalCode: "" }
                });
                login()
                window.location.href = "/";
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Failed to register user. Please try again.");
            });
    };
    return (
        <div className="d-flex align-items-center py-2 login1" cz-shortcut-listen="true">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                </symbol>
                <symbol id="circle-half" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
                </symbol>
                <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
                </symbol>
                <symbol id="sun-fill" viewBox="0 0 16 16">
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                </symbol>
            </svg> */}
            <img src="signUp.png" alt="" />


            <main className="form-signin m-auto form">

                <form className='reg-form'>

                    <h1 className="h3 mb-3 fw-normal" style={{ width: '100%' }}>Sign Up</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" name='fullname' id="floatingInput" required placeholder='name' onChange={getInfo} />
                        <label htmlFor="floatingInput">Full Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" maxLength={10} className="form-control" id="floatingInput" placeholder='phone no.' required name='phone' onChange={getInfo} />
                        <label htmlFor="floatingInput">Phone no.</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required name='email' onChange={getInfo} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" required placeholder="Password" name='password' onChange={getInfo} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating add">
                        <input type="text" className="form-control" id="floatingPassword" required placeholder="address" name='streetAddress' onChange={getInfo} />
                        <label htmlFor="floatingPassword">Address</label>
                    </div>
                    <div className="display">
                        <div className='form-floating '>
                            <input type="text" className="form-control" id="floatingPassword" required placeholder="country" name='country' onChange={getInfo} />
                            <label htmlFor="floatingPassword">Country</label>
                        </div>
                        <div className='form-floating '>
                            <input type="text" className="form-control" id="floatingPassword" required placeholder="state" name='state' onChange={getInfo} />
                            <label htmlFor="floatingPassword">State</label>
                        </div>
                    </div>
                    <div className="display">
                        <div className='form-floating '>
                            <input type="text" className="form-control" id="floatingPassword" required placeholder="country" name='city' onChange={getInfo} />
                            <label htmlFor="floatingPassword">City</label>
                        </div>
                        <div className='form-floating '>
                            <input type="text" className="form-control" id="floatingPassword" required placeholder="state" name='postalCode' onChange={getInfo} />
                            <label htmlFor="floatingPassword">Postal code</label>
                        </div>
                    </div>
                    <div className='reg-btn'>
                        <button className="btn btn-primary w-50 py-2 my-2" onClick={handleInsertUser} type="submit">Sign up</button>
                    </div>
                    <p></p>
                </form>
            </main>
            <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>



            <use-chat-gpt-ai id="USE_CHAT_GPT_AI_ROOT" className="close" data-version="4.3.5"></use-chat-gpt-ai><use-chat-gpt-ai-content-menu id="USE_CHAT_GPT_AI_ROOT_Context_Menu"></use-chat-gpt-ai-content-menu><use-chat-gpt-ai id="MAXAI_GLOBAL_VIDEO_POPUP_CONTAINER_ID" data-status="hide"></use-chat-gpt-ai><max-ai-minimum-app id="USE_CHAT_GPT_AI_ROOT_Minimize_Container" data-version="4.3.5"></max-ai-minimum-app><div id="MAXAI_SNACKBAR_CONTAINER" style={{ "zIndex": "2147483647", "color": "rgb(255, 255, 255)", "position": "absolute" }}></div></div>
    )
}

export default Register;