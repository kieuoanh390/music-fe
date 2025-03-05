import Axios from "axios";

class AxiosService {

    constructor() {
        const instance = Axios.create();
        instance.interceptors.response.use(this.handleSucess, this.handleError);
        this.instance = instance;
    }

    handleSucess(res) {
        return res;
    }

    handleError(e) {
        console.log(e);
        if (e) {
            // Add error handling logic here
        }
        return Promise.reject(e);
    }

    get(url) {
        return this.instance.get(url, {
            headers: {
                'Authorization': localStorage.getItem("Authorization"),
                "ngrok-skip-browser-warning": "69420"
            }
        });
    }

    post(url, body = null) {
        // Merged the two 'post' methods into one, using 'body' as an optional parameter
        const config = {
            headers: {
                'Authorization': localStorage.getItem("Authorization"),
                "ngrok-skip-browser-warning": "69420"
            }
        };
        return body ? this.instance.post(url, body, config) : this.instance.post(url, config);
    }

    put(url, body) {
        return this.instance.put(url, body, {
            headers: {
                'Authorization': localStorage.getItem("Authorization"),
                "ngrok-skip-browser-warning": "69420"
            }
        });
    }

    delete(url) {
        return this.instance.delete(url, {
            headers: {
                'Authorization': localStorage.getItem("Authorization"),
                "ngrok-skip-browser-warning": "69420"
            }
        });
    }
}

// Assign instance to a variable before exporting as module default
const axiosServiceInstance = new AxiosService();
export default axiosServiceInstance;
