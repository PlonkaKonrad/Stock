
function fetchData() {



    let company = $('#company').val();


    let link = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol="+company+"&apikey=MAFIRWJKPWJ3T0GS"


    

    fetch(link)
       .then(response =>{
           return response.json();
       }).then(data =>{
       // console.log(data);



        let timeEntries = Object.entries(data['Weekly Time Series']);

        let symbol = data['Meta Data']['2. Symbol'];
    

        let daysArr = [];
        let openPriceArr =[]
        let highPriceArr =[]
        let lowPriceArr =[]
        let closePriceArr =[]
        

        for(let i = 0 ; i < timeEntries.length ; i++){


            let day = timeEntries[i][0];
            let prices = Object.entries(timeEntries[i][1]);


            
            let openPrice = prices[0][1];
            let highPrice = prices[0][2];
            let lowPrice = prices[0][3];
            let closePrice = prices[0][4];
            

            daysArr.push(day);
            openPriceArr.push(openPrice)
            highPriceArr.push(highPrice)
            lowPriceArr.push(lowPrice)
            closePriceArr.push(closePrice)


    

        }

        let daysArrReverse = daysArr.reverse();
        let openPriceArrReverse = openPriceArr.reverse();
        let highPriceArrReverse = highPriceArr.reverse();
        let lowPriceArrReverse = lowPriceArr.reverse();
        let closePriceArrReverse = closePriceArr.reverse();
        
        
        
            console.log(daysArrReverse);
            drawChart(openPriceArrReverse, daysArrReverse, symbol );
        
        
        
        
       })
   }





   //////////////////////////////////////////////////////////////// CHART FUNCTION

function drawChart(data, date, symbol) {
const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: date,
        datasets: [{
            label: symbol,
            data: data,
            backgroundColor: [
                'rgba(84, 255, 187, 0.2)'
             
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})};