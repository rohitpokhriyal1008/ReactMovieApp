import axios from '../../utils/Axios';
import {loadtv} from '../reducers/TvReducer';
export {removetv} from '../reducers/TvReducer'

export const asyncloadtv = (id) => async (dispatch, getState) => {
    try {
        const [detailResponse, externalIdResponse, recommendationsResponse, similarResponse, videosResponse, watchProvidersResponse,translationsResponse] = await Promise.all([
            axios.get(`/tv/${id}`),
            axios.get(`/tv/${id}/external_ids`),
            axios.get(`/tv/${id}/recommendations`),
            axios.get(`/tv/${id}/similar`),
            axios.get(`/tv/${id}/videos`),
            axios.get(`/tv/${id}/watch/providers`),
            axios.get(`/tv/${id}/translations`)
        ]);

        const { data: detail } = detailResponse;
        const { data: externalid } = externalIdResponse;
        const { data: recommendations } = recommendationsResponse;
        const { data: similar } = similarResponse;
        const { data: videos } = videosResponse;
        const { data: watchproviders } = watchProvidersResponse;
        const { data: translations } = translationsResponse;
        
        const trailer = videos.results.find((m) => m.type === "Trailer");
        const translation = translations.translations.map((item) => item.english_name)

        const allDetails = {
            detail,
            externalid,
            recommendations: recommendations.results,
            similar: similar.results,
            videos: trailer,
            watchproviders: watchproviders.results.IN,
            translations : translation
        };
        console.log(allDetails)
        dispatch(loadtv(allDetails));
        return allDetails;

    } catch (error) {
        console.error("Error fetching tv details:", error);
    }
};
