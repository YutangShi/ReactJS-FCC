import * as types from '../constants/ActionTypes'

// 定義可操作行為
export const addRecipe = recipe => ({ type: types.ADD_RECIPE, recipe })
export const deleteRecipe = recipe => ({ type: types.DELETE_RECIPE, recipe })
export const editRecipe = recipe => ({ type: types.EDIT_RECIPE, recipe })
