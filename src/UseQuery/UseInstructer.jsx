import { useContext } from "react";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";

const UseInstructer = () => {
  const { user, loader } = useContext(AuthContext);
  const [axiosSecure] = UseAxiosSecure();
  const { data: isInstructer, isLoading: isInstructerLoading } = useQuery({
    queryKey: ["isInstructer", user?.email],
    enabled: user?.email !== undefined && !loader,
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/selectedInstructor/${user.email}`);
        console.log(res.data);
        return res.data.instructor;
      }
      return null;
    },
  });
  return [isInstructer, isInstructerLoading];
};

export default UseInstructer;
