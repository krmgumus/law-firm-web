export const MiniNavbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between border-b border-gray-500 py-2">
        <div className="flex text-gray-400 space-x-4 divide-x divide-gray-400">
          <div>
            <p>abc@gmail.com</p>
          </div>
          <div className="pl-4">
            <p>Tel: 500 222 0000</p>
          </div>
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
};
