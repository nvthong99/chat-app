export const login = async ({ username, password }) => {
  console.log({ username, password });
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };
  try {
    const res = await fetch("http://192.168.1.11:8080/user/login", options);
    if (res.status === 200) {
      const token = await res.text();
      console.log(token);
      localStorage.setItem("token", token);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (token) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const res = await fetch("http://192.168.1.11:8080/user/me", options);
  if (res.status === 200) {
    const data = await res.json();
    console.log(data);
    return data;
  }
  return null;
};
