import { useState } from "react";
import SystemChart from "../SystemChart";

function Dashboard({ onLogout }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("Dashboard");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [accountName, setAccountName] = useState("Admin User");
const [accountRole, setAccountRole] = useState("System Administrator");
const [accountEmail, setAccountEmail] = useState("admin@autosre.com");
const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
const [securityMessage, setSecurityMessage] = useState("");
const [searchTerm, setSearchTerm] = useState("");
const handleSearch = () => {
  const term = searchTerm.trim().toLowerCase();

  if (!term) return;

  const elements = document.querySelectorAll(
    ".dashboard-layout *"
  );

  for (const element of elements) {
    if (
      element.children.length === 0 &&
      element.textContent.toLowerCase().includes(term)
    ) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
  }

  alert(`"${searchTerm}" not found`);
};
    return (
  <div className="dashboard-layout">

    <button
      className="sidebar-toggle"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      ☰
    </button>

    <aside className={`sidebar ${isSidebarOpen ? "open"  : "closed"}`}>

        <nav className="sidebar-nav">
          <button onClick={() => setActivePage("Dashboard")}>
  🏠 Dashboard
</button>

<button onClick={() => setActivePage("System Overview")}>
  ▣ System Overview
</button>

<button onClick={() => setActivePage("Metrics")}>
  📈 Metrics
</button>

<button onClick={() => setActivePage("Services")}>
  ⚙ Services
</button>

<button onClick={() => setActivePage("Alerts")}>
  ⚠ Alerts
</button>

<button onClick={() => setActivePage("Logs")}>
  ☷ Logs
</button>

<button onClick={() => setActivePage("Reports")}>
  📄 Reports
</button>

<button onClick={() => setActivePage("Settings")}>
  ⚙ Settings
</button>
        </nav>
      </aside>

      <main className="dashboard-content">
        <div className="page-title">{activePage} </div>
        {activePage === "Metrics" && (
  <div className="page-content">
    <h2>Metrics</h2>
    <p>Real-time system performance metrics</p>

    <div className="metric-cards">
      <div className="metric-card">
        <h3>CPU Usage</h3>
        <strong>56%</strong>
      </div>

      <div className="metric-card">
        <h3>Memory Usage</h3>
        <strong>68%</strong>
      </div>

      <div className="metric-card">
        <h3>Disk Usage</h3>
        <strong>42%</strong>
      </div>
    </div>
  </div>
)}
{activePage === "Services" && (
  <div className="page-content">
    <h2>Services</h2>
    <p>Monitor all running system services</p>

    <div className="service-list">

      <div className="service-card">
        <div>
          <h3>API Server</h3>
          <p>Response time: 120ms</p>
        </div>
        <strong>🟢 Running</strong>
      </div>

      <div className="service-card">
        <div>
          <h3>Database</h3>
          <p>Response time: 85ms</p>
        </div>
        <strong>🟢 Running</strong>
      </div>

      <div className="service-card">
        <div>
          <h3>Monitoring Agent</h3>
          <p>Response time: 150ms</p>
        </div>
        <strong>🟢 Running</strong>
      </div>

      <div className="service-card">
        <div>
          <h3>Notification Service</h3>
          <p>Response time: 210ms</p>
        </div>
        <strong>🟡 Warning</strong>
      </div>

    </div>
  </div>
)}
{activePage === "Alerts" && (
  <div className="page-content">
    <h2>Alerts</h2>
    <p>System alerts and warnings</p>

    <div className="alert-card">
      <h3>⚠️ High CPU Usage</h3>
      <p>CPU usage has crossed the warning threshold.</p>
      <strong>Warning</strong>
    </div>

    <div className="alert-card">
      <h3>🟢 Database Healthy</h3>
      <p>Database is running normally.</p>
      <strong>Normal</strong>
    </div>

    <div className="alert-card">
      <h3>⚠️ Notification Service</h3>
      <p>Response time is higher than expected.</p>
      <strong>Warning</strong>
    </div>
  </div>
)}
{activePage === "Logs" && (
  <div className="page-content">
    <h2>Logs</h2>
    <p>Recent system activity and events</p>

    <div className="log-card">
      <span className="log-time">10:42:15</span>
      <strong>INFO</strong>
      <span>Monitoring agent started successfully.</span>
    </div>

    <div className="log-card">
      <span className="log-time">10:41:32</span>
      <strong>INFO</strong>
      <span>Database connection established.</span>
    </div>

    <div className="log-card warning">
      <span className="log-time">10:40:18</span>
      <strong>WARNING</strong>
      <span>Notification service response time is high.</span>
    </div>

    <div className="log-card error">
      <span className="log-time">10:38:05</span>
      <strong>ERROR</strong>
      <span>CPU usage exceeded the warning threshold.</span>
    </div>
  </div>
)}
{activePage === "Reports" && (
  <div className="page-content">
    <h2>Reports</h2>
    <p>System performance and health reports</p>

    <div className="report-card">
      <h3>System Health Report</h3>
      <p>Overall system health: <strong>Healthy</strong></p>
      <p>CPU Usage: <strong>56%</strong></p>
      <p>Memory Usage: <strong>68%</strong></p>
      <p>Disk Usage: <strong>42%</strong></p>
    </div>

    <div className="report-card">
      <h3>Service Report</h3>
      <p>API Server: <strong>Running</strong></p>
      <p>Database: <strong>Running</strong></p>
      <p>Monitoring Agent: <strong>Running</strong></p>
      <p>Notification Service: <strong>Warning</strong></p>
    </div>
  </div>
)}
{activePage === "Settings" && (
  <div className="page-content">
    <h2>Settings</h2>
    <p>Manage dashboard and monitoring settings</p>

    <div className="settings-card">
      <h3>Monitoring</h3>
      <label>
        <input type="checkbox" defaultChecked />
        Enable real-time monitoring
      </label>
    </div>

    <div className="settings-card">
      <h3>Notifications</h3>
      <label>
        <input type="checkbox" defaultChecked />
        Enable system alerts
      </label>
    </div>

    <div className="settings-card">
      <h3>Alert Threshold</h3>
      <p>CPU Warning Threshold: <strong>70%</strong></p>
    </div>
  </div>
)}

        <div className="dashboard">

          {/* Header */}
          <header className="dashboard-header">

  <div className="topbar-title">
    <h1>Auto-SRE Dashboard</h1>
    <p>Monitor your system performance in real time</p>
  </div>

  <div className="topbar-right">
    </div>

    <div className="search-box">
  🔍
  <input
    type="text"
    placeholder="Search..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onKeyDown={(e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
}}
  />
