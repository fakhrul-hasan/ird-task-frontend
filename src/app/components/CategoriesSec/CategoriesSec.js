import CategorySec from "../CategorySec/CategorySec";

export async function getCategories() {
  const res = await fetch('http://localhost:9000/categories');
  const projects = await res.json();
  return projects;
}

const CategoriesSec = async () => {
  const categoryData = await getCategories();

  return (
    <div className="min-w-60 hidden lg:block">
      <div className="bg-primary text-white text-sm py-2 text-center rounded-t-md">
        Categories
      </div>
      <div className="bg-white p-2 rounded-b-md overflow-y-scroll" style={{ height: 'calc(100vh - 125px)' }}>
      <CategorySec categoryData={categoryData?.data} />
      </div>
    </div>
  );
};

export default CategoriesSec;
