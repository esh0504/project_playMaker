import React from "react";
//import axios from "axios";
import Header from "../../components/common/header";
import "./Matching.css";
import MapContent from "./MapContent"

class Matching extends React.Component {
  componentDidMount() {
    // 전체 데이터 받아오기
    // 1. 매칭데이터
    // 2. 크루데이터
    // 3. 대회데이터
  }

  render() {
    
    return (
      <section className="container">
        <Header/>
        <MapContent/>
          
      </section>
    );
  }
}

export default Matching;