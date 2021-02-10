import React from "react";
//import axios from "axios";
import Header from "../../components/common/header";
import MainContentsContainer from "../../components/common/main_contents_container";
import SideContentsContainer from "../../components/common/side_contents_container";
import { connect } from 'react-redux';
import { actionMarkerclick } from '../../redux/actions/index';
import "./Home.css";

class Home extends React.Component {
  componentDidMount() {
    // 전체 데이터 받아오기
    // 1. 매칭데이터
    // 2. 크루데이터
    // 3. 대회데이터
  }

  render() {
    {console.log(this.props)}
    return (
      <section className="container">
        <Header/>
        <SideContentsContainer>
        </SideContentsContainer>
        <MainContentsContainer>
        </MainContentsContainer>
      </section>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
      onMarkerClick: () => dispatch(actionMarkerclick()),
  }
}

let mapStateToProps = (state) => {
  return {
      marker_clicked : state.marker_clicked
  };
}

//mapStateToProps를 사용하여 컴포넌트를 store에 연결시킨다.
Home = connect(mapStateToProps,mapDispatchToProps)(Home);

export default Home;