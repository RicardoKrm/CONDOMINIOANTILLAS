
import React, { useState } from 'react';
import Layout from './components/Layout';
import { Role } from './types';
import DashboardAdmin from './modules/DashboardAdmin';
import AccessControl from './modules/AccessControl';
import ExpensesManagement from './modules/ExpensesManagement';
import AuditLog from './modules/AuditLog';
import ResidentView from './modules/ResidentView';
import ParcelsManagement from './modules/ParcelsManagement';
import CommonAreas from './modules/CommonAreas';
import ClaimsSuggestions from './modules/ClaimsSuggestions';
import UnitsManagement from './modules/UnitsManagement';

const App: React.FC = () => {
  const [activeRole, setActiveRole] = useState<Role>('ADMIN');
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      // Admin
      case 'dashboard': return <DashboardAdmin />;
      case 'expenses': return <ExpensesManagement />;
      case 'audit': return <AuditLog />;
      case 'units': return <UnitsManagement />;
      
      // Guard
      case 'access': return <AccessControl />;
      case 'parcels': return <ParcelsManagement />;
      case 'pool': return <CommonAreas />;
      
      // Resident
      case 'my-unit': return <ResidentView />;
      case 'my-expenses': return <div className="p-12 text-center text-slate-400"><i className="fas fa-history text-6xl mb-4 block opacity-20"></i>Historial de Pagos (Próximamente)</div>;
      case 'amenities': return <CommonAreas />;
      case 'claims': return <ClaimsSuggestions />;

      default: return <DashboardAdmin />;
    }
  };

  return (
    <Layout 
      activeRole={activeRole} 
      onRoleChange={setActiveRole}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;
