
import React, { useState } from 'react';
import { EXPENSE_CATEGORIES, DISTRIBUTION_TYPES } from '../constants';

const ExpensesManagement: React.FC = () => {
  const [showAdd, setShowAdd] = useState(false);

  const expenses = [
    { id: '1', category: 'Seguridad', sub: 'Empresa Vigilancia SpA', amount: 3200000, type: 'GENERAL', date: '2023-10-15' },
    { id: '2', category: 'Servicios Básicos', sub: 'Agua (Comunitario)', amount: 850000, type: 'BY_TOWER', date: '2023-10-12' },
    { id: '3', category: 'Administración', sub: 'Honorarios Administrador', amount: 1100000, type: 'GENERAL', date: '2023-10-01' },
    { id: '4', category: 'Mantenimiento', sub: 'Certificación Ascensores', amount: 450000, type: 'BY_TOWER', date: '2023-10-05' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">Catálogo de Gastos Mensuales</h3>
          <p className="text-slate-500 text-sm">Periodo Actual: Octubre 2023</p>
        </div>
        <button 
          onClick={() => setShowAdd(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
        >
          <i className="fas fa-plus"></i>
          Ingresar Nuevo Gasto
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-1 block">Filtrar por Categoría</label>
              <select className="w-full bg-white border border-slate-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                <option>Todas las categorías</option>
                {EXPENSE_CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-1 block">Tipo de Reparto</label>
              <select className="w-full bg-white border border-slate-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                <option>Todos los tipos</option>
                {Object.keys(DISTRIBUTION_TYPES).map(k => <option key={k} value={k}>{DISTRIBUTION_TYPES[k as keyof typeof DISTRIBUTION_TYPES]}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-wider font-bold">
                <th className="px-6 py-4">Fecha</th>
                <th className="px-6 py-4">Categoría / Sub</th>
                <th className="px-6 py-4 text-right">Monto (CLP)</th>
                <th className="px-6 py-4">Reparto</th>
                <th className="px-6 py-4">Documento</th>
                <th className="px-6 py-4">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {expenses.map((exp) => (
                <tr key={exp.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4 text-sm text-slate-500">{exp.date}</td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{exp.category}</div>
                    <div className="text-xs text-slate-500">{exp.sub}</div>
                  </td>
                  <td className="px-6 py-4 text-right font-mono font-bold text-slate-900">
                    ${exp.amount.toLocaleString('es-CL')}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase">
                        {DISTRIBUTION_TYPES[exp.type as keyof typeof DISTRIBUTION_TYPES]}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                        <i className="fas fa-file-pdf text-xl"></i>
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 text-slate-300 hover:text-rose-600 transition-colors">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-slate-900 text-white">
                <tr>
                    <td colSpan={2} className="px-6 py-4 font-bold text-right uppercase tracking-wider text-xs">Total Gasto Común Recaudable:</td>
                    <td className="px-6 py-4 text-right font-mono font-bold text-lg">$5.600.000</td>
                    <td colSpan={3}></td>
                </tr>
            </tfoot>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl">
              <h4 className="font-bold text-emerald-800 flex items-center gap-2 mb-2">
                <i className="fas fa-info-circle"></i>
                Ley 21.442 - Transparencia
              </h4>
              <p className="text-sm text-emerald-700 leading-relaxed">
                El sistema calcula automáticamente el prorrateo de cada departamento basándose en el 
                <b> coeficiente de copropiedad</b> registrado en la escritura. Los gastos marcados como "Por Torre" 
                solo afectan a los departamentos de dicha unidad.
              </p>
          </div>
          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">Fondo de Reserva</h4>
              <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-slate-500">Saldo actual disponible:</span>
                  <span className="font-bold text-emerald-600">$8.420.000</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full w-[65%]"></div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ExpensesManagement;
