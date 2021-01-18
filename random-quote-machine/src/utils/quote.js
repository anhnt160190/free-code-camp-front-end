export const quotes = [
  {
    id: 1,
    message: '1 message',
    author: '1 author',
  },
  {
    id: 2,
    message: '2 message',
    author: '2 author',
  },
  {
    id: 3,
    message: '3 message',
    author: '3 author',
  },
];

export function randomQuotes() {
  const newIndex = Math.floor(Math.random() * quotes.length);
  return quotes[newIndex];
}
