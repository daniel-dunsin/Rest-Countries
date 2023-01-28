import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCountries, getCountriesByRegion, getCountriesBySearch, getSingleCountry } from "../../services/countriesService";
import { ICountry, ICountrySlice } from "../../types";

const initialState:ICountrySlice = {
    countries: [],
    singleCountry: {
        name: {
            common: "",

        },
        population: "",
        region: "",
        subregion: "",
        capital: [],
        tld: [],
        flags: {
            png: "",
        },
        borders: [],
    }
}

const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder)=>{
        builder.addCase(getAllCountries.pending, ()=>{
            console.log("Pending");
        });
        builder.addCase(getAllCountries.rejected, (_, action:PayloadAction)=>{
            console.log(action.payload)
        });
        builder.addCase(getAllCountries.fulfilled, (state:ICountrySlice, action:PayloadAction<ICountry[]>)=>{
            state.countries = action.payload
        });
        builder.addCase(getCountriesByRegion.pending, ()=>{
            console.log("Pending");
        });
        builder.addCase(getCountriesByRegion.fulfilled, (state:ICountrySlice, action:PayloadAction<ICountry[]>)=>{
            state.countries = action.payload
        });
        builder.addCase(getCountriesBySearch.pending, ()=>{
            console.log("Pending");
        });
        builder.addCase(getCountriesBySearch.fulfilled, (state:ICountrySlice, action:PayloadAction<ICountry[]>)=>{
            state.countries = action.payload
        });
        builder.addCase(getSingleCountry.pending, ()=>{
            console.log("pending");
        });
        builder.addCase(getSingleCountry.fulfilled, (state:ICountrySlice, action:PayloadAction<ICountry>)=>{
            state.singleCountry = action.payload;
        })
    }
})

export const {} = countriesSlice.actions;
export default countriesSlice.reducer;