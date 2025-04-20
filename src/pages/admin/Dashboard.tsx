import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const Dashboard = () => {
  // Sample data for dashboard
  const stats = [
    { title: "Total Revenue", value: "$24567.00", change: "+12.5%", isPositive: true, icon: "💰", color: "bg-blue-500" },
    { title: "Total Orders", value: "845", change: "+8.2%", isPositive: true, icon: "📦", color: "bg-green-500" },
    { title: "Total Products", value: "1,234", change: "-2.4%", isPositive: false, icon: "📚", color: "bg-purple-500" },
    { title: "Total Customers", value: "3,456", change: "+5.6%", isPositive: true, icon: "👥", color: "bg-orange-500" }
  ];

  const quickActions = [
    { title: "Add Product", icon: "➕", color: "bg-blue-500" },
    { title: "New Order", icon: "📝", color: "bg-green-500" },
    { title: "Add Customer", icon: "👤", color: "bg-purple-500" },
    { title: "Manage Stock", icon: "📦", color: "bg-orange-500" }
  ];

  const recentOrders = [
    { id: "#ORD-1234", customer: "John Doe", product: "Product A", total: "$45.98", status: "Completed" },
    { id: "#ORD-1235", customer: "Jane Smith", product: "Product B", total: "$18.99", status: "Processing" },
    { id: "#ORD-1236", customer: "Mike Johnson", product: "Product C", total: "$35.98", status: "Pending" }
  ];

  const topProducts = [
    { name: "Premium Product", author: "Brand A", price: "$3675.55", sales: "245 copies sold", image: "/product1.jpg" },
    { name: "Popular Item", author: "Brand B", price: "$2835.00", sales: "189 copies sold", image: "/product2.jpg" },
    { name: "Featured Product", author: "Brand C", price: "$2340.00", sales: "156 copies sold", image: "/product3.jpg" }
  ];

  return (
    <AdminLayout>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-400 font-medium">{stat.title}</h3>
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center text-xl`}>
                {stat.icon}
              </div>
            </div>
            <div className="text-2xl font-bold mb-2">{stat.value}</div>
            <div className={`text-sm ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {stat.change} vs last month
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickActions.map((action, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-md cursor-pointer hover:bg-gray-700">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center text-xl mr-4`}>
                {action.icon}
              </div>
              <span>{action.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-400">Order ID</th>
                    <th className="px-4 py-2 text-left text-gray-400">Customer</th>
                    <th className="px-4 py-2 text-left text-gray-400">Product</th>
                    <th className="px-4 py-2 text-left text-gray-400">Total</th>
                    <th className="px-4 py-2 text-left text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr key={index} className="border-t border-gray-700">
                      <td className="px-4 py-3">{order.id}</td>
                      <td className="px-4 py-3">{order.customer}</td>
                      <td className="px-4 py-3">{order.product}</td>
                      <td className="px-4 py-3">{order.total}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'Completed' ? 'bg-green-900 text-green-300' : 
                          order.status === 'Processing' ? 'bg-blue-900 text-blue-300' : 
                          'bg-yellow-900 text-yellow-300'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div>
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Top Products</h3>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center p-3 border-t border-gray-700">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg mr-4 flex items-center justify-center text-xl">
                    📦
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-gray-400 text-sm">{product.author}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{product.price}</div>
                    <div className="text-gray-400 text-sm">{product.sales}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;