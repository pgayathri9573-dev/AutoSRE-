import { useState } from "react";
import SystemChart from "../SystemChart";

function Dashboard({ onLogout }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
  <div className="dashboard-layout">

    <button
      className="sidebar-toggle"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      ☰
    </button>

    <aside className={`sidebar $ {isSidebarOpen ? "open"  : "closed"}`}>

        <nav className="sidebar-nav">
          <button className="active">🏠 Dashboard</button>
<button>▣ System Overview</button>
<button>📈 Metrics</button>
<button>⚙ Services</button>
<button>⚠ Alerts</button>
<button>☷ Logs</button>
<button>📄 Reports</button>
<button>⚙ Settings</button>
        </nav>
      </aside>

      <main className="dashboard-content">

        <div className="dashboard">

          {/* Header */}
          <header className="dashboard-header">

  <div className="topbar-title">
    <h1>Auto-SRE Dashboard</h1>
    <p>Monitor your system performance in real time</p>
  </div>

  <div className="topbar-right">

    <div className="search-box">
      🔍 <input type="text" placeholder="Search..." />
    </div>

    <span className="notification">🔔</span>

    <span className="theme-icon">🌙</span>

    <div className="profile">
      <div className="profile-circle">A</div>
      <div>
        <strong>Admin User</strong>
        <small>Administrator</small>
      </div>
      <span>⌄</span>
    </div>
    <button className="logout-btn" onClick={onLogout}>
  Logout
</button>

  </div>

</header>

            

          <SystemChart />

          {/* Overview */}
          <section className="overview">
            <h2>System Overview</h2>

            <div className="metrics">

              <div className="metric-card">
                <div className="metric-top">
                  <h3>CPU Usage</h3>
                  <span>⚡</span>
                </div>

                <p className="metric-value">52%</p>

                <div className="progress">
                  <div className="progress-bar cpu"></div>
                </div>

                <p className="metric-info">Normal usage</p>
              </div>

              <div className="metric-card">
                <div className="metric-top">
                  <h3>Memory</h3>
                  <span>◈</span>
                </div>

                <p className="metric-value">62%</p>

                <div className="progress">
                  <div className="progress-bar memory"></div>
                </div>

                <p className="metric-info">Healthy</p>
              </div>

              <div className="metric-card">
                <div className="metric-top">
                  <h3>Error Rate</h3>
                  <span>⚠</span>
                </div>

                <p className="metric-value">0.8%</p>

                <div className="progress">
                  <div className="progress-bar error"></div>
                </div>

                <p className="metric-info">Below threshold</p>
              </div>

              <div className="metric-card">
                <div className="metric-top">
                  <h3>Latency</h3>
                  <span>◷</span>
                </div>

                <p className="metric-value">120 ms</p>

                <div className="progress">
                  <div className="progress-bar latency"></div>
                </div>

                <p className="metric-info">Response is stable</p>
              </div>

            </div>
          </section>

          {/* System Status */}
          <section className="system-status">

            <div className="section-title">
              <h2>System Status</h2>
              <span>Live</span>
            </div>

            <div className="status-grid">

              <div className="status-card">
                <span className="status-icon">✓</span>
                <div>
                  <h3>API Service</h3>
                  <p>Operational</p>
                </div>
              </div>

              <div className="status-card">
                <span className="status-icon">✓</span>
                <div>
                  <h3>Database</h3>
                  <p>Operational</p>
                </div>
              </div>

              <div className="status-card">
                <span className="status-icon">✓</span>
                <div>
                  <h3>Monitoring</h3>
                  <p>Active</p>
                </div>
              </div>

            </div>
          </section>

          {/* Recent Activity */}
          <section className="activity">

            <h2>Recent Activity</h2>

            <div className="activity-list">

              <div className="activity-item">
                <span className="activity-dot"></span>

                <div>
                  <h3>System health check completed</h3>
                  <p>All services are operating normally</p>
                </div>

                <span className="time">Just now</span>
              </div>

              <div className="activity-item">
                <span className="activity-dot"></span>

                <div>
                  <h3>CPU usage monitored</h3>
                  <p>Current CPU usage is 52%</p>
                </div>

                <span className="time">2 min ago</span>
              </div>

              <div className="activity-item">
                <span className="activity-dot"></span>

                <div>
                  <h3>Monitoring service active</h3>
                  <p>Auto-SRE monitoring is running</p>
                </div>

                <span className="time">5 min ago</span>
              </div>

            </div>
          </section>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;