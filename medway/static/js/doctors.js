// Generate calendar
const calendar = document.getElementById('calendar');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const currentDate = new Date();
const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.className = 'calendar-day flex items-center justify-center rounded-lg cursor-pointer';
    day.textContent = i;
    day.onclick = function() {
        document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
        this.classList.add('selected');
    };
    calendar.appendChild(day);
}

// Generate doctor cards
const doctors = [
    { name: 'Dr. Smith', rating: 4.5, specialty: 'Cardiologist' },
    { name: 'Dr. Johnson', rating: 4.8, specialty: 'Cardiologist' },
    { name: 'Dr. Williams', rating: 4.6, specialty: 'Cardiologist' },
    { name: 'Dr. Brown', rating: 4.7, specialty: 'Cardiologist' },
    { name: 'Dr. Davis', rating: 4.9, specialty: 'Cardiologist' }
];

const doctorsList = document.getElementById('doctorsList');
doctors.forEach(doctor => {
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded-lg shadow-sm';
    card.innerHTML = `
        <div class="w-20 h-20 mx-auto rounded-full bg-gray-200 mb-3"></div>
        <h4 class="text-center font-semibold">${doctor.name}</h4>
        <div class="flex justify-center items-center text-yellow-400">
            ${'★'.repeat(Math.floor(doctor.rating))}
            <span class="text-gray-400 ml-1">${doctor.rating}</span>
        </div>
        <p class="text-center text-gray-500 text-sm">${doctor.specialty}</p>
        <button class="w-full mt-3 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">Meet</button>
    `;
    doctorsList.appendChild(card);
});