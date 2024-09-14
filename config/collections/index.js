/** Returns all blog posts as a collection. */
const getAllPosts = collection => {
  const posts = collection.getFilteredByGlob('./src/posts/*.md');
  return posts.reverse();
};

const getAllWikis = collection => {
  const wikis = collection.getFilteredByGlob('./src/Wiki/*.md');
  return wikis.reverse();
};

module.exports = {
  getAllPosts,
  getAllWikis
};
