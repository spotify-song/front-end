import React from "react";
import imgs from "../../imgs/friends.jpg";

const Content = () => {
  return (
    <section className="Content">
      <div className="section-inner">
        <h1>about</h1>
        <div className="section-wrapper">
          <img src={imgs} alt="heheheheeh" />
          <div className="about-description">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias iure obcaecati vel magnam cupiditate facilis quo ipsum
              ab autem. Libero unde repellendus illum adipisci, perferendis esse
              distinctio corrupti cumque odit!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
