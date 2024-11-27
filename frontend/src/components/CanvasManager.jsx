import React, { useRef ,useState} from "react";
import { useDroppable } from "@dnd-kit/core";
const CanvasManager = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const droppableRef = useRef(null);
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleDragOver = (event) => {
    console.log(event)
    event.preventDefault(); // Necessary to allow dropping
    const droppableRect = droppableRef.current.getBoundingClientRect();
    const relativeX = event.clientX - droppableRect.left;
    const relativeY = event.clientY - droppableRect.top;
    setPosition({ x: relativeX, y: relativeY });
  };
  

  return (
    <section
      ref={(node) => {
        setNodeRef(node);
        droppableRef.current = node;
      }}
      onDragEnter={handleDragOver}
      style={{ border: "1px solid whitesmoke", opacity: isOver ? 0.7 : 1 }}
      className="h-[30vmax] bg-white w-[60vmax] rounded-md mb-20"
    >
      {props.canvasContent?.map((node, index) => renderDomTree(node))}
    </section>
  );
};

export default CanvasManager;

const renderDomTree = (node) => {
  const { tagName, props = {}, children = [] } = node;
  const Tag = tagName;

  return (
    <Tag {...props}>
      {Array.isArray(children)
        ? children.map((child, index) =>
            typeof child === "string" || typeof child === "number"
              ? child
              : renderDomTree(child)
          )
        : children}
    </Tag>
  );
};
