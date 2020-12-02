const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'nbsivko9itxk',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'BV8EdtrmTsmz3gOtgDjcNoJkAcZxGjy9GskSkljla6A'
});

export default client;