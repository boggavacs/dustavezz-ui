const MainPanel = () => {
  return (
    <main className="flex-1 p-6">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="font-semibold">Users</h2>
          <p className="mt-2 text-4xl font-bold">1,245</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="font-semibold">Revenue</h2>
          <p className="mt-2 text-4xl font-bold">$23K</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="font-semibold">Orders</h2>
          <p className="mt-2 text-4xl font-bold">528</p>
        </div>
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">Main Content</h2>

        <p className="text-gray-600">
          Charts, tables, reports, and dashboard content go here.
        </p>
      </div>
    </main>
  );
};

export default MainPanel;