
const RightPanel = () => {
  return (
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
            <li>Payment received</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default RightPanel;