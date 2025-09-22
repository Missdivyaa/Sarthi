import { Waitlist } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  PlayCircle, 
  Users, 
  Zap, 
  BarChart3, 
  Shield,
  ArrowRight,
  Star,
  CheckCircle,
  Bot,
  Video,
  DollarSign,
  Target,
  Brain,
  Settings
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-white font-bold text-xl">Sarthi</span>
        </div>
        <Button 
          asChild 
          variant="outline" 
          className="border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-black transition-all duration-300"
        >
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-gray-100 text-gray-800 border-gray-200">
            <Star className="w-4 h-4 mr-2" />
            AI-Powered Webinar Platform
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent"> Webinars</span>
            <br />Into Sales Machines
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create engaging webinars, automate sales with AI agents, and convert leads into customers 
            with our all-in-one platform. No technical expertise required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/sign-in">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              <PlayCircle className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-gray-400">Webinars Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$2M+</div>
              <div className="text-gray-400">Revenue Generated</div>
            </div>
          </div>
        </div>

        {/* Interactive Features Section - Inspired by Cursor */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-gray-100 text-gray-800 border-gray-200">
              <Brain className="w-4 h-4 mr-2" />
              Powered by AI
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Build Webinar Sales Machines
              <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent"> Faster</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sarthi combines cutting-edge AI with intuitive design to automate your entire webinar sales process.
            </p>
          </div>

          <Tabs defaultValue="streaming" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-0.5 mb-8 overflow-hidden">
              <TabsTrigger 
                value="streaming" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-600 data-[state=active]:to-gray-800 data-[state=active]:text-white text-gray-400 rounded-lg transition-all duration-300 py-2 px-3 flex items-center justify-center m-0.5"
              >
                <Video className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Streaming</span>
              </TabsTrigger>
              <TabsTrigger 
                value="ai-agents" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-600 data-[state=active]:to-gray-800 data-[state=active]:text-white text-gray-400 rounded-lg transition-all duration-300 py-2 px-3 flex items-center justify-center m-0.5"
              >
                <Bot className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">AI Agents</span>
              </TabsTrigger>
              <TabsTrigger 
                value="analytics" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-600 data-[state=active]:to-gray-800 data-[state=active]:text-white text-gray-400 rounded-lg transition-all duration-300 py-2 px-3 flex items-center justify-center m-0.5"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Analytics</span>
              </TabsTrigger>
              <TabsTrigger 
                value="payments" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-600 data-[state=active]:to-gray-800 data-[state=active]:text-white text-gray-400 rounded-lg transition-all duration-300 py-2 px-3 flex items-center justify-center m-0.5"
              >
                <DollarSign className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Payments</span>
              </TabsTrigger>
              <TabsTrigger 
                value="rooms" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-600 data-[state=active]:to-gray-800 data-[state=active]:text-white text-gray-400 rounded-lg transition-all duration-300 py-2 px-3 flex items-center justify-center m-0.5"
              >
                <Users className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Rooms</span>
              </TabsTrigger>
              <TabsTrigger 
                value="automation" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-600 data-[state=active]:to-gray-800 data-[state=active]:text-white text-gray-400 rounded-lg transition-all duration-300 py-2 px-3 flex items-center justify-center m-0.5"
              >
                <Settings className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Auto</span>
              </TabsTrigger>
            </TabsList>

            {/* Streaming Tab */}
            <TabsContent value="streaming" className="mt-0">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mr-4">
                          <Video className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Live Streaming</h3>
                      </div>
                      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                        High-quality live streaming with OBS integration, real-time engagement tools, and seamless audience interaction.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">OBS Studio Integration</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Real-time Chat & Q&A</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">HD Video Quality</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Screen Sharing</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-gray-400 text-sm ml-4">Live Stream Dashboard</span>
                          </div>
                          <div className="space-y-3">
                            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* AI Agents Tab */}
            <TabsContent value="ai-agents" className="mt-0">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center space-x-3 mb-4">
                            <Bot className="w-5 h-5 text-purple-400" />
                            <span className="text-white font-semibold">AI Sales Agent</span>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-purple-500/20 rounded-lg p-3">
                              <p className="text-sm text-white">&ldquo;Hi! I&apos;m Sarah, your AI sales assistant. How can I help you today?&rdquo;</p>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-3">
                              <p className="text-sm text-gray-300">&ldquo;I&apos;m interested in your webinar platform&rdquo;</p>
                            </div>
                            <div className="bg-purple-500/20 rounded-lg p-3">
                              <p className="text-sm text-white">&ldquo;Great! Let me show you our features...&rdquo;</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mr-4">
                          <Bot className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">AI Sales Agents</h3>
                      </div>
                      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                        Automated AI agents that engage leads, answer questions, and close sales 24/7 with human-like conversations.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Natural Language Processing</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">24/7 Availability</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Lead Qualification</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Custom Training</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="mt-0">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mr-4">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Analytics & Tracking</h3>
                      </div>
                      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                        Comprehensive analytics to track leads, conversions, and optimize your sales funnel with real-time insights.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Real-time Dashboard</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Conversion Tracking</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Lead Scoring</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">ROI Analysis</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center space-x-3 mb-4">
                            <BarChart3 className="w-5 h-5 text-purple-400" />
                            <span className="text-white font-semibold">Analytics Dashboard</span>
                          </div>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-sm">Conversion Rate</span>
                              <span className="text-green-400 font-semibold">24.5%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-sm">Total Leads</span>
                              <span className="text-white font-semibold">1,247</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-sm">Revenue</span>
                              <span className="text-purple-400 font-semibold">$45,230</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payments Tab */}
            <TabsContent value="payments" className="mt-0">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center space-x-3 mb-4">
                            <DollarSign className="w-5 h-5 text-green-400" />
                            <span className="text-white font-semibold">Payment Processing</span>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-green-500/20 rounded-lg p-3">
                              <p className="text-sm text-white">✅ Payment Successful</p>
                              <p className="text-xs text-gray-400">$299.00 - Premium Plan</p>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-3">
                              <p className="text-sm text-gray-300">Processing refund...</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mr-4">
                          <DollarSign className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Secure Payments</h3>
                      </div>
                      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                        Integrated Stripe payments with one-click checkout, secure transaction processing, and automated billing.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Stripe Integration</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">One-Click Checkout</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Automated Billing</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Fraud Protection</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Breakout Rooms Tab */}
            <TabsContent value="rooms" className="mt-0">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mr-4">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Breakout Rooms</h3>
                      </div>
                      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                        Create private rooms for high-intent leads to interact with your AI sales agents in personalized sessions.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Private Sessions</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">AI-Powered Matching</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Real-time Collaboration</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Session Recording</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center space-x-3 mb-4">
                            <Users className="w-5 h-5 text-purple-400" />
                            <span className="text-white font-semibold">Breakout Room</span>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                <Bot className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-white text-sm">AI Sales Agent</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <Users className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-white text-sm">Lead Prospect</span>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-3 mt-4">
                              <p className="text-xs text-gray-400">Active conversation...</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Automation Tab */}
            <TabsContent value="automation" className="mt-0">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center space-x-3 mb-4">
                            <Settings className="w-5 h-5 text-purple-400" />
                            <span className="text-white font-semibold">Automation Workflow</span>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-white text-sm">Lead Captured</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <ArrowRight className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-white text-sm">AI Follow-up</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                                <Target className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-white text-sm">Qualification</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mr-4">
                          <Settings className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Smart Automation</h3>
                      </div>
                      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                        Automate your entire sales process with intelligent workflows, follow-ups, and lead nurturing sequences.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Workflow Automation</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Email Sequences</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Lead Scoring</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Smart Triggers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Optimized Waitlist Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-700/20 rounded-3xl blur-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
            
            {/* Main Waitlist Card */}
            <Card className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl waitlist-card waitlist-glow">
              <CardContent className="p-12">
                {/* Header Section */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl mb-6 shadow-lg">
                    <span className="text-white font-bold text-2xl">S</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    Ready to Transform Your
                    <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent"> Webinars?</span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Join 2,000+ marketers already on our waitlist. Get early access to Sarthi and start converting leads with AI-powered webinars.
                  </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10 waitlist-benefit">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Early Access</div>
                      <div className="text-gray-400 text-sm">Be among the first</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10 waitlist-benefit">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Exclusive Pricing</div>
                      <div className="text-gray-400 text-sm">50% off first year</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10 waitlist-benefit">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Priority Support</div>
                      <div className="text-gray-400 text-sm">Direct access to team</div>
                    </div>
                  </div>
                </div>

                {/* Waitlist Form */}
                <div className="max-w-md mx-auto">
                  <div className="relative">
        <Waitlist />
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <span>Secure & Private</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>No Spam</span>
                    </div>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="text-center">
                    <p className="text-gray-400 mb-4">Join industry leaders already on our waitlist</p>
                    <div className="flex items-center justify-center space-x-8 opacity-60">
                      <div className="text-white font-semibold">2,000+</div>
                      <div className="w-px h-6 bg-gray-400"></div>
                      <div className="text-white font-semibold">50+</div>
                      <div className="w-px h-6 bg-gray-400"></div>
                      <div className="text-white font-semibold">$500K+</div>
                    </div>
                    <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mt-2">
                      <span>Marketers</span>
                      <span>Companies</span>
                      <span>Revenue</span>
                    </div>
                  </div>
                </div>

                {/* Alternative Action */}
                <div className="text-center mt-8">
                  <p className="text-gray-400 mb-4">Already have access?</p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-black transition-all duration-300"
                  >
                    <Link href="/sign-in" className="flex items-center">
                      <ArrowRight className="mr-2 w-4 h-4" />
                      Sign In to Your Account
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Sarthi. All rights reserved. | Secured by Clerk
          </p>
        </div>
      </footer>
    </div>
  )
}