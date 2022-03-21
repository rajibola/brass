/**
 *
 * @param data
 * @param keys
 * @param keywords
 * @returns filtered items as objects in array``
 */
export const useSearch = (
  data: any[],
  keys: string[],
  keywords: string,
): typeof data => {
  const searchResult = data?.filter(item => {
    return keys.some(key => {
      return (
        (isNaN(item[key])
          ? item[key]?.toLowerCase().indexOf(keywords.toLowerCase())
          : item[key]?.toString().indexOf(keywords.toString())) > -1
      );
    });
  });

  return searchResult;
};
