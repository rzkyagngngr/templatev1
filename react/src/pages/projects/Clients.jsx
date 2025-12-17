import React from 'react';

export default function Clients() {
    const clients = [
        { id: 1, name: 'Charles Fang', location: 'New York, USA', phone: '+1 123 456 789', bio: 'It is a long established fact that a reader will be distracted when looking at its layout.', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-8.jpg' },
        { id: 2, name: 'Wendy Keen', location: 'New York, USA', phone: '+1 123 456 789', bio: 'There are many variations of passages of Lorem Ipsum available, but the majority have.', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-4.jpg' },
        { id: 3, name: 'Marvin Turner', location: 'New York, USA', phone: '+1 123 456 789', bio: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-5.jpg' },
        { id: 4, name: 'Charles Fang', location: 'New York, USA', phone: '+1 123 456 789', bio: 'Bonorum et Malorum" by Cicero are also reproduced in their exact original form.', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-1.jpg' },
        { id: 5, name: 'Joseph Cate', location: 'New York, USA', phone: '+1 123 456 789', bio: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-9.jpg' },
        { id: 6, name: 'Robert Kipp', location: 'New York, USA', phone: '+1 123 456 789', bio: 'Latin words, consectetur, from a Lorem Ipsum passage, and going through.', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-10.jpg' },
        { id: 7, name: 'Nancy Perdue', location: 'New York, USA', phone: '+1 123 456 789', bio: 'Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics.', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-7.jpg' },
        { id: 8, name: 'Joseph Cate', location: 'New York, USA', phone: '+1 123 456 789', bio: 'Contrary to popular belief, consectetur, from a Lorem Ipsum is not simply random text.', img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-2.jpg' },
    ];

    return (
        <div className="w-full">
            {/* Header / Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-slate-900 tracking-wide">Clients</h4>
                <div className="text-sm text-slate-400">
                    <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                    <span className="mx-2">/</span>
                    <span className="hover:text-slate-900 cursor-pointer">Projects</span>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900">Clients</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {clients.map((client) => (
                    <div key={client.id} className="glass-card p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors group">
                        <img src={client.img} alt={client.name} className="w-20 h-20 rounded-full border-2 border-white/10 shadow-lg mb-4 object-cover" />
                        <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{client.name}</h4>

                        <div className="flex items-center text-slate-700 text-xs mb-1">
                            <span className="material-icons-round text-sm mr-1">location_on</span> {client.location}
                        </div>
                        <div className="flex items-center text-slate-700 text-xs mb-4">
                            <span className="material-icons-round text-sm mr-1">phone</span> {client.phone}
                        </div>

                        <p className="text-slate-700 text-sm mb-6 flex-grow">{client.bio}</p>

                        <div className="flex gap-2 w-full">
                            <button className="flex-1 px-3 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 text-sm font-medium transition-all">
                                Project
                            </button>
                            <button className="flex-1 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-900 border border-white/10 text-sm font-medium transition-all">
                                Message
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
