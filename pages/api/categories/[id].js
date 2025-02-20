import dbConnect from "@/util/dbConnect";
import Category from "@/models/Category";

const handler = async (req, res) => {
  await dbConnect();

  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const category = await Category.findById(id);
      res.status(200).json(category);
    } catch (error) {
      console.log(error.message);
    }
  }

  if (method === "DELETE") {
    try {
      const category = await Category.findByIdAndDelete(id);
      res.status(200).json(category);
    } catch (error) {
      console.log(error.message);
    }
  }
};

export default handler;
