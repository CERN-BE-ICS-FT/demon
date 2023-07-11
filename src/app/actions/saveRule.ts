import axios from 'axios';

const saveRule = async (jsonData: any): Promise<void> => {
  try {
    console.log('action');
    // const response = await axios.post('/saveData', jsonData);
    // return response.data;
    // Removed the axios request
  } catch (error) {
    console.error(error); // Handle error
    throw new Error('Error saving data to file');
  }
};

export default saveRule;
