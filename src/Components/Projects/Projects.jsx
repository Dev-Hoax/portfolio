import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiVisualstudiocode,
  SiNetlify
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/X5kYdvB/image.png"
                    alt="NFT marketplace - App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>NFT Marketplace - App</h2>
                <p>
                This app helps users buy and sell NFTs through NFT marketplaces and usually requires cryptocurrencies. 
                Verification of ownership access is built on Polygon technology regarding purchases.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiJavascript />
                  <FaReact />
                  <SiVisualstudiocode/>
                  <SiNetlify/>
                </div>
                <div>
                  <a
                    href="https://i.ibb.co/rMBG1dw/NFT-Marketplace.gif"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See the Demo
                    </span>
                  </a>
                  <a
                    href="https://github.com/Dev-Hoax/NFT_TRADING_APP"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/HK0mW4V/codewebsite.png"
                    alt="Code Club Website"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Code Club Website</h2>
                <p>
                A website project for a college code club that offers coding resources,coding competitions, tutorials, 
                and a community forum for students to share their projects and connect with other coders.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <SiNetlify/>
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://code-club-web.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Dev-Hoax/Code-Club-WebApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/QCvPk7h/todo-list-javascriptapp.png"
                    alt="To Do WebApp"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>To Do WebApp</h2>
                <p>
                A web-based to-do list application that helps you organize and prioritize tasks with ease.
                 The app features a clean, user-friendly interface and includes functionalities 
                 such as task creation, deadline setting, and categorization
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <SiNetlify/>

                </div>
                <div>
                  <a
                    href="https://run-all-tasks.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Dev-Hoax/JUST-DO-IT"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/G0hf3py/4db71e2d-fc69-43cc-bd7c-50264a4b961b-sized-1000x1000.jpg"
                    alt="Notes WebApp"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Notes WebApp</h2>
                <p>
                This WebApp is a user-friendly platform that enables users to create, store, 
                and manage their notes online. It offers a simple interface for users 
                to keep track of their ideas, thoughts from a internet connection
                </p>
                <div>
                  
                  <SiHtml5 />
                  <SiNetlify/>
                  <DiCss3 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://noted-it.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Dev-Hoax/NOTE-IT"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
};
