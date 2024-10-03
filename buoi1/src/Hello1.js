import React from 'react';

function Hello1() {
  // Function hiAll
  const hiAll = () => {
    alert("Hello everyone");
  };

  // Function hiYou
  const hiYou = (name) => {
    alert("Hello " + name);
  };

  return (
    <span>
     <div style={{ maxWidth: '200px', textAlign: 'center' }}>
      {/* Gọi function khi click button */}
      <button style={{ margin: '10px' }} onClick={hiAll}>Hi All</button>
     
      <button style={{ margin: '10px' }} onClick={() => hiYou('John')}>Hi You</button> {/* Thêm tên ví dụ */}
      </div>
    </span>
  );
}

export default Hello1;
