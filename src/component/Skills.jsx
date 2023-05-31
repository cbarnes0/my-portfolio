import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Mongo from "../assets/mongo.png";
import Node from "../assets/node.png";
import ReactIcon from "../assets/react.png";

const Skills = () => {
    return (
        <div id="skills" name="skills" className="bg-gradient-to-b from-gray-900 to-gray-700 text-white pt-32">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center
            w-full h-full">
                <div>
                    <p className="text-4xl md:text-6xl font-bold inline border-b-4 border-gray-700 text-white">Experience</p>
                    <p className="py-4 text-lg md:text-xl text-white font-[Monospace]">// These are the technologies I have worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
                    <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 bg-gray-800">
                        <img className="w-20 mx-auto " src={HTML} alt="HTML icon" />
                        <p>HTML</p>
                    </div>
                    <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 bg-gray-800">
                        <img className="w-20 mx-auto " src={CSS} alt="HTML icon" />
                        <p>CSS</p>
                    </div>
                    <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 bg-gray-800">
                        <img className="w-20 mx-auto " src={Javascript} alt="HTML icon" />
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 bg-gray-800">
                        <img className="w-20 mx-auto " src={Mongo} alt="HTML icon" />
                        <p>MONGO DB</p>
                    </div>
                    <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 bg-gray-800">
                        <img className="w-20 mx-auto " src={Node} alt="HTML icon" />
                        <p>NODE JS</p>
                    </div>
                    <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500 bg-gray-800">
                        <img className="w-20 mx-auto " src={ReactIcon} alt="HTML icon" />
                        <p>REACT</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Skills