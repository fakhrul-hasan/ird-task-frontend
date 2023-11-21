const Skeleton = () => {
  return (
    <div
      className="space-y-3 overflow-y-scroll w-full lg:min-w-[700px]"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <div className="bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all cursor-pointer animate-pulse h-10 w-full flex flex-col justify-center px-5">
        <div className="py-1 px-5 bg-primary/20 h-3 w-[50%] rounded-lg"></div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all cursor-pointer animate-pulse space-y-6 w-full flex flex-col justify-center px-5 py-3">
        <div className="flex gap-2 items-center">
          <div className="py-1 px-1 bg-primary/20 w-6 h-6 rounded-full"></div>
          <div className="py-1 px-5  bg-primary/20 h-3 w-[50%] rounded-lg"></div>
        </div>
        <div className="space-y-2">
          <div className="py-1 px-5  bg-primary/20 h-2 w-[95%] rounded-lg"></div>
          <div className="py-1 px-5  bg-primary/20 h-2 w-[95%] rounded-lg"></div>
          <div className="py-1 px-5  bg-primary/20 h-2 w-[80%] rounded-lg"></div>
        </div>
        <div className="py-1 px-5  bg-primary/20 h-2 w-[10%] rounded-lg"></div>
        <div className="flex justify-between items-center">
          <div className="py-1 px-1 bg-primary/20 w-8 h-8 rounded-full"></div>
          <div className="flex gap-3">
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all cursor-pointer animate-pulse space-y-6 w-full flex flex-col justify-center px-5 py-3">
        <div className="flex gap-2 items-center">
          <div className="py-1 px-1 bg-primary/20 w-6 h-6 rounded-full"></div>
          <div className="py-1 px-5  bg-primary/20 h-3 w-[50%] rounded-lg"></div>
        </div>
        <div className="space-y-2">
          <div className="py-1 px-5  bg-primary/20 h-2 w-[95%] rounded-lg"></div>
          <div className="py-1 px-5  bg-primary/20 h-2 w-[95%] rounded-lg"></div>
          <div className="py-1 px-5  bg-primary/20 h-2 w-[80%] rounded-lg"></div>
        </div>
        <div className="py-1 px-5  bg-primary/20 h-2 w-[10%] rounded-lg"></div>
        <div className="flex justify-between items-center">
          <div className="py-1 px-1 bg-primary/20 w-8 h-8 rounded-full"></div>
          <div className="flex gap-3">
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all cursor-pointer animate-pulse space-y-6 w-full flex flex-col justify-center px-5 py-3">
        <div className="flex gap-2 items-center">
          <div className="py-1 px-1 bg-primary/20 w-6 h-6 rounded-full"></div>
          <div className="py-1 px-5  bg-primary/20 h-3 w-[50%] rounded-lg"></div>
        </div>
        <div className="space-y-2">
          <div className="py-1 px-5  bg-primary/20 h-2 w-[95%] rounded-lg"></div>
          <div className="py-1 px-5  bg-primary/20 h-2 w-[95%] rounded-lg"></div>
          <div className="py-1 px-5  bg-primary/20 h-2 w-[80%] rounded-lg"></div>
        </div>
        <div className="py-1 px-5  bg-primary/20 h-2 w-[10%] rounded-lg"></div>
        <div className="flex justify-between items-center">
          <div className="py-1 px-1 bg-primary/20 w-8 h-8 rounded-full"></div>
          <div className="flex gap-3">
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
            <div className="py-1 px-1 bg-primary/20 w-5 h-5 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
