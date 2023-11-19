import { BsSearch } from "react-icons/bs";
import CategorySec from "../CategorySec/CategorySec";

export async function getCategories() {
  const res = await fetch('http://localhost:9000/categories');
  const projects = await res.json();
  return projects;
}

const CategoriesSec = async () => {
  const categoryData = await getCategories();

  return (
    <div className="w-60">
      <div className="bg-primary text-white text-sm py-2 text-center rounded-t-md">
        Categories
      </div>
      <div className="bg-white p-2 rounded-b-md overflow-y-scroll" style={{ height: 'calc(100vh - 125px)' }}>
      <div className="relative">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="py-1 pl-8 placeholder:text-xs placeholder:text-gray-600 rounded w-full border border-gray-200"
          />
          <BsSearch className="absolute left-2 top-2 rounded" />
        </div>
      <CategorySec categoryData={categoryData?.data}/>
      </div>
    </div>
  );
};

// export const getStaticProps = async () => {
//     const res = await fetch('https://localhost:9000/categories');
//     const categoryData = await res.json();
//     console.log(categoryData);
//     return {
//       props: {
//         categoryData,
//       },
//     }
// }

export default CategoriesSec;
