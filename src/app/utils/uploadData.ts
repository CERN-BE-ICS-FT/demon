export const uploadData = async () => {
  const treeData = localStorage.getItem('treeData');
  const deviceData = localStorage.getItem('deviceData');

  console.log('Current treeData:', treeData);
  console.log('Current deviceData:', deviceData);

  const payload: any = {};
  if (treeData) payload.treeData = treeData;
  if (deviceData) payload.deviceData = deviceData;

  fetch('/save-to-json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.message);
    })
    .catch((error) => {
      if (error.message.includes('404')) {
        console.warn(
          'Backend endpoint not found. App is running without backend.'
        );
      } else {
        console.error('Error uploading data:', error);
      }
    });
};