</div>

    <button
  className="notification"
  onClick={() => setShowNotifications(!showNotifications)}
>
  🔔
</button>
{showNotifications && (
  <div className="notification-panel">
    <h3>Notifications</h3>

    <p>⚠️ High CPU Usage</p>
    <p>⚠️ Notification Service response time is high</p>
    <p>🟢 Database is Healthy</p>
    <p>🟢 Monitoring Agent is Active</p>
  </div>
)}

    <button
  className="theme-icon"
  onClick={() => document.body.classList.toggle("light-theme")}
>
  🌙
</button>

    <div className="profile-wrapper">
  <button
    className="profile"
    onClick={() => setShowProfileMenu(!showProfileMenu)}
  >
    <div className="profile-circle">A</div>

    <div>
      <strong>Admin User</strong>
      <small>Administrator</small>
    </div>

    <span>⌄</span>
  </button>

  {showProfileMenu && (
    <div className="profile-menu">
      <button onClick={() => setActivePage("Profile")}>
        👤 Profile
      </button>

      <button onClick={() => setActivePage("AccountSettings")}>
        ⚙️ Account Settings
      </button>

      <button onClick={() => setActivePage("Security")}>
        🔐 Security
      </button>

      <button onClick={onLogout}>
        🚪 Logout
      </button>
      </div>
  )}
</div>
</header>

            

          <SystemChart /> 
          

