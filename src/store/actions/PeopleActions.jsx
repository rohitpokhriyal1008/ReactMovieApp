import axios from '../../utils/Axios';
import {loadpeople} from '../reducers/PeopleReducer'
export {removepeople} from '../reducers/PeopleReducer'

export const asyncloadpeople = (id) => async (dispatch, getState) => {
    try {
        const [detailResponse, externalIdResponse,combinedResponse,movieResponse,tvResponse] = await Promise.all([
            axios.get(`/person/${id}`),
            axios.get(`/person/${id}/external_ids`),
            axios.get(`/person/${id}/combined_credits`),
            axios.get(`/person/${id}/movie_credits`),
            axios.get(`/person/${id}/tv_credits`),
            ]);

        const { data: detail } = detailResponse;
        const { data: externalid } = externalIdResponse;
        const { data: combined } = combinedResponse;
        const { data: movie } = movieResponse;
        const { data: tv} = tvResponse;


        const allDetails = {
            detail,
            externalid,
            combined,
            movie ,
            tv
        };
        dispatch(loadpeople(allDetails));
        return allDetails;

    } catch (error) {
        console.error("Error fetching person details:", error);
        
    }
};
