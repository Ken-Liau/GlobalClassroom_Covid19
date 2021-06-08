var ctx = document.getElementById('myChart');
var myChart;
var arrayDate = [];

getDate();

function getDate(){
    for(var i = 30; i >= 0; i--){
        var date = new Date();
        date.setDate(date.getDate() - i);
        var dateString = date.toISOString().split('T')[0];
        arrayDate.push(dateString);
    }
    getChart();
}
function getChart(){
    Chart.defaults.font.size = 16;
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Cases',
                data: [10, 20, 30, 100],
                fill: false,
                borderColor: "#FFF",
                backgroundColor: "#FFF",
                borderWidth: 1
            }],
            labels: arrayDate
        },
        options: {
            responsive :true,
            maintainAspectRatio: false
        }
     });
}
