import { ThemeProvider } from "@emotion/react";
import React from "react";
import ButtonAppBar from "./Navbar";
import FormModal from "./Auth/FormModel";
import { Button } from "@mui/material";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: props?.login || props?.register || false,
      login: props?.login || false,
      register: props?.register || false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleLogin() {
    this.setState({
      isShown: true,
      login: true,
      register: false,
    });
  }
  handleRegister() {
    this.setState({
      isShown: true,
      register: true,
      login: false,
    });
  }
  handleClose() {
    this.setState({
      isShown: false,
      register: false,
      login: false,
    });
  }
  render() {
    return (
      <div>
        <ButtonAppBar />
        <Button onClick={this.handleLogin}>Login</Button>
        <Button onClick={this.handleRegister}>Register</Button>
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
        <FormModal
          state={this.state}
          login={this.handleLogin}
          register={this.handleRegister}
          handler={this.handleClose}
        />
      </div>
    );
  }
}

export default Home;
