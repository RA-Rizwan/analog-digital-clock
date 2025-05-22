function updateClock() {
    const now = new Date();
    
    // Get time components
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Calculate rotation angles for analog clock
    const hourDegrees = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour + 0.5 degrees per minute
    const minuteDegrees = minutes * 6; // 6 degrees per minute
    const secondDegrees = seconds * 6; // 6 degrees per second
    
    // Update analog clock hands
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDegrees}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${secondDegrees}deg)`;
    
    // Update digital clock
    const formattedHours = hours % 12 || 12; // Convert 24h to 12h format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    document.getElementById('hours').textContent = formattedHours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    document.getElementById('ampm').textContent = ampm;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to avoid delay
updateClock(); 