import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [seeloader, setSeeloader] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/users/admin/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsAdmin(data.isAdmin);
        setSeeloader(false);
      });
  }, [email]);
  return [isAdmin, seeloader];
};
export default useAdmin;
