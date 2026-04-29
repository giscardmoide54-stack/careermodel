import { useEffect, useState } from "react";
import { API } from "../api";

export default function Quests() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    API.get("/quests").then(res => setQuests(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Quests</h2>
      {quests.map(q => (
        <div key={q._id}>
          {q.title} (+{q.xp} XP)
        </div>
      ))}
    </div>
  );
}
