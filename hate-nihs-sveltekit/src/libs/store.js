import requests_data from "./requests";
import { readable } from 'svelte/store';

const repos = readable({
    status: 'loading',
    data: null

}, set=> {
    const response = requests_data()

    response.then(data => {
        try {
            set({
                status: 'success',
                data: data.data
            });
        }
        catch (err) {
            set({
                status: 'error',
                data: false
            });
        }

    }
    )}
    
);
export default repos;










