type Category = "일식" | "중식" | "한식" | "아시안" | "양식" | "기타";

type Distance = 5 | 10 | 15 | 20 | 30;

interface Restaurants {
  category: Category;
  distance: Distance;
  name: string;
  menu: string[];
  quality?: { taste: number; mood: number };
}
