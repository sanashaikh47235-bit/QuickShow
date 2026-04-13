import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../../components/admin/AdminSidebar'

const Layout = () => {
  return (
    <div className="flex">
      <AdminSidebar />

      {/* RIGHT SIDE CONTENT */}
      <div className="flex-1 p-6 text-white">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
