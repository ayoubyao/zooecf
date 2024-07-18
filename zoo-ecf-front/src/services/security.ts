import axios from "axios";

class SecurityService {
    private static async authenticateUser(username: string, password: string) {
        const url = 'http://localhost:3010/security';

        const data = {
            username: username,
            password: password
        };
        const headers: any = {
            "Content-Type": "application/json"
        }


        try {

            return await axios.post(url, data, { headers: headers }).then((response) => {
                if (response) {
                    const token = response.data.token;

                    return token;
                }
                return null;
            }).catch((error) => {
                console.error('error occured : ', error);
                throw error;
            });
        } catch (error) {
            console.error('error occured : ', error);
            throw error;
        }
    }

    public static async login(username: string, password: string) {
        const token = await this.authenticateUser(username, password);
        if (token) {
            localStorage.setItem('token', JSON.stringify(token));
            return true;
        }
    }
}