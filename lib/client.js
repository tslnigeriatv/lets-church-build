import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: '9s2nhfuo',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true, // Optional, enables caching
    token: "skVUw78sUL8oVXVXwowfeIbl8mPLPQ5Jjaxv6dVVXYYcC4L6GLqEIiJ7OtsPY9VeEaVqLbeoQwkcGcO6hsISHZYQ1N5ygynOnN5NYBpeOGwb9EOvrSNHknl3ByIpYCiNUMcwLuI4zVp8kjIXq0S8jpGPUncWVq5ZBoP7OsljPHyv6eWcBCJN",
});


const builder = imageUrlBuilder(client);


// `urlFor` is a helper function that converts images or audio files to urls
export const urlFor = (source) => builder.image(source);

export const getAudioUrl = (audioId) => builder.image(audioId).url();

// export const getAudioUrl = async (audioId) => {
//     const asset = await client.getDocument(audioId);
//     return asset?.url();
// };