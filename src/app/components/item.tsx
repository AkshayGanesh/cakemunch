import React from "react";
import Image from "next/image";

interface ItemProps {
  filePath: string;
  itemName: string;
  cakeType: string;
}

const EdibleItem: React.FC<ItemProps> = ({ filePath, itemName, cakeType }) => {
  return (
    <div className="group relative border border-black rounded p-2">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={filePath}
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          width={300}
          height={300}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {itemName}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{cakeType}</p>
        </div>
        {/* <p className="text-sm font-medium text-gray-900">$35</p> */}
      </div>
    </div>
  );
};

export default EdibleItem;
