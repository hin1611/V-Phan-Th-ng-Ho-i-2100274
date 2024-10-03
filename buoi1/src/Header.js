import React from 'react';

// Component Item
function Item(props) {
  return (
    <li>
      <a href={props.link}>{props.content}</a> {/* Vị trí 1: link, Vị trí 2: content */}
    </li>
  );
}
// Component Menu
function Menu({ list }) {  // Vị trí 3: nhận props list
    return (
      <ul>
        {list.map((item, index) => (
          <Item key={index} link={item.url} content={item.text} />  // Gọi component Item
        ))}
      </ul>
    );
  }
// Component Header
function Header() {
    // Tạo mảng list chứa danh sách menu
    const list = [
        { url: 'https://www.google.com', text: 'Google' },
        { url: 'https://www.facebook.com', text: 'Facebook' },
    ];
  
    // Render component Menu và truyền danh sách cho nó
    return (
      <div >
        <h1  style={{ textAlign: 'center' }}>Website Menu</h1>
        <Menu list={list} />  {/* Gọi component Menu */}
      </div>
    );
  }
  
  export default Header;
    