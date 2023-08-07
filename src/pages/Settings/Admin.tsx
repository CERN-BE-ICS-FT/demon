import React from 'react';

const Admin = () => {
  return (
    <div className="admin-panel flex flex-col space-y-4 p-4">
      <label className="flex flex-col">
        User Name:
        <input
          type="text"
          className="border-2 rounded px-2"
          placeholder="Enter user name"
        />
      </label>
      <label className="flex flex-col">
        Email:
        <input
          type="text"
          className="border-2 rounded px-2"
          placeholder="Enter email"
        />
      </label>
      <label className="flex flex-col">
        File Size:
        <input
          type="number"
          className="border-2 rounded px-2"
          placeholder="Enter file size"
        />
      </label>
      <label className="flex flex-col">
        File Type:
        <input
          type="text"
          className="border-2 rounded px-2"
          placeholder="Enter file type"
        />
      </label>
      <label className="flex flex-col">
        Created Date:
        <input type="date" className="border-2 rounded px-2" />
      </label>
      <label className="flex flex-col">
        Last Modified:
        <input type="date" className="border-2 rounded px-2" />
      </label>
      <label className="flex flex-col space-y-2">
        Accessibility Slider:
        <input type="range" className="slider-input" min="1" max="100" />
      </label>
      <button className="bg-blue-500 text-white rounded px-4 py-2">Save</button>
      <div className="table">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">File Name</th>
              <th className="px-4 py-2">File Size</th>
              <th className="px-4 py-2">File Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">File 1</td>
              <td className="border px-4 py-2">4 MB</td>
              <td className="border px-4 py-2">JPEG</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
