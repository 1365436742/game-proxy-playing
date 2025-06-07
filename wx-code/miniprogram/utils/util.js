export const objectToPageQuery = (pageQuery) => {
  const pageKeys = Object.keys(pageQuery);
  let query = ''
  if (pageKeys.length > 0) {
    query = pageKeys.reduce((total, key, index) => {
      return total + `${key}=${pageQuery[key]}${index !== pageKeys.length - 1 ? '&' : ''}`
    }, '?')
  }
  return query
}