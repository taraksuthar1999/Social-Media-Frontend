import { ThemeProvider } from "@emotion/react";
import React from "react";
import ButtonAppBar from "./Navbar";
import FormModal from "./Auth/FormModel";
import { Button } from "@mui/material";
import SideBar from "./SideBar";
import RecipeReviewCard from "./Post/Post";
import {useMediaQuery} from "@mui/material";

function Home(props){

   const min500 = useMediaQuery("(min-width:500px)")

    return (
      <>
      {min500&&<div className="sidebar">
        <SideBar/>
      </div>}
      <div className="content">
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
        <RecipeReviewCard/>
      {/* <div>
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
      </div> */}
      <FormModal/>
      </div>
      {/* <div className="suggestions"></div> */}
      </>
      
    );
  
}

export default Home;
