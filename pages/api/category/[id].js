import Category from "../../../src/models/Category";

export default async function handler(req, res) {
  const { id } = req.querry;

  if (req.method === "DELETE") {
    const deleteCategory = await Category.findByIdAndDelete;
    res
      .status(200)
      .json({ message: "Category deleted", product: deleteCategory });
  } else {
    const singleCategory = await Category.findById(id);
    res.status(200).json(singleCategory);
  }
}
