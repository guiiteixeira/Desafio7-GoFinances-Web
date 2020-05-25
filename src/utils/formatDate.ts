const formatDate = (date: Date): string => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  } as Intl.DateTimeFormatOptions);
};

export default formatDate;
