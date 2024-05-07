import { GoogleLogin } from 'react-google-login';

const clientId = "210325460204-i8b1pliu6l86rjep2fv6rq3gd8j5h60o.apps.googleusercontent.com";

function Login() {

    const onSuccess= (res) =>{
        console.log("LOGIN SUCCESS! Current User: ",res.profileObj);
    }
    const onFailure= (res) =>{
        console.log("LOGIN Failed!  res: ",res);
    }

    return(
        <div id='signInButton'>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}

            />
        </div>
    )
}
export default Login;