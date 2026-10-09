import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    const currentContainers = containerRef.current;

    if (ScrollTrigger.isTouch) {
      const handlers: Array<() => void> = [];

      currentContainers.forEach((container, index) => {
        if (container) {
          container.classList.remove("what-noTouch");

          const handler = () => handleClick(container);

          handlers[index] = handler;
          container.addEventListener("click", handler);
        }
      });

      return () => {
        currentContainers.forEach((container, index) => {
          if (container && handlers[index]) {
            container.removeEventListener("click", handlers[index]);
          }
        });
      };
    }
  }, []);

  return (
    <div className="whatIDO">
      {/* Section title */}
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      {/* Content cards */}
      <div className="what-box">
        <div className="what-box-in">
          {/* Vertical dotted borders */}
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* CARD 1: UI DESIGN */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>UI DESIGN</h3>
              <h4>Beautiful Interfaces</h4>

              <p>
                I enjoy creating clean, modern, and visually appealing
                interfaces. I focus on typography, colors, spacing, and
                visual hierarchy to make digital experiences engaging
                and easy to navigate.
              </p>

              <h5>Skillset &amp; tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">Figma</div>
                <div className="what-tags">FigJam</div>
                <div className="what-tags">UI Design</div>
                <div className="what-tags">Visual Design</div>
                <div className="what-tags">Typography</div>
                <div className="what-tags">Color Theory</div>
                <div className="what-tags">Layout Design</div>
                <div className="what-tags">Design Systems</div>
                <div className="what-tags">Responsive Design</div>
                <div className="what-tags">Canva</div>
                <div className="what-tags">Adobe Illustrator</div>
                <div className="what-tags">Prototyping</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 2: UX DESIGN */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>UX DESIGN</h3>
              <h4>User-Centered Experiences</h4>

              <p>
                I focus on understanding user needs and creating
                intuitive, accessible, and easy-to-use experiences.
                I explore user journeys, information architecture,
                and usability to make digital products more helpful.
              </p>

              <h5>Skillset &amp; tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">User Research</div>
                <div className="what-tags">User Personas</div>
                <div className="what-tags">User Flows</div>
                <div className="what-tags">Wireframing</div>
                <div className="what-tags">Information Architecture</div>
                <div className="what-tags">Usability Testing</div>
                <div className="what-tags">Figma</div>
                <div className="what-tags">FigJam</div>
                <div className="what-tags">Prototyping</div>
                <div className="what-tags">Accessibility</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  const parent = container.parentElement;
  if (!parent) return;

  Array.from(parent.children).forEach((element) => {
    if (element instanceof HTMLDivElement && element !== container) {
      element.classList.remove("what-content-active");
      element.classList.toggle("what-sibling");
    }
  });
}

export default WhatIDo;