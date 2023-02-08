import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Rohit Das </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Kolkata, West Bengal (India)
                </span>
                . I am in my Pre-Final Year pursuing BTech (Computer Science Engineering)
                from{" "}
                <span className="different">
                  Sairam Institutions, Chennai (TN)
                </span>
                . Then I joined as a FreeLancer providing various services like{" "}
                <span className="different">Graphic Designing</span> , {" "}<span className="different">UI/UX developer </span>
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Motor Head{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Tech Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Photographer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Painter{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
