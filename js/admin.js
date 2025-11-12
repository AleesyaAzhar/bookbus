$(document).ready(function() {
    // Toggle sidebar on mobile
    $("#toggleSidebar").click(function() {
        $("#sidebar").toggleClass("show");
    });

    // Tickets Bought Chart
    const ticketsCtx = document.getElementById('ticketsChart').getContext('2d');
    const ticketsChart = new Chart(ticketsCtx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Tickets Bought',
                data: [120, 190, 150, 200, 180, 220, 190],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Seats Left Chart
    const seatsCtx = document.getElementById('seatsChart').getContext('2d');
    const seatsChart = new Chart(seatsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Bus 1', 'Bus 2', 'Bus 3', 'Bus 4', 'Bus 5'],
            datasets: [{
                label: 'Seats Left',
                data: [30, 50, 20, 80, 60],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderWidth: 1
            }]
        }
    });
});
