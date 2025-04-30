import {
  FileIcon,
  CardStackPlusIcon,
  ArrowDownIcon,
  BoxIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { forwardRef } from "react";

const BusinessCard = forwardRef(({ data }, ref) => {
  const lines = [
    "{",
    ...Object.entries(data).map(([key, value], index, array) => {
      return `  "${key}": "${value}"${index !== array.length - 1 ? "," : ""}`;
    }),
    "}",
  ];

  const renderLine = (line, idx) => {
    const match = line.match(/^(\s*)"([^"]+)"(: )"([^"]+)"(,?)$/);
    if (match) {
      const [, indent, key, colon, value, comma] = match;
      return (
        <div key={idx}>
          {indent}
          <span className="text-red-400">"{key}"</span>
          {colon}
          <span className="text-yellow-400">"{value}"</span>
          {comma}
        </div>
      );
    }
    return <div key={idx}>{line}</div>;
  };

  return (
    <div
      ref={ref}
      className="bg-zinc-950/90 rounded-2xl max-w-md w-full font-mono text-sm border border-black"
    >
      <div className="bg-zinc-950 rounded-t-2xl flex items-center justify-between border-b border-b-black w-full p-2 px-6">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <h1 className="text-xl font-semibold">businessCard.json</h1>
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-white" />
          <div className="w-1 h-1 rounded-full bg-white" />
          <div className="w-1 h-1 rounded-full bg-white" />
        </div>
      </div>

      <div className="text-white bg-zinc-900 flex justify-between items-center border-b border-b-black p-2 px-6">
        <div className="flex gap-2">
          <MagnifyingGlassIcon />
          <FileIcon />
          <CardStackPlusIcon />
          <ArrowDownIcon />
          <BoxIcon />
        </div>
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-white" />
          <div className="w-1 h-1 rounded-full bg-white" />
          <div className="w-1 h-1 rounded-full bg-white" />
        </div>
      </div>

      <div className="flex">
        <div className="text-zinc-500 text-right px-6 pt-6 select-none">
          {lines.map((_, idx) => (
            <div key={idx}>{idx + 1}</div>
          ))}
        </div>

        <div className="whitespace-pre-wrap p-6 pt-6 pl-2">
          {lines.map(renderLine)}
        </div>
      </div>
    </div>
  );
});

export default BusinessCard;
