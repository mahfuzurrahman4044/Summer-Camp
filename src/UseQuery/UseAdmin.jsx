import { useContext } from "react";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";

const UseAdmin = () => {
  const { user, loader } = useContext(AuthContext);
  const [axiosSecure] = UseAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: user?.email !== undefined && !loader,
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/allUsers/${user.email}`);
        console.log(res);
        return res.data.admin;
      }
      return null;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
