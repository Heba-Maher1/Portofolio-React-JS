import React from "react";
import WorkItem from "./WorkItem";


const data = [
    {
        year : 2020,
        title : 'Content Creator',
        duration : '3 Years',
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, corporis!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iusto? Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem!'
    },
    {
        year : 2017,
        title : 'Google',
        duration : '3 Years',
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, corporis!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iusto? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem!'
    },
    {
        year : 2015,
        title : 'Amazon',
        duration : '2 Years',
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, corporis!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iusto? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem!'
    },
    {
        year : 2012,
        title : 'Facebook',
        duration : '3 Years',
        details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iusto? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem!'
    },
]

const Work = () => {
    return(
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16" >
            <h1 className="text-4xl font-bold text-center text-[#001b50] pb-10">Work</h1>
            {data.map((item , idx) => (
                <WorkItem
                    key={idx} 
                    year={item.year} 
                    title={item.title} 
                    duration={item.duration} 
                    details={item.details}
                />
            ))}
        </div>
    )
}

export default Work