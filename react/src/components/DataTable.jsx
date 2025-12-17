import React from 'react';

export default function DataTable({ columns, data, actions }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-white/10 text-xs text-tertiary uppercase tracking-wider">
                        {columns.map((col, i) => (
                            <th key={i} className="px-4 py-3 font-medium bg-white/5 first:rounded-tl-xl last:rounded-tr-xl">
                                {col.header}
                            </th>
                        ))}
                        {actions && <th className="px-4 py-3 bg-white/5 last:rounded-tr-xl text-right">Action</th>}
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="group hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="px-4 py-3 text-textPrimary">
                                    {col.render ? col.render(row) : row[col.accessor]}
                                </td>
                            ))}
                            {actions && (
                                <td className="px-4 py-3 text-right">
                                    {actions(row)}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
