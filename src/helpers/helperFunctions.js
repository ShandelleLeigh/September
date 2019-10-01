export function generateShortID() {
  let d = new Date().getTime();
  return 'xxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 10) % 10 | 0;
    d = Math.floor(d/10);
    return (c === 'x'? r : '|').toString();
  })
}