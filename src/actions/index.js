// ACTIONS HERE TO ADD OR REMOVE AN ITEM/FEATURE.

export function addFeature(feature) {
  return { type: "ADD_FEATURE", payload: feature };
}

export function removeFeature(feature) {
  return { type: "REMOVE_FEATURE", payload: feature };
}
