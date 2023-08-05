const baseUrl = "https://aviasales-test-api.kata.academy";

export const filter = (id) => ({
  type: "FILTER",
  payload: id,
});

export const filterAll = () => ({
  type: "FILTER_ALL",
});

export const showMoreTickets = () => ({
  type: "SHOW_MORE",
});

export const togglePagination = (value) => ({
  type: "TOGGLE_PAGINATION",
  payload: value,
});

export const sort = (id) => ({
  type: "SORT_TICKETS",
  payload: id,
});

export const load = (isLoading) => ({
  type: "LOADING",
  payload: isLoading,
});

export const searchId = () => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/search`);
    const data = await response.json();
    if (!data.searchId) {
      throw new Error("Ответ API не содержит searchId");
    }
    dispatch({
      type: "SEARCH_ID",
      jsonData: data,
    });
    return data.searchId;
  } catch (error) {
    throw new Error("Ошибка при выполнений поиска");
  }
};

export const fetchTickets =
  ({ searchId }) =>
    async (dispatch) => {
      if (searchId === "") return null;

      let response;
      try {
        response = await fetch(`${baseUrl}/tickets?searchId=${searchId}`);
        const data = await response.json();
        dispatch({
          type: "FETCH_TICKETS",
          jsonData: { ...data, error: false },
        });

        if (data.stop) {
          dispatch(load(false));
        } else {
          await dispatch(fetchTickets({ searchId }));
        }
      } catch (error) {
        if (response.status === 404) {
          dispatch(searchId());
        }
        if (response.status === 500) {
          dispatch(fetchTickets({ searchId }));
        }
        dispatch({
          type: "FETCH_TICKETS",
          jsonData: { tickets: [], stop: false, error: true },
        });
      }
    };
