import axios from '../../utils/Axios';
import { loadmovie} from '../reducers/MovieReducer';
export {removemovie} from '../reducers/MovieReducer'

export const asyncloadmovie = (id) => async (dispatch, getState) => {
    try {
        const [detailResponse, externalIdResponse, recommendationsResponse, similarResponse, videosResponse, watchProvidersResponse,translationsResponse] = await Promise.all([
            axios.get(`/movie/${id}`),
            axios.get(`/movie/${id}/external_ids`),
            axios.get(`/movie/${id}/recommendations`),
            axios.get(`/movie/${id}/similar`),
            axios.get(`/movie/${id}/videos`),
            axios.get(`/movie/${id}/watch/providers`),
            axios.get(`/movie/${id}/translations`)
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
        dispatch(loadmovie(allDetails));
        return allDetails;

    } catch (error) {
        console.error("Error fetching movie details:", error);
        // Dispatch an action to handle errors if necessary
    }
};
