// libs/common/src/helpers/formatReadableDate.js

export function formatReadableDate(dateString) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    timeZone: 'Europe/Kiev', // Часовий пояс Києва
    hour12: false // Встановлюємо 24-годинний формат
  };

  if (options.year !== 'numeric' && options.year !== '2-digit') {
    options.year = undefined;
  }

  if (options.month !== 'numeric' && options.month !== '2-digit' && options.month !== 'narrow' && options.month !== 'short' && options.month !== 'long') {
    options.month = undefined;
  }

  if (options.day !== 'numeric' && options.day !== '2-digit') {
    options.day = undefined;
  }

  const formattedDate = new Intl.DateTimeFormat(undefined, options).format(new Date(dateString));
  return formattedDate;
}
