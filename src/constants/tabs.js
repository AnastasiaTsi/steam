import LABELS from "./labels";

const { newAndTrending, topSellers, beingPlayed, popularUpcoming } =
  LABELS.TABS;

export const tabs = [
  {
    label: newAndTrending,
    param: "new_and_trending",
  },
  {
    label: topSellers,
    param: "top_sellers",
  },
  {
    label: beingPlayed,
    param: "being_played",
  },
  {
    label: popularUpcoming,
    param: "upcoming",
  },
];
