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
  // check if there is any element on canvas
  if (canvasContent && canvasContent.length > 0) {
  }
  if (active && active.data.current.tagName === "div") {
    // console.log(container.droppableContainer.node);

    // calculate the position of items placed on canvas

    setCanvasContent([
      ...canvasContent,
      {
        tagName: "div",
        props: { className: "flex justify-center rounded-md border-2 border-slate-950 items-center " },
        children: [
          { tagName: "h1", children: "Here is h1 tag" },
          "Some additional text here",
        ],
      },
    ]);
  } else if (active && active.data.current.tagName === "form") {
  }
}
