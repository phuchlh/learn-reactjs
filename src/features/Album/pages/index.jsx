import React from "react";
import AlbumList from "../components/AlbumList";

AlbumFeatures.propTypes = {};

function AlbumFeatures(props) {
  const albumList = [
    {
      id: 1,
      name: "Nến và hoa",
      thumbURL:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/b/2/9/2b294aa1fd40b12591b475620dd2fb09.jpg",
    },
    {
      id: 2,
      name: "Cặp bài trùng",
      thumbURL:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/6/0/8/86081968f6b559d89b4acb7df3eb4b56.jpg",
    },
    {
      id: 3,
      name: "Solo một chút thôi",
      thumbURL:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/1/8/9/b189505599fc5fb3d3e7a26f8387da15.jpg",
    },
  ];
  return (
    <div>
      <h2>Maybe you like this</h2>
      <AlbumList albumList={albumList} />
      {/* cái thằng này nó không trực tiếp render, mà nó sẽ nhờ thằng AlbumList render hộ
                bên AlbumList nó render ra, không biết data từ đâu
                nhưng do list nhiều quá nên tạo ra component album render ra từng cái

                -> thằng cha gửi data cho con render, con render không nổi thì tạo ra thêm 1 con nữa render phụ
            */}
    </div>
  );
}

export default AlbumFeatures;
