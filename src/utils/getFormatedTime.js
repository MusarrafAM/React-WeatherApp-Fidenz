import { DEFAULT_LOCALE, DEFAULT_DATE_FORMAT_OPTIONS } from '../constants/formattingConstants.js';

const getFormattedTime = (timestamp, timezoneOffsetSeconds) => {
  const date = new Date(timestamp * 1000 + timezoneOffsetSeconds * 1000);
  return date.toLocaleString(DEFAULT_LOCALE, DEFAULT_DATE_FORMAT_OPTIONS);
};

  export default getFormattedTime;