import CampaignImage from "@/assets/images/campaign-placeholder.jpg";

const campaigns = [
  {
    id: 1,
    title: "Build a Smart Village Library",
    category: "Education",
    description:
      "Help rural students gain access to quality education by funding a modern digital library.",
    image: CampaignImage,
    raised: 7500,
    goal: 10000,
  },
  {
    id: 2,
    title: "Plant One Million Trees",
    category: "Environment",
    description:
      "Join us in creating a greener future through a nationwide tree plantation campaign.",
    image: CampaignImage,
    raised: 5200,
    goal: 10000,
  },
  {
    id: 3,
    title: "Healthcare For Everyone",
    category: "Healthcare",
    description:
      "Support free medical camps and essential healthcare services for underserved communities.",
    image: CampaignImage,
    raised: 8900,
    goal: 12000,
  },
];

export default campaigns;