import React, { useState } from 'react';
import { Home, CheckCircle, AlertCircle, Star, Heart, Settings, Users, Mail, Phone, Lock, Eye, EyeOff, Plus, Minus, X, Check, Bell, Search, Calendar, Clock, MapPin, Navigation, Compass, Zap, Lightbulb, Truck, ShoppingCart, ShoppingBag, CreditCard, DollarSign, TrendingUp, TrendingDown, Activity, Download, Upload, Share2, Send, Paperclip, Bookmark, Flag, Award, Gift, Package, Tag, Layers, Filter, Repeat, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, GitBranch, Code, Database, Server, Cloud, Wifi, Cpu, HardDrive, BarChart2, PieChart, LineChart, AreaChart, Music, Mic, Volume, Volume2, Play, Pause, SkipBack, SkipForward, Edit, Copy, Trash2, Archive, Inbox, MessageSquare, AtSign, Smile, Frown, ThumbsUp, ThumbsDown, Briefcase, Book, BookOpen, Aperture, Droplet, Sun, Moon, CloudRain, CloudSnow, Coffee, Beer, Hexagon, Pentagon, Triangle, Square, Circle, Octagon, Loader, WifiOff, Bluetooth, HelpCircle, AlertTriangle, CheckCircle as CheckIconCircle, XCircle, InfoIcon } from 'lucide-react';

