import React from "react";
import ProjectItem from "./ProjectItem";
import cat from '../assets/cat.jpeg'
import company from '../assets/company.jpeg'
import food from '../assets/food.png'
import burger from '../assets/burger.png'
import shop from '../assets/shop.png'
import curd from '../assets/curds.png'
import dashboard from '../assets/dashboard.png'

const Projects = () => {
    return(
         <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16" >
            <h1 className="text-4xl font-bold text-center text-[#001b50] pb-10">Projects</h1>
            <p className="text-center py-8">Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Explicabo temporibus ratione asperiores
                  quia, in quod perferendis commodi, beatae at 
                  nesciunt aperiam id itaque sint, velit amet 
                  cupiditate! Iste, error modi!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={company} title='Company Website' />
                <ProjectItem img={cat} title='Cat Website' />
                <ProjectItem img={food} title='Food App' />
                <ProjectItem img={curd} title='CURD System' />
            </div>
        </div>
    )
}

export default Projects