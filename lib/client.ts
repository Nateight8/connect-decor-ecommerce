import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// const sanityClient = require("@sanity/client");
export const client = sanityClient({
  projectId: "r9clmasx", // find this at manage.sanity.io or in your sanity.json
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
  token: process.env.NEXT_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  console.log(source);

  if (source) {
    if (Array.isArray(source)) {
      source = source[0];
    }

    if (source.asset) {
      console.log(source);

      //
      // return imageUrlBuilder(client).image(source.asset);
      return imageUrlBuilder(client).image(source.asset).url();
    }
  }
  return imageUrlBuilder(client).url();
};
