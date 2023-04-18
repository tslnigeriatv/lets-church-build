
export const audioFilesQuery = () => {
    const query = `*[_type == "audioMessages"] | order(_createdAt desc){
        imageThumbnail{
            asset->{
                url
            }
        },
        audioFile{
            asset->{
                url
            }
        },
        _id,
        speaker,
        messageTitle,
        title,
        description

    }`;
    return query;
}