"use client";
import React from "react";

function PromptTemplate() {
  const [items, setItems] = React.useState([{ tag: "", description: "" }]);
  const [showModal, setShowModal] = React.useState(false);
  const [promptBackground, setPromptBackground] = React.useState("");
  const [title, setTitle] = React.useState("");

  const handleAddItem = () => {
    setItems([...items, { tag: "", description: "" }]);
  };

  const handleDeleteConfirm = (index) => setShowModal(index);

  const handleDeleteItem = () => {
    if (items.length > 1) {
      const newArray = items.filter((_, i) => i !== showModal);
      setItems(newArray);
    }
    setShowModal(false);
  };

  const handleChange = (index, type, value) => {
    const newArray = [...items];
    newArray[index][type] = value;
    setItems(newArray);
  };

  const preview = items
    .map(
      (item) =>
        `<${item.tag}>\n${item.description.replace(
          /{{(.*?)}}/g,
          (match, p1) => `\${${p1}}`
        )}\n</${item.tag}>`
    )
    .join("\n\n");

  return (
    <div className="flex h-screen bg-white">
      <div className="flex flex-col flex-1 p-4 space-y-4 overflow-y-auto">
        <input
          className="w-full p-2 border rounded-[12px] mb-4"
          placeholder="Prompt Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <textarea
          className="w-full p-2 border rounded-[12px] mb-4"
          placeholder="Prompt Background"
          value={promptBackground}
          onChange={(e) => setPromptBackground(e.target.value)}
          name="promptBackground"
        />
        {items.map((item, index) => (
          <div key={index} className="space-y-2">
            <textarea
              className="w-full p-2 border rounded-[12px]"
              placeholder="XML Tag"
              value={item.tag}
              onChange={(e) => handleChange(index, "tag", e.target.value)}
              name={`tag-${index}`}
            />
            <textarea
              className="w-full p-2 border rounded-[12px]"
              placeholder="Description"
              value={item.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
              name={`description-${index}`}
            />
            <div className="flex justify-between">
              {index === items.length - 1 && (
                <button
                  onClick={handleAddItem}
                  className="text-white bg-[#04F] rounded-[12px] px-4 py-2 mt-2"
                >
                  Add Item
                </button>
              )}
              {items.length > 1 && (
                <button
                  className="text-[#C11111] border border-[#FFFFFF] bg-white rounded-[12px] p-2 float-right"
                  onClick={() => handleDeleteConfirm(index)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <pre className="whitespace-pre-wrap font-roboto w-full h-full">{`${promptBackground}\n\n${preview}`}</pre>
      </div>
      <div className="absolute right-2 top-2">
        <button className="text-white bg-[#04F] rounded-[12px] px-6 py-2">
          Save
        </button>
      </div>
      {showModal !== false && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-[12px]">
            <p className="mb-4 font-roboto">
              Are you sure you want to delete this item?
            </p>
            <button
              className="text-white bg-[#04F] rounded-[12px] px-4 py-2 mr-2"
              onClick={handleDeleteItem}
            >
              Yes
            </button>
            <button
              className="text-white bg-[#04F] rounded-[12px] px-4 py-2"
              onClick={() => setShowModal(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PromptTemplate;
