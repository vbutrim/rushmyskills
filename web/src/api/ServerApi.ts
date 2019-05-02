import axios from 'axios';
import {ExtendedReactFacebookLoginInfo} from '../components/authorization/ExtendedReactFacebookLoginInfo';

class ServerApi {

    private static serverUrl: string = 'http://localhost:8090/api';

    private static headers = new Headers({
        'Content-Type': 'application/json',
    });

    public static authorize(fbAuthResponse: ExtendedReactFacebookLoginInfo): Promise<any> {
        return axios.post(this.serverUrl + '/auth/login', {
            headers: this.headers,
            userId: fbAuthResponse.id,
            name: fbAuthResponse.name,
            email: fbAuthResponse.email,
            pictureUrl: fbAuthResponse.picture.data.url,
        });
    }

    public static me(): Promise<any> {

        return axios.get(this.serverUrl + '/auth/me', {
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
            },
        });
    }
}

export default ServerApi;