{activePage === "Profile" && (
  <section className="profile-page">
    <h2>Profile</h2>
    <p>Manage your profile information and account details.</p>

    <div className="profile-card">
      <h3>User Profile</h3>
      <p><strong>Name:</strong> Auto-SRE User</p>
      <p><strong>Role:</strong> System Administrator</p>
      <p><strong>Status:</strong> Active</p>
    </div>
  </section>
)}
{/* Security */}
{activePage === "Security" && (
  <section className="security-page">
    <h2>Security</h2>
    <p>Manage your account security and protection settings.</p>

    <div className="security-card">
      <h3>Security Settings</h3>

      <div className="security-option">
        <div>
          <strong>Two-Factor Authentication</strong>
          <p>
            Add an extra layer of protection to your account.
          </p>
        </div>

        <button
          onClick={() => {
            setTwoFactorEnabled(!twoFactorEnabled);
            setSecurityMessage(
              !twoFactorEnabled
                ? "Two-Factor Authentication enabled successfully."
                : "Two-Factor Authentication disabled."
            );
          }}
        >
          {twoFactorEnabled ? "Enabled" : "Enable"}
        </button>
      </div>

      <div className="security-option">
        <div>
          <strong>Login Security</strong>
          <p>
            Monitor and protect your account from unauthorized access.
          </p>
        </div>

        <span>
          {twoFactorEnabled ? "Protected" : "Needs Attention"}
        </span>
      </div>
      {/* Login Activity */}
<div className="security-card">
  <h3>Login Activity</h3>

  <div className="login-activity">
    <div className="login-item">
      <div>
        <strong>Current Session</strong>
        <p>MacBook Air • Current device</p>
      </div>
      <span className="security-status">Active</span>
    </div>

    <div className="login-item">
      <div>
        <strong>Recent Login</strong>
        <p>Today • Successful login</p>
      </div>
      <span className="security-status">Success</span>
    </div>

    <div className="login-item">
      <div>
        <strong>Login Protection</strong>
        <p>Two-factor authentication status</p>
      </div>
      <span className="security-status">
        {twoFactorEnabled ? "Protected" : "Needs Attention"}
      </span>
    </div>
  </div>
</div>
<div className="security-option">
  <div>
    <strong>Active Sessions</strong>
    <p>
      View and manage devices currently signed in to your account.
    </p>
  </div>

  <div className="session-card">
    <div>
      <strong>💻 MacBook Air</strong>
      <p>Current device • Active now</p>
    </div>

    <span className="session-status">Active</span>
  </div>

  <div className="session-card">
    <div>
      <strong>🌐 Recent Browser Session</strong>
      <p>Today • Successful login</p>
    </div>

    <button
      onClick={() =>
        setSecurityMessage("Session signed out successfully.")
      }
    >
      Sign out
    </button>
  </div>
</div>
<div className="security-card">
  <h3>Password & Account Protection</h3>

  <div className="security-option">
    <div>
      <strong>Password Security</strong>
      <p>Keep your account protected with a secure password.</p>
    </div>

    <span>Protected</span>
  </div>

  <div className="security-option">
    <div>
      <strong>Account Protection</strong>
      <p>Monitor your account for suspicious activity.</p>
    </div>

    <span>Active</span>
  </div>
</div>

      {securityMessage && (
        <div className="security-message">
          {securityMessage}
        </div>
      )}
    </div>
  </section>
)}





          {/* Overview */}
          <section className="overview">

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

{activePage === "AccountSettings" && (
  <section className="account-settings">
    <h2>Account Settings</h2>

    <div className="settings-card">
      <h3>Account Information</h3>

      <label>Name</label>
<input
  type="text"
  value={accountName}
  onChange={(e) => setAccountName(e.target.value)}
/>

<label>Role</label>
<input
  type="text"
  value={accountRole}
  onChange={(e) => setAccountRole(e.target.value)}
/>

<label>Email</label>
<input
  type="email"
  value={accountEmail}
  onChange={(e) => setAccountEmail(e.target.value)}
/>

<button
  onClick={() =>
    alert("Account settings saved successfully!")
  }
>
  Save Changes
</button>
    </div>
  </section>
)}

      </main>

    </div>
  );
}

export default Dashboard;