import './style.css';

const translations = {
  es: {
    nav_solutions: 'Soluciones',
    nav_dev: 'Desarrollo',
    nav_conn: 'Conexiones',
    status_active: 'Activo',
    protocol_label: 'Protocolo:',
    hero_v: 'Inicializacion del Sistema v4.0',
    hero_title_1: 'INFRAESTRUCTURA DE',
    hero_title_2: 'INTELIGENCIA',
    hero_title_3: 'ARTIFICIAL DE PRECISION',
    hero_desc:
      'Sistemas autonomos disenados para la industria pesada y la optimizacion de procesos criticos. Eficiencia absoluta 24/7.',
    hero_scroll: 'Scroll para datos',
    btn_deploy: 'DESPLEGAR_SISTEMA()',
    sol_title: 'UNIDADES_OPERATIVAS',
    sol_desc: 'Clasificacion de agentes segun arquitectura de red y capacidad de computo.',
    ent_title: 'Agentes Empresariales',
    ent_desc:
      'Infraestructura escalable para el procesamiento masivo de datos industriales, automatizacion de supply-chain y analisis predictivo de mercados.',
    ent_f1: 'Integracion SAP/ERP',
    ent_f2: 'Seguridad Militar AES-256',
    btn_catalog: 'CONSULTAR_CATALOGO()',
    jar_title: 'Agentes Jarvis',
    jar_desc:
      'Asistentes personales de alta fidelidad. Interfaz neural optimizada para gestion de flujos creativos, investigacion tecnica y ejecucion de tareas inteligentes.',
    jar_f1: 'NLP de Baja Latencia',
    jar_f2: 'Aprendizaje Contextual',
    btn_config: 'CONFIGURAR_NUCLEO()',
    prot_title: 'PROTOCOLOS_DE_EJECUCION',
    prot_1_label: 'Extraccion',
    prot_1_desc: 'Sifonamiento de datos crudos desde terminales IoT y bases de datos legadas.',
    prot_2_label: 'Sintesis',
    prot_2_desc: 'Refinamiento a traves de modelos LLM propietarios y capas de logica industrial.',
    prot_3_label: 'Despliegue',
    prot_3_desc: 'Inyeccion de agentes en el entorno operativo con permisos de escritura segura.',
    dev_title: 'SINTETIZADOR_DE_AGENTES',
    dev_desc:
      'Configure el ADN tecnico de su unidad operativa. Seleccione rasgos de comportamiento y herramientas de ejecucion.',
    dev_traits_label: 'Rasgos de Personalidad (Select 2)',
    trait_analitico: 'Analitico',
    trait_proactivo: 'Proactivo',
    trait_creativo: 'Creativo',
    trait_diplomatico: 'Diplomatico',
    dev_tools_label: 'Herramientas & Frameworks (Select 3)',
    btn_synthesize: 'SINTETIZAR_AGENTE()',
    reg_title: 'REGISTRO_DE_OPERADOR',
    reg_desc: 'Vincule su identidad biometrica para el control de la unidad.',
    form_name: 'Nombre del Operador',
    form_email: 'Correo Electronico',
    form_directives: 'Directivas del Agente',
    form_directives_ph: 'Defina los objetivos primarios de la unidad operativa...',
    form_terms: 'Acepto los Protocolos de Transmision y Uso Etico.',
    btn_submit: 'ENVIAR_SOLICITUD_DE_ENLACE',
    ready_title: 'SISTEMA LISTO PARA EL DESPEGUE?',
    btn_sequence: 'INICIAR_SECUENCIA',
    footer_copy: '© 2026 AIGENTS PLATFORM. INGENIERIA DE PRECISION.',
    footer_metrics: 'Metricas del Sistema: 99.9% Up',
    modal_title: 'AUTENTICACION_REQUERIDA',
    modal_desc: 'Ingrese credenciales de seguridad nivel 4.',
    btn_unlock: 'DESBLOQUEAR_ACCESO',
  },
  en: {
    nav_solutions: 'Solutions',
    nav_dev: 'Development',
    nav_conn: 'Connections',
    status_active: 'Active',
    protocol_label: 'Protocol:',
    hero_v: 'System Initialization v4.0',
    hero_title_1: 'INFRASTRUCTURE OF',
    hero_title_2: 'ARTIFICIAL',
    hero_title_3: 'PRECISION INTELLIGENCE',
    hero_desc:
      'Autonomous systems designed for heavy industry and critical process optimization. Absolute efficiency 24/7.',
    hero_scroll: 'Scroll for data',
    btn_deploy: 'DEPLOY_SYSTEM()',
    sol_title: 'OPERATIVE_UNITS',
    sol_desc: 'Agent classification according to network architecture and computing capacity.',
    ent_title: 'Enterprise Agents',
    ent_desc:
      'Scalable infrastructure for massive industrial data processing, supply-chain automation, and predictive market analysis.',
    ent_f1: 'SAP/ERP Integration',
    ent_f2: 'AES-256 Military Security',
    btn_catalog: 'CONSULT_CATALOG()',
    jar_title: 'Jarvis Agents',
    jar_desc:
      'High-fidelity personal assistants. Neural interface optimized for creative flow management, technical research, and smart task execution.',
    jar_f1: 'Low Latency NLP',
    jar_f2: 'Contextual Learning',
    btn_config: 'CONFIGURE_CORE()',
    prot_title: 'EXECUTION_PROTOCOLS',
    prot_1_label: 'Extraction',
    prot_1_desc: 'Siphoning raw data from IoT terminals and legacy databases.',
    prot_2_label: 'Synthesis',
    prot_2_desc: 'Refinement through proprietary LLM models and industrial logic layers.',
    prot_3_label: 'Deployment',
    prot_3_desc: 'Agent injection into the operative environment with secure write permissions.',
    dev_title: 'AGENT_SYNTHESIZER',
    dev_desc:
      'Configure the technical DNA of your operative unit. Select behavioral traits and execution tools.',
    dev_traits_label: 'Personality Traits (Select 2)',
    trait_analitico: 'Analytical',
    trait_proactivo: 'Proactive',
    trait_creativo: 'Creative',
    trait_diplomatico: 'Diplomatic',
    dev_tools_label: 'Tools & Frameworks (Select 3)',
    btn_synthesize: 'SYNTHESIZE_AGENT()',
    reg_title: 'OPERATOR_REGISTRATION',
    reg_desc: 'Link your biometric identity for unit control.',
    form_name: 'Operator Name',
    form_email: 'Email Address',
    form_directives: 'Agent Directives',
    form_directives_ph: 'Define the primary objectives of the operative unit...',
    form_terms: 'I accept the Transmission Protocols and Ethical Use.',
    btn_submit: 'SEND_LINK_REQUEST',
    ready_title: 'SYSTEM READY FOR TAKEOFF?',
    btn_sequence: 'START_SEQUENCE',
    footer_copy: '© 2026 AIGENTS PLATFORM. PRECISION ENGINEERING.',
    footer_metrics: 'System Metrics: 99.9% Up',
    modal_title: 'AUTHENTICATION_REQUIRED',
    modal_desc: 'Enter level 4 security credentials.',
    btn_unlock: 'UNLOCK_ACCESS',
  },
};

