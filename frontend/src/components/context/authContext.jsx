import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const register = async (input) => {
    const res = await fetch("http://localhost:3333/rest/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    const data = await res.json();
    if (data.message) {
      alert(data.message);
    } else {
      alert("User created successfully");
    }
  };

  const login = async (input) => {
    try {
      const res = await fetch("http://localhost:3333/rest/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const data = await res.json();
      localStorage.setItem("user", JSON.stringify(data));
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async (input) => {
    await fetch("http:localhost:3333/rest/logout", {
      method: "DELETE",
    });
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
