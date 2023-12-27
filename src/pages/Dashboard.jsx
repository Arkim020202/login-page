import React from 'react'
import Protected from "../components/Protected";

function DashboardPage() {
  return (
    <Protected>
      <div>Dashboard</div>
    </Protected>
  );
}

export default DashboardPage