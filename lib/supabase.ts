
/**
 * ESQUEMA SQL COMPLETO PARA SUPABASE (PostgreSQL)
 * Copiar y pegar en el SQL Editor de Supabase
 */

/*
-- 1. EXTENSIONES
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. TABLAS BASE
CREATE TABLE towers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL
);

CREATE TABLE condo_units (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tower_id UUID REFERENCES towers(id),
  unit_number TEXT NOT NULL,
  proration_coefficient NUMERIC(10, 6) NOT NULL, -- Ej: 0.005400
  status TEXT DEFAULT 'CURRENT', -- 'CURRENT', 'DELINQUENT'
  owner_id UUID, -- Referencia a perfiles
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. BITÁCORA INALTERABLE (Auditoría Central)
CREATE TABLE audit_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  module TEXT NOT NULL,
  action TEXT NOT NULL,
  performed_by UUID,
  unit_id UUID REFERENCES condo_units(id),
  details JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger para prevenir borrado o edición en bitácora
CREATE OR REPLACE FUNCTION protect_audit_log() RETURNS TRIGGER AS $$
BEGIN
  RAISE EXCEPTION 'No se permite modificar o eliminar registros de la bitácora histórica.';
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_protect_audit BEFORE UPDATE OR DELETE ON audit_log
FOR EACH ROW EXECUTE FUNCTION protect_audit_log();

-- 4. CONTROL DE ACCESO
CREATE TABLE access_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  unit_id UUID REFERENCES condo_units(id),
  person_name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'RESIDENT', 'VISITOR', 'PROVIDER'
  direction TEXT NOT NULL, -- 'IN', 'OUT'
  guard_id UUID,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. GASTOS COMUNES
CREATE TABLE expense_categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE common_expenses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id INTEGER REFERENCES expense_categories(id),
  description TEXT,
  amount NUMERIC(12, 2) NOT NULL,
  distribution_type TEXT NOT NULL, -- 'GENERAL', 'TOWER', 'M2'
  tower_id UUID REFERENCES towers(id),
  expense_date DATE DEFAULT CURRENT_DATE,
  document_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. ENCOMIENDAS
CREATE TABLE parcels (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  unit_id UUID REFERENCES condo_units(id),
  carrier TEXT NOT NULL,
  status TEXT DEFAULT 'IN_PORTERIA',
  photo_url TEXT,
  received_at TIMESTAMPTZ DEFAULT NOW(),
  delivered_at TIMESTAMPTZ
);

-- 7. ÁREAS COMUNES Y RESERVAS
CREATE TABLE reservations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  unit_id UUID REFERENCES condo_units(id),
  area_name TEXT NOT NULL, -- 'TENIS', 'PISCINA_ENTRY'
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ NOT NULL,
  status TEXT DEFAULT 'ACTIVE',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. RECLAMOS Y SUGERENCIAS
CREATE TABLE claims (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  unit_id UUID REFERENCES condo_units(id),
  category TEXT NOT NULL,
  subject TEXT NOT NULL,
  description TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'OPEN',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS BÁSICO
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins see all audit" ON audit_log FOR SELECT USING (auth.jwt() ->> 'role' = 'ADMIN');
*/

export const supabasePlaceholder = {};
