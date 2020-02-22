const apiKey = 'xd5kdTNberWFFUDEbLk5zH3VVEU0mmSlOamU8bLWjX9BT3_UjRfV3iLF8uiNYOe9dohK6aOzTVNiZXcNxiWYqc42uFya_F_HDAhp-Y9k1DaOeumGVqD30xilKthPXnYx';

export const Yelp = {

 search: (term,location,sortBy)=>{
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers : {Authorization : `Bearer ${apiKey}`}
    }).then(response=>{
        return response.json();
    }).then(jsonResponse=>{
        if (jsonResponse.businesses){
         const businessesArray = jsonResponse.businesses.map(business=>{ 
             return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zip: business.location.zip_code,
                category: business.categories.alias,
                rating: business.rating,
                reviewCount: business.review_count
            }});

           console.log(businessesArray);
           return businessesArray
            
        } 
    })

}}