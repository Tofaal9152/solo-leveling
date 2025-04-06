import api from "@/lib/api";

const GetProfile = async () => {
  try {
    const res = await api.get("/auth/get-user");

    return res.data;
  } catch {
    return null;
  }
};

export default GetProfile;
