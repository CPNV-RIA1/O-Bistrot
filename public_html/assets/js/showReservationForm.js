/**
 * Replace the details of the restaurant with the reservation form
 * Author : Victorien Montavon
 * Date : 14.03.2023
 * Version : 1.0
 */


function displayReservationForm() {
    const details = document.getElementById('details');
    const reservationForm = document.getElementById('reservationForm');

    details.classList.toggle('hidden');
    reservationForm.classList.toggle('hidden');
}