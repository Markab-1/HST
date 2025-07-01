import { client } from './sanityClient'

export async function getNews() {
  const query = `*[_type == "news"] | order(_createdAt desc){
    _id,
    title,
    body,
    smallImage {
      asset -> {
        _id,
        url
      }
    },
    mainImage {
      asset -> {
        _id,
        url
      }
    },
    publishDate
  }`
  return await client.fetch(query)
}