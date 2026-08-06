const Dashboard = ()=>{
    return(
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto flex max-w-7xl">
        {/* Left Sidebar  */}
        <aside className="hidden w-64 border-r bg-white lg:block">
          <div className="p-6">
            <h2 className="mb-6 text-xl font-bold">Dashboard</h2>

            <nav className="space-y-2">
              <a
                href="#"
                className="block rounded-lg px-4 py-2 hover:bg-gray-100"
              >
                Home
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 hover:bg-gray-100"
              >
                Analytics
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 hover:bg-gray-100"
              >
                Projects
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 hover:bg-gray-100"
              >
                Settings
              </a>
            </nav>
          </div>
        </aside>

        {/* Middle Content */}
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
              This area can contain charts, tables, activity feeds, or any
              other dashboard content.
            </p>
          </div>
        </main>

        {/* Right Panel */}
        <aside className="hidden w-80 border-l bg-white xl:block">
          <div className="space-y-6 p-6">
            <div className="rounded-xl bg-gray-50 p-4">
              <h3 className="mb-2 font-semibold">Notifications</h3>
              <p className="text-sm text-gray-600">
                No new notifications.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <h3 className="mb-2 font-semibold">Recent Activity</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>User registered</li>
                <li>Project updated</li>
                <li>New payment received</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
    )
};

export default Dashboard;

