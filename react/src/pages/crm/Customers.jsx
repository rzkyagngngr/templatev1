import React from 'react';

export default function Customers() {
    const customers = [
        { id: 1, name: 'Dorothy Key', rating: 4.8, location: 'New York USA', date: '20 June 2020', phone: '+91 23456 78910', email: 'mannat.theme@gmail.com', lastMessage: 'popular belief, Lorem Ipsum is not simply random text.', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-4.jpg' },
        { id: 2, name: 'Donald Gardner', rating: 4.8, location: 'Dealer, Washington', date: '20 June 2020', phone: '+91 23456 78910', email: 'mannat.theme@gmail.com', lastMessage: 'popular belief, Lorem Ipsum is not simply random text.', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-1.jpg' },
        { id: 3, name: 'Joseph Cross', rating: 4.8, location: 'Tokyo Japan', date: '20 June 2020', phone: '+91 23456 78910', email: 'mannat.theme@gmail.com', lastMessage: 'popular belief, Lorem Ipsum is not simply random text.', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-5.jpg' },
        { id: 4, name: 'Nancy Flanary', rating: 4.8, location: 'Sydney Australia', date: '20 June 2020', phone: '+91 23456 78910', email: 'mannat.theme@gmail.com', lastMessage: 'popular belief, Lorem Ipsum is not simply random text.', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-6.jpg' },
        { id: 5, name: 'Sherron Nelson', rating: 4.8, location: 'Berlin, Germany', date: '20 June 2020', phone: '+91 23456 78910', email: 'mannat.theme@gmail.com', lastMessage: 'popular belief, Lorem Ipsum is not simply random text.', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-7.jpg' },
        { id: 6, name: 'Richard Curtis', rating: 4.8, location: 'Dealer, Washington', date: '20 June 2020', phone: '+91 23456 78910', email: 'mannat.theme@gmail.com', lastMessage: 'popular belief, Lorem Ipsum is not simply random text.', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-8.jpg' },
    ];

    return (
        <div className="w-full">
            {/* Header / Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-slate-900 tracking-wide">Customers</h4>
                <div className="text-sm text-slate-400">
                    <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                    <span className="mx-2">/</span>
                    <span className="hover:text-slate-900 cursor-pointer">CRM</span>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900">Customers</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {customers.map((customer) => (
                    <div key={customer.id} className="glass-card p-6 flex flex-col gap-4">
                        <div className="flex items-start">
                            <img src={customer.img} alt="" className="w-12 h-12 rounded-full border border-white/10 mr-4" />
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h5 className="text-base font-bold =">{customer.name}</h5>
                                    <span className="flex items-center text-[10px] bg-yellow-500/10 text-yellow-600 px-1.5 py-0.5 rounded border border-yellow-500/20">
                                        {customer.rating} <span className="material-icons-round text-[12px] ml-1">star</span>
                                    </span>
                                </div>
                                <p className="text-xs text-slate-700 mt-1">{customer.location}</p>
                            </div>
                        </div>

                        <div className="space-y-2 py-3 border-t border-b border-white/5">
                            <div className="flex items-center text-xs text-slate-300">
                                <span className="material-icons-round text-sm mr-2 text-slate-500">calendar_today</span>
                                <span className="font-semibold mr-1">Date:</span> {customer.date}
                            </div>
                            <div className="flex items-center text-xs text-slate-300">
                                <span className="material-icons-round text-sm mr-2 text-slate-500">phone</span>
                                <span className="font-semibold mr-1">Phone:</span> {customer.phone}
                            </div>
                            <div className="flex items-center text-xs text-slate-300">
                                <span className="material-icons-round text-sm mr-2 text-slate-500">mail</span>
                                <span className="font-semibold mr-1">Email:</span> {customer.email}
                            </div>
                        </div>

                        <div>
                            <p className="text-xs text-slate-700 line-clamp-2">
                                <span className="text-slate-900 font-semibold">Last Message:</span> {customer.lastMessage}
                            </p>
                        </div>

                        <div className="flex gap-2 mt-2">
                            <button className="flex-1 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary text-xs font-medium border border-primary/20 transition-all">Send SMS</button>
                            <button className="flex-1 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary text-xs font-medium border border-primary/20 transition-all">Send Email</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
