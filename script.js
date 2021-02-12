


let key = 'MAFIRWJKPWJ3T0GS';
let querry = 'https://www.alphavantage.co/query?';
let example = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=60min&apikey=MAFIRWJKPWJ3T0GS"






function fetchData() {

   
    fetch(example)
       .then(response =>{
           return response.json();
       }).then(data =>{
        console.log(data);


         let information = data['Meta Data']['1. Information'];
         let symbol = data['Meta Data']['2. Symbol'];
         let interval = data['Meta Data']['4. Interval'];


         let timeEntries = Object.entries(data['Time Series (60min)']);
         
         let timeEntry = Object.entries(timeEntries[0]); // 0 - tu ma być płynne, nie na sztywno (po kolei wszystkie daty)
         
         let timeArr = Object.entries(timeEntry[0]); 

         let time = timeArr[1][1]; // czas aktualizacji ceny

         let priceArr = Object.entries(timeEntry[1]);

         let pricesArr = Object.entries(priceArr[1][1]); // zwrócenie tablicy wszystkich cen

         let openPrice = pricesArr[0][1];  //cena otwarcia
         let highPrice = pricesArr[1][1];  //najwyższa cena w przedziale czasowym
         let lowPrice  = pricesArr[2][1];  // najniższa cena w przedziale czasowym 
         let closePrice = pricesArr[3][1]; // cena zamknięcia
         let volume = pricesArr[4][1];   // wolumen












         console.log(pricesArr);

        

       
        
        
        
      
   
   
   
       })
   }