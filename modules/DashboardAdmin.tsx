
import React, { useState, useEffect } from 'react';
import { getAuditInsights } from '../services/geminiService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DashboardAdmin: React.FC = () => {
  const [insight, setInsight] = useState<string>('Analizando bitácora...');
  
  const stats = [
    { label: 'Recaudación Mes', value: '$12.450.000', change: '+5.2%', icon: 'fa-money-bill-wave', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Morosidad', value: '4.8%', change: '-1.1%', icon: 'fa-exclamation-triangle', color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Accesos Hoy', value: '142', change: '+12', icon: 'fa-users', color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Reclamos Abiertos', value: '3', change: '0', icon: 'fa-comments', color: 'text-rose-600', bg: 'bg-rose-50' }
  ];

  const data = [
    { name: 'Torre A', total: 4500000 },
    { name: 'Torre B', total: 3900000 },
    { name: 'Torre C', total: 4050000 },
  ];

  useEffect(() => {
    // Simulamos carga de insights
    const dummyLogs = [
        { module: 'Access', action: 'Entry', timestamp: '2023-10-27 14:00' },
        { module: 'Expenses', action: 'Create Invoice', timestamp: '2023-10-27 10:00' }
    ];
    getAuditInsights(dummyLogs).then(setInsight);
  }, []);

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bg} ${stat.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded ${stat.change.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <i className="fas fa-chart-bar text-indigo-500"></i>
            Recaudación por Torre
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `$${val/1000}k`} />
                <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="total" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#4f46e5' : index === 1 ? '#10b981' : '#0ea5e9'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-indigo-900 text-white p-6 rounded-xl border border-slate-800 shadow-lg flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-indigo-500/30 rounded-full flex items-center justify-center animate-pulse">
                <i className="fas fa-magic text-xs"></i>
            </div>
            <h3 className="font-bold">Resumen IA (Auditoría)</h3>
          </div>
          <div className="flex-1 bg-white/10 rounded-lg p-4 text-sm leading-relaxed border border-white/5 overflow-y-auto">
             {insight}
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] text-indigo-300 uppercase tracking-widest font-bold">
            <span>Powered by Gemini 3</span>
            <span>Refresco: 1h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
