export function QueryHelper<T extends {}>(url: string, query: T | undefined) {
    return !query ? url : `${url}?${queryToString(query)}`;
  }
  
  function queryToString<T extends {}>(query: T): string {
    return Object.entries(query)
      .filter(([_, value]) => (value === false ? true : Boolean(value)))
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  }