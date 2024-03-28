"use client";
import React from "react";

function Chat() {
  const [promptData, setPromptData] = React.useState({});
  const [output, setOutput] = React.useState([]);
  const [promptFields, setPromptFields] = React.useState([]);

  React.useEffect(() => {
    const fetchPromptFields = async () => {
      const fields = ["templateType", "language", "concept"];
      setPromptFields(fields);
    };
    fetchPromptFields();
  }, []);

  const handleInputChange = (event) => {
    setPromptData({ ...promptData, [event.target.name]: event.target.value });
  };

  const sendMessage = async () => {
    const newOutput = {
      id: output.length + 1,
      ...promptData,
    };

    setOutput([...output, newOutput]);
    setPromptData({});
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col p-4 bg-white rounded-l-[12px]">
        <h2 className="font-roboto text-2xl text-[#121212] mb-4">
          Chat Prompt
        </h2>
        {promptFields.map((field) => (
          <input
            key={field}
            name={field}
            value={promptData[field] || ""}
            onChange={handleInputChange}
            className="mb-2 p-2 font-roboto text-[#121212] border-2 border-[#D4D4D8] rounded-[12px]"
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          />
        ))}
        <div className="flex justify-end">
          <button
            onClick={sendMessage}
            className="p-2 bg-[#04F] text-white font-roboto rounded-[12px]"
          >
            Send
          </button>
        </div>
        <div className="overflow-auto">
          {output.map((entry) => (
            <div
              key={entry.id}
              className="p-2 my-2 bg-white border-2 border-[#D4D4D8] rounded-[12px]"
            >
              {promptFields.map((field) => (
                <p key={field} className="font-roboto text-[#121212]">{`${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }: ${entry[field]}`}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 flex flex-col p-4 bg-white rounded-r-[12px]">
        <h2 className="font-roboto text-2xl text-[#121212] mb-4">LLM Output</h2>
        <div className="flex-1 font-roboto text-[#121212] overflow-auto rounded-[12px]">
          {output.map((entry, index) => (
            <div
              key={index}
              className="p-2 my-2 bg-[#F5F5F5] border-2 border-[#D4D4D8] rounded-[12px]"
            >
              {promptFields.map((field) => (
                <p key={field} className="font-roboto text-[#121212]">
                  {entry[field]}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chat;
