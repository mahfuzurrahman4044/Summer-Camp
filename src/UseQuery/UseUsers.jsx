import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";

const UseUsers = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/allUsers");
    return res.data;
  });

  return { data: users, refetch }; // Return the data and refetch function
};

export default UseUsers;
