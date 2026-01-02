
import React from 'react';

const UnitsManagement: React.FC = () => {
  const units = [
    { tower: 'Torre A', number: '101', proration: '0.005400', owner: 'Juan Pérez', status: 'Al día' },
    { tower: 'Torre A', number: '102', proration: '0.005400', owner: 'Ana Silva', status: 'Moroso' },
    { tower: 'Torre B', number: '201', proration: '0.007250', owner: 'Carlos Ruiz', status: 'Al día' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-800">Catastro de Unidades</h3>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold">+ Importar desde Excel</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-wider font-bold">
                <th className="px-6 py-4">Unidad</th>
                <th className="px-6 py-4">Propietario</th>
                <th className="px-6 py-4">Coef. Prorrateo</th>
                <th className="px-6 py-4">Estado Pago</th>
                <th className="px-6 py-4">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {units.map((u, i) => (
                <tr key={i}>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{u.tower}</div>
                    <div className="text-xs text-slate-500">Depto {u.number}</div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600">{u.owner}</td>
                  <td className="px-6 py-4 font-mono text-xs">{u.proration}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold ${u.status === 'Al día' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                     <button className="text-slate-400 hover:text-indigo-600 mr-3"><i className="fas fa-edit"></i></button>
                     <button className="text-slate-400 hover:text-indigo-600"><i className="fas fa-history"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UnitsManagement;
