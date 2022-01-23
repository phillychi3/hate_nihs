import requests_data from "./requests";
import { readable } from 'svelte/store';

const repos = readable({
    status: 'loading',
    data: null

}, set=> {
    const response = requests_data()

    response.then(data => {
        currentController = null;
        set({
            status: 'success',
            data: data.data
        });
    }
    )}
    
);
export default repos;










