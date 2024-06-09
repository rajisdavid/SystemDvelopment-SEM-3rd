document.addEventListener('DOMContentLoaded', () => {
    // Simulate fetching parking data
    const parkingAvailability = [
        { id: 1, status: 'available' },
        { id: 2, status: 'occupied' },
        { id: 3, status: 'available' },
        { id: 4, status: 'reserved' }
    ];

    const notifications = [
        "Spot 4 is reserved for the next hour.",
        "Maintenance in Area B from 2 PM to 4 PM.",
        "Heavy traffic expected in the parking lot at 5 PM."
    ];

    const vehicleLocation = "Your vehicle is parked in spot 12, Section A.";

    // Populate parking availability
    const parkingInfoDiv = document.getElementById('parking-availability');
    parkingAvailability.forEach(spot => {
        const spotDiv = document.createElement('div');
        spotDiv.className = `parking-spot ${spot.status}`;
        spotDiv.textContent = `Spot ${spot.id}: ${spot.status}`;
        parkingInfoDiv.appendChild(spotDiv);
    });

    // Populate notifications
    const notificationList = document.getElementById('notification-list');
    notifications.forEach(notification => {
        const li = document.createElement('li');
        li.textContent = notification;
        notificationList.appendChild(li);
    });

    // Populate vehicle location
    const vehicleLocationDiv = document.getElementById('vehicle-location');
    vehicleLocationDiv.textContent = vehicleLocation;

    // Populate user details (mock)
    const userDetailsDiv = document.getElementById('user-details');
    userDetailsDiv.innerHTML = `
        <p>Name: John Doe</p>
        <p>Member since: January 2021</p>
        <p>Total Reservations: 24</p>
    `;

    // Handle feedback form submission
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your feedback!');
        feedbackForm.reset();
    });

    // Handle payment form submission
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Payment successful!');
        paymentForm.reset();
    });
});
