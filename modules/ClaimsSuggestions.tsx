
import React from 'react';

const ClaimsSuggestions: React.FC = () => {
  const claims = [
    { id: '1', category: 'Ruidos', subject: 'Fiesta piso 15', status: 'Cerrado', date: '25 Oct' },
    { id: '2', category: 'Aseo', subject: 'Mancha ascensor torre B', status: 'En Proceso', date: 'Hoy' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Libro de Reclamos y Sugerencias</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Categoría</label>
              <select className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Ruidos Molestos</option>
                <option>Mantenimiento</option>
                <option>Seguridad</option>
                <option>Aseo</option>
                <option>Otros</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Asunto Corto</label>
              <input type="text" className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Ej: Filtración pasillo" />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Descripción Detallada</label>
            <textarea className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 h-32" placeholder="Escriba aquí su reclamo o sugerencia..."></textarea>
          </div>
          <div className="flex items-center gap-2 py-2">
            <input type="checkbox" id="anon" className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500" />
            <label htmlFor="anon" className="text-sm text-slate-600 font-medium">Enviar de forma anónima (Ley 21.442)</label>
          </div>
          <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all shadow-lg">
            Enviar Reporte
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h4 className="font-bold text-slate-800 mb-4">Mis Reportes Anteriores</h4>
        <div className="space-y-3">
          {claims.map(c => (
            <div key={c.id} className="p-4 border rounded-xl flex justify-between items-center hover:bg-slate-50 transition-colors">
              <div>
                <span className="text-[10px] font-black uppercase text-indigo-500">{c.category}</span>
                <p className="font-bold text-slate-800">{c.subject}</p>
                <p className="text-xs text-slate-400">{c.date}</p>
              </div>
              <span className={`px-2 py-1 rounded text-[10px] font-bold ${c.status === 'Cerrado' ? 'bg-slate-100 text-slate-500' : 'bg-indigo-100 text-indigo-700'}`}>
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClaimsSuggestions;
