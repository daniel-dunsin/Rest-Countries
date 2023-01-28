export interface IThemeSlice{
    mode: "light" | "dark"
};

export interface IFetching {
    loading: boolean;
    error: boolean;
    errorText: string;
}

export interface ICountrySlice {
    countries: ICountry[];
    singleCountry : ICountry;
}

export interface ICountry{
    name: {
        common: string;
        nativeName?: any
    },
    population: string | number;
    region: string;
    subregion: string;
    capital: string[];
    tld: string[];
    currencies?:any;
    flags: {
        png: string;
    }
    languages?: any;
    borders: string[];
}