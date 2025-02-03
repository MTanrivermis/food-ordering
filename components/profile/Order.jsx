import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import axios from "axios";
import { useSession } from "next-auth/react";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/orders`
        );
        setOrders(
          res.data.filter((order) => order.customer === currentUser?.fullName)
        );
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, [currentUser]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        setCurrentUser(
          res.data.filter((user) => user.email === session?.user.email)[0]
        );
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, [session]);

  console.log(orders);
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Orders</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 xl:min-w-[1000px] min-w-100%">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                ADDRESS
              </th>
              <th scope="col" className="py-3 px-6">
                DATE
              </th>
              <th scope="col" className="py-3 px-6">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-6">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                className="bg-secondary border-gray-700 hover:bg-primary transition-all"
                key={order?._id}
              >
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  <span>{order?._id}</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                  <span>{order?.address}</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                  {order?.date}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                  ${order?.total}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                  {order?.method}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
