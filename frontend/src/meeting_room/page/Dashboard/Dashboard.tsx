import React from 'react'
import './Dashboard.css'
import Bar from '../../component/Graph/Bar'
import Doughnut from '../../component/Graph/Doughnut'
import Line from '../../component/Graph/Line'
import { IoPeople } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { MdMeetingRoom } from "react-icons/md";
function Dashboard() {
  return (
    <div style={{width:'100%',height:'100%',padding:'5px'}}>
        <div className="Dashboardgrid">
            <div className="boxbox box1">
              <div className="cardItem cardTem1">
                <span>500</span>
                <span><IoPeople/></span>
                <span>People</span>
              </div>
              <div className="cardItem cardTem2">
                <span>100</span>
                <span><FaBed/></span>
                <span>Rooms</span>
              </div>
              <div className="cardItem cardTem3">
                <span>200</span>
                <span><MdFastfood/></span>
                <span>Meal sets</span>
              </div>
              <div className="cardItem cardTem4">
                <span>2</span>
                <span><MdMeetingRoom/></span>
                <span>Seminar Rooms</span>
              </div>
            </div>
            <div className="boxbox box2">
              <div className='moneyD'>
                <p>$10,000.00</p>
              </div>
              <div className="moneyRoom">
                <div className='mRoom'>
                  <div>
                    <p>Room</p>
                  </div>
                  <p>1000.00</p>
                </div>
                <ul><li>outstanding balance</li></ul>
                <div></div>
              </div>
              <div className="moneyFood"></div>
            </div>
            <div className="boxbox box3"><Bar/></div>
            <div className="boxbox box4"><Doughnut/></div>
            <div className="boxbox box5">E</div>
            <div className="boxbox box6"><Line/></div>
            <div className="boxbox box7"><Bar/></div>
        </div>
    </div>
  )
}

export default Dashboard