import Image from "next/image";
import Link from "next/link";

const CategoryMobileSec = ({ categoryData, setIsCategory }) => {
  return (
    <div className="flex z-30 h-full absolute w-full top-0 right-0">
      <div className="bg-white py-3 px-1 w-64 rounded-xl absolute left-0 h-full z-30">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            className="h-16 w-20 inline-block"
            alt="logo"
            height={80}
            width={80}
          />
          <h4 className="text-xl text-black">Duas Page</h4>
        </div>
        <div className="mt-2 pl-3 space-y-3">
          {categoryData?.map((category) => (
            <div key={category?.id} className="mb-2">
              <Link
                href={`/duas/${(category?.cat_name_en)
                  .replace(/\s+/g, "-")
                  .toLowerCase()}?cat=${category?.cat_id}`}
                className="cursor-pointer flex items-center justify-between p-1 rounded-md text-black"
                onClick={() => toggleCategory(category?.cat_id)}
              >
                <div className="flex gap-1">
                  <Image
                    src="/Frame.png"
                    alt="category"
                    height={30}
                    width={30}
                  />
                  <div>
                    <h6 className="text-sm font-medium">
                      {category?.cat_name_en}
                    </h6>
                    <p className="text-gray-600 text-xs">
                      Subcategories: {category?.no_of_subcat}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h5 className="text-sm">{category?.no_of_dua}</h5>
                  <p className="text-xs text-gray-600">Duas</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        className=" bg-black opacity-60 flex-grow"
        onClick={() => setIsCategory(false)}
      ></div>
    </div>
  );
};

export default CategoryMobileSec;
