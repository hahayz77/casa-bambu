import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:"u2y1sc0p",
    dataset: "production",
    apiVersion: "2022-03-10",
    useCdn: true,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);