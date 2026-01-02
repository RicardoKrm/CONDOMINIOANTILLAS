
import React from 'react';

const AuditLog: React.FC = () => {
  const auditEntries = [
    { id: 1, mod: 'Gastos', action: 'Modificación Gasto ID 45', user: 'Admin Principal', time: 'Hoy, 10:20', ip: '192.168.1.1' },
    { id: 2, mod: 'Accesos', action: 'Ingreso Residente 1402A', user: 'Guardia Nocturno', time: 'Hoy, 04:15', ip: 'Portería Tablet' },
    { id: 3, mod: 'Unidades', action: 'Cambio Residente Depto 504', user: 'Admin Principal', time: 'Ayer, 18:40', ip: '192.168.1.5' },
    { id: 4, mod: 'Seguridad', action: 'Alerta Perímetro Sector B', user: 'Sistema Automático', time: 'Ayer, 14:00', ip: 'Sensor Node 12' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm">
        <div className="flex gap-3">
          <i className="fas fa-shield-alt text-amber-600 mt-1"></i>
          <div>
            <h4 className="font-bold text-amber-800 text-sm">Bitácora Central Inalterable</h4>
            <p className="text-xs text-amber-700">Todos los registros en esta sección son permanentes y cuentan con sellado de tiempo criptográfico. No se permite la eliminación de registros por ningún rol.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-100 flex flex-wrap gap-4 items-center justify-between">
           <div className="flex gap-2">
              <input type="text" placeholder="Buscar acción, usuario..." className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-64" />
              <button className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg text-slate-700 text-sm font-bold">
                 <i className="fas fa-filter mr-2"></i> Filtros
              </button>
           </div>
           <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
              <i className="fas fa-file-export"></i> Exportar Auditoría (CSV)
           </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-100/50 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4">Módulo</th>
                <th className="px-6 py-4">Acción / Evento</th>
                <th className="px-6 py-4">Usuario</th>
                <th className="px-6 py-4">Origen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {auditEntries.map((e) => (
                <tr key={e.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-500 text-xs">{e.time}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase">{e.mod}</span>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-800">{e.action}</td>
                  <td className="px-6 py-4 text-slate-600">{e.user}</td>
                  <td className="px-6 py-4 text-xs text-slate-400 italic">{e.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditLog;
