import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants:[]}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant ={
        id:cuidFn(),
        name:action.name
      }
      return {restaurants : state.restaurants.concat(restaurant)}
    default:
      return state;
  }
}
