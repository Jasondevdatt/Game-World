import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '24fb2ca123e64f2ebaadd92687025c5f'
    }
})