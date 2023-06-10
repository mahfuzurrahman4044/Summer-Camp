import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UseQuery = () => {
    const { user } = useContext(AuthContext);
    // console.log(user?.email);
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ["selectedClass", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectedClass?email=${user?.email}`);
            return res.json();
        },
    })
    return [refetch, classes]
}

export default UseQuery;
