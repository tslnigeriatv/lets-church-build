export const getReelsData = () => {
    const reelsData = `*[_type == "reels"]{
        _id,
        _createdAt,
        _updatedAt,
        story,
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
    return reelsData;
}

