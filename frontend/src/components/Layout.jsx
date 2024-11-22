import React, { useState } from "react";
import SidebarElemens from "./SidebarElemens";
import CanvasManager from "./CanvasManager";
import { DndContext } from "@dnd-kit/core";
const Layout = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  function onDragEnd(event) {
    console.log(event);
  }
  return (
    <>
      <DndContext onDragEnd={onDragEnd}>
        <main className="flex justify-center items-center mt-20 space-x-10">
          <SidebarElemens />
          <CanvasManager selectedElement={selectedElement} setSelectedElement={setSelectedElement} />
        </main>
      </DndContext>
    </>
  );
};

export default Layout;
