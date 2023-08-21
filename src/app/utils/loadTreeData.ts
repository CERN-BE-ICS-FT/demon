export const loadTreeData = async () => {
  localStorage.removeItem('treeData');
  const storedData = localStorage.getItem('treeData');
  console.log('Stored Data:', storedData);

  if (storedData) {
    try {
      return JSON.parse(storedData);
    } catch (error) {
      console.error('Error parsing stored data:', error);
    }
  } else {
    const response = await fetch('/tree.json');
    if (!response.ok) {
      console.error('Network response was not ok', response.statusText);
      return null;
    }
    const data = await response.json();
    localStorage.setItem('treeData', JSON.stringify(data));
    console.log(data);
    return data;
  }
};
