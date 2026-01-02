
import React, { useState } from 'react';

const ParcelsManagement: React.FC = () => {
  const [parcels, setParcels] = useState([
    { id: '1', unit: '1402A', carrier: 'ChileExpress', received: '10:30', status: 'Portería' },
    { id: '2', unit: '504B', carrier: 'Mercado Libre', received: '09:15', status: 'Entregado' },
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold mb-4">Registro de Encomiendas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input type="text" placeholder="Depto (Ej: 1402A)" className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" />
          <input type="text" placeholder="Transporte (Ej: Starken)" className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" />
          <button className="bg-indigo-600 text-white font-bold rounded-lg py-3 hover:bg-indigo-700 transition-colors">
            Registrar Ingreso
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-wider font-bold">
                <th className="px-6 py-4">Unidad</th>
                <th className="px-6 py-4">Empresa</th>
                <th className="px-6 py-4">Recibido</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {parcels.map((p) => (
                <tr key={p.id}>
                  <td className="px-6 py-4 font-bold">{p.unit}</td>
                  <td className="px-6 py-4">{p.carrier}</td>
                  <td className="px-6 py-4 text-slate-500">{p.received}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${p.status === 'Portería' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {p.status === 'Portería' && (
                      <button className="text-indigo-600 font-bold text-xs hover:underline">Marcar Entrega</button>
                    )}
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

export default ParcelsManagement;
