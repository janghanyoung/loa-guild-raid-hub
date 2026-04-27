"use client";

import { useState } from "react";

export default function EditPage() {
  const [text, setText] = useState("");

  return (
    <div className="p-6 text-white bg-[#0f172a] min-h-screen">
      <h1 className="text-xl mb-4">공략 수정</h1>

      <textarea
        className="w-full h-64 p-2 text-black"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="mt-4 bg-green-500 px-4 py-2 rounded">
        저장
      </button>
    </div>
  );
}
