import { ThemeProvider } from "@emotion/react";
import React from "react";
import ButtonAppBar from "./Navbar";
import FormModal from "./Auth/FormModel";
import { Button } from "@mui/material";
import SideBar from "./SideBar";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <div className="sidebar">
        <SideBar/>
      </div>
      <div className="content">

      <div>
        <p className="lorem-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure
          voluptatibus, eligendi labore eveniet repudiandae, dolore, dolor modi
          ipsam eum accusantium fuga atque placeat iste molestiae quisquam
          quidem suscipit omnis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit sit et dolore officiis cum voluptatem
          reprehenderit aliquam aspernatur iure similique quibusdam autem
          voluptatibus natus molestiae dicta maxime sint, iste temporibus.
        </p>
        <p className="lorem-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure
          voluptatibus, eligendi labore eveniet repudiandae, dolore, dolor modi
          ipsam eum accusantium fuga atque placeat iste molestiae quisquam
          quidem suscipit omnis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit sit et dolore officiis cum voluptatem
          reprehenderit aliquam aspernatur iure similique quibusdam autem
          voluptatibus natus molestiae dicta maxime sint, iste temporibus.
        </p>
        <p className="lorem-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure
          voluptatibus, eligendi labore eveniet repudiandae, dolore, dolor modi
          ipsam eum accusantium fuga atque placeat iste molestiae quisquam
          quidem suscipit omnis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit sit et dolore officiis cum voluptatem
          reprehenderit aliquam aspernatur iure similique quibusdam autem
          voluptatibus natus molestiae dicta maxime sint, iste temporibus.
        </p>
        <p className="lorem-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure
          voluptatibus, eligendi labore eveniet repudiandae, dolore, dolor modi
          ipsam eum accusantium fuga atque placeat iste molestiae quisquam
          quidem suscipit omnis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit sit et dolore officiis cum voluptatem
          reprehenderit aliquam aspernatur iure similique quibusdam autem
          voluptatibus natus molestiae dicta maxime sint, iste temporibus.
        </p>
        <p className="lorem-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure
          voluptatibus, eligendi labore eveniet repudiandae, dolore, dolor modi
          ipsam eum accusantium fuga atque placeat iste molestiae quisquam
          quidem suscipit omnis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit sit et dolore officiis cum voluptatem
          reprehenderit aliquam aspernatur iure similique quibusdam autem
          voluptatibus natus molestiae dicta maxime sint, iste temporibus.
        </p>
        <p className="lorem-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure
          voluptatibus, eligendi labore eveniet repudiandae, dolore, dolor modi
          ipsam eum accusantium fuga atque placeat iste molestiae quisquam
          quidem suscipit omnis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit sit et dolore officiis cum voluptatem
          reprehenderit aliquam aspernatur iure similique quibusdam autem
          voluptatibus natus molestiae dicta maxime sint, iste temporibus.
        </p>
        <p className="lorem-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure
          voluptatibus, eligendi labore eveniet repudiandae, dolore, dolor modi
          ipsam eum accusantium fuga atque placeat iste molestiae quisquam
          quidem suscipit omnis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit sit et dolore officiis cum voluptatem
          reprehenderit aliquam aspernatur iure similique quibusdam autem
          voluptatibus natus molestiae dicta maxime sint, iste temporibus.
        </p>
        <p className="lorem-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure
          voluptatibus, eligendi labore eveniet repudiandae, dolore, dolor modi
          ipsam eum accusantium fuga atque placeat iste molestiae quisquam
          quidem suscipit omnis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit sit et dolore officiis cum voluptatem
          reprehenderit aliquam aspernatur iure similique quibusdam autem
          voluptatibus natus molestiae dicta maxime sint, iste temporibus.
        </p>
        <FormModal/>
      </div>
      </div>
      {/* <div className="suggestions"></div> */}
      </>
      
    );
  }
}

export default Home;
