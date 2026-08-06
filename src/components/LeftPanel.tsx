const LeftPanel = () => {
  return (
    <aside className="hidden w-64 border-r bg-white lg:block">
      <div className="p-6">
        <h2 className="mb-6 text-xl font-bold">Dashboard</h2>

        <nav className="space-y-2">
          <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-gray-100">
            Home
          </button>

          <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-gray-100">
            Analytics
          </button>

          <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-gray-100">
            Projects
          </button>

          <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-gray-100">
            Settings
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default LeftPanel;