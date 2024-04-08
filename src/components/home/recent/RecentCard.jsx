import React from "react";

const RecentCard = () => {
  // Dummy data for the homes
  const homes = [
    { id: 1, imgSrc: "images/home-1.jpg", title: "Open House", rating: 4.5, price: 21650.99, description: "Description for Beautiful House." },
    { id: 2, imgSrc: "images/home-2.jpg", title: "Luxury Villa", rating: 4.7, price: 45550.99, description: "Description for Luxury Villa." },
    { id: 3, imgSrc: "images/home-3.jpg", title: "Forest House", rating: 4.4, price: 2343422.99, description: "Description for Forest House." },
    { id: 4, imgSrc: "images/home-4.jpg", title: "Loft House", rating: 3.7, price: 2346232.99, description: "Description for Loft House." },
    { id: 5, imgSrc: "images/home-5.jpg", title: "House", rating: 4.7, price: 453422.99, description: "Description for House." },
    { id: 6, imgSrc: "images/home-6.jpg", title: "Two floored House", rating: 4.5, price: 113451.99, description: "Description for Two floored House." },
    { id: 7, imgSrc: "images/home-7.jpg", title: "Beutiful Villa", rating: 4.8, price: 563231.99, description: "Description for Beutiful Villa." },
    { id: 8, imgSrc: "images/home-8.jpg", title: "Little House", rating: 4.2, price: 64322.99, description: "Description for Little House.", }
  ];

  const handleSeeMore = (home) => {
    // Create the content to display in the new window
    const newWindowContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${home.title}</title>
        <style>
          body { font-family: "Poppins", sans-serif;font-weight: bold; margin: 20px; padding: 20px; }
          .home-image { width: 100%; max-width: 450px; height: auto; }
          .home-title { font-size: 30px; margin-top: 20px; }
          .home-price { font-size: 20px; margin-top: 10px; }
          .home-description { font-size: 16px; margin-top: 10px; }
          .buttons {margin-left: 900px;border-radius: 30px;padding: 17px 30px;background: #40E0D0;border: none;color: #020101;cursor: pointer;font-weight: bold;}
          .btn {border-radius: 30px;padding: 17px 30px;background: #40E0D0;border: none;color: #020101;cursor: pointer;font-weight: bold;}
        </style>
      </head>
      <body>
        <img src="${home.imgSrc}" alt="${home.title}" class="home-image">
        <div class="home-title">${home.title}</div>
        <div class="home-price">$${home.price}</div>
        <div class="home-description">${home.description}</div>
        <div class="buttons"><button class="btn">Rent</button><button class="btn">Contact the owner</button></div>
      </body>
      </html>
    `;

    // Open the new window
    const newWindow = window.open("", "_blank");
    newWindow.document.write(newWindowContent);
    newWindow.document.close(); // Ensure the document is fully loaded
  };

  return (
    <>
      <section className="slider">
        {homes.map((home) => (
          <div className="card" key={home.id} onClick={() => handleSeeMore(home)}>
            <div className="card-content">
              <img src={home.imgSrc} alt="" className="card-img" />
              <h1 className="card-title">{home.title}</h1>
              <div className="card-body">
                <div className="card-star">
                  <span className="rating-value">{home.rating}</span>
                  <span className="star">&#9733;</span>
                </div>
                <p className="card-price">${home.price}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-success" onClick={(e) => {e.stopPropagation(); handleSeeMore(home);}}>See More</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default RecentCard;
