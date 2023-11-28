const getFormattedTime = (timestamp, timezoneOffsetSeconds) => {
    const date = new Date(timestamp * 1000 + timezoneOffsetSeconds * 1000);
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'UTC',
    });
  };

  export default getFormattedTime;