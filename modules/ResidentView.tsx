
import React, { useState } from 'react';

const ResidentView: React.FC = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Col 1: Main Status & QR */}
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 rounded-3xl text-white shadow-2xl shadow-indigo-500/30">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-1">Mi Departamento</p>
              <h3 className="text-3xl font-bold">1402 - Torre A</h3>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase backdrop-blur-sm">
                Al Día
            </div>
          </div>
          
          <button 
            onClick={() => setShowQR(!showQR)}
            className="w-full py-4 bg-white text-indigo-700 rounded-2xl font-bold shadow-lg hover:bg-indigo-50 transition-all flex items-center justify-center gap-3"
          >
            <i className={`fas ${showQR ? 'fa-eye-slash' : 'fa-qrcode'} text-xl`}></i>
            {showQR ? 'Ocultar Código' : 'Generar QR de Acceso'}
          </button>
          
          {showQR && (
            <div className="mt-6 bg-white p-4 rounded-2xl animate-scaleIn">
              <div className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:8px_8px] opacity-20"></div>
                  <i className="fas fa-qrcode text-8xl text-indigo-600"></i>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-indigo-50 px-2 py-0.5 rounded text-[8px] text-indigo-600 font-bold uppercase">
                     <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                     Dinámico: 00:45s
                  </div>
              </div>
              <p className="text-[10px] text-slate-400 mt-3 text-center leading-tight">
                Muestra este código al conserje. <br/>Válido por 60 segundos por seguridad.
              </p>
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-slate-800 mb-4">Acciones Rápidas</h4>
          <div className="grid grid-cols-2 gap-3">
             <button className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors border border-transparent hover:border-indigo-100">
                <i className="fas fa-user-plus text-xl"></i>
                <span className="text-xs font-bold">Invitar</span>
             </button>
             <button className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors border border-transparent hover:border-indigo-100">
                <i className="fas fa-calendar-alt text-xl"></i>
                <span className="text-xs font-bold">Reserva</span>
             </button>
             <button className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors border border-transparent hover:border-indigo-100">
                <i className="fas fa-box-open text-xl"></i>
                <span className="text-xs font-bold">Paquetes</span>
             </button>
             <button className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors border border-transparent hover:border-indigo-100">
                <i className="fas fa-bullhorn text-xl"></i>
                <span className="text-xs font-bold">Avisos</span>
             </button>
          </div>
        </div>
      </div>

      {/* Col 2: Expenses & Billing */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h4 className="font-bold text-slate-800">Mi Último Gasto Común</h4>
            <span className="text-xs text-slate-400 font-medium">Vence: 05 Nov 2023</span>
          </div>
          <div className="p-8 text-center border-b border-slate-50">
             <p className="text-slate-500 text-sm font-medium mb-1">Monto a pagar</p>
             <h2 className="text-4xl font-black text-slate-900">$84.250</h2>
             <div className="mt-6 flex justify-center gap-3">
                <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/20 transition-all active:scale-95">
                   Pagar Online
                </button>
                <button className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold flex items-center gap-2 transition-all">
                   <i className="fas fa-download"></i> Detalle PDF
                </button>
             </div>
          </div>
          <div className="p-6 bg-slate-50/50">
             <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Desglose de cálculo</h5>
             <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                   <span className="text-slate-600">Prorrateo General (0.54%)</span>
                   <span className="font-bold text-slate-800">$62.300</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                   <span className="text-slate-600">Servicios Individuales (Agua)</span>
                   <span className="font-bold text-slate-800">$18.450</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                   <span className="text-slate-600">Multas / Intereses</span>
                   <span className="font-bold text-slate-400">$0</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-3 border-t border-slate-200">
                   <span className="text-slate-600">Gasto Común Reserva</span>
                   <span className="font-bold text-slate-800">$3.500</span>
                </div>
             </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
           <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <i className="fas fa-box text-indigo-500"></i>
              Encomiendas en Portería
           </h4>
           <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                 <div className="w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center">
                    <i className="fas fa-box-open"></i>
                 </div>
                 <div className="flex-1">
                    <p className="font-bold text-indigo-900 text-sm">Paquete de Amazon.com</p>
                    <p className="text-[10px] text-indigo-700 font-medium">Recibido hace 2 horas • Portería A</p>
                 </div>
                 <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-[10px] font-bold uppercase shadow-md shadow-indigo-600/20">
                    Retirar
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentView;
