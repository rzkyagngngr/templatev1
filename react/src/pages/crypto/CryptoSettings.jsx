import React, { useState } from 'react';
import {
  User, Shield, Bell, Key, CreditCard, Settings, Eye, EyeOff,
  Camera, Phone, Mail, Globe, Facebook, Twitter, Smartphone,
  Chrome, Database, Lock, AlertTriangle, CheckCircle, XCircle,
  Copy, Download, Upload, Trash2, Plus, Edit, Save, RefreshCw
} from 'lucide-react';

const CryptoSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [sendModalOpen, setSendModalOpen] = useState(false);
  const [requestModalOpen, setRequestModalOpen] = useState(false);

  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Rosa Dodson',
    email: 'mannat.theme@gmail.com',
    password: '',
    bio: 'UI/UX Designer passionate about creating beautiful and functional digital experiences.',
    location: 'Mumbai, India',
    website: 'https://mannatthemes.com/',
    phone: '+91 23456 78910'
  });

  const [accountSettings, setAccountSettings] = useState({
    linkedAccount: 'PayPal',
    currency: 'US Dollar',
    walletPassword: '',
    defaultWallet: 'BTC Wallet',
    language: 'English',
    timezone: 'UTC+5:30'
  });

  const [notifications, setNotifications] = useState({
    icoNotify: false,
    notifySound: false,
    notifyFriends: false,
    autoLockWallet: true,
    priceAlerts: true,
    transactionAlerts: true,
    securityAlerts: true,
    marketingEmails: false,
    weeklyReports: true
  });

  const [securitySettings, setSecuritySettings] = useState({
    smsAuth: 'enable',
    googleAuth: 'enable',
    api: 'enable',
    biometricAuth: false,
    sessionTimeout: '30',
    loginAlerts: true,
    deviceManagement: true
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    transactionHistory: 'private',
    balanceVisibility: 'friends',
    activityStatus: true,
    dataSharing: false,
    analytics: true
  });

  

  const [billingSettings, setBillingSettings] = useState({
    paymentMethod: 'visa',
    autoRenewal: true,
    billingAddress: '123 Crypto Street, Mumbai, India',
    taxId: 'IN123456789',
    invoiceEmail: 'billing@mannatthemes.com'
  });

  const [advancedSettings, setAdvancedSettings] = useState({
    exportData: false,
    deleteAccount: false,
    twoFactorBackup: '',
    recoveryEmail: 'recovery@mannatthemes.com',
    dataRetention: 'forever'
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User, count: null },
    { id: 'account', name: 'Account', icon: Settings, count: null },
    { id: 'security', name: 'Security', icon: Shield, count: null },
    { id: 'privacy', name: 'Privacy', icon: Eye, count: null },
    { id: 'notifications', name: 'Notifications', icon: Bell, count: 3 },
    { id: 'api', name: 'API Keys', icon: Key, count: apiKeys.length },
    { id: 'billing', name: 'Billing', icon: CreditCard, count: null },
    { id: 'advanced', name: 'Advanced', icon: Settings, count: null }
  ];

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleAccountSettingsChange = (field, value) => {
    setAccountSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field, value) => {
    setNotifications(prev => ({ ...prev, [field]: value }));
  };

  const handleSecurityChange = (field, value) => {
    setSecuritySettings(prev => ({ ...prev, [field]: value }));
  };

  const handlePrivacyChange = (field, value) => {
    setPrivacySettings(prev => ({ ...prev, [field]: value }));
  };

  const handleBillingChange = (field, value) => {
    setBillingSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleAdvancedChange = (field, value) => {
    setAdvancedSettings(prev => ({ ...prev, [field]: value }));
  };

  const generateApiKey = () => {
    const newKey = {
      id: apiKeys.length + 1,
      name: 'New API Key',
      key: `API_KEY_${Math.random().toString(36).substring(2, 15)}`,
      permissions: ['read'],
      created: new Date().toISOString().split('T')[0],
      lastUsed: 'Never',
      status: 'active'
    };
    setApiKeys(prev => [...prev, newKey]);
  };

  const deleteApiKey = (id) => {
    setApiKeys(prev => prev.filter(key => key.id !== id));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-8">
            {/* Profile Picture and Basic Info */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Profile Information</h3>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
                  <div className="relative">
                    <img
                      src="https://picsum.photos/110/110?random=9"
                      alt="Profile"
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <button className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                      <Camera className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="mt-6 text-center lg:text-left">
                    <h5 className="text-xl font-bold text-gray-800">{personalInfo.fullName}</h5>
                    <p className="text-gray-600">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={personalInfo.fullName}
                        onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                        className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        value={personalInfo.email}
                        onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                        className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={personalInfo.phone}
                        onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                        className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                      <input
                        type="url"
                        value={personalInfo.website}
                        onChange={(e) => handlePersonalInfoChange('website', e.target.value)}
                        className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      rows="4"
                      value={personalInfo.bio}
                      onChange={(e) => handlePersonalInfoChange('bio', e.target.value)}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <div className="flex justify-end">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Social Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">Facebook</h4>
                    <p className="text-sm text-gray-600">25k Followers</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                    Connected
                  </button>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center">
                    <Twitter className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">Twitter</h4>
                    <p className="text-sm text-gray-600">58k Followers</p>
                  </div>
                  <button className="px-4 py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition-colors">
                    Connected
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'account':
        return (
          <div className="space-y-8">
            {/* Account Preferences */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Account Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
                  <select
                    value={accountSettings.currency}
                    onChange={(e) => handleAccountSettingsChange('currency', e.target.value)}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>US Dollar</option>
                    <option>Euro</option>
                    <option>British Pound</option>
                    <option>Japanese Yen</option>
                    <option>Bitcoin</option>
                    <option>Ethereum</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select
                    value={accountSettings.language}
                    onChange={(e) => handleAccountSettingsChange('language', e.target.value)}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Chinese</option>
                    <option>Japanese</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                  <select
                    value={accountSettings.timezone}
                    onChange={(e) => handleAccountSettingsChange('timezone', e.target.value)}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>UTC+5:30 (IST)</option>
                    <option>UTC+0:00 (GMT)</option>
                    <option>UTC-5:00 (EST)</option>
                    <option>UTC+1:00 (CET)</option>
                    <option>UTC+9:00 (JST)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Default Wallet</label>
                  <select
                    value={accountSettings.defaultWallet}
                    onChange={(e) => handleAccountSettingsChange('defaultWallet', e.target.value)}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>BTC Wallet</option>
                    <option>ETH Wallet</option>
                    <option>USDT Wallet</option>
                    <option>Multi-currency Wallet</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Save Preferences</span>
                </button>
              </div>
            </div>

            {/* Linked Accounts */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Linked Accounts</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">P</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">PayPal</h4>
                      <p className="text-sm text-gray-600">Connected for payments</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Active</span>
                    <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      Unlink
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">B</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Bank Account</h4>
                      <p className="text-sm text-gray-600">**** **** **** 1234</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Active</span>
                    <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      Unlink
                    </button>
                  </div>
                </div>

                <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Plus className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Add New Account</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-8">
            {/* Two-Factor Authentication */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Two-Factor Authentication</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* SMS Authentication */}
                <div className="p-6 bg-white/50 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-gray-800 mb-2">SMS Authentication</h5>
                      <p className="text-gray-600 text-sm mb-4">Receive codes via SMS for account security</p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSecurityChange('smsAuth', 'enable')}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            securitySettings.smsAuth === 'enable'
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          Enable
                        </button>
                        <button
                          onClick={() => handleSecurityChange('smsAuth', 'disable')}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            securitySettings.smsAuth === 'disable'
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          Disable
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Authenticator */}
                <div className="p-6 bg-white/50 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Chrome className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-gray-800 mb-2">Google Authenticator</h5>
                      <p className="text-gray-600 text-sm mb-4">Use Google Authenticator app for 2FA</p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSecurityChange('googleAuth', 'enable')}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            securitySettings.googleAuth === 'enable'
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          Enable
                        </button>
                        <button
                          onClick={() => handleSecurityChange('googleAuth', 'disable')}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            securitySettings.googleAuth === 'disable'
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          Disable
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Biometric Authentication */}
                <div className="p-6 bg-white/50 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-gray-800 mb-2">Biometric Auth</h5>
                      <p className="text-gray-600 text-sm mb-4">Use fingerprint or face recognition</p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSecurityChange('biometricAuth', true)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            securitySettings.biometricAuth
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          Enable
                        </button>
                        <button
                          onClick={() => handleSecurityChange('biometricAuth', false)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                            !securitySettings.biometricAuth
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          Disable
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Security Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                  <select
                    value={securitySettings.sessionTimeout}
                    onChange={(e) => handleSecurityChange('sessionTimeout', e.target.value)}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="240">4 hours</option>
                    <option value="never">Never</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Change Password</label>
                  <input
                    type="password"
                    placeholder="New password"
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800">Login Alerts</h4>
                    <p className="text-sm text-gray-600">Get notified of new login attempts</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={securitySettings.loginAlerts}
                      onChange={(e) => handleSecurityChange('loginAlerts', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800">Device Management</h4>
                    <p className="text-sm text-gray-600">Manage trusted devices</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={securitySettings.deviceManagement}
                      onChange={(e) => handleSecurityChange('deviceManagement', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Save Security Settings</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-8">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Privacy Settings</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Profile Visibility</label>
                  <div className="space-y-2">
                    {[
                      { value: 'public', label: 'Public', desc: 'Anyone can see your profile' },
                      { value: 'friends', label: 'Friends Only', desc: 'Only friends can see your profile' },
                      { value: 'private', label: 'Private', desc: 'Only you can see your profile' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl cursor-pointer hover:bg-white/70 transition-colors">
                        <input
                          type="radio"
                          name="profileVisibility"
                          value={option.value}
                          checked={privacySettings.profileVisibility === option.value}
                          onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <div>
                          <div className="font-medium text-gray-800">{option.label}</div>
                          <div className="text-sm text-gray-600">{option.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Transaction History Visibility</label>
                  <div className="space-y-2">
                    {[
                      { value: 'public', label: 'Public', desc: 'Anyone can see your transaction history' },
                      { value: 'friends', label: 'Friends Only', desc: 'Only friends can see your transactions' },
                      { value: 'private', label: 'Private', desc: 'Transaction history is private' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl cursor-pointer hover:bg-white/70 transition-colors">
                        <input
                          type="radio"
                          name="transactionHistory"
                          value={option.value}
                          checked={privacySettings.transactionHistory === option.value}
                          onChange={(e) => handlePrivacyChange('transactionHistory', e.target.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <div>
                          <div className="font-medium text-gray-800">{option.label}</div>
                          <div className="text-sm text-gray-600">{option.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-gray-800">Activity Status</h4>
                    <p className="text-sm text-gray-600">Show when you're active on the platform</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacySettings.activityStatus}
                      onChange={(e) => handlePrivacyChange('activityStatus', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-gray-800">Data Sharing</h4>
                    <p className="text-sm text-gray-600">Share anonymized data for platform improvement</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacySettings.dataSharing}
                      onChange={(e) => handlePrivacyChange('dataSharing', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Save Privacy Settings</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-8">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Notification Preferences</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-gray-800">ICO Notifications</h4>
                    <p className="text-sm text-gray-600">Get notified about new cryptocurrency ICOs</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.icoNotify}
                      onChange={(e) => handleNotificationChange('icoNotify', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-gray-800">Price Alerts</h4>
                    <p className="text-sm text-gray-600">Receive alerts when crypto prices change significantly</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.priceAlerts}
                      onChange={(e) => handleNotificationChange('priceAlerts', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-gray-800">Transaction Alerts</h4>
                    <p className="text-sm text-gray-600">Get notified about all transactions</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.transactionAlerts}
                      onChange={(e) => handleNotificationChange('transactionAlerts', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-gray-800">Security Alerts</h4>
                    <p className="text-sm text-gray-600">Important security notifications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.securityAlerts}
                      onChange={(e) => handleNotificationChange('securityAlerts', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-gray-800">Sound Notifications</h4>
                    <p className="text-sm text-gray-600">Play sound for notifications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.notifySound}
                      onChange={(e) => handleNotificationChange('notifySound', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-gray-800">Weekly Reports</h4>
                    <p className="text-sm text-gray-600">Receive weekly portfolio summaries</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.weeklyReports}
                      onChange={(e) => handleNotificationChange('weeklyReports', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Save Notification Settings</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 'api':
        return (
          <div className="space-y-8">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">API Keys</h3>
                <button
                  onClick={generateApiKey}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Generate New Key</span>
                </button>
              </div>

              <div className="space-y-4">
                {apiKeys.map((key) => (
                  <div key={key.id} className="p-6 bg-white/50 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-800">{key.name}</h4>
                        <p className="text-sm text-gray-600">Created {key.created} • Last used {key.lastUsed}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          key.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {key.status}
                        </span>
                        <button
                          onClick={() => deleteApiKey(key.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex-1 mr-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-medium text-gray-700">API Key:</span>
                          <code className="px-3 py-1 bg-gray-100 rounded text-sm font-mono">{key.key}</code>
                          <button className="p-1 text-gray-600 hover:text-gray-800 transition-colors">
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {key.permissions.map((permission) => (
                            <span key={permission} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                              {permission}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">API Key Security</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      Keep your API keys secure and never share them publicly. Regenerate keys regularly and monitor their usage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'billing':
        return (
          <div className="space-y-8">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Billing & Payments</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                  <select
                    value={billingSettings.paymentMethod}
                    onChange={(e) => handleBillingChange('paymentMethod', e.target.value)}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="visa">Visa **** 1234</option>
                    <option value="mastercard">Mastercard **** 5678</option>
                    <option value="paypal">PayPal</option>
                    <option value="crypto">Cryptocurrency</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Billing Address</label>
                  <textarea
                    rows="3"
                    value={billingSettings.billingAddress}
                    onChange={(e) => handleBillingChange('billingAddress', e.target.value)}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tax ID</label>
                    <input
                      type="text"
                      value={billingSettings.taxId}
                      onChange={(e) => handleBillingChange('taxId', e.target.value)}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Invoice Email</label>
                    <input
                      type="email"
                      value={billingSettings.invoiceEmail}
                      onChange={(e) => handleBillingChange('invoiceEmail', e.target.value)}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-gray-800">Auto Renewal</h4>
                    <p className="text-sm text-gray-600">Automatically renew subscriptions</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={billingSettings.autoRenewal}
                      onChange={(e) => handleBillingChange('autoRenewal', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Save Billing Settings</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 'advanced':
        return (
          <div className="space-y-8">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Advanced Settings</h3>

              <div className="space-y-6">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <Download className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-800">Export Your Data</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Download a copy of all your data including transactions, settings, and activity history.
                      </p>
                      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Export Data</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Data Retention</label>
                  <select
                    value={advancedSettings.dataRetention}
                    onChange={(e) => handleAdvancedChange('dataRetention', e.target.value)}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="forever">Forever</option>
                    <option value="7years">7 years</option>
                    <option value="5years">5 years</option>
                    <option value="2years">2 years</option>
                    <option value="1year">1 year</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Recovery Email</label>
                  <input
                    type="email"
                    value={advancedSettings.recoveryEmail}
                    onChange={(e) => handleAdvancedChange('recoveryEmail', e.target.value)}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-red-800">Danger Zone</h4>
                      <p className="text-sm text-red-700 mt-1">
                        These actions are irreversible. Please proceed with caution.
                      </p>

                      <div className="mt-4 space-y-3">
                        <button className="w-full px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center space-x-2">
                          <RefreshCw className="w-4 h-4" />
                          <span>Reset All Settings</span>
                        </button>

                        <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                          <Trash2 className="w-4 h-4" />
                          <span>Delete Account</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
          <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
        </div>

        {/* Horizontal Tabs */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{tab.name}</span>
                    {tab.count && tab.count > 0 && (
                      <span className="ml-2 py-0.5 px-2 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {renderTabContent()}
          </div>
        </div>

        {/* Send Modal */}
        {sendModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/95 to-white/80 rounded-3xl border border-white/60 shadow-2xl max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Send Coin</h3>
                  <button
                    onClick={() => setSendModalOpen(false)}
                    className="w-8 h-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Crypto Currency</label>
                    <select className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>-- Currency --</option>
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Currency From</label>
                    <select className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>-- My wallet --</option>
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                    <div className="flex">
                      <div className="flex-1 flex items-center px-4 py-3 bg-white/50 border border-gray-200 rounded-l-xl">
                        <span className="text-gray-500 mr-2">🔍</span>
                        <input
                          type="text"
                          placeholder="Can you scan"
                          className="flex-1 bg-transparent border-none outline-none"
                        />
                      </div>
                      <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-r-xl">
                        <span className="text-sm">🔍</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">USD</label>
                      <div className="flex items-center px-4 py-3 bg-white/50 border border-gray-200 rounded-xl">
                        <span className="text-gray-500 mr-2">$</span>
                        <input
                          type="text"
                          placeholder="USD"
                          className="flex-1 bg-transparent border-none outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">BTC</label>
                      <div className="flex items-center px-4 py-3 bg-white/50 border border-gray-200 rounded-xl">
                        <span className="text-gray-500 mr-2">₿</span>
                        <input
                          type="text"
                          placeholder="BTC"
                          className="flex-1 bg-transparent border-none outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      rows="3"
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Enter description..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Network Fee</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="networkFee" value="regular" className="mr-2" defaultChecked />
                        <span className="text-sm">Regular</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="networkFee" value="priority" className="mr-2" />
                        <span className="text-sm">Priority</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={() => setSendModalOpen(false)}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    Close
                  </button>
                  <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Request Modal */}
        {requestModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/95 to-white/80 rounded-3xl border border-white/60 shadow-2xl max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Request Coin</h3>
                  <button
                    onClick={() => setRequestModalOpen(false)}
                    className="w-8 h-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Crypto Currency</label>
                    <select className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>-- Currency --</option>
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Receive To</label>
                    <select className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>-- My wallet --</option>
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <div className="flex">
                      <input
                        type="text"
                        value="c12b001a15f9bd46ef1c6551386c"
                        className="flex-1 px-4 py-3 bg-white/50 border border-gray-200 rounded-l-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        readOnly
                      />
                      <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-r-xl hover:scale-105 transition-all duration-300">
                        Copy
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => setRequestModalOpen(false)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoSettings;