export default function IconsMaterial() {
    const [searchTerm, setSearchTerm] = useState('');
    
    const allIcons = [
        { name: 'Home', icon: Home, category: 'Navigation' },
        { name: 'Check Circle', icon: CheckCircle, category: 'Status' },
        { name: 'Alert Circle', icon: AlertCircle, category: 'Status' },
        { name: 'Star', icon: Star, category: 'Rating' },
        { name: 'Heart', icon: Heart, category: 'Action' },
        { name: 'Settings', icon: Settings, category: 'Config' },
        { name: 'Users', icon: Users, category: 'People' },
        { name: 'Mail', icon: Mail, category: 'Communication' },
        { name: 'Phone', icon: Phone, category: 'Communication' },
        { name: 'Lock', icon: Lock, category: 'Security' },
        { name: 'Eye', icon: Eye, category: 'Visibility' },
        { name: 'Eye Off', icon: EyeOff, category: 'Visibility' },
        { name: 'Plus', icon: Plus, category: 'Action' },
        { name: 'Minus', icon: Minus, category: 'Action' },
        { name: 'X', icon: X, category: 'Action' },
        { name: 'Check', icon: Check, category: 'Action' },
        { name: 'Bell', icon: Bell, category: 'Notification' },
        { name: 'Search', icon: Search, category: 'Navigation' },
        { name: 'Calendar', icon: Calendar, category: 'Date/Time' },
        { name: 'Clock', icon: Clock, category: 'Date/Time' },
        { name: 'MapPin', icon: MapPin, category: 'Location' },
        { name: 'Navigation', icon: Navigation, category: 'Location' },
        { name: 'Compass', icon: Compass, category: 'Location' },
        { name: 'Zap', icon: Zap, category: 'Energy' },
        { name: 'Lightbulb', icon: Lightbulb, category: 'Idea' },
        { name: 'Truck', icon: Truck, category: 'Transport' },
        { name: 'ShoppingCart', icon: ShoppingCart, category: 'Commerce' },
        { name: 'ShoppingBag', icon: ShoppingBag, category: 'Commerce' },
        { name: 'CreditCard', icon: CreditCard, category: 'Payment' },
        { name: 'DollarSign', icon: DollarSign, category: 'Finance' },
        { name: 'TrendingUp', icon: TrendingUp, category: 'Chart' },
        { name: 'TrendingDown', icon: TrendingDown, category: 'Chart' },
        { name: 'Activity', icon: Activity, category: 'Health' },
        { name: 'Download', icon: Download, category: 'File' },
        { name: 'Upload', icon: Upload, category: 'File' },
        { name: 'Share2', icon: Share2, category: 'Social' },
        { name: 'Send', icon: Send, category: 'Message' },
        { name: 'Paperclip', icon: Paperclip, category: 'File' },
        { name: 'Bookmark', icon: Bookmark, category: 'Favorite' },
        { name: 'Flag', icon: Flag, category: 'Marker' },
        { name: 'Award', icon: Award, category: 'Achievement' },
        { name: 'Gift', icon: Gift, category: 'Special' },
        { name: 'Package', icon: Package, category: 'Delivery' },
        { name: 'Tag', icon: Tag, category: 'Label' },
        { name: 'Layers', icon: Layers, category: 'Editor' },
        { name: 'Filter', icon: Filter, category: 'Editor' },
        { name: 'Repeat', icon: Repeat, category: 'Action' },
        { name: 'ChevronUp', icon: ChevronUp, category: 'Navigation' },
        { name: 'ChevronDown', icon: ChevronDown, category: 'Navigation' },
        { name: 'ChevronLeft', icon: ChevronLeft, category: 'Navigation' },
        { name: 'ChevronRight', icon: ChevronRight, category: 'Navigation' },
        { name: 'GitBranch', icon: GitBranch, category: 'Developer' },
        { name: 'Code', icon: Code, category: 'Developer' },
        { name: 'Database', icon: Database, category: 'Server' },
        { name: 'Server', icon: Server, category: 'Server' },
        { name: 'Cloud', icon: Cloud, category: 'Server' },
        { name: 'Wifi', icon: Wifi, category: 'Network' },
        { name: 'Cpu', icon: Cpu, category: 'Hardware' },
        { name: 'HardDrive', icon: HardDrive, category: 'Hardware' },
        { name: 'BarChart2', icon: BarChart2, category: 'Chart' },
        { name: 'PieChart', icon: PieChart, category: 'Chart' },
        { name: 'LineChart', icon: LineChart, category: 'Chart' },
        { name: 'AreaChart', icon: AreaChart, category: 'Chart' },
        { name: 'Music', icon: Music, category: 'Media' },
        { name: 'Mic', icon: Mic, category: 'Media' },
        { name: 'Volume', icon: Volume, category: 'Media' },
        { name: 'Volume2', icon: Volume2, category: 'Media' },
        { name: 'Play', icon: Play, category: 'Media' },
        { name: 'Pause', icon: Pause, category: 'Media' },
        { name: 'SkipBack', icon: SkipBack, category: 'Media' },
        { name: 'SkipForward', icon: SkipForward, category: 'Media' },
        { name: 'Edit', icon: Edit, category: 'Editor' },
        { name: 'Copy', icon: Copy, category: 'Editor' },
        { name: 'Trash2', icon: Trash2, category: 'Editor' },
        { name: 'Archive', icon: Archive, category: 'File' },
        { name: 'Inbox', icon: Inbox, category: 'Mail' },
        { name: 'MessageSquare', icon: MessageSquare, category: 'Message' },
        { name: 'AtSign', icon: AtSign, category: 'Symbol' },
        { name: 'Smile', icon: Smile, category: 'Emoji' },
        { name: 'Frown', icon: Frown, category: 'Emoji' },
        { name: 'ThumbsUp', icon: ThumbsUp, category: 'Rating' },
        { name: 'ThumbsDown', icon: ThumbsDown, category: 'Rating' },
        { name: 'Briefcase', icon: Briefcase, category: 'Business' },
        { name: 'Book', icon: Book, category: 'Education' },
        { name: 'BookOpen', icon: BookOpen, category: 'Education' },
        { name: 'Aperture', icon: Aperture, category: 'Camera' },
        { name: 'Droplet', icon: Droplet, category: 'Weather' },
        { name: 'Sun', icon: Sun, category: 'Weather' },
        { name: 'Moon', icon: Moon, category: 'Weather' },
        { name: 'CloudRain', icon: CloudRain, category: 'Weather' },
        { name: 'CloudSnow', icon: CloudSnow, category: 'Weather' },
        { name: 'Coffee', icon: Coffee, category: 'Food' },
        { name: 'Beer', icon: Beer, category: 'Food' },
        { name: 'Hexagon', icon: Hexagon, category: 'Shape' },
        { name: 'Pentagon', icon: Pentagon, category: 'Shape' },
        { name: 'Triangle', icon: Triangle, category: 'Shape' },
        { name: 'Square', icon: Square, category: 'Shape' },
        { name: 'Circle', icon: Circle, category: 'Shape' },
        { name: 'Octagon', icon: Octagon, category: 'Shape' },
        { name: 'Loader', icon: Loader, category: 'Loading' },
        { name: 'WifiOff', icon: WifiOff, category: 'Network' },
        { name: 'Bluetooth', icon: Bluetooth, category: 'Connection' },
        { name: 'HelpCircle', icon: HelpCircle, category: 'Help' },
        { name: 'AlertTriangle', icon: AlertTriangle, category: 'Status' },
    ];

    const filteredIcons = allIcons.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold text-gray-900">Material Icons</h1>
                    <p className="text-gray-600 mt-2">130+ professionally designed Material-style icons</p>
                </div>

                {/* Search */}
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
                        <input
                            type="text"
                            placeholder="Search icons or categories..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white/50 border border-white/60 rounded-2xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200/50"
                        />
                    </div>
                    <p className="text-gray-600 text-sm mt-3">{filteredIcons.length} icons found</p>
                </div>

                {/* Icons Grid */}
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                        {filteredIcons.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/50 border border-white/40 hover:border-blue-200/80 hover:shadow-lg hover:shadow-blue-200/30 transition-all duration-300 cursor-pointer group"
                                >
                                    <Icon size={40} className="text-gray-900 group-hover:text-blue-600 mb-2 transition-colors" />
                                    <p className="text-xs text-gray-900 font-medium text-center leading-tight">{item.name}</p>
                                    <p className="text-xs text-gray-600 text-center mt-1">{item.category}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { label: 'Total Icons', value: '130+', color: 'blue' },
                        { label: 'Categories', value: '20+', color: 'green' },
                        { label: 'SVG Support', value: 'Yes', color: 'purple' },
                    ].map((stat, idx) => {
                        const colorClass = {
                            blue: 'from-blue-400/20 to-blue-600/5 border-blue-200/40 text-blue-600',
                            green: 'from-green-400/20 to-green-600/5 border-green-200/40 text-green-600',
                            purple: 'from-purple-400/20 to-purple-600/5 border-purple-200/40 text-purple-600',
                        }[stat.color];
                        return (
                            <div key={idx} className={`backdrop-blur-2xl bg-gradient-to-br ${colorClass} border border-white/60 rounded-3xl p-6 shadow-xl shadow-black/5`}>
                                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
