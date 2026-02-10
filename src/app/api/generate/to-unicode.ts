export const convertToUnicode = (
  text: string,
  upperStart: number, // e.g., 0x1D400 for Bold Serif A
  lowerStart: number, // e.g., 0x1D41A for Bold Serif a
  digitStart?: number
) => {
  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        return String.fromCodePoint(upperStart + (code - 65));
      }

      if (code >= 97 && code <= 122) {
        return String.fromCodePoint(lowerStart + (code - 97));
      }

      if (digitStart && code >= 48 && code <= 57) {
        return String.fromCodePoint(digitStart + (code - 48));
      }

      return char;
    })
    .join("");
};