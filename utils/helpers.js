// Helper function for formatting date
module.exports = { 
    format_date: (date) => {
        const date = new Date(date);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        const hours = date.getHours().toString().padStart(2, '0'); 
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;
        return `${formattedDate} at ${formattedTime}`;
    }
};