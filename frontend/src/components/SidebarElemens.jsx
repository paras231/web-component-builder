import React from "react";
import { sideElems } from "../utils/sideElem";
import { useDraggable } from "@dnd-kit/core";
const SidebarElemens = (props) => {
  
  return (
    <>
      <section>
        <div className="grid grid-cols-3 gap-4">
          {sideElems.map((elem) => {
            const { attributes, listeners, setNodeRef, transform } =
              useDraggable({
                id: elem.id.toString(), // Use elem.id as the draggable ID
              });
            return (
              <div
                {...listeners}
                {...attributes}
                key={elem.id}
                style={{
                  border: "1px solid #e3e2dc",
                  cursor: "grab",
                  transform: transform
                    ? `translate(${transform.x}px, ${transform.y}px)`
                    : undefined,
                }}
                ref={setNodeRef}
                className="btn cursor-grab"
              >
                <span>{elem.tagName}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SidebarElemens;
