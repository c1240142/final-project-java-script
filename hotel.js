// 1. ARRAYS (Kaydinta Xogta)
// Array-gan waxaa loogu talagalay in lagu kaydiyo dhammaan dadka qabsada qolalka (Booking List)
let bookingStorage = [];

// Array-gan waa tusaale loogu talagalay qolalka aan haysano (Room Categories)
const availableRooms = ["Luxury VIP Room", "Standard Room", "Family Suite"];
// 2. DOM ELEMENTS (Soo qabashada HTML-ka)

const bookForm = document.getElementById('bookForm');
const feedbackForm = document.getElementById('feedbackForm');
const bookBtn = document.getElementById('bookBtn');

// 3. EVENTS (Dhacdooyinka)

// Event: Marka la riixo badhanka "Book Now" ee weyn
bookBtn.addEventListener('click', function() {
    document.getElementById('Book').scrollIntoView({ behavior: 'smooth' });
});

// Event: Marka la diro Form-ka Boos celinta (Booking)
bookForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Jooji in boggu iskiis u refresh gareeyo
    validateBooking();
});

// Event: Marka la diro Form-ka Feedback-ga
feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    validateFeedback();
});


// 4. VALIDATION & ARRAY LOGIC (Hubinta iyo Isticmaalka Array)


function validateBooking() {
    // DOM: Soo qabashada qiyamka (Values)
    const name = document.getElementById('fulname').value;
    const guests = bookForm.querySelector('input[type="number"]').value;
    const date = bookForm.querySelector('input[type="date"]').value;

    // A. Validation: Magaca lambar lama ogola (Regex)
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(name)) {
        alert("KHALAD: Magaca lama ogola in lambar lagu qoro!");
        return;
    }

    // B. Validation: Guests waa inuu ka weyn yahay 0 (Number check)
    if (guests <= 0) {
        alert("KHALAD: Fadlan geli tiro marti oo sax ah!");
        return;
    }

    // C. ARRAY USAGE: Haddii xogtu sax tahay, ku kaydi Array-ga
    // Waxaan samaynaynaa 'Object' ka dibna 'push' ayaan ku sameynaynaa Array-ga
    const guestData = {
        customer: name,
        totalGuests: guests,
        stayDate: date
    };

    bookingStorage.push(guestData); // Halkan Array-ga ayaan xogta ku riday

    // Farriin guul ah (DOM Manipulation)
    alert("Mahadsanid " + name + "! Booskaaga waa la xajisay. Hadda waxaa is qoray: " + bookingStorage.length + " qof.");
    console.log("Liiska Boos celinta:", bookingStorage); //

    bookForm.reset(); // Nadiifi Form-ka
}

function validateFeedback() {
    const fName = feedbackForm.querySelector('input[type="text"]').value;
    const fPhone = feedbackForm.querySelector('input[type="number"]').value;
    const namePattern = /^[a-zA-Z\s]+$/;

    // Validation: Magaca Feedback-ga
    if (!namePattern.test(fName)) {
        alert("KHALAD: Fadlan magacaaga xarfo kaliya ku qor!");
        return;
    }

    // Validation: Taleefanka (Inaan qoraal lagu qorin waa 'type=number' laakiin dhererka aan hubino)
    if (fPhone.length < 7) {
        alert("KHALAD: Taleefanku waa inuu ugu yaraan 7 lambar yahay!");
        return;
    }

    alert("Waad ku mahadsantahay feedback-gaaga!");
    feedbackForm.reset();
}