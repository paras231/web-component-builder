/**
 * handeling the ui generation after dropping a particular element
 * this function handles the main logic of application and managing states
 */

export function handleElementAfterDrop(active, over, data, ...args) {
  // generate the ui once element is dropped
  // handle for each element
  const [setCanvasContent, canvasContent] = args;

  // first we need to check if there is any element on canvas and we are dropping more elements on it , this basically creates a concept of DOM tree
  // we need to keep track on positions of elements which are in dom tree and which are being dropped
  // 
  if (active && active.data.current.tagName === "div") {
    const container = data.collisions[0].data;
    container.droppableContainer.node.innerHTML = `<div className=""></div>`;
    console.log(container.droppableContainer.node);
    setCanvasContent([
      ...canvasContent,
      {
        tagName: "div",
        innerHTML: `<div className=""></div>`,
      },
    ]);
  } else if (active && active.data.current.tagName === "form") {
    const container = data.collisions[0].data;
    container.droppableContainer.node.innerHTML = `<form className=""></form>`;
  }
}
