// Variavel que representa a previsão do tempo
// Pode ser "Rainy" (chuvoso), "Sunny" (ensolarado) ou "Cloudy" (nublado)


let weatherForecast = "cloudy";

// Analogia com a vida real: Decidindo se devemos levar um guarda-chuva 
if (weatherForecast === "rainy") { // se
    console.log("Está chovendo! Leve um guarda-chuva.");
} else if (weatherForecast === "cloudy") { // se não se 
    console.log("Está nublado! Talvez seja bom levar um guarda-chuva, só por precaução.");
}
else { // se não
    console.log("Não está chovendo. Não precisa de guarda-chuva.");
} 