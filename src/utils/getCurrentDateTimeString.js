//Date and current time
function getCurrentDateTimeString() {
    const currentDate = new Date(); // Get current date and time
    const month = currentDate.toLocaleString("default", { month: "short" }); // Get the short version of the month
    const day = currentDate.getDate();
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    const timeString =
      hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + ampm;
  
    return timeString + ", " + month + " " + day;
  }

  export default getCurrentDateTimeString;