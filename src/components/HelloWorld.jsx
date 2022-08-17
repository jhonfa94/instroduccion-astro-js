import { useState } from "react";

function HelloWorld(){

    const [text, setText] = useState("Hello World");

    return (
        <div className="bg-zinc-800 text-white p-10">
            <h1 className="text-4xl">{text}</h1>
            <button onClick={()=>setText("Texto actualizado")} className="bg-indigo-700 py-1 px-2">
                Click me
            </button>
        </div>
    )
}

export default HelloWorld;