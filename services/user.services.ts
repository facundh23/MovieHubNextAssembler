import { UserProps } from "@/models/user";

export const updateUser = async (url: string, data: UserProps) => {
  console.log(data);
  console.log(url);
  try {
    const formData = new FormData();
    formData.append("name", data.name);

    await fetch(url, {
      method: "PUT",
      body: formData,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAllUsers = async () => {
  const response = await fetch("http://localhost:8081/users");
  const data = await response.json();
  return data;
};

export const getUsersDetailsById = async (id: string) => {
  const response = await fetch(`http://localhost:8081/users/${id}`);
  return (await response.json()) as UserProps;
};
