$(document).ready(function () {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    sidebarBtn.onclick = function () {
        sidebar.classList.toggle("active");
        if (sidebar.classList.contains("active")) {
            sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else
            sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
});

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours Per Day'],
        ['Product 1', 6],
        ['Product 2', 2],
        ['Product 3', 3],
        ['Product 4', 4],
        ['Product 5', 5]
    ]);
    var options = { 'title': 'Top 5 Product', 'width': 550, 'height': 400 };

    var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
    chart.draw(data, options);

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours Per Day'],
        ['Vendor 1', 6],
        ['Vendor 2', 2],
        ['Vendor 3', 3],
        ['Vendor 4', 4],
        ['Vendor 5', 5]
    ]);
    var options = { 'title': 'Top 5 Vendor', 'width': 550, 'height': 400 };

    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
    chart.draw(data, options);
}

var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
            borderColor: "red",
            fill: false
        },
        {
            data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
            borderColor: "blue",
            fill: false
        }]
    },
    options: {
        legend: { display: false }
    }
});
