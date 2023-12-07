import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";

const UseQuery = () => {
  const { user, loader } = useContext(AuthContext);
  // console.log(user?.email);

  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = UseAxiosSecure();

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["uniqueClass", user?.email],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSecure(`/uniqueClass/${user?.email}`);
      // console.log(res);
      return res.data;
    },
  });
  return [refetch, classes];
};

export default UseQuery;
