
import React from 'react';
import { Role } from '../types';
import { ROLE_LABELS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeRole: Role;
  onRoleChange: (role: Role) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeRole, onRoleChange, activeTab, setActiveTab }) => {
  const tabs = {
    ADMIN: [
      { id: 'dashboard', label: 'Dashboard', icon: 'fa-chart-line' },
      { id: 'expenses', label: 'Gastos Comunes', icon: 'fa-file-invoice-dollar' },
      { id: 'audit', label: 'Bitácora', icon: 'fa-history' },
      { id: 'units', label: 'Unidades', icon: 'fa-building' }
    ],
    GUARD: [
      { id: 'access', label: 'Control de Acceso', icon: 'fa-qrcode' },
      { id: 'parcels', label: 'Encomiendas', icon: 'fa-box' },
      { id: 'pool', label: 'Áreas Comunes', icon: 'fa-swimming-pool' }
    ],
    RESIDENT: [
      { id: 'my-unit', label: 'Mi Departamento', icon: 'fa-home' },
      { id: 'my-expenses', label: 'Mis Gastos', icon: 'fa-wallet' },
      { id: 'amenities', label: 'Reservas', icon: 'fa-calendar-check' },
      { id: 'claims', label: 'Reclamos', icon: 'fa-comment-dots' }
    ]
  };

  const currentTabs = tabs[activeRole];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      {/* Sidebar / Topbar */}
      <aside className="w-full md:w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center">
            <i className="fas fa-key text-sm"></i>
          </div>
          <span className="font-bold text-lg tracking-tight">CondoMaster</span>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {currentTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === tab.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <i className={`fas ${tab.icon} w-5`}></i>
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800 bg-slate-950/50">
          <label className="text-xs text-slate-500 uppercase font-bold mb-2 block">Cambiar Perfil (Demo)</label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(ROLE_LABELS) as Role[]).map(role => (
              <button
                key={role}
                onClick={() => {
                    onRoleChange(role);
                    setActiveTab(tabs[role][0].id);
                }}
                className={`text-[10px] px-2 py-1 rounded border ${
                  activeRole === role ? 'bg-white text-slate-900' : 'border-slate-700 text-slate-400'
                }`}
              >
                {ROLE_LABELS[role].label.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold text-slate-800 capitalize">
                {currentTabs.find(t => t.id === activeTab)?.label || 'CondoMaster'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-3 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full">
                <span className={`w-2 h-2 rounded-full ${ROLE_LABELS[activeRole].color.replace('bg-', 'bg-')}`}></span>
                <span className="text-sm font-medium text-slate-600">{ROLE_LABELS[activeRole].label}</span>
             </div>
             <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                <i className="fas fa-bell"></i>
             </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
