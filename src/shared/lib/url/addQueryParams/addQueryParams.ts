const getQueryParams = (params: OptionalRecord<string, string>) => {
    const queryParams = window.location.search;
    const urlParams = new URLSearchParams(queryParams);

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            urlParams.set(key, value);
        }
    });

    return `?${urlParams.toString()}`;
};

/**
 * Функция добавления параментров строки запросов в URL
 * @param params
 */

const addQueryParams = (params: OptionalRecord<string, string>) => {
    window.history.pushState('', '', getQueryParams(params));
};

export { addQueryParams, getQueryParams };
