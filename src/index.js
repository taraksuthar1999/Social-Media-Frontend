import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, connect } from "react-redux";
import "./index.css";
import store from "./store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       click: false,
//     };
//   }
//   render() {
//     console.log(this.props.auth.loading);
//     return (
//       <div>
//         {this.props.auth.loading ? (
//           <Loading />
//         ) : (
//           <div>
//             <button onClick={() => this.props.login()}>Show Dog</button>
//             {this.props.auth.data ? (
//               <p className="content">
//                 {this.props.auth.data
//                   ? JSON.stringify(this.props.auth.data)
//                   : this.props.auth.data}
//               </p>
//             ) : (
//               ""
//             )}
//           </div>
//         )}
//       </div>
//     );
//   }
// }
// const login = actions.login;
// const ConnectedApp = connect((state) => state, { login })(App);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
reportWebVitals();
