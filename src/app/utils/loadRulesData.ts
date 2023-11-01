export const loadRulesData = async () => {
  const storedData = localStorage.getItem('rulesData');

  if (storedData) {
    try {
      return JSON.parse(storedData);
    } catch (error) {
      console.error('Error parsing stored rules data:', error);
      return null;
    }
  } else {
    const response = await fetch('/rules.json');
    if (!response.ok) {
      console.error('Network response was not ok', response.statusText);
      return null;
    }
    const data = await response.json();
    localStorage.setItem('rulesData', JSON.stringify(data));
    return data;
  }
};
