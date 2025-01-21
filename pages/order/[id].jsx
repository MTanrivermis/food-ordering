import axios from "axios";
import Image from "next/image";

const Order = ({ order }) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-h-[calc(100vh_-_433px)] flex justify-center items-center flex-col p-10 min-w-[1000px]">
        <div className="flex items-center flex-1 w-full max-h-28">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ORDER ID
                </th>
                <th scope="col" className="py-3 px-6">
                  CUSTOMER
                </th>
                <th scope="col" className="py-3 px-6">
                  ADDRESS
                </th>
                <th scope="col" className="py-3 px-6">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  {order?._id.substring(0, 10)}...
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                  {order?.customer}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                  {order?.address}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                  ${order?.total}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between w-full p-10 bg-primary mt-8">
          <div className="relative flex flex-col">
            <Image
              src="/images/paid.png"
              alt=""
              width={40}
              height={40}
              object-fit="contain"
            />
            <span>Payment</span>
          </div>
          <div className="relative flex flex-col animate-pulse">
            <Image
              src="/images/bake.png"
              alt=""
              width={40}
              height={40}
              object-fit="contain"
            />
            <span>Preparing</span>
          </div>
          <div className="relative flex flex-col ">
            <Image
              src="/images/bike.png"
              alt=""
              width={40}
              height={40}
              object-fit="contain"
            />
            <span>On The Way</span>
          </div>
          <div className="relative flex flex-col">
            <Image
              src="/images/delivered.png"
              alt=""
              width={40}
              height={40}
              object-fit="contain"
            />
            <span>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/${params.id}`
  );

  return {
    props: {
      order: res.data ? res.data : null,
    },
  };
};

export default Order;
