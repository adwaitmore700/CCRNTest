import axios from 'axios';

// const http = axios.create({
//     baseURL:'https://hn.algolia.com/api/v1/'
// });

// export default http;

export const getPosts = async (pageNo)=>{
    try {
        const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNo}`);
        let posts = null;
        if (response && response.data) {
            posts = response.data.hits.map((rs) => {
                rs.key = (Math.random() * 1000000).toString()
                return rs;
            });
            console.log(posts);
        }
        return posts;
    } catch (error) {
        console.log(error);
        return null;
    }
}