import React, { useState } from 'react';
import './Car.css'; // Import file CSS

function Car() {
  // Khởi tạo state cho car
  const [car, setCar] = useState({
    name: 'Toyota',
    color: 'Red',
    year: 2020
  });

  // Hàm cập nhật năm của car
  const updateYear = (newYear) => {
    setCar(prevCar => ({
      ...prevCar,
      year: newYear
    }));
  };

  // Hàm xử lý khi click nút Update Year
  const handleUpdateYear = () => {
    const newYear = document.getElementById('yearInput').value;
    updateYear(newYear);
  };

  return (
    <div className="container">
      <h2>Show information of Car:</h2>
      <p>Name: {car.name}</p>
      <p>Color: {car.color}</p>
      <p>Year: {car.year}</p>

      <label>Update Year of Car: </label>
      <input type="number" id="yearInput" />
      <input type="button" value="Update Year" onClick={handleUpdateYear} />
    </div>
  );
}

export default Car;
