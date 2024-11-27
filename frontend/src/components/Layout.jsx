import React, { useState } from "react";
import SidebarElemens from "./SidebarElemens";
import CanvasManager from "./CanvasManager";
import { DndContext } from "@dnd-kit/core";
import { handleElementAfterDrop } from "../utils/ondropUtil";
const Layout = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [canvasContent, setCanvasContent] = useState([]);
  function onDragEnd(event) {
    // console.log(event);
    const { active, over } = event;
    if (over && over.id === "droppable") {
      // handle logic after dropping element on droppable div

      handleElementAfterDrop(
        active,
        over,
        event,
        setCanvasContent,
        canvasContent
      );
    }
  }

  const handleDragOver = (event) => {
    
  };

  
 

  return (
    <>
      <DndContext onDragEnd={onDragEnd} onDragOver={handleDragOver}>
        <main className="flex justify-center items-center mt-20 space-x-10">
          <SidebarElemens />
          <CanvasManager
            selectedElement={selectedElement}
            setSelectedElement={setSelectedElement}
            canvasContent={canvasContent}
            setCanvasContent={setCanvasContent}
            
          />
        </main>
      </DndContext>
    </>
  );
};

export default Layout;
