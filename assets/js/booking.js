document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-btn');
    const busResultsContainer = document.getElementById('busResults');
    const modal = document.getElementById('confirmationModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const confirmBtn = document.getElementById('confirmBtn');
    const ticketHistoryContainer = document.getElementById('ticketHistoryContainer');

    if (searchBtn && busResultsContainer) {
        searchBtn.addEventListener('click', function(event) {
            event.preventDefault();
            busResultsContainer.style.display = 'flex';
            busResultsContainer.innerHTML = '';
            const buses = [
                { id: 1, name: 'Bus A', from: 'Location 1', to: 'Location 2', time: '08:00 AM', seats: 20, price: 25 },
                { id: 2, name: 'Bus B', from: 'Location 1', to: 'Location 3', time: '10:00 AM', seats: 15, price: 30 },
                { id: 3, name: 'Bus C', from: 'Location 2', to: 'Location 3', time: '12:00 PM', seats: 25, price: 20 }
            ];
            const fromLocation = document.getElementById('from').value;
            const toLocation = document.getElementById('to').value;
            const filteredBuses = buses.filter(bus => bus.from === fromLocation && bus.to === toLocation);
            filteredBuses.forEach(bus => {
                const busCard = document.createElement('div');
                busCard.className = 'bus-card';
                busCard.innerHTML = `
                    <div class="bus-header">
                        <div class="bus-name">${bus.name} | ${bus.busNumber || 'MCB9259'}</div>
                    </div>
                    <div class="bus-details">
                        <div class="bus-detail">
                            <label>From</label>
                            <p>${bus.from}</p>
                        </div>
                        <div class="bus-detail">
                            <label>To</label>
                            <p>${bus.to}</p>
                        </div>
                        <div class="bus-detail">
                            <label>Departure</label>
                            <p>${bus.time}</p>
                        </div>
                        <div class="bus-detail">
                            <label>Seats Available</label>
                            <p>${bus.seats} out of ${bus.seats}</p>
                        </div>
                        <div class="bus-detail price-detail">
                            <label>Price</label>
                            <p>$${bus.price}</p>
                        </div>
                    </div>
                    <button class="book-btn" data-bus-id="${bus.id}">Book Now</button>
                `;
                busResultsContainer.appendChild(busCard);
            });
            if (filteredBuses.length === 0) {
                busResultsContainer.innerHTML = '<p>No buses found matching your criteria.</p>';
            }
        });
    }

    // Handle Book Now button clicks
    if (busResultsContainer) {
        busResultsContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('book-btn')) {
                modal.style.display = 'flex';
                const busId = event.target.getAttribute('data-bus-id');
                confirmBtn.setAttribute('data-bus-id', busId);
            }
        });
    }

    // Handle Cancel button click
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Handle Confirm button click
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            const busId = confirmBtn.getAttribute('data-bus-id');
            alert(`Bus ${busId} has been booked successfully!`);
            modal.style.display = 'none';
        });
    }

    // Ticket History Section
    const tickets = [
        {
            id: 1,
           busName: 'Bus A',
          from: 'Kualal Lumpuh',
           to: 'Melaka Sentral',
           departure: '08:30 AM',
           seatBought: '5',
          fare: '35',
      },
        {
            id: 2,
            busName: 'Bus B',
            from: 'TBC',
           to: 'Terminal Larkin',
            departure: '10:00 AM',
           seatBought: '12',
           fare: '45',
        }
    ];

    if (tickets.length === 0) {
        // If no tickets, show "Start buying now!" message
        ticketHistoryContainer.innerHTML = `
            <div class="no-history">
                <p>No ticket history found.</p>
                <button class="buy-now-btn">Start Buying Now!</button>
            </div>
        `;
    } else {
        // If tickets exist, create cards for each ticket
        tickets.forEach(ticket => {
            const ticketCard = document.createElement('div');
            ticketCard.className = 'ticket-card';
            ticketCard.innerHTML = `
                <h3>${ticket.busName}</h3>
                <div class="ticket-detail">
                    <label>From:</label>
                    <span>${ticket.from}</span>
                </div>
                <div class="ticket-detail">
                    <label>To:</label>
                    <span>${ticket.to}</span>
                </div>
                <div class="ticket-detail">
                    <label>Departure:</label>
                    <span>${ticket.departure}</span>
                </div>
                <div class="ticket-detail">
                    <label>Seat bought:</label>
                    <span>${ticket.seatBought}</span>
                </div>
                <div class="ticket-detail">
                    <label>Fare:</label>
                    <span>$${ticket.fare}</span>
                </div>
            `;
            ticketHistoryContainer.appendChild(ticketCard);
        });
    }

    // Add event listener for "Start Buying Now!" button
    ticketHistoryContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('buy-now-btn')) {
            alert('Redirecting to booking page...');
            // Replace alert with your logic to redirect or show booking section
        }
    });
});
