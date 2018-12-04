import React, { Component } from "react";
import { HereMap, Circle } from "@wolfmatrix/react-here-maps";
import HighLight from "react-syntax-highlight";
import { style } from "./Map";
import "../App.css";

const content = `
  import React, { Component } from "react";
  import { HereMap, Circle } from "@wolfmatrix/react-here-maps";

  const circleProps = [
    {
      lat: 27.710769,
      lng: 85.31014,
      radius: 200,
      style: {
        strokeColor: "rgba(55, 85, 170, 0.2)",
        lineWidth: 1,
        fillColor: "rgba(255, 0, 0, 0.3)"
      }
    },
    {
      lat: 27.7,
      lng: 85.312,
      radius: 300,
      style: {
        strokeColor: "rgba(55, 85, 170, 0.2)",
        lineWidth: 1,
        fillColor: "rgba(35, 19, 250, 0.3)"
      }
    },
    {
      lat: 27.717,
      lng: 85.312,
      radius: 300,
      style: {
        strokeColor: "rgba(55, 85, 170, 0.2)",
        lineWidth: 1,
        fillColor: "rgba(26, 243, 40, 0.3)"
      }
    }
  ];
  export default class Circle extends Component {
    render() {
      return (
        <HereMap 
          zoom={14} 
          initialCenter={{ lat: 27.710769, lng: 85.31014 }}
          appConfig={{
            appId: "",
            appCode: ""
          }}
          >
          <Circle circleProps={circleProps} />
        </HereMap>
      );
    }
  }
`;

const circleProps = [
  {
    lat: 27.710769,
    lng: 85.31014,
    radius: 200,
    style: {
      strokeColor: "rgba(55, 85, 170, 0.2)",
      lineWidth: 1,
      fillColor: "rgba(255, 0, 0, 0.3)"
    }
  },
  {
    lat: 27.7,
    lng: 85.312,
    radius: 300,
    style: {
      strokeColor: "rgba(55, 85, 170, 0.2)",
      lineWidth: 1,
      fillColor: "rgba(35, 19, 250, 0.3)"
    }
  },
  {
    lat: 27.717,
    lng: 85.312,
    radius: 300,
    style: {
      strokeColor: "rgba(55, 85, 170, 0.2)",
      lineWidth: 1,
      fillColor: "rgba(26, 243, 40, 0.3)"
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
              style={style}
              zoom={14}
              initialCenter={{ lat: 27.710769, lng: 85.31014 }}
              appConfig={{
                appId: "1HkBCFUp7w0wf8Pzg8PM",
                appCode: "HauaAkewuC6Rbssev2eWmg"
              }}
            >
              <Circle circleProps={circleProps} />
            </HereMap>
            <h4 style={{ marginTop: "20px" }}>Additional Circle Props</h4>
            <div>
              <p>
                <b>circleProps :</b> This props sets geopraphical center,radius
                of circle & style of circle.
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
                  <th>circleProps</th>
                  <td>-</td>
                  <td>Array</td>
                </tr>
                <tr>
                  <th>bounds</th>
                  <td>false</td>
                  <td>boolean</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
