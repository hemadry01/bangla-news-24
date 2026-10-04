import React from 'react';
const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  
    const { categoryId } = await params;

  console.log("Category Id", categoryId);

  return (
    <div>
      <h2>Category Page</h2>
    </div>
  );
};

export default CategoryPage;
