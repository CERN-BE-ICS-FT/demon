export const loadRulesData = async () => {
  localStorage.removeItem('rulesData'); // Not sure about this, without it changes are not seen instantly

  const storedData = localStorage.getItem('rulesData');

  if (storedData) {
    try {
      return JSON.parse(storedData);
    } catch (error) {
      console.error('Error parsing stored data:', error);
    }
  } else {
    const response = await fetch('/rules.json');
    if (!response.ok) {
      console.error('Network response was not ok', response.statusText);
      return null;
    }
    const data = await response.json();
    localStorage.setItem('rulesData', JSON.stringify(data));
    // console.log(data);
    return data;
  }
};
