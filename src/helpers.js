/**
 * Fetch error helper
 * @param {object} response
 */

export const handleResponse = response => {
  return response.json();
}

export const getSearchMethod = (searchTerm) => {
  if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm){
    return 'zip';
  }
  else 
   return 'q';
}