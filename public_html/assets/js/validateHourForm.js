/**
 * Validates the hour form for a reservation
 * Author: Victorien Montavon
 * Date: 17.03.2024
 * Version: 1.0
 *
 * @param input
 */
function validateTime(input) {
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // Regular expression for 24-hour format
    if (regex.test(input.value)) {
        input.setCustomValidity(''); // Input is valid
    } else {
        if (data-lang === 'fr'){
            input.setCustomValidity('Veuillez entrer un format 24 heures (hh:mm)');
        }
        if (data-lang === 'de'){
            input.setCustomValidity('Bitte geben Sie ein 24-Stunden-Format ein (ss:mm)');
        }
        if (data-lang === 'en'){
            input.setCustomValidity('Please enter a 24-hour format (hh:mm)');
        }
    }
}