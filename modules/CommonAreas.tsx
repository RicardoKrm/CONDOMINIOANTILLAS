
import React from 'react';

const CommonAreas: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Módulo Piscina (Sin Reservas) */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800">Piscina - Control Aforo</h3>
            <p className="text-sm text-slate-500">Ingreso por orden de llegada</p>
          </div>
          <div className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-bold uppercase">En Tiempo Real</div>
        </div>

        <div className="flex items-center justify-center py-8">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
              <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray={502} strokeDashoffset={502 * (1 - 0.65)} className="text-sky-500 transition-all duration-1000" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
               <span className="text-4xl font-black text-slate-800">13</span>
               <span className="text-[10px] text-slate-400 font-bold uppercase">de 20 personas</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-500 transition-all">Registrar Ingreso</button>
          <button className="flex-1 bg-rose-600 text-white font-bold py-3 rounded-lg hover:bg-rose-500 transition-all">Registrar Salida</button>
        </div>
      </div>

      {/* Cancha de Tenis (Con Reservas) */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Cancha de Tenis - Reservas</h3>
        <div className="space-y-4">
          <div className="p-4 border border-slate-100 rounded-lg flex justify-between items-center bg-slate-50">
             <div>
                <p className="font-bold text-slate-800">Hoy, 18:00 - 19:30</p>
                <p className="text-xs text-slate-500">Depto 1101A • Confirmado</p>
             </div>
             <i className="fas fa-check-circle text-emerald-500"></i>
          </div>
          <div className="p-4 border border-slate-100 rounded-lg flex justify-between items-center opacity-60">
             <div>
                <p className="font-bold text-slate-800">Hoy, 20:00 - 21:30</p>
                <p className="text-xs text-slate-500">Depto 504B • Pendiente</p>
             </div>
             <i className="fas fa-clock text-amber-500"></i>
          </div>
          <button className="w-full border-2 border-dashed border-slate-200 text-slate-400 font-bold py-4 rounded-xl hover:border-indigo-300 hover:text-indigo-500 transition-all">
            + Nueva Reserva Residente
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonAreas;
