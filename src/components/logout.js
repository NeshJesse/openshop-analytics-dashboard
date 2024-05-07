import { GoogleLogout } from 'react-google-login';

const clientId = "210325460204-i8b1pliu6l86rjep2fv6rq3gd8j5h60o.apps.googleusercontent.com";

function Logout() {

    const onSuccess= (res) =>{
        console.log("LOGout SUCCESS!");
    }
    return(
        <div id='signOutButton'>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}

            />
        </div>
    )
}
export default Logout;