'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Zap, 
  Target, 
  Settings, 
  ChevronRight, 
  Menu, 
  X,
  Globe,
  Database,
  Download,
  Shield,
  Clock,
  Users
} from 'lucide-react';

const ScrapingLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Súper Rápido",
      description: "Procesa miles de páginas en minutos con nuestro motor optimizado de alta velocidad.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precisión Total",
      description: "Algoritmos avanzados que extraen exactamente los datos que necesitas sin ruido.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Fácil de Usar",
      description: "Interfaz intuitiva sin conocimientos técnicos. Configura en pocos clics.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { icon: <Globe className="h-6 w-6" />, value: "10M+", label: "Páginas Procesadas" },
    { icon: <Users className="h-6 w-6" />, value: "5K+", label: "Usuarios Activos" },
    { icon: <Database className="h-6 w-6" />, value: "99.9%", label: "Precisión" },
    { icon: <Clock className="h-6 w-6" />, value: "<1s", label: "Tiempo Respuesta" }
  ];

  const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-white font-bold text-xl">ScrapeMaster</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-white transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('funciones')} className="text-gray-300 hover:text-white transition-colors">
                Funciones
              </button>
              <button onClick={() => scrollToSection('demo')} className="text-gray-300 hover:text-white transition-colors">
                Demo
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-300 hover:text-white transition-colors">
                Contacto
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col space-y-4 mt-4">
                <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-white transition-colors text-left">
                  Inicio
                </button>
                <button onClick={() => scrollToSection('funciones')} className="text-gray-300 hover:text-white transition-colors text-left">
                  Funciones
                </button>
                <button onClick={() => scrollToSection('demo')} className="text-gray-300 hover:text-white transition-colors text-left">
                  Demo
                </button>
                <button onClick={() => scrollToSection('contacto')} className="text-gray-300 hover:text-white transition-colors text-left">
                  Contacto
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
            🚀 Ahora con IA integrada
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Extrae Datos como un
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Experto</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Automatiza la recolección de información web con nuestra herramienta de scraping inteligente. 
            Rápido, preciso y sorprendentemente fácil de usar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg font-semibold"
              onClick={() => scrollToSection('demo')}
            >
              Probar Ahora
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => scrollToSection('funciones')}
            >
              Ver Funciones
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funciones" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Por qué elegir ScrapeMaster?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Diseñado para desarrolladores y empresas que necesitan datos confiables y rápidos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¡Próximamente!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Estamos trabajando en una demo interactiva donde podrás probar todas las funcionalidades
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                  <Settings className="h-12 w-12 text-white animate-spin" style={{animationDuration: '3s'}} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  🚧 Área de Demo en Construcción
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Aquí podrás probar el scraping en tiempo real, configurar extractores personalizados 
                  y ver los resultados al instante. ¡Será increíble!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <Globe className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">URL Input</p>
                  <p className="text-gray-400 text-sm">Introduce cualquier URL</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <Target className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Selectores</p>
                  <p className="text-gray-400 text-sm">Define qué extraer</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <Download className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Export</p>
                  <p className="text-gray-400 text-sm">JSON, CSV, Excel</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6"
                onClick={() => scrollToSection('contacto')}
              >
                Notificarme cuando esté listo
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-white font-bold text-xl">ScrapeMaster</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                La herramienta de scraping más potente y fácil de usar del mercado. 
                Extrae datos de cualquier sitio web con confianza y velocidad.
              </p>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-green-400 text-sm font-medium">100% Seguro y Legal</span>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Producto</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('funciones')} className="block text-gray-300 hover:text-white transition-colors">
                  Funciones
                </button>
                <button onClick={() => scrollToSection('demo')} className="block text-gray-300 hover:text-white transition-colors">
                  Demo
                </button>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Documentación
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  API
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contacto</h3>
              <div className="space-y-2">
                <a href="mailto:info@scrapemaster.com" className="block text-gray-300 hover:text-white transition-colors">
                  info@scrapemaster.com
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Soporte Técnico
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Documentación
                </a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                  Comunidad
                </a>
              </div>
            </div>
          </div>

          <Separator className="bg-white/10 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ScrapeMaster. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ScrapingLanding;
