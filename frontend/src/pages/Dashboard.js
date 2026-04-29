export default function Dashboard() {
  const user = { level: 2, xp: 60 };

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard 🎮</h2>
      <p>Level {user.level}</p>
      <progress value={user.xp} max="100" />
    </div>
  );
}
