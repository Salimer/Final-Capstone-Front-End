import React, { useState, useEffect } from 'react';

function FileShow() {
  const [itemImage, setItemImage] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/items/1')
      .then((response) => response.json())
      .then((data) => {
        setItemImage(data.image_url);
      })
      .catch((error) => console.error(error));
  }, [setItemImage]);
  return (
    <div>
      <img src={itemImage} alt="item" />
    </div>
  );
}

export default FileShow;
