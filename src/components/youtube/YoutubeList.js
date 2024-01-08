import React from "react";
import { YoutubeData } from "../../Data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  // console.log(props); 
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index === 1) newClass = "abc";
          /* const newClass = index === 1 ? 'abc' : ''; */
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title}
            author={item.author}
            className={newClass}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;

// tên file  viết khoa chữ cái đầu
// tên const  viết hoa chữ cái đầu
// tạo thẻ viết hoa chữ cái dầu
// import thi nó tự import tên file không viết hoa