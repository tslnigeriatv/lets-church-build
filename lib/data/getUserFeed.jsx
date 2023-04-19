export const getUserFeed = () => {
    const feedData = `*[_type == "post"]{
        comments[]{
            comment,
            _key,
            postedBy->{
                _id,
                name,
                "avatar": avatar{
                    "url": asset->url
                }
            },
        },
        region,
        "images": images[]{
            "url": asset->url
        },
        "videos": videos[]{
            "url": asset->url
        },
        postedBy->{
            _id,
            name,
            "avatar": avatar{
                "url": asset->url
            }
        },


    }`;
    return feedData;
}


