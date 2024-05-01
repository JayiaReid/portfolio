import React, { useEffect, useRef } from 'react'
import { sectionWrapper } from '../wrapper'
import { technologies } from '../constants'

const Tech = () => {
    // const scoller = document.querySelector(".scroll")

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
        addAnimation(scrollers);
    }, []);

    function addAnimation(scrollers) {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }
  return (
    <div id="scroller_body" className="scroller w-full relative" data-speed="fast">
        <ul className="tag-list m-0 list-none scroller__inner flex flex-wrap gap-[1rem]">
            {technologies.map((tech, index)=>(
                <li className='p-[1rem] cursor-pointer bg-transparent br-[0.5em]' key={index}>{tech.name}</li>
            ))} 
        </ul>
    </div>
  )
}

export default sectionWrapper(Tech, "tech")