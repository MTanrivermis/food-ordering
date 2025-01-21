import dbConnect from "@/util/dbConnect";
import Product from "@/models/Product";

const handler = async (req, res) => {
  await dbConnect();

  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
    }
  }

  if (method === "DELETE") {
    try {
      const product = await Product.findByIdAndDelete(id);
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
    }
  }
};

export default handler;
