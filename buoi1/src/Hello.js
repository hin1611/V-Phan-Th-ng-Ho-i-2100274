import React from 'react';

// Component Hello
function Hello() {
  const person = {   
    name: 'Peter', 
    theme: {     
      backgroundColor: 'green', 
      color: 'white' 
    }
  };

  return (
    <div>
      <div style={person.theme}>
        <h1>Xin chào: {person.name}</h1>
      </div>
      <div>Chúc bạn thành công với React</div>
    </div>
  );
}

// Component HelloPersion với props name
function HelloPersion(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Xin chào bạn: {props.name}</h1> {/* Vị trí 3: hiển thị props name */}
    </div>
  );
}

export { Hello, HelloPersion };
