import React from 'react';

export default function Team() {
    const teams = [
        {
            id: 1,
            name: 'Marnie Flowers',
            role: 'Team Leader',
            teamName: 'UI/UX Design Team',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply.',
            img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-10.jpg',
            members: [1, 2, 3, 4],
            extraMembers: 6,
            project: {
                name: 'Banking',
                tasks: '50/100',
                progress: 55,
                color: 'warning'
            }
        },
        {
            id: 2,
            name: 'Willie Miller',
            role: 'Team Leader',
            teamName: 'Web Design Team',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply.',
            img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-5.jpg',
            members: [5, 6, 7, 8],
            extraMembers: 2,
            project: {
                name: 'Payment App',
                tasks: '40/100',
                progress: 45,
                color: 'purple'
            }
        },
        {
            id: 3,
            name: 'Jason Haston',
            role: 'Team Leader',
            teamName: 'Frontend Developer Team',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply.',
            img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-9.jpg',
            members: [2, 3, 5, 8],
            extraMembers: 0,
            project: {
                name: 'Transfer Money',
                tasks: '80/100',
                progress: 80,
                color: 'success'
            }
        },
        {
            id: 4,
            name: 'Marnie Flowers',
            role: 'Team Leader',
            teamName: 'UI/UX Design Team',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply.',
            img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-4.jpg',
            members: [1, 2, 3, 4],
            extraMembers: 6,
            project: {
                name: 'Banking',
                tasks: '50/100',
                progress: 55,
                color: 'primary'
            }
        },
        {
            id: 5,
            name: 'Willie Miller',
            role: 'Team Leader',
            teamName: 'Web Design Team',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply.',
            img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-2.jpg',
            members: [5, 6, 7, 8],
            extraMembers: 2,
            project: {
                name: 'Payment App',
                tasks: '40/100',
                progress: 45,
                color: 'info'
            }
        },
        {
            id: 6,
            name: 'Jason Haston',
            role: 'Team Leader',
            teamName: 'Frontend Developer Team',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply.',
            img: 'https://mannatthemes.com/Glacia/default/assets/images/users/user-1.jpg',
            members: [2, 3, 5, 8],
            extraMembers: 0,
            project: {
                name: 'Transfer Money',
                tasks: '80/100',
                progress: 80,
                color: 'success'
            }
        },
    ];

    return (
        <div className="w-full">
            {/* Header / Breadcrumb */}
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold text-slate-900 tracking-wide">Teams</h4>
                <div className="text-sm text-slate-400">
                    <span className="hover:text-slate-900 cursor-pointer">Glacia</span>
                    <span className="mx-2">/</span>
                    <span className="hover:text-slate-900 cursor-pointer">Projects</span>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900">Teams</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center mb-6">
                <h5 className="text-slate-600">Here is the list of all available teams. <span className="bg-pink-500/20 text-pink-500 px-2 py-0.5 rounded text-xs ml-2">{teams.length}</span></h5>
                <button className="bg-primary hover:bg-primary-dark text-slate-900 px-4 py-1.5 rounded-lg text-sm transition-colors shadow-lg shadow-primary/20">
                    Create Card
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teams.map((team) => (
                    <div key={team.id} className="glass-card p-6 flex flex-col hover:bg-white/10 transition-colors group">

                        <div className="flex items-center mb-4">
                            <img src={team.img} alt={team.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/60 shadow-2xl backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 hover:scale-105 transition-all duration-300" />
                            <div className="ml-3">
                                <h5 className="text-slate-900 font-bold">{team.name}</h5>
                                <p className="text-slate-700 text-xs">{team.role}</p>
                            </div>
                            <div className="ml-auto">
                                <button className="text-slate-700 hover:="><span className="material-icons-round">more_vert</span></button>
                            </div>
                        </div>

                        <h4 className="text-lg font-bold text-slate-900 mb-2">{team.teamName}</h4>
                        <p className="text-slate-700 text-sm mb-4">{team.desc}</p>

                        <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
                            <div className="flex -space-x-2">
                                {team.members.map((m, i) => (
                                    <img key={i} src={`https://mannatthemes.com/Glacia/default/assets/images/users/user-${m + 4}.jpg`} className="w-8 h-8 rounded-full border-2 border-slate-800" alt="" />
                                ))}
                                {team.extraMembers > 0 && (
                                    <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-xs =">+{team.extraMembers}</div>
                                )}
                            </div>
                            <button className="text-xs bg-white/5 hover:bg-white/10 text-slate-900 px-3 py-1 rounded-full transition-colors flex items-center">
                                View Details <span className="material-icons-round text-xs ml-1">arrow_forward</span>
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                                {/* Using random images for project thumbnails as per HTML */}
                                <img src={`https://mannatthemes.com/Glacia/default/assets/images/small/project-${(team.id % 3) + 1}.jpg`} className="w-full h-full object-cover rounded-full" alt="" />
                            </div>
                            <div className="flex-grow">
                                <h6 className="text-slate-900 font-semibold text-sm mb-1">{team.project.name}</h6>
                                <div className="flex justify-between text-xs text-slate-700 mb-1">
                                    <span><span className="text-success material-icons-round text-[10px] align-middle mr-1">list</span>{team.project.tasks}</span>
                                    <span>{team.project.progress}% Complete</span>
                                </div>
                                <div className="w-full bg-slate-700/50 rounded-full h-1">
                                    <div className={`h-1 rounded-full bg-${team.project.color}-500`} style={{ width: `${team.project.progress}%` }}></div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
