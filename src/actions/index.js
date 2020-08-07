import { url, opts } from '../config/'
import { initialQuery } from '../querys'


const fetchProfiles = () => async ( dispatch ) => {
    opts.body = JSON.stringify(initialQuery)
    const res = await fetch(url, opts);
    const data = await res.json();

    dispatch({
        type: 'FETCH_PROFILES',
        payload: data.data.profiles
    })
} 


export {
    fetchProfiles
}