import React from "react";
import { StatusBar, StatusBarCol } from "../styles/status-style";
import {
  FaBatteryFull,
  FaBatteryQuarter,
  FaWifi,
  FaBolt,
} from "react-icons/fa";
import { RiRotateLockFill } from "react-icons/ri";

const StatusComponent = ({ pathname }) => {
  return (
    <StatusBar>
      <StatusBarCol>
        <span>No Service</span>
        <FaWifi className="wifi" />
      </StatusBarCol>
      <StatusBarCol>
        {pathname === "/" ? <span>18:43</span> : <span>21:43</span>}
      </StatusBarCol>
      <StatusBarCol>
        <RiRotateLockFill className="lock" />
        {pathname === "/" ? (
          <>
            <span>11%</span>
            <FaBatteryQuarter className="battery" />
            <FaBolt />
          </>
        ) : (
          <>
            <span>100%</span>
            <FaBatteryFull className="battery" />
          </>
        )}
      </StatusBarCol>
    </StatusBar>
  );
};

export default StatusComponent;
