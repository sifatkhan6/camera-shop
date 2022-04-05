const { useState, useEffect } = require("react")

const useReviews = () =>{

    const [reviewDetails, setreviewDetails] = useState([]);

    useEffect( () =>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setreviewDetails(data));
    }, [])

    return [reviewDetails, setreviewDetails];

}
export default useReviews;