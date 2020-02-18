// INITIAL STATE TAKEN FROM APP.JS
export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

// REDUCER LOGIC FOR ADD_FEATURE AND REMOVE_FEATURE
export const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      console.log("Added this Feature:", action.payload);
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            {
              id: action.payload.id,
              name: action.payload.name,
              price: action.payload.price
            }
          ]
        },
        additionalFeatures: [
          ...state.additionalFeatures.filter(item => item !== action.payload)
        ]
      };

    case "REMOVE_FEATURE":
      console.log("Removed this Feature:", action.payload);
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: [
            ...state.car.features.filter(item => item !== action.payload)
          ]
        },
        additionalFeatures: [
          ...state.additionalFeatures,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price
          }
        ]
      };
    default:
      return state;
  }
};
