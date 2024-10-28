import Title from "@/components/ui/Title";
import Image from "next/image";

const index = () => {
  return (
    <div className="flex items-center h-screen gap-20 py-20 flex-wrap">
      <div className="relative md:flex-1 h-[80%] w-[80%] mx-10">
        <Image src="/images/f1.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline inline-block my-4">
          $10
        </span>
        <p className="text-sm my-4 md:pr-24">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          repudiandae eum illum iste, sit tempora laborum ab totam nesciunt.
          Soluta!
        </p>
        <div>
          <h4 className="font-bold text-1xl">Choose the size</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div className="relative w-8 h-8">
              <Image src="/images/size.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Small
              </span>
            </div>
            <div className="relative w-12 h-12">
              <Image src="/images/size.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Medium
              </span>
            </div>
            <div className="relative w-16 h-16">
              <Image src="/images/size.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[10px] font-medium">
                Large
              </span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-1xl font-bold my-6">
            Choose additional ingredients
          </h4>
        </div>
        <div className="flex gap-x-4 mt-6 md:justify-start justify-center">
          <label className="flex items-start gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">ketchup</span>
          </label>
          <label className="flex items-start gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">mayonnaise</span>
          </label>
          <label className="flex items-start gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">hot sauce</span>
          </label>
        </div>
        <button className="btn btn-primary my-6">Add to Cart</button>
      </div>
    </div>
  );
};

export default index;
