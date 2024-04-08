import React, { useState } from 'react';
import "./cartadder.css"

const CartAdder = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    title: '',
    location: '',
    description: '',
    prize: '',
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({
      ...propertyDetails,
      [name]: value,
    });
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPropertyDetails({
      ...propertyDetails,
      photos: files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь код для отправки данных на сервер или их обработки
    console.log(propertyDetails);
    // Сброс формы после отправки данных
    setPropertyDetails({
      title: '',
      location: '',
      description: '',
      prize: '',
      photos: [],
    });
  };

  return (
   <div className='cart'>
      <h2>Cart Adder</h2>
      <form onSubmit={handleSubmit} className="cart-adder-form">
        <label>
          Property Title:
          <input
            type="text"
            name="title"
            value={propertyDetails.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={propertyDetails.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={propertyDetails.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Prize:
          <textarea
            name="prize"
            value={propertyDetails.prize}
            onChange={handleChange}
          />
        </label>
        <label>
          Photos:
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
          />
        </label>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default CartAdder;