let currentLang = 'es';

function updateLanguage() {
  document.querySelectorAll('[data-tr]').forEach((el) => {
    const key = el.getAttribute('data-tr');
    if (translations[currentLang][key]) {
      el.innerText = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-tr-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-tr-placeholder');
    if (translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });

  document.documentElement.lang = currentLang;
}

function toggleMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('mobile-nav-active');
  }
}

function setupLanguageToggle() {
  const langBtn = document.getElementById('lang-toggle');
  if (!langBtn) {
    return;
  }

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    langBtn.innerText = currentLang === 'es' ? 'EN/ES' : 'ES/EN';
    updateLanguage();
  });
}

function setupSidebarLinks() {
  const links = document.querySelectorAll('aside nav a');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      links.forEach((item) =>
        item.classList.remove('text-[#50FFAB]', 'border-l-2', 'border-[#50FFAB]', 'bg-[#50FFAB]/5'),
      );
      links.forEach((item) => item.classList.add('text-zinc-500'));
      link.classList.remove('text-zinc-500');
      link.classList.add('text-[#50FFAB]', 'border-l-2', 'border-[#50FFAB]', 'bg-[#50FFAB]/5');
    });
  });
}

function setupSelectionGroup(selector, maxSelections) {
  const buttons = Array.from(document.querySelectorAll(selector));
  if (!buttons.length) {
    return;
  }

  const selectedClass = ['border-primary-container', 'bg-primary-container/10', 'text-primary-container'];
  const unselectedClass = ['border-white/10', 'text-zinc-600'];

  const applyStyle = (button, selected) => {
    if (selected) {
      button.classList.remove(...unselectedClass);
      button.classList.add(...selectedClass);
    } else {
      button.classList.remove(...selectedClass);
      button.classList.add(...unselectedClass);
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedButtons = buttons.filter((item) => item.dataset.selected === 'true');
      const isSelected = button.dataset.selected === 'true';

      if (isSelected) {
        button.dataset.selected = 'false';
        applyStyle(button, false);
        return;
      }

      if (selectedButtons.length < maxSelections) {
        button.dataset.selected = 'true';
        applyStyle(button, true);
      }
    });
  });

  // Normalize initial button state based on current markup.
  buttons.forEach((button) => {
    const selected = button.classList.contains('border-primary-container');
    button.dataset.selected = selected ? 'true' : 'false';
    applyStyle(button, selected);
  });
}

window.toggleMobileMenu = toggleMobileMenu;

setupLanguageToggle();
setupSidebarLinks();
setupSelectionGroup('.trait-btn', 2);
setupSelectionGroup('.tool-btn', 3);
updateLanguage();
