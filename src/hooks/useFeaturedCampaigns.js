import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

const useFeaturedCampaigns = () => {
  return useQuery({
    queryKey: ["featuredCampaigns"],
    queryFn: async () => {
      const res = await axiosInstance.get("/campaigns/featured");
      return res.data.data;
    },
  });
};

export default useFeaturedCampaigns;