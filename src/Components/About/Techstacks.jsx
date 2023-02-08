import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiCss3, DiAndroid, DiGit } from "react-icons/di";
import { SiJavascript, SiC,SiJava, SiPython } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap} from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <DiAndroid />
            <h5>Android</h5>
          </div>
          <div>
            <DiGit />
            <h5>Git</h5>
          </div>
          <div>
            <SiPython />
            <h5>Python lang</h5>
          </div>
          <div>
          <SiC />
          <h5>C lang</h5>
        </div>
        <div>
          <SiJava />
          <h5>Java</h5>
        </div>
          
        </div>
      </div>
    </>
  );
};
