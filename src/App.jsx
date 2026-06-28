import React, { useState, useEffect, useMemo, useRef } from 'react';

// Core Design System components
import { Button } from '../components/core/Button.jsx';
import { IconButton } from '../components/core/IconButton.jsx';
import { Input } from '../components/core/Input.jsx';
import { Badge } from '../components/core/Badge.jsx';
import { Tag } from '../components/core/Tag.jsx';
import { Card } from '../components/core/Card.jsx';
import { Switch } from '../components/core/Switch.jsx';
import { Tabs } from '../components/core/Tabs.jsx';
import { Rating } from '../components/core/Rating.jsx';
import { Avatar } from '../components/core/Avatar.jsx';

// Icons & Data
import {
  Search, Compass, Heart, Star, Plus, Locate, Clock, Pin, Route,
  Share, Sun, Camera, Waves, Landmark, Trees, Mountain, Menu, X
} from './icons.jsx';

import {
  ESTABLISHMENT_INFO,
  INITIAL_REVIEWS,
  TOURIST_DEMOGRAPHICS,
  LOST_OPPORTUNITIES,
  CROSS_SCENARIOS,
  EP_CATEGORIES
} from './data.js';

export default function App() {
  const theme = 'dark';
  const [activeTab, setActiveTab] = useState('geral');
  const [isPremium, setIsPremium] = useState(false);
  const [period, setPeriod] = useState('30'); // '7', '15', '30' dias
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reviews state
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [sentimentFilter, setSentimentFilter] = useState('todos');
  const [textOnlyFilter, setTextOnlyFilter] = useState(false);
  const [respondingReviewId, setRespondingReviewId] = useState(null);
  const [aiResponses, setAiResponses] = useState({});

  // Chat State
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Sync theme attribute with documentElement
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  // Initial chat setup when premium is activated
  useEffect(() => {
    if (isPremium && chatMessages.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setChatMessages([
          {
            id: 'init-msg',
            sender: 'ai',
            text: `Olá Ana! Sou o seu **Consultor Estelar IA**. Analisei a operação do **${ESTABLISHMENT_INFO.name}** cruzando seus dados com as tendências da Fecomércio de Natal e previsões meteorológicas:\n\n💡 **Insight Principal:** Sua queda de movimento nas terças acompanha uma ociosidade geral de Ponta Negra, mas notei que shoppings locais têm pico de vendas nesse horário. Além disso, o **feriadão de sexta-feira trará um fluxo turístico 20% acima da média** devido à maré baixa excelente.\n\nComo posso te ajudar a planejar a sua operação hoje?`,
            actions: true
          }
        ]);
        setIsTyping(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isPremium]);

  // Scroll to bottom of chat
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isTyping]);

  // Period values mapping
  const kpis = useMemo(() => {
    // Total, stars (Gostei), eclipses (Brilho Apagado), approval
    if (period === '7') {
      return { total: 32, stars: 27, eclipses: 5, brightness: '84%', peakTime: 'Sáb, 20:00' };
    } else if (period === '15') {
      return { total: 76, stars: 62, eclipses: 14, brightness: '81%', peakTime: 'Sex, 19:30' };
    } else {
      return { total: 148, stars: 124, eclipses: 24, brightness: '83%', peakTime: 'Sex, 19:30' };
    }
  }, [period]);

  // Category Colors
  const catColor = (catId) => {
    return (EP_CATEGORIES.find(c => c.id === catId) || {}).color || 'var(--accent)';
  };

  // Filter reviews
  const filteredReviews = useMemo(() => {
    return reviews.filter(r => {
      const okType = sentimentFilter === 'todos' ||
        (sentimentFilter === 'positivo' && r.type === 'estrela') ||
        (sentimentFilter === 'negativo' && r.type === 'eclipse') ||
        (sentimentFilter === 'neutro' && r.type === 'neutro');
      const okText = !textOnlyFilter || (r.text && r.text.length > 0);
      return okType && okText;
    });
  }, [reviews, sentimentFilter, textOnlyFilter]);

  // Handle upgraded plan
  const handleUpgrade = () => {
    setIsPremium(true);
    alert("Plano Premium Desbloqueado com sucesso! Acesso liberado ao Consultor IA e análises avançadas de mercado.");
  };

  // AI response helper for reviews
  const generateAiReviewResponse = (id, author, text, type) => {
    setRespondingReviewId(id);
    setTimeout(() => {
      let responseText = "";
      if (type === 'eclipse') {
        responseText = `Olá ${author.split(' ')[0]}! Lamentamos sinceramente pelo ocorrido com o tempo de espera e temperatura da bebida. Agradecemos por nos sinalizar (Brilho Apagado registrado). Já estamos ajustando a nossa escala operacional para garantir que os picos de fluxo turístico do aplicativo sejam atendidos com agilidade. Adoraríamos recebê-lo(a) de volta para apresentar nossa nova estrutura.`;
      } else {
        responseText = `Olá ${author.split(' ')[0]}! Ficamos muito gratos por iluminar nosso céu com a sua Estrela 🌟! É um prazer saber que a nossa culinária potiguar e a vista do Morro do Careca atenderam às suas expectativas. Esperamos sua visita em breve!`;
      }
      setAiResponses(prev => ({ ...prev, [id]: responseText }));
      setRespondingReviewId(null);
    }, 1200);
  };

  // Send message to AI Consultant chat
  const sendChatMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: text
    };

    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setIsTyping(true);

    setTimeout(() => {
      let responseText = "";
      let hasWidget = null;

      if (text.includes("Matriz de Oportunidades") || text.toLowerCase().includes("gargalo")) {
        responseText = "Com base nas buscas locais e avaliações dos últimos 30 dias, identifiquei gargalos operacionais específicos. Veja a **Matriz de Oportunidades (Mapa de Calor)** abaixo:\n\n* **Terças-feiras (14h - 18h):** Ociosidade extrema devido ao fechamento do comércio de rua local. \n* **Sextas-feiras (19h - 22h):** Sobrecarga de atendimento e reclamações de demora (bebidas quentes).";
        hasWidget = "heatmap";
      } else if (text.includes("Feriado") || text.toLowerCase().includes("cronograma")) {
        responseText = "Aqui está o seu **Plano de Ação para o Feriado de Sexta-feira** (Expectativa de +20% de turistas):\n\n1. 📈 **Aumentar Escala:** Incluir mais 2 garçons e 1 auxiliar de bar para o turno das 16h às 23h.\n2. 🧊 **Logística de Bebidas:** Reabastecer as câmaras frias na quinta à noite para evitar picos de bebidas quentes.\n3. 📲 **Cardápio Digital:** Habilitar pedidos por QR code na areia para aliviar a equipe do salão.";
      } else if (text.includes("Comunicado") || text.toLowerCase().includes("equipe")) {
        responseText = "Aqui está um modelo de comunicado motivacional pronto para você copiar e enviar no grupo de WhatsApp da sua equipe:\n\n> *\"Olá equipe! Sexta-feira teremos feriado prolongado e a previsão é de casa cheia (+20% de fluxo turístico de acordo com a Fecomércio). Vamos reforçar a nossa equipe de atendimento a partir das 16h. Nosso foco total será na agilidade de entrega das bebidas trincando de geladas e no atendimento acolhedor. Conto com a energia de todos para fazermos um dia estelar! 🌟\"*";
      } else if (text.toLowerCase().includes("vegano") || text.toLowerCase().includes("plano de cardápio")) {
        responseText = "Excelente iniciativa. Perder 42 buscas semanais por opções veganas representa cerca de R$ 5.400,00 mensais em receita não realizada. Recomendo o seguinte **Cardápio Vegano de Entrada Rápida**:\n\n1. **Prato Principal:** Moqueca Vegana de Caju e Palmito (ingredientes locais, alta margem e preparo rápido).\n2. **Petisco de Praia:** Dadinho de Tapioca com geleia de pimenta (fácil adaptação).\n3. **Sobremesa:** Sorbet de Coco Verde local.";
      } else {
        responseText = `Entendido. Analisando o cenário de Natal e a operação do **${ESTABLISHMENT_INFO.name}**, sugiro focar no cruzamento de dados de ocupação de praia e do calendário local. O que você gostaria de detalhar a seguir?`;
      }

      setChatMessages(prev => [...prev, {
        id: 'reply-' + Date.now(),
        sender: 'ai',
        text: responseText,
        widget: hasWidget
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const dark = theme !== 'light';

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
      background: 'var(--surface-canvas)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      overflow: 'hidden'
    }}>

      {/* Backdrop for mobile */}
      {isMobile && isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(5, 4, 20, 0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 90
          }}
        />
      )}

      {/* LEFT SIDEBAR */}
      <aside style={{
        width: '230px',
        borderRight: '1px solid var(--border-subtle)',
        background: 'var(--surface-card)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        flexShrink: 0,
        zIndex: 100,
        // Mobile overrides
        position: isMobile ? 'fixed' : 'relative',
        top: 0,
        bottom: 0,
        left: isMobile ? (isSidebarOpen ? '0' : '-230px') : '0',
        transition: 'left 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
        boxShadow: isMobile && isSidebarOpen ? 'var(--shadow-xl)' : 'none'
      }}>
        {/* Top: Branding & Logo */}
        <div style={{ padding: '20px 16px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="assets/logo/estrela-mark.svg"
              alt="Estrela Potiguar"
              className="ep-twinkle"
              style={{ width: '30px', height: '30px', filter: 'drop-shadow(var(--glow-star))' }}
            />
            <div>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '16px',
                fontWeight: 700,
                margin: 0,
                letterSpacing: '-0.01em',
                color: 'var(--text-primary)',
                lineHeight: 1.1
              }}>
                Estrela Potiguar
              </h1>
              <span style={{ fontSize: '9px', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em' }}>B2B INTELLIGENCE</span>
            </div>
          </div>
          {isMobile && (
            <button 
              onClick={() => setIsSidebarOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Middle: Navigation Items */}
        <div style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[
            { value: 'geral', label: 'Visão Geral' },
            { value: 'consultor-ia', label: 'Consultor IA', suffix: '✦' },
            { value: 'raio-x', label: 'Raio-X do Turista' },
            { value: 'oportunidades', label: 'Oportunidades' },
            { value: 'feed', label: 'Feed de Avaliações', count: filteredReviews.length }
          ].map((item) => {
            const active = activeTab === item.value;
            return (
              <button
                key={item.value}
                onClick={() => {
                  setActiveTab(item.value);
                  if (isMobile) setIsSidebarOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-md)',
                  border: 'none',
                  background: active ? 'linear-gradient(90deg, rgba(248,222,34,0.12) 0%, rgba(246,55,236,0.04) 100%)' : 'transparent',
                  borderLeft: active ? '3px solid var(--accent)' : '3px solid transparent',
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: active ? 700 : 500,
                  fontSize: '14px',
                  textAlign: 'left',
                  outline: 'none'
                }}
                className={`ep-sidebar-item ${active ? "active" : ""}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>{item.label} {item.suffix && <span style={{ color: 'var(--accent)' }}>{item.suffix}</span>}</span>
                </div>
                {item.count !== undefined && (
                  <Badge tone={active ? "accent" : "neutral"} style={{ fontSize: '11px', padding: '1px 5px' }}>{item.count}</Badge>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom: Profile & Premium Upsell */}
        <div style={{ padding: '16px 12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {!isPremium && (
            <Button variant="aurora" size="sm" onClick={handleUpgrade} style={{ width: '100%', justifyContent: 'center', boxShadow: 'var(--glow-aurora)' }}>
              ★ Testar Premium Grátis
            </Button>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '2px' }}>
            <Avatar name="Ana Lima" size={32} ring={isPremium} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Ana Lima</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Gerente de Operações</div>
            </div>
          </div>
        </div>
      </aside>

      {/* RIGHT SIDE MAIN CONTENT CONTAINER */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        overflow: 'hidden'
      }}>
        {/* Header bar */}
        <header style={{
          height: isMobile ? 'auto' : '70px',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--surface-card)',
          padding: isMobile ? '12px 16px' : '0 24px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'center',
          justifyContent: 'space-between',
          gap: isMobile ? '12px' : '16px',
          zIndex: 40,
          WebkitBackdropFilter: 'var(--blur-glass)',
          backdropFilter: 'var(--blur-glass)'
        }}>
          {/* Left: Active Store Info */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {isMobile && (
                <button 
                  onClick={() => setIsSidebarOpen(true)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    padding: '8px 8px 8px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Menu size={24} />
                </button>
              )}
              <Card padding="sm" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', background: 'var(--surface-inset)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '8px', maxWidth: isMobile ? '200px' : 'none', overflow: 'hidden' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: catColor(ESTABLISHMENT_INFO.category) }} />
                <span style={{ fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{ESTABLISHMENT_INFO.name}</span>
                {!isMobile && <span style={{ fontSize: '11px', color: 'var(--text-secondary)', borderLeft: '1px solid var(--border-subtle)', paddingLeft: '8px' }}>{ESTABLISHMENT_INFO.location}</span>}
              </Card>
            </div>

            <Badge tone={isPremium ? "aurora" : "neutral"} solid={isPremium}>
              {isPremium ? "★ PREMIUM" : "GRATUITO"}
            </Badge>
          </div>

          {/* Right: Period Selector & Theme Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'space-between' : 'flex-end', gap: '16px' }}>
            <select
              value={period}
              onChange={e => setPeriod(e.target.value)}
              style={{
                height: 'var(--control-sm)',
                borderRadius: 'var(--radius-full)',
                background: 'var(--surface-inset)',
                border: '1px solid var(--border-default)',
                color: 'var(--text-primary)',
                padding: '0 12px',
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: 600,
                outline: 'none',
                cursor: 'pointer',
                width: isMobile ? '100%' : 'auto'
              }}
            >
              <option value="7">Últimos 7 dias</option>
              <option value="15">Últimos 15 dias</option>
              <option value="30">Últimos 30 dias</option>
            </select>
          </div>
        </header>

        {/* Content Area */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '24px',
          background: 'var(--surface-base)'
        }}>

          {/* TAB 1: VISÃO GERAL (HIGH DENSITY DASHBOARD) */}
          {activeTab === 'geral' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* Star / Brilho Apagado Concept Note */}
              <div style={{
                background: 'linear-gradient(90deg, rgba(248,222,34,0.06) 0%, rgba(246,55,236,0.02) 100%)',
                border: '1px solid var(--border-subtle)',
                padding: '12px 18px',
                borderRadius: 'var(--radius-md)',
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'var(--text-secondary)'
              }}>
                <span>
                  **Métrica de Satisfação:** Registro de Estrela (Gostei) para cada avaliação positiva e Brilho Apagado (Não Gostei) para cada experiência negativa.
                </span>
                <Badge tone="accent" style={{ fontSize: '11px' }}>Conceito Principal</Badge>
              </div>

              {/* 4 Cards Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '14px'
              }}>
                <Card interactive padding="md" style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderLeft: '3px solid var(--info)' }}>
                  <span className="ep-eyebrow" style={{ color: 'var(--info)', fontSize: '11px' }}>Total de Retornos</span>
                  <span style={{ fontSize: '30px', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                    {kpis.total}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Interações totais no aplicativo</span>
                </Card>

                <Card interactive padding="md" style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderLeft: '3px solid var(--accent)' }}>
                  <span className="ep-eyebrow" style={{ color: 'var(--accent)', fontSize: '11px' }}>Estrelas Concedidas</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span style={{ fontSize: '30px', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--accent)' }}>
                      {kpis.stars}
                    </span>
                    <span style={{ color: 'var(--success)', fontSize: '11px', fontWeight: 600 }}>Gostei</span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Clientes satisfeitos</span>
                </Card>

                <Card interactive padding="md" style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderLeft: '3px solid var(--ep-night-300)' }}>
                  <span className="ep-eyebrow" style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Brilhos Apagados</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span style={{ fontSize: '30px', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text-secondary)' }}>
                      {kpis.eclipses}
                    </span>
                    <span style={{ color: 'var(--danger)', fontSize: '11px', fontWeight: 600 }}>Não Gostei</span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Pontos a melhorar</span>
                </Card>

                <Card interactive padding="md" style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderLeft: '3px solid var(--aurora)' }}>
                  <span className="ep-eyebrow" style={{ color: 'var(--aurora)', fontSize: '11px' }}>Brilho do Negócio</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span style={{ fontSize: '30px', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--aurora)', filter: 'drop-shadow(var(--glow-star))' }}>
                      {kpis.brightness}
                    </span>
                    <span style={{ color: 'var(--success)', fontSize: '11px', fontWeight: 600 }}>Aprovação</span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Índice líquido de satisfação</span>
                </Card>
              </div>

              {/* Grid principal com Gráficos e Perfil Rápido */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr',
                gap: '24px'
              }}>

                {/* Comparativo Semanal Estrela vs Brilho Apagado */}
                <Card padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: '16px', minHeight: '380px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '16px' }}>Céu do Estabelecimento</h3>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Histórico diário de Estrelas (Gostei) vs Brilhos Apagados (Não Gostei)</span>
                    </div>
                    <div style={{ display: 'flex', gap: '14px', fontSize: '12px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%', boxShadow: 'var(--glow-sm)' }} />
                        Estrela
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '8px', height: '8px', background: 'var(--border-strong)', borderRadius: '50%' }} />
                        Brilho Apagado
                      </span>
                    </div>
                  </div>

                  {/* SVG Bar Chart */}
                  <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '20px 10px 0', height: '230px' }}>
                    {[
                      { day: "Seg", stars: 9, eclipses: 1 },
                      { day: "Ter", stars: 5, eclipses: 3 },
                      { day: "Qua", stars: 12, eclipses: 2 },
                      { day: "Qui", stars: 14, eclipses: 1 },
                      { day: "Sex", stars: 24, eclipses: 4 },
                      { day: "Sáb", stars: 28, eclipses: 3 },
                      { day: "Dom", stars: 22, eclipses: 2 }
                    ].map((item, idx) => {
                      const scale = 5;
                      return (
                        <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, gap: '10px' }}>
                          <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end', height: '180px' }}>
                            {/* Stars bar */}
                            <div style={{
                              width: '18px',
                              height: `${item.stars * scale}px`,
                              background: 'var(--accent)',
                              borderRadius: 'var(--radius-xs) var(--radius-xs) 0 0',
                              boxShadow: 'var(--glow-sm)',
                              transition: 'height 0.4s ease'
                            }} />
                            {/* Brilhos Apagados bar */}
                            <div style={{
                              width: '18px',
                              height: `${item.eclipses * scale}px`,
                              background: 'var(--border-strong)',
                              borderRadius: 'var(--radius-xs) var(--radius-xs) 0 0',
                              transition: 'height 0.4s ease'
                            }} />
                          </div>
                          <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 600 }}>{item.day}</span>
                        </div>
                      );
                    })}
                  </div>
                </Card>

                {/* Perfil de Público Rápido */}
                <Card padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '16px' }}>Perfil do Turista Rápido</h3>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Identidade de grupo e vibes predominantes</span>
                  </div>

                  {/* Vibes */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <span className="ep-eyebrow" style={{ color: 'var(--info)', fontSize: '11px' }}>Vibes da Semana</span>
                    {TOURIST_DEMOGRAPHICS.vibes.map((v, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                        <span style={{ flex: 1, color: 'var(--text-secondary)' }}>{v.name}</span>
                        <div style={{ width: '120px', height: '8px', background: 'var(--surface-inset)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                          <div style={{ width: `${v.pct}%`, height: '100%', background: v.color }} />
                        </div>
                        <span style={{ width: '32px', textAlign: 'right', fontWeight: 600 }}>{v.pct}%</span>
                      </div>
                    ))}
                  </div>

                  {/* Groups */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', marginTop: '4px' }}>
                    <span className="ep-eyebrow" style={{ color: 'var(--aurora)', fontSize: '11px' }}>Composição do Grupo</span>
                    {TOURIST_DEMOGRAPHICS.groups.map((g, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                        <span style={{ flex: 1, color: 'var(--text-secondary)' }}>{g.name}</span>
                        <div style={{ width: '120px', height: '8px', background: 'var(--surface-inset)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                          <div style={{ width: `${g.pct}%`, height: '100%', background: 'var(--aurora)' }} />
                        </div>
                        <span style={{ width: '32px', textAlign: 'right', fontWeight: 600 }}>{g.pct}%</span>
                      </div>
                    ))}
                  </div>
                </Card>

              </div>

              {/* Linha 3: Widget de Mercado + Dedo na Ferida */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1.3fr',
                gap: '24px'
              }}>
                {/* Fecomércio Card */}
                <Card padding="md" style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'linear-gradient(135deg, var(--surface-card) 0%, rgba(20,134,196,0.06) 100%)' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span className="ep-eyebrow" style={{ color: 'var(--info)' }}>Termômetro de Mercado (CDL/Fecomércio)</span>
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: 1.5, margin: 0, color: 'var(--text-primary)' }}>
                    O faturamento do setor gastronômico de **Ponta Negra** teve uma **alta média de 5.4%** esta semana. O seu restaurante cresceu **8.2%** em feedbacks recebidos!
                  </p>
                  <Button variant="ghost" size="sm" onClick={() => setActiveTab('oportunidades')} style={{ alignSelf: 'flex-start' }}>
                    Ver Análise de Demanda
                  </Button>
                </Card>

                {/* Oportunidades Quick list */}
                <Card padding="md" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="ep-eyebrow" style={{ color: 'var(--danger)' }}>Oportunidades — Buscas Não Atendidas</span>
                    <Badge tone="danger" dot>Semana</Badge>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {LOST_OPPORTUNITIES.slice(0, 2).map((opp, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', background: 'var(--surface-inset)', padding: '6px 12px', borderRadius: 'var(--radius-sm)' }}>
                        <span style={{ fontWeight: 600 }}>• "{opp.term}"</span>
                        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{opp.count} buscas a 2km</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Premium Upsell Banner */}
              {!isPremium && (
                <Card padding="lg" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'radial-gradient(100% 100% at 50% 50%, var(--surface-card) 0%, rgba(246,55,236,0.06) 100%)',
                  border: '1px solid var(--aurora)',
                  boxShadow: 'var(--glow-aurora)',
                  gap: '24px'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', margin: '0 0 6px', fontSize: '18px' }}>Desbloqueie o Consultor Estelar IA ✦</h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                      Deixe a nossa inteligência artificial cruzar automaticamente seus Brilhos Apagados (queixas) e dados de turistas com o calendário regional para guiar o seu faturamento.
                    </p>
                  </div>
                  <Button variant="aurora" size="md" onClick={handleUpgrade} style={{ padding: '0 24px', fontWeight: 600, flexShrink: 0 }}>
                    Ativar Premium Grátis
                  </Button>
                </Card>
              )}

            </div>
          )}

          {/* TAB 2: CONSULTOR IA (PREMIUM CHAT) */}
          {activeTab === 'consultor-ia' && (
            <div style={{ height: 'calc(100vh - 170px)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {!isPremium && (
                /* Blurred Glass Paywall */
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 20,
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '24px'
                }}>
                  <Card padding="lg" style={{
                    maxWidth: '480px',
                    textAlign: 'center',
                    background: 'var(--glass-tint-dark)',
                    border: '1px solid var(--aurora)',
                    boxShadow: 'var(--glow-aurora)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px'
                  }}>
                    <span style={{ fontSize: '40px', filter: 'drop-shadow(var(--glow-aurora))' }}>🤖✦</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', margin: 0 }}>Consultor Estelar Premium</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      Converse em linguagem natural com a nossa IA treinada com os dados do seu restaurante combinados com as estatísticas do mercado varejista da Fecomércio/CDL.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left', width: '100%', fontSize: '13px', color: 'var(--text-secondary)', padding: '12px 16px', background: 'var(--surface-inset)', borderRadius: 'var(--radius-md)' }}>
                      <div>✅ Projeção de fluxo baseada na maré e clima local.</div>
                      <div>✅ Matriz automática de oportunidades semanais.</div>
                      <div>✅ Respostas inteligentes para queixas de clientes.</div>
                      <div>✅ Geração de planos de ação e comunicados.</div>
                    </div>
                    <Button variant="aurora" size="md" onClick={handleUpgrade} fullWidth>
                      Ativar Premium e Iniciar Conversa
                    </Button>
                  </Card>
                </div>
              )}

              {/* Real Chat Interface */}
              <div style={{
                flex: 1,
                display: 'flex',
                background: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                opacity: isPremium ? 1 : 0.25,
                pointerEvents: isPremium ? 'auto' : 'none'
              }}>
                {/* Chat Panel */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>

                  {/* Messages list */}
                  <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {chatMessages.map(msg => (
                      <div
                        key={msg.id}
                        style={{
                          display: 'flex',
                          flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                          alignItems: 'flex-start',
                          gap: '12px'
                        }}
                      >
                        {/* Avatar */}
                        {msg.sender === 'ai' ? (
                          <div style={{
                            width: '36px', height: '36px', borderRadius: '50%',
                            background: 'var(--accent-soft)', border: '1px solid var(--accent)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px'
                          }}>🤖</div>
                        ) : (
                          <Avatar name="Ana Lima" size={36} ring />
                        )}

                        {/* Bubble */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '75%' }}>
                          <div style={{
                            background: msg.sender === 'user' ? 'var(--accent-soft)' : 'var(--surface-inset)',
                            border: `1px solid ${msg.sender === 'user' ? 'var(--accent)' : 'var(--border-subtle)'}`,
                            borderRadius: 'var(--radius-lg)',
                            padding: '14px 18px',
                            color: 'var(--text-primary)',
                            fontSize: '14px',
                            lineHeight: 1.6,
                            whiteSpace: 'pre-line'
                          }}>
                            {msg.text}
                          </div>

                          {/* Dynamic components appended in messages */}
                          {msg.widget === 'heatmap' && (
                            <Card padding="md" style={{ background: 'var(--surface-base)', border: '1px solid var(--border-default)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                              <span className="ep-eyebrow">Matriz de Calor (Movimentação)</span>
                              <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(3, 1fr)', gap: '6px', fontSize: '11px', textAlign: 'center' }}>
                                {/* Header */}
                                <div />
                                <div style={{ fontWeight: 600 }}>Manhã</div>
                                <div style={{ fontWeight: 600 }}>Tarde</div>
                                <div style={{ fontWeight: 600 }}>Noite</div>

                                {/* Heatmap Rows */}
                                {[
                                  { day: "Segunda", m: "var(--success-soft)", t: "var(--success-soft)", n: "var(--warning-soft)" },
                                  { day: "Terça", m: "var(--success-soft)", t: "var(--danger-soft)", n: "var(--success-soft)" },
                                  { day: "Quarta", m: "var(--success-soft)", t: "var(--success-soft)", n: "var(--warning-soft)" },
                                  { day: "Quinta", m: "var(--success-soft)", t: "var(--success-soft)", n: "var(--warning-soft)" },
                                  { day: "Sexta", m: "var(--success-soft)", t: "var(--warning-soft)", n: "var(--danger-soft)" },
                                  { day: "Sábado", m: "var(--success-soft)", t: "var(--danger-soft)", n: "var(--danger-soft)" },
                                  { day: "Domingo", m: "var(--success-soft)", t: "var(--warning-soft)", n: "var(--danger-soft)" }
                                ].map((row, i) => (
                                  <React.Fragment key={i}>
                                    <div style={{ textAlign: 'left', fontWeight: 600, color: 'var(--text-secondary)' }}>{row.day}</div>
                                    <div style={{ background: row.m, borderRadius: '4px', height: '20px' }} />
                                    <div style={{ background: row.t, borderRadius: '4px', height: '20px' }} />
                                    <div style={{ background: row.n, borderRadius: '4px', height: '20px' }} />
                                  </React.Fragment>
                                ))}
                              </div>
                              <div style={{ display: 'flex', gap: '14px', fontSize: '10px', color: 'var(--text-muted)', justifyContent: 'center', marginTop: '4px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: 8, height: 8, background: 'var(--success-soft)', borderRadius: 2 }} /> Ocioso / Tranquilo</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: 8, height: 8, background: 'var(--warning-soft)', borderRadius: 2 }} /> Moderado</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: 8, height: 8, background: 'var(--danger-soft)', borderRadius: 2 }} /> Gargalo / Pico</span>
                              </div>
                            </Card>
                          )}

                          {/* Quick replies */}
                          {msg.actions && (
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '4px' }}>
                              <Button variant="subtle" size="sm" onClick={() => sendChatMessage("Quero ver a Matriz de Oportunidades")}>
                                🔍 Ver Matriz Oportunidades
                              </Button>
                              <Button variant="subtle" size="sm" onClick={() => sendChatMessage("Gerar Cronograma para o Feriado")}>
                                📅 Cronograma Feriado
                              </Button>
                              <Button variant="subtle" size="sm" onClick={() => sendChatMessage("Escrever Comunicado para a Equipe")}>
                                📝 Comunicado Equipe
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <div style={{
                          width: '36px', height: '36px', borderRadius: '50%',
                          background: 'var(--accent-soft)', border: '1px solid var(--accent)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>🤖</div>
                        <div style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '14px 18px', color: 'var(--text-muted)', fontSize: '13px' }}>
                          O Consultor Estelar está interpretando dados celestes...
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>

                  {/* Input area */}
                  <div style={{ padding: '18px 24px', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Input
                      value={chatInput}
                      onChange={e => setChatInput(e.target.value)}
                      placeholder="Pergunte sobre faturamento, sugestões veganas ou equipe..."
                      style={{ flex: 1 }}
                      onKeyDown={e => { if (e.key === 'Enter') sendChatMessage(chatInput); }}
                    />
                    <Button variant="primary" onClick={() => sendChatMessage(chatInput)}>
                      Enviar
                    </Button>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* TAB 3: RAIO-X DO TURISTA */}
          {activeTab === 'raio-x' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', gap: '24px' }}>

                {/* Pocket Budget (Termômetro de Bolso) */}
                <Card padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', margin: 0 }}>Termômetro de Bolso (Orçamento)</h3>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Perfil de gasto dos turistas que transitam no bairro no momento</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {TOURIST_DEMOGRAPHICS.budget.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: item.featured ? 'var(--accent-soft)' : 'var(--surface-inset)',
                          border: `1px solid ${item.featured ? 'var(--accent)' : 'var(--border-subtle)'}`,
                          borderRadius: 'var(--radius-lg)',
                          padding: '16px 20px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                          boxShadow: item.featured ? 'var(--glow-sm)' : 'none'
                        }}
                      >
                        <div style={{ display: 'flex', justifycontent: 'space-between', justifyContent: 'space-between', fontWeight: 600 }}>
                          <span style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                            {item.label}
                          </span>
                          <span style={{ fontSize: '18px', color: item.featured ? 'var(--accent)' : 'var(--text-primary)' }}>{item.pct}%</span>
                        </div>
                        <div style={{ height: '6px', background: 'var(--surface-base)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                          <div style={{
                            width: `${item.pct}%`,
                            height: '100%',
                            background: item.key === 'econ' ? 'var(--text-muted)' : (item.key === 'conf' ? 'var(--accent)' : 'var(--aurora)'),
                            borderRadius: 'var(--radius-full)'
                          }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <Card padding="md" style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-default)', display: 'flex', gap: '12px' }}>
                    <div>
                      <span className="ep-eyebrow" style={{ fontSize: '11px' }}>Insight IA de Orçamento</span>
                      <p style={{ fontSize: '14px', margin: '4px 0 0', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                        A maioria do público da semana busca a categoria **Conforto/Premium**. Oculte temporariamente a promoção do "prato feito" nas redes sociais e destaque o **Camarão VG na moranga** no seu cardápio físico.
                      </p>
                    </div>
                  </Card>
                </Card>

                {/* Group Composition & Vibes Detailed */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                  {/* Vibes detailed */}
                  <Card padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '16px' }}>Vibe da Viagem</h3>
                      <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Proporção do perfil de viagem que o turista busca</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {TOURIST_DEMOGRAPHICS.vibes.map((v, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ flex: 1, fontSize: '14px', fontWeight: 600 }}>{v.name}</span>
                          <div style={{ flex: 1.5, height: '8px', background: 'var(--surface-inset)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                            <div style={{ width: `${v.pct}%`, height: '100%', background: v.color }} />
                          </div>
                          <span style={{ fontSize: '14px', fontWeight: 700, width: '32px', textAlign: 'right' }}>{v.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Group composition detailed */}
                  <Card padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '16px' }}>Composição dos Grupos</h3>
                      <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Quem está consumindo no seu bairro</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {TOURIST_DEMOGRAPHICS.groups.map((g, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ flex: 1, fontSize: '14px', fontWeight: 600 }}>{g.name}</span>
                          <div style={{ flex: 1.5, height: '8px', background: 'var(--surface-inset)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                            <div style={{ width: `${g.pct}%`, height: '100%', background: 'var(--aurora)' }} />
                          </div>
                          <span style={{ fontSize: '14px', fontWeight: 700, width: '32px', textAlign: 'right' }}>{g.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                </div>

              </div>
            </div>
          )}

          {/* TAB 4: OPORTUNIDADES (MISSING DEMAND) */}
          {activeTab === 'oportunidades' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', gap: '24px' }}>
                
                {/* Left Side: Opportunities List & AI Insight */}
                <Card padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '18px' }}>Oportunidades — Demanda Reprimida</h3>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>O que digitaram nas pesquisas a 2km do seu restaurante e você não oferece</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {LOST_OPPORTUNITIES.map((opp, idx) => (
                      <div 
                        key={idx}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '16px 20px',
                          background: 'var(--surface-inset)',
                          border: '1px solid var(--border-default)',
                          borderRadius: 'var(--radius-lg)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }} />
                          <div>
                            <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>"{opp.term}"</div>
                            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Pesquisas no aplicativo da região</div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--accent)' }}>{opp.count}</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>buscas esta semana</div>
                          </div>
                          <Badge tone={opp.impact === 'Alto' ? 'danger' : 'warning'}>Impacto {opp.impact}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* AI Analysis of Lost Sales */}
                  <Card padding="md" style={{ 
                    background: 'radial-gradient(100% 100% at 50% 50%, var(--surface-card) 0%, rgba(255,107,94,0.03) 100%)', 
                    border: '1px solid var(--danger)',
                    boxShadow: '0 0 14px rgba(255,107,94,0.1)',
                    marginTop: '10px'
                  }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <span className="ep-eyebrow" style={{ color: 'var(--danger)' }}>Insight do Consultor IA</span>
                        <p style={{ fontSize: '14px', margin: '4px 0 0', lineHeight: 1.6, color: 'var(--text-primary)' }}>
                          Você perdeu aproximadamente **42 mesas potenciais** nesta semana por não ter opções veganas no cardápio. Adicionar um queijo vegetal ou prato específico (ex: moqueca de caju) pode recuperar essa receita rapidamente.
                        </p>
                        
                        {isPremium ? (
                          <Button 
                            variant="secondary" 
                            size="sm" 
                            onClick={() => { setActiveTab('consultor-ia'); sendChatMessage("Quero ver o plano de cardápio vegano"); }}
                            style={{ marginTop: '12px' }}
                          >
                            Gerar plano de cardápio vegano no Chat
                          </Button>
                        ) : (
                          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px', fontStyle: 'italic' }}>
                            * Ative o Plano Premium para planejar o cardápio vegano com o Consultor IA.
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </Card>

                {/* Right Side: Visual Charts */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  {/* Monthly revenue loss projection chart */}
                  <Card padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '16px' }}>Impacto Financeiro Estimado (Mensal)</h3>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Receita potencial não realizada baseada nas pesquisas e ticket médio local</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
                      {[
                        { label: "Opção Vegana", value: 5460, color: "var(--danger)", pct: 100 },
                        { label: "Espaço Kids", value: 3480, color: "var(--warning)", pct: 64 },
                        { label: "Pet Friendly", value: 1980, color: "var(--info)", pct: 36 }
                      ].map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 600 }}>
                            <span style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                              <span style={{ color: 'var(--text-secondary)' }}>{item.label}</span>
                            </span>
                            <span style={{ color: item.color }}>R$ {item.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                          </div>
                          <div style={{ height: '8px', background: 'var(--surface-inset)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                            <div style={{ width: `${item.pct}%`, height: '100%', background: item.color, borderRadius: 'var(--radius-full)' }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ background: 'var(--surface-inset)', padding: '12px', borderRadius: 'var(--radius-md)', textAlign: 'center', marginTop: '6px' }}>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Perda Total Estimada:</span>
                      <strong style={{ fontSize: '16px', color: 'var(--danger)', marginLeft: '6px' }}>R$ 10.920,00 / mês</strong>
                    </div>
                  </Card>

                  {/* SVG Demand timeline distribution */}
                  <Card padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', margin: 0, fontSize: '16px' }}>Distribuição das Buscas por Horário</h3>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Horários com maior frequência de pesquisas de demanda reprimida</span>
                    </div>

                    <div style={{ height: '120px', position: 'relative', marginTop: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                      <svg viewBox="0 0 100 35" style={{ width: '100%', height: '80%', overflow: 'visible' }}>
                        <defs>
                          <linearGradient id="glow-loss" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area */}
                        <path d="M 0 35 Q 15 32 30 20 T 60 5 T 80 25 T 100 10 L 100 35 Z" fill="url(#glow-loss)" />
                        {/* Line */}
                        <path d="M 0 35 Q 15 32 30 20 T 60 5 T 80 25 T 100 10" fill="none" stroke="var(--accent)" strokeWidth="2" />
                        
                        {/* Highlight dots */}
                        <circle cx="60" cy="5" r="3" fill="var(--aurora)" style={{ filter: 'drop-shadow(0 0 4px var(--aurora))' }} />
                        <circle cx="100" cy="10" r="3" fill="var(--aurora)" style={{ filter: 'drop-shadow(0 0 4px var(--aurora))' }} />
                      </svg>
                      
                      {/* X Axis timeline */}
                      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-muted)', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
                        <span>11:30</span>
                        <span>14:00</span>
                        <span>17:00 (Pico)</span>
                        <span>20:00</span>
                        <span>23:00 (Pico)</span>
                      </div>
                    </div>
                  </Card>

                </div>

              </div>
            </div>
          )}

          {/* TAB 5: FEED DE AVALIAÇÕES */}
          {activeTab === 'feed' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Filter controls */}
              <Card padding="md" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Tag selected={sentimentFilter === 'todos'} onClick={() => setSentimentFilter('todos')}>Todos</Tag>
                  <Tag color="var(--accent)" selected={sentimentFilter === 'positivo'} onClick={() => setSentimentFilter('positivo')}>Estrelas</Tag>
                  <Tag color="var(--border-strong)" selected={sentimentFilter === 'negativo'} onClick={() => setSentimentFilter('negativo')}>Brilhos Apagados</Tag>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="checkbox"
                    id="textFilter"
                    checked={textOnlyFilter}
                    onChange={e => setTextOnlyFilter(e.target.checked)}
                    style={{ accentColor: 'var(--accent)', cursor: 'pointer' }}
                  />
                  <label htmlFor="textFilter" style={{ fontSize: '14px', cursor: 'pointer', fontWeight: 600 }}>Somente com comentários</label>
                </div>
              </Card>

              {/* Reviews List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {filteredReviews.map(review => (
                  <Card key={review.id} padding="md" style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderLeft: `4px solid ${review.type === 'estrela' ? 'var(--accent)' : 'var(--border-strong)'}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <span style={{ fontSize: '15px', fontWeight: 700 }}>{review.author}</span>
                          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{review.date} às {review.time}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '6px' }}>
                          <Badge tone="neutral" style={{ fontSize: '11px' }}>Vibe: {review.vibe}</Badge>
                          <Badge tone="neutral" style={{ fontSize: '11px' }}>Grupo: {review.group}</Badge>
                        </div>
                      </div>

                      <Badge tone={review.type === 'estrela' ? 'success' : 'danger'} style={{ fontSize: '11px' }}>
                        {review.type === 'estrela' ? 'ESTRELA (GOSTEI)' : 'BRILHO APAGADO (NÃO GOSTEI)'}
                      </Badge>
                    </div>

                    <p style={{ fontSize: '14px', lineHeight: 1.5, color: 'var(--text-secondary)', margin: 0 }}>
                      {review.text || <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Sem comentário escrito</span>}
                    </p>

                    {/* AI generated responder area */}
                    <div style={{
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '12px',
                      marginTop: '4px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    }}>
                      {aiResponses[review.id] ? (
                        <div style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-default)', padding: '12px 16px', borderRadius: 'var(--radius-md)' }}>
                          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '6px' }}>
                            <span className="ep-eyebrow" style={{ fontSize: '11px' }}>✦ Resposta IA Gerada</span>
                          </div>
                          <p style={{ fontSize: '13px', color: 'var(--text-primary)', margin: 0, lineHeight: 1.5 }}>
                            {aiResponses[review.id]}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => { alert("Resposta copiada para a área de transferência!"); }}
                            style={{ alignSelf: 'flex-end', marginTop: '8px' }}
                          >
                            Copiar Resposta
                          </Button>
                        </div>
                      ) : (
                        <Button
                          variant="secondary"
                          size="sm"
                          disabled={respondingReviewId === review.id}
                          onClick={() => generateAiReviewResponse(review.id, review.author, review.text, review.type)}
                          style={{ alignSelf: 'flex-start' }}
                        >
                          {respondingReviewId === review.id ? "Interpretando..." : "✦ Responder via IA"}
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
