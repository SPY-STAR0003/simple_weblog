import {createSlice} from "@reduxjs/toolkit";
import {Users} from "./users";

const initialState = [];

export const ArticlesSlice = createSlice({
    name : "articles",
    initialState,
    reducers : {
        getArticles : (state , { payload }) => {
            return [
                ...payload
            ]
        },
        addArticle : ( state , { payload } ) => {
            return [
                ...state,
                payload
            ]
        }
    }

})
export const { getArticles , addArticle } = ArticlesSlice.actions

export default ArticlesSlice.reducer