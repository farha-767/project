
function sendEnquiry(formNumber) {
    const form = document.getElementById(`enquiryForm_${formNumber}`);

    if (form) {
        let message = '';
        const phoneNumber = "+918848676627"; // Replace with your desired phone number
        const mainemail = "ajmalnk10091@gmail.com";

        switch (formNumber) {
            case 1:
                const country = form.querySelector('[placeholder="Country"]')?.value || '';
                const duration = form.querySelector('[placeholder="Duration"]')?.value || '';
                const date = form.querySelector('input[type="date"]')?.value || '';
                message = `Country: ${country},\nDuration: ${duration},\nDate: ${date}`;
                break;

            case 2:
                const name = form.querySelector('[placeholder="Name"]')?.value || '';
                const email = form.querySelector('[placeholder="Email ID"]')?.value || '';
                const mobile = form.querySelector('[placeholder="Mobile Number"]')?.value || '';
                const location = form.querySelector('[placeholder="Location"]')?.value || '';
                const category = form.querySelector('select[name="Category"]')?.value || '';
                const rooms = form.querySelector('select[name="Number of Rooms"]')?.value || '';
                const checkOut = form.querySelector('input[name="Check-out"]')?.value || '';
                const checkIn = form.querySelector('input[name="Check-in"]')?.value || '';
                message = `Name: ${name},\nEmail ID: ${email},\nMobile Number: ${mobile},\nLocation: ${location},\nCategory: ${category},\nNumber of Rooms: ${rooms},\nCheck-out: ${checkOut},\nCheck-in: ${checkIn}`;
                break;
            case 3:
                const name3 = form.querySelector('[placeholder="Name"]')?.value || '';
                const email3 = form.querySelector('[placeholder="Email ID"]')?.value || '';
                const mobile3 = form.querySelector('[placeholder="Mobile Number"]')?.value || '';
                const vehicle3 = form.querySelector('[placeholder="Type of Vehicle"]')?.value || '';
                const pick3 = form.querySelector('select[name="Pick-up Location"]')?.value || '';
                const drop3 = form.querySelector('select[name="Drop Location"]')?.value || '';
                const checkOut3 = form.querySelector('input[name="Check-out"]')?.value || '';
                const checkIn3 = form.querySelector('input[name="Check-in"]')?.value || '';
                message = `Name: ${name3},\nEmail ID: ${email3},\nMobile Number: ${mobile3},\nVehicle: ${vehicle3},\nPick-up Location: ${pick3},\nDrop Location: ${drop3},\nCheck-out: ${checkOut3},\nCheck-in: ${checkIn3}`;
                break;
            case 4:
                // Collect data for case 4
                const name2 = form.querySelector('[placeholder="Name"]')?.value || '';
                const email2 = form.querySelector('[placeholder="Email ID"]')?.value || '';
                const mobile2 = form.querySelector('[placeholder="Mobile Number"]')?.value || '';
                const wayRadio = form.querySelector('input[name="radio"]:checked');
                const way = wayRadio ? wayRadio.value : '';
                const classRadios = form.querySelectorAll('input[name="radio"]');
                let classes = '';
                classRadios.forEach(radio => {
                    if (radio.checked) {
                        classes = radio.value;
                    }
                });
                const from = form.querySelector('select[name="From"]')?.value || '';
                const to = form.querySelector('select[name="To"]')?.value || '';
                const people = form.querySelector('select[name="No. Of People"]')?.value || '';
                const departure = form.querySelector('input[name="Departure Date"]')?.value || '';
                const return1 = form.querySelector('input[name="Return Date"]')?.value || '';

                message = `Name: ${name2},\nEmail ID: ${email2},\nMobile Number: ${mobile2},\nWay: ${way},\nClasses: ${classes},\nFrom: ${from},\nTo: ${to},\nNo. Of People: ${people},\nDeparture Date: ${departure},\nReturn Date: ${return1}`;
                break;

            case 5:
                const name5 = form.querySelector('[placeholder="Name"]')?.value || '';
                const email5 = form.querySelector('[placeholder="Email ID"]')?.value || '';
                const mobile5 = form.querySelector('[placeholder="Mobile Number"]')?.value || '';
                const typeOfBus5 = form.querySelector('[placeholder="Type of Bus"]')?.value || '';
                const pick5 = form.querySelector('select[name="Pick-up Location"]')?.value || '';
                const drop5 = form.querySelector('select[name="Drop Location"]')?.value || '';
                const checkOut5 = form.querySelector('input[name="Check-out"]')?.value || '';
                const checkIn5 = form.querySelector('input[name="Check-in"]')?.value || '';
                message = `Name: ${name5},\nEmail ID: ${email5},\nMobile Number: ${mobile5},\nType of Bus: ${typeOfBus5},\nPick-up Location: ${pick5},\nDrop Location: ${drop5},\nCheck-out: ${checkOut5},\nCheck-in: ${checkIn5}`;
                break;

            case 6:
                const name6 = form.querySelector('[placeholder="Name"]')?.value || '';
                const email6 = form.querySelector('[placeholder="Email ID"]')?.value || '';
                const mobile6 = form.querySelector('[placeholder="Mobile Number"]')?.value || '';
                const address6 = form.querySelector('[placeholder="Address"]')?.value || '';
                const pick6 = form.querySelector('select[name="Pick-up Location"]')?.value || '';
                const drop6 = form.querySelector('select[name="Drop Location"]')?.value || '';
                const people6 = form.querySelector('select[name="No. Of People"]')?.value || '';
                const checkOut6 = form.querySelector('input[name="Check-out"]')?.value || '';
                const checkIn6 = form.querySelector('input[name="Check-in"]')?.value || '';
                message = `Name: ${name6},\nEmail ID: ${email6},\nMobile Number: ${mobile6},\nAddress: ${address6},\nPick-up Location: ${pick6},\nDrop Location: ${drop6},\nNo. Of People: ${people6},\nCheck-out: ${checkOut6},\nCheck-in: ${checkIn6}`;
                break;

            default:
                break;
        }

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        // const mailtoLink = `mailto:${mainemail}?subject=Enquiry&body=${encodedMessage}`;

        window.open(whatsappURL, "_blank");
        window.open(mailtoLink, "_blank");
    }
}

