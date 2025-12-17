import React, { useState } from 'react';
import { Bell, X, Check, Clock, AlertCircle, Info, Trash2 } from 'lucide-react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Payment Processed',
      message: 'Your invoice #INV-2024-001 has been paid successfully',
      timestamp: '2 minutes ago',
      read: false,
      icon: Check
    },
    {
      id: 2,
      type: 'info',
      title: 'System Update',
      message: 'A new version of the application is available. Please update to get the latest features.',
      timestamp: '1 hour ago',
      read: false,
      icon: Info
    },
    {
      id: 3,
      type: 'warning',
      title: 'Action Required',
      message: 'Your subscription renews in 7 days. Update your payment method to avoid interruption.',
      timestamp: '3 hours ago',
      read: true,
      icon: AlertCircle
    },
    {
      id: 4,
      type: 'success',
      title: 'Order Shipped',
      message: 'Your order #ORD-5678 has been shipped. Track it now.',
      timestamp: '5 hours ago',
      read: true,
      icon: Check
    },
    {
      id: 5,
      type: 'info',
      title: 'New Message',
      message: 'You received a new message from Sarah Johnson',
      timestamp: '1 day ago',
      read: true,
      icon: Info
    },
    {
      id: 6,
      type: 'error',
      title: 'Failed Transaction',
      message: 'Transaction failed. Please try again or contact support.',
      timestamp: '2 days ago',
      read: true,
      icon: AlertCircle
    }
  ]);

  const [filter, setFilter] = useState('all');

  const getNotificationStyles = (type) => {
    const styles = {
      success: {
        bg: 'bg-green-50',
        border: 'border-green-300',
        icon: 'text-green-600',
        badge: 'bg-green-100 text-green-700'
      },
      info: {
        bg: 'bg-blue-50',
        border: 'border-blue-300',
        icon: 'text-blue-600',
        badge: 'bg-blue-100 text-blue-700'
      },
      warning: {
        bg: 'bg-orange-50',
        border: 'border-orange-300',
        icon: 'text-orange-600',
        badge: 'bg-orange-100 text-orange-700'
      },
      error: {
        bg: 'bg-red-50',
        border: 'border-red-300',
        icon: 'text-red-600',
        badge: 'bg-red-100 text-red-700'
      }
    };
    return styles[type] || styles.info;
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'unread') return !notif.read;
    if (filter === 'read') return notif.read;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-black">Notifications</h4>
        <div className="text-sm text-gray-600 mt-2">Glacia / Pages / Notifications</div>
      </div>

      {/* Notification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card border border-gray-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Notifications</p>
              <p className="text-3xl font-bold text-black">{notifications.length}</p>
            </div>
            <Bell size={32} className="text-blue-600 opacity-20" />
          </div>
        </div>

        <div className="glass-card border border-gray-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Unread</p>
              <p className="text-3xl font-bold text-black">{unreadCount}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 font-bold">{unreadCount}</span>
            </div>
          </div>
        </div>

        <div className="glass-card border border-gray-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Read</p>
              <p className="text-3xl font-bold text-black">{notifications.filter(n => n.read).length}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <Check size={24} className="text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="glass-card border border-gray-300 p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'All' },
              { id: 'unread', label: 'Unread' },
              { id: 'read', label: 'Read' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-lg transition font-medium ${
                  filter === f.id
                    ? 'bg-blue-600 ='
                    : 'bg-gray-100 text-black border border-gray-300 hover:bg-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 transition font-medium text-sm"
            >
              Mark all as read
            </button>
            <button
              onClick={clearAll}
              className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition font-medium text-sm"
            >
              Clear all
            </button>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notif) => {
          const Icon = notif.icon;
          const styles = getNotificationStyles(notif.type);

          return (
            <div
              key={notif.id}
              className={`glass-card border ${styles.border} ${styles.bg} p-6 hover:shadow-lg transition`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`p-3 rounded-lg flex-shrink-0 ${styles.badge}`}>
                  <Icon size={20} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h5 className="text-black font-semibold">{notif.title}</h5>
                      <p className="text-gray-600 text-sm mt-1">{notif.message}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {!notif.read && (
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      )}
                      <span className="text-xs text-gray-600 whitespace-nowrap flex items-center gap-1">
                        <Clock size={12} />
                        {notif.timestamp}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 ml-2">
                  {!notif.read && (
                    <button
                      onClick={() => markAsRead(notif.id)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition text-gray-600"
                      title="Mark as read"
                    >
                      <Check size={18} />
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notif.id)}
                    className="p-2 hover:bg-red-100 rounded-lg transition text-red-600"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="glass-card border border-gray-300 p-12 text-center">
          <Bell size={40} className="mx-auto text-gray-400 mb-3" />
          <p className="text-black font-medium mb-2">No notifications</p>
          <p className="text-gray-600">You're all caught up!</p>
        </div>
      )}

      {/* Notification Preferences */}
      <div className="glass-card border border-gray-300 p-6">
        <h5 className="text-lg font-semibold text-black mb-4">Notification Preferences</h5>
        <div className="space-y-4">
          {[
            { label: 'Email Notifications', description: 'Receive notifications via email' },
            { label: 'Push Notifications', description: 'Receive browser push notifications' },
            { label: 'SMS Alerts', description: 'Receive urgent alerts via SMS' },
            { label: 'Weekly Digest', description: 'Receive weekly summary of activities' }
          ].map((pref, i) => (
            <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 transition border-b border-gray-300 last:border-b-0">
              <div>
                <p className="text-black font-medium">{pref.label}</p>
                <p className="text-sm text-gray-600">{pref.description}</p>
              </div>
              <button
                className="relative w-12 h-6 rounded-full bg-blue-600 transition"
              >
                <div className="absolute w-5 h-5 bg-white rounded-full transition-transform translate-x-6 top-0.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Notification History */}
      <div className="glass-card border border-gray-300 p-6">
        <h5 className="text-lg font-semibold text-black mb-4">Archive</h5>
        <p className="text-black mb-4">Archived notifications older than 30 days are automatically deleted.</p>
        <button className="px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 transition font-medium">
          View Archive
        </button>
      </div>
    </div>
  );
}
