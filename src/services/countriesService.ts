import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../axios.config";
import { addError, removeError, startLoading, stopLoading } from "../store/slices/fetchingSlice";

export const getAllCountries:any = createAsyncThunk("getCountries", async(name, thunkApi)=>{
    const dispatch = thunkApi.dispatch;
    dispatch(startLoading());
    try{
        const {data} = await http.get("/all");
        console.log(data);
        dispatch(stopLoading())
        dispatch(removeError())

        return data;
    }catch(error){
        console.log(error);
        dispatch(stopLoading())
        return thunkApi.rejectWithValue(error);
    }
});

export const getCountriesByRegion:any = createAsyncThunk("getRegion", async (region, thunkApi)=>{
    const dispatch = thunkApi.dispatch;
    dispatch(startLoading());
    try{
        const {data} = await http.get(`/region/${region}`);
        console.log(data);
        dispatch(stopLoading())
        dispatch(removeError())
        return data;
    }catch(error){
        console.log(error);
        dispatch(stopLoading())
        return thunkApi.rejectWithValue(error);
    }
});

export const getCountriesBySearch:any = createAsyncThunk("getBySearch", async (param, thunkApi)=>{
    const dispatch = thunkApi.dispatch;
    dispatch(startLoading());
    try{
        const {data} = await http.get(`/name/${param}`);
        dispatch(stopLoading())
        dispatch(removeError());
        return data;
    }catch(error:any){
        dispatch(addError(error.response.data.status))
        dispatch(stopLoading());
        return thunkApi.rejectWithValue(error.message);
    }
});

export const getSingleCountry:any = createAsyncThunk("getSingle", async (name, thunkApi)=>{
    const dispatch = thunkApi.dispatch;
    dispatch(startLoading());
    try {
        const { data } = await http.get(`/name/${name}?fullText=true`);
        dispatch(stopLoading());
        dispatch(removeError());
        return data[0];
    } catch (error:any) {
        dispatch(addError(error.response.data.status))
        return thunkApi.rejectWithValue(error.message);
    }
})
