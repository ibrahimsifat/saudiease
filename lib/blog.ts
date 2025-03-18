import { getBlogs } from "../data/blog-posts/index";

/**
 * Search blog posts based on the search query and optional category
 * @param {string} query - The search query
 * @param {string} [category] - Optional category to filter by
 * @returns {Array} - Filtered list of blog posts
 */
export function searchBlogPosts(query, category, locale) {
  const searchTerms = query.toLowerCase().trim().split(/\s+/);
  const blogPosts = getBlogs(locale);
  return blogPosts.filter((post) => {
    // Skip if category filter doesn't match
    if (category && post.category !== category) {
      return false;
    }

    // Check if any search term is in the title, excerpt, or content
    return searchTerms.some(
      (term) =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        (post.content && post.content.toLowerCase().includes(term)) ||
        (post.author && post.author.toLowerCase().includes(term)) ||
        (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(term)))
    );
  });
}
