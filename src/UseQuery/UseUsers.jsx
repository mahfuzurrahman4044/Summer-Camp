import { useQuery } from "@tanstack/react-query";

const UseUsers = () => {
          const { data: users = [], refetch } = useQuery(["users"], async () => {
                    const res = await fetch("http://localhost:5000/allUsers");
                    return res.json();
          });

          return { data: users, refetch }; // Return the data and refetch function
};

export default UseUsers;
