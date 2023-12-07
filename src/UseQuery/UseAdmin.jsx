import { useContext } from "react";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";

const UseAdmin = () => {
  const { user } = useContext(AuthContext);

  const [axiosSecure] = UseAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allUsers/${user?.email}`);
      console.log(res);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
