//dispatch actions here to add and remove an item/feature.

export const addFeature = feature => {
  return { type: "ADD_FEATURE", payload: feature };
};

export const removeFeature = feature => {
  return { type: "REMOVE_FEATURE", payload: feature };
};
