import {useCallback, useEffect, useState} from 'react';
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
  const [filteredData, setFilteredData] = useState<any>(data);

  const searchResult = useCallback(() => {
    return data?.filter(item => {
      return keys.some(key => {
        return (
          (isNaN(item[key])
            ? item[key]?.toLowerCase().indexOf(keywords.toLowerCase())
            : item[key]?.toString().indexOf(keywords.toString())) > -1
        );
      });
    });
  }, [data, keywords]);

  useEffect(() => {
    setFilteredData(searchResult);
  }, [keywords]);

  return filteredData;
};
