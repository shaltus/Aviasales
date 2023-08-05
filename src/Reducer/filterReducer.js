const initialState = {
  labels: [
    { labelTxt: "Все", id: 1, checked: true },
    { labelTxt: "Без пересадок", id: 2, checked: true },
    { labelTxt: "1 пересадка", id: 3, checked: true },
    { labelTxt: "2 пересадки", id: 4, checked: true },
    { labelTxt: "3 пересадки", id: 5, checked: true },
  ],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER": {
      const labels = [...state.labels];
      const newLabels = labels.map((label) =>
        label.id === action.payload
          ? { ...label, checked: !label.checked }
          : label,
      );

      const isAllChecked = newLabels
        .filter((label) => label.id !== 1)
        .every((label) => label.checked);
      if (isAllChecked) {
        newLabels[0] = { ...newLabels[0], checked: true };
      } else {
        newLabels[0] = { ...newLabels[0], checked: false };
      }

      return {
        ...state,
        labels: newLabels,
      };
    }
    case "FILTER_ALL": {
      const labels = [...state.labels];
      const newLabels = labels.map((label) => ({
        ...label,
        checked: !labels[0].checked,
      }));

      return {
        ...state,
        labels: newLabels,
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
