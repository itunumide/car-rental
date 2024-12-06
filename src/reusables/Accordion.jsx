import React, { useState, useRef } from 'react';

const Accordion = ({ title, content, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 border border-gray-300 rounded-lg overflow-hidden">
      <div
        className={`flex justify-between items-center p-4 cursor-pointer ${isOpen ? 'bg-yellow-400' : 'bg-white'}`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center space-x-4">
          <div className="text-gray-700">{icon}</div>
          <h2 className="m-0 text-lg text-gray-700">{title}</h2>
        </div>
        <span>{isOpen ? '-' : '+'}</span>
      </div>

      <div
        ref={contentRef}
        className="accordion-content overflow-hidden transition-max-height duration-300"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
      >
        <div className="px-4 py-2 text-gray-900">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;