'use client'

import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 12543,
    revenue: 45231,
    orders: 1284,
    growth: 23.5
  })

  const [activities] = useState([
    {
      id: 1,
      title: 'New user registration',
      description: 'John Doe signed up for premium plan',
      time: '2 minutes ago'
    },
    {
      id: 2,
      title: 'Order completed',
      description: 'Order #4321 has been delivered',
      time: '15 minutes ago'
    },
    {
      id: 3,
      title: 'Payment received',
      description: 'Payment of $234.50 from Sarah Smith',
      time: '1 hour ago'
    },
    {
      id: 4,
      title: 'New feature deployed',
      description: 'Dashboard v2.0 is now live',
      time: '3 hours ago'
    },
    {
      id: 5,
      title: 'Server maintenance',
      description: 'Scheduled maintenance completed successfully',
      time: '5 hours ago'
    }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        users: prev.users + Math.floor(Math.random() * 5),
        revenue: prev.revenue + Math.floor(Math.random() * 100),
        orders: prev.orders + Math.floor(Math.random() * 3),
        growth: parseFloat((prev.growth + (Math.random() - 0.5) * 0.5).toFixed(1))
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's what's happening with your business today.</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Users</div>
          <div className="stat-value">{stats.users.toLocaleString()}</div>
          <div className="stat-change positive">↑ 12.5% from last month</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Revenue</div>
          <div className="stat-value">${stats.revenue.toLocaleString()}</div>
          <div className="stat-change positive">↑ 8.2% from last month</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Orders</div>
          <div className="stat-value">{stats.orders.toLocaleString()}</div>
          <div className="stat-change negative">↓ 3.1% from last month</div>
        </div>

        <div className="stat-card">
          <div className="stat-label">Growth Rate</div>
          <div className="stat-value">{stats.growth}%</div>
          <div className="stat-change positive">↑ 2.4% from last month</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Revenue Trend</h3>
          <div className="chart-placeholder">Chart visualization area</div>
        </div>

        <div className="chart-card">
          <h3>User Activity</h3>
          <div className="chart-placeholder">Chart visualization area</div>
        </div>
      </div>

      <div className="activity-section">
        <h3>Recent Activity</h3>
        <ul className="activity-list">
          {activities.map(activity => (
            <li key={activity.id} className="activity-item">
              <div className="activity-info">
                <span className="activity-title">{activity.title}</span>
                <span className="activity-description">{activity.description}</span>
              </div>
              <span className="activity-time">{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
