import React, { Component } from "react";
import { HereMap, Marker } from "@wolfmatrix/react-here-maps";
import HighLight from "react-syntax-highlight";
import { style } from "./Map";
import "../App.css";

const markerProps = [
  {
    lat: 27.710769,
    lng: 85.31014,
    title: "Kathmandu",
    img:
      "https://lh4.ggpht.com/Tr5sntMif9qOPrKV_UVl7K8A_V3xQDgA7Sw_qweLUFlg76d_vGFA7q1xIKZ6IcmeGqg=w40"
  },
  {
    lat: 22.710769,
    lng: 85.31014
  }
];
const content = `
  import { HereMap, Marker } from "@wolfmatrix/react-here-maps";
  const markerProps = [
    {
      lat: 27.710769,
      lng: 85.31014,
      title: "Kathmandu"
      img: "https://lh4.ggpht.com/Tr5sntMif9qOPrKV_UVl7K8A_V3xQDgA7Sw_qweLUFlg76d_vGFA7q1xIKZ6IcmeGqg=w40"
    },
    {
      lat: 22.710769,
      lng: 85.31014    
    }
  ];
  const style = {
    fontSize: "10px"
  };
  export default class Marker extends Component {
    render() {
      return (
          <HereMap
            zoom={10}
            initialCenter={{ lat: 27.710769, lng: 85.31014 }}
            appConfig={{
              appId: "",
              appCode: ""
            }}
          >
            <Marker infoBubbleStyle={style} markerProps={markerProps} bounds />
          </HereMap>
      );
    }
  }
`;

export default class extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <HereMap
              zoom={10}
              style={style}
              initialCenter={{ lat: 27.710769, lng: 85.31014 }}
              appConfig={{
                appId: "1HkBCFUp7w0wf8Pzg8PM",
                appCode: "HauaAkewuC6Rbssev2eWmg"
              }}
            >
              <Marker markerProps={markerProps} bounds />
            </HereMap>
            <h4 style={{ marginTop: "20px" }}>Additional Marker Props</h4>
            <div>
              <p>
                <b>markerProps :</b> This props sets geopraphical center,bubble
                info,image in marker.
              </p>
              <p>
                <b>bounds : </b>This props adjust the center and zoom of the
                map.
              </p>
            </div>
            <h4>Example</h4>
            <HighLight lang={"javascript"} value={content} />
            <h4>Configuration</h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Property</th>
                  <th scope="col">Default</th>
                  <th scope="col">Option</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>markerProps</th>
                  <td>-</td>
                  <td>Array</td>
                </tr>
                <tr>
                  <th>bounds</th>
                  <td>false</td>
                  <td>boolean</td>
                </tr>
                <tr>
                  <th>infoBubbleStyle</th>
                  <td>-</td>
                  <td>object</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
