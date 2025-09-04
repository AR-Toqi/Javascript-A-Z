console.log("country explorer");

function fetchCountry (name){
    try{
        fetch ('https://restcountries.com/v3.1/name/${name}?fullText=true')

    } catch{

    }
}
