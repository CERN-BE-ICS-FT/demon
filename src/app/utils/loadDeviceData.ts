export const loadDeviceData = async () => {
  localStorage.removeItem('devicesData'); // Not sure about this, without it changes are not seen instantly
  const storedData = localStorage.getItem('devicesData');

  if (storedData) {
    try {
      console.log(storedData);
      return JSON.parse(storedData);
    } catch (error) {
      console.error('Error parsing stored data:', error);
    }
  } else {
    const response = await fetch('/devices.json');
    if (!response.ok) {
      console.error('Network response was not ok', response.statusText);
      return [];
    }
    const data = await response.json();
    localStorage.setItem('devicesData', JSON.stringify(data));
    console.log('Loaded devices:', data);

    return data;
  }
};
