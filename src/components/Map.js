import React, { Component } from "react";
import { HereMap } from "@wolfmatrix/react-here-maps";
import HighLight from "react-syntax-highlight";
import "../App.css";

const content1 = `
  import { HereMap } from "@wolfmatrix/react-here-maps";
  export default class Map extends Component {
    render() {
      return (
          <HereMap
            initialCenter={{ lat: 27.710769, lng: 85.31014 }}
            appConfig={{
              appId: "",
              appCode: ""
            }}
          />     
      );
    }
  }
`;

export const style = {
  height: "380px"
};
export default class Map extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <HereMap
              style={style}
              appConfig={{
                appId: "1HkBCFUp7w0wf8Pzg8PM",
                appCode: "HauaAkewuC6Rbssev2eWmg"
              }}
              initialCenter={{ lat: 27.710769, lng: 85.31014 }}
            />
            <h4 style={{ marginTop: "20px" }}>Installation</h4>
            <p> First, install library</p>
            <pre style={{ padding: "10px", background: "#fbfbfb" }}>
              <code>npm install --save @wolf/react-here-maps</code>
              <br />
              <code>yarn add @wolf/react-here-maps</code>
            </pre>
            <h4>Addtional Map Props</h4>

            <div>
              <p>
                <b>zoom :</b> This props sets the zoom level of the map. Every
                zoom level represents a different scale. The map at zoom level 2
                is twice as large as the map at zoom level 1.
              </p>
              <p>
                <b>initialCenter :</b> This props sets the center of the map.
              </p>
              <p>
                <b>style :</b> This props takes CSS style object, commonly width
                and height.
              </p>
              <div
                style={{
                  padding: "10px",
                  marginBottom: "10px",
                  background: "#fbfbfb"
                }}
              >
                <code>
                  {`
                  const style = {
                      width: '100%',
                      height: '100vh'
                    }`}
                </code>
              </div>
              <p>
                <b>liveTrafficEnable :</b>This props displayed traffic
                information on the map.{" "}
              </p>
              <p>
                <b>setMinZoomOut :</b> This props sets the minimum zoom level at
                which the given layer provides content.{" "}
              </p>
              <p>
                <b>appConfig : </b>This props contains appId and appCode as a
                object.
              </p>
            </div>
            <h4>Example</h4>
            <HighLight lang={"javascript"} value={content1} />

            <h4>Configuration</h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Property</th>
                  <th scope="col">Default</th>
                  <th scope="col">Option</th>
                  <th scope="col">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>zoom</th>
                  <td>-</td>
                  <td>integer</td>
                  <td>
                    <code>zoom={`{10}`}</code>
                  </td>
                </tr>
                <tr>
                  <th>initialCenter</th>
                  <td>-</td>
                  <td>obect</td>
                  <td>
                    <code>
                      initialCenter={`{{lat: 27.710769, lng: 85.31014}}`}
                    </code>
                  </td>
                </tr>
                <tr>
                  <th>style</th>
                  <td>-</td>
                  <td>object</td>
                  <td>
                    <code>style={`{{ width: "100%",height: "100vh"}}`}</code>
                  </td>
                </tr>
                <tr>
                  <th>liveTrafficEnable</th>
                  <td>false</td>
                  <td>boolean</td>
                  <td>
                    <code>liveTrafficeEnable={`{true}`}</code>
                  </td>
                </tr>
                <tr>
                  <th>setMinZoomOut</th>
                  <td> - </td>
                  <td>integer</td>
                  <td>
                    <code>setMinZoomOut={`{10}`}</code>
                  </td>
                </tr>
                <tr>
                  <th>appConfig</th>
                  <td> - </td>
                  <td>object</td>
                  <td>
                    <code>appConfig={`{{appId="", appCode=""}}`}</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
