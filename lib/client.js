import sanityClient from '@sanity/client';


export const client = sanityClient({
    projectId: '9s2nhfuo',
    dataset: 'production',
    useCdn: true // Optional, enables caching
  });