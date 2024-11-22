import React from "react";
import { useDroppable } from "@dnd-kit/core";
const CanvasManager = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
    
  });
  
  return (
    <section
      ref={setNodeRef}
      style={{ border: "1px solid whitesmoke", opacity: isOver ? 0.7 : 1 }}
      className="h-[30vmax] bg-white w-[60vmax] rounded-md mb-20"
    >
      
    </section>
  );
};

export default CanvasManager;