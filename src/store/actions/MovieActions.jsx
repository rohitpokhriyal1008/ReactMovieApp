import  {loadmovie} from '../reducers/MovieReducer'
import axios from '../../utils/Axios'
export {removemovie} from '../reducers/MovieReducer'

export const asyncloadmovie = (id) => async(dispatch,getstate) => {
    try {
        const detail = await axios.get(`/movie/${id}`)
        console.log(detail.data)
    } catch (error) {
        console.log(error)
    }
}