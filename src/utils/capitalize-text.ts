export const capitalizeText = (text: string): string => {
  const exceptions = [
    'and',
    'or',
    'in',
    'the',
    'on',
    'at',
    'by',
    'to',
    'a',
    'of',
    'for',
  ];

  return text
    .split(' ')
    .map((word, index) => {
      if (index === 0 || !exceptions.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }

      return word.toLowerCase();
    })
    .join(' ');
};
