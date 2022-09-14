import React from "react";
import styled from "styled-components";

const Gauge = () => {
  return (
    <Container>
      <div className="ring">
        <div className="speed">
          <div className="number">21</div>
          <div className="units" >
            km/h
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Gauge;

const Container = styled.div`
  .ring {
    position: relative;
    --pointerleft: 11%;
    --pointertop: 11%;
    --pointerdeg: -45deg;
    width: 50vmin;
    height: 50vmin;
    background-image: radial-gradient(
        red 0,
        red 50%,
        transparent 50%,
        transparent 100%
      ),
      radial-gradient(green 0, green 50%, transparent 50%, transparent 100%),
      radial-gradient(white 0, white 60%, transparent 60%),
      conic-gradient(
        orange 0,
        green 130deg,
        white 130deg,
        white 230deg,
        red 230deg,
        orange 360deg
      );
    background-size: 11% 11%, 11% 11%, 100% 100%, 100% 100%;
    background-repeat: no-repeat;
    background-position: 9.2% 82.3%, 90.8% 82.3%, center center, center center;
    border-radius: 50%;
    border-style: none;
  }

  .ring::after {
    position: absolute;
    content: "";
    width: 5%;
    height: 15%;
    left: var(--pointerleft);
    top: var(--pointertop);
    transform: rotate(var(--pointerdeg));
    border-style: solid;
    border-width: 0.5vmin;
    border-radius: 2vmin;
    background-color: white;
  }

  .speed {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    color: gray;
  }

  .speed .number {
    font-size: 6vw;
  }

  .speed .units {
    font-size: 3vw;
  }
`;
