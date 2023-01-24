import Cities from "./cities.json";

const listAllCities = async(filter:any = false) => {
    if(filter){
        const response = Cities.features.filter(item=>item.properties.Type === filter)
        return response
    }else{
        const response = Cities.features
        return response
    }
    
}

const listAllNearestCity = async() => {
    const response = Cities.features
    return response.filter(item=>item.properties.Type === "nearest_city")
}


const listAllDemandCities = async() => {
    const response = Cities.features
    return response.filter(item=>item.properties.Type === "demand_city")
}

const listAllOriginCities = async() => {
    const response = Cities.features
    return response.filter(item=>item.properties.Type === "origin_city")
}

const listlistAllCityInformation = async(value:string) => {
    const response = Cities.features
    const rep1 = response.filter(item=>item.properties.Name === value)
    const rep2 = response.filter(item=>item.properties.Name === rep1[0].geometry.origin_name)
    return [...rep1, ...rep2]
}

export {
    listAllCities,
    listAllNearestCity,
    listAllDemandCities,
    listAllOriginCities,
    listlistAllCityInformation
}