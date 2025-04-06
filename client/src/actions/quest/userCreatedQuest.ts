import api from "@/lib/api";
const GetUsersQuest = async () => {
  try {
    const res = await api.get(`/quest/user-quests`);
    return res.data;
  } catch {
    return null;
  }
};

export default GetUsersQuest;
