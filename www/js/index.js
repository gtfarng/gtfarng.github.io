var customLocale = {
    months: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', '', 'Nov', 'Dec'],
    days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    No: 'At home coding',
    on: 'on',
    Less: 'Less',
    More: 'More'
}

d3.json("data.json").then(function (chartData) {
// Convert all date strings to the date-objects
for (var i = 0; i < chartData.length; i += 1) {
    chartData[i].date = new Date(chartData[i].date)
}

// Customize the heatmap
var heatmap = calendarHeatmap()
    .locale(customLocale)
    .data(chartData)
    .selector('.container')
    .tooltipEnabled(true)
    .colorRange(['#ebedf0', '#86888A'])
    .onClick(function (data) {
    console.log('data', data);
    });
heatmap();  // render the chart
});
