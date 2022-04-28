import { combineReducers } from "redux";
import latestRecipeReducer from "./latestRecipe";
import allRecipeReducer from "./allRecipe";
import getMyRecipeReducers from './myRecipe'
import getDetailRecipeReducer from "./detailRecipe";
import getUserReducers from "./user";

const rootReducers = combineReducers({
    latestRecipe: latestRecipeReducer,
    allRecipe: allRecipeReducer,
    users: getUserReducers,
    myRecipe: getMyRecipeReducers,
    detailRecipe: getDetailRecipeReducer
})

export default rootReducers