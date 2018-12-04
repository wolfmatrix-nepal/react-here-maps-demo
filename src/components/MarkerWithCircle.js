import React, { Component } from "react";
import { HereMap, Marker, Circle } from "@wolfmatrix/react-here-maps";
import HighLight from "react-syntax-highlight";
import { style } from "./Map";
import "../App.css";

const content = `
  import { HereMap, Marker, Circle } from "@wolfmatrix/react-here-maps";
  const markerProps = [
    {
      lat: 27.710769,
      lng: 85.31014,
      img:
        "https://lh4.ggpht.com/Tr5sntMif9qOPrKV_UVl7K8A_V3xQDgA7Sw_qweLUFlg76d_vGFA7q1xIKZ6IcmeGqg=w50"
    },
    {
      lat: 27.58287,
      lng: 85.50972,
    }
  ];
  const circleProps = [
    {
      lat: 27.710769,
      lng: 85.31014,
      radius: 9000,
      style: {
        strokeColor: "rgba(55, 85, 170, 0.2)",
        lineWidth: 1,
        fillColor: "rgba(255, 0, 0, 0.3)"
      }
    },
    {
      lat: 27.58287,
      lng: 85.50972,
      radius: 4000,
      style: {
        strokeColor: "rgba(55, 85, 170, 0.2)",
        lineWidth: 1,
        fillColor: "rgba(35, 19, 250, 0.3)"
      }
    }
  ];
  export default class MarkerWithCircle extends Component {
    render() {
      return (
        <HereMap
          zoom={10}
          style={style}
          initialCenter={{ lat: 27.710769, lng: 85.31014 }}
          appConfig={{
            appId: "",
            appCode: ""
          }}
        >
          <Circle circleProps={circleProps}></Circle>
          <Marker markerProps={markerProps} />
      </HereMap>
      );
    }
  }
`;

const markerProps = [
  {
    lat: 27.710769,
    lng: 85.31014,
    img:
      "https://lh4.ggpht.com/Tr5sntMif9qOPrKV_UVl7K8A_V3xQDgA7Sw_qweLUFlg76d_vGFA7q1xIKZ6IcmeGqg=w50"
  },
  {
    lat: 27.58287,
    lng: 85.50972
  }
];
const circleProps = [
  {
    lat: 27.710769,
    lng: 85.31014,
    radius: 9000,
    style: {
      strokeColor: "rgba(55, 85, 170, 0.2)",
      lineWidth: 1,
      fillColor: "rgba(255, 0, 0, 0.3)"
    }
  },
  {
    lat: 27.58287,
    lng: 85.50972,
    radius: 4000,
    style: {
      strokeColor: "rgba(55, 85, 170, 0.2)",
      lineWidth: 1,
      fillColor: "rgba(35, 19, 250, 0.3)"
    }
  }
];
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
              <Circle circleProps={circleProps} />
            </HereMap>
            <h4 style={{ marginTop: "20px" }}>Example</h4>
            <HighLight lang={"javascript"} value={content} />
          </div>
        </div>
      </div>
    );
  }
}
