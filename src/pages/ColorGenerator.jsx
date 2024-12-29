import React from "react";
import { ColorDisplay } from "../components/ColorDisplay";
import { ColorButton } from "../components/ColorButton";

function ColorGenerator() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold text-[#5361E4]">
        1. Tasodifiy rang generatorini boshqarish
      </h1>
      <ColorDisplay />
      <ColorButton />
    </div>
  );
}

export default ColorGenerator;
