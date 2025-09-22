'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Bot, Play, Pause, Trash2, Edit, Search, Plus } from 'lucide-react'

type Agent = {
  id: string
  name: string
  description: string
  status: 'active' | 'training' | 'inactive'
  conversations: number
  successRate: number
  tags: string[]
}

type Props = Record<string, never>

const AiAgentsPage = () => {
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: '1',
      name: 'Sarah - Sales Agent',
      description: 'Specializes in lead qualification and closing high-ticket sales',
      status: 'active',
      conversations: 127,
      successRate: 78,
      tags: ['Lead Qualification', 'Sales Closing', 'Follow-up']
    },
    {
      id: '2',
      name: 'Mike - Support Agent',
      description: 'Handles customer support and technical questions',
      status: 'training',
      conversations: 89,
      successRate: 92,
      tags: ['Support', 'Technical', 'FAQ']
    },
    {
      id: '3',
      name: 'Emma - Follow-up Agent',
      description: 'Manages follow-up sequences and nurture campaigns',
      status: 'inactive',
      conversations: 203,
      successRate: 65,
      tags: ['Follow-up', 'Nurture', 'Email']
    }
  ])

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [newAgent, setNewAgent] = useState({
    name: '',
    description: '',
    tags: ''
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [isCreating, setIsCreating] = useState(false)

  const filteredAgents = agents.filter(agent => 
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsCreateModalOpen(false)
      }
    }
    
    if (isCreateModalOpen) {
      document.addEventListener('keydown', handleEsc)
      return () => document.removeEventListener('keydown', handleEsc)
    }
  }, [isCreateModalOpen])

  const handleCreateAgent = async () => {
    console.log('Creating agent with:', newAgent) // Debug log
    setIsCreating(true)
    
    try {
      if (newAgent.name && newAgent.description) {
        const agent: Agent = {
          id: Date.now().toString(),
          name: newAgent.name,
          description: newAgent.description,
          status: 'active',
          conversations: 0,
          successRate: 0,
          tags: newAgent.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        }
        
        console.log('New agent created:', agent) // Debug log
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500))
        
        setAgents([...agents, agent])
        setNewAgent({ name: '', description: '', tags: '' })
        setIsCreateModalOpen(false)
        
        // Show success message
        alert('Agent created successfully!')
      } else {
        alert('Please fill in both Agent Name and Description')
      }
    } catch (error) {
      console.error('Error creating agent:', error)
      alert('Error creating agent. Please try again.')
    } finally {
      setIsCreating(false)
    }
  }

  const handleToggleStatus = (id: string) => {
    setAgents(agents.map(agent => {
      if (agent.id === id) {
        const newStatus = agent.status === 'active' ? 'inactive' : 'active'
        return { ...agent, status: newStatus }
      }
      return agent
    }))
  }

  const handleDeleteAgent = (id: string) => {
    setAgents(agents.filter(agent => agent.id !== id))
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
      case 'training':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Training</Badge>
      case 'inactive':
        return <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30">Inactive</Badge>
      default:
        return <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30">Unknown</Badge>
    }
  }
  return (
    <div className="w-full h-screen flex flex-col px-6 md:px-8 lg:px-10 xl:px-12">
      {/* Simple Header */}
      <div className="mt-6">
        <div className="w-full flex justify-between items-center mb-6">
          <h1 className="text-white text-3xl font-semibold">AI Sales Agents</h1>
          <Button 
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Agent
          </Button>
        </div>
        
        <div className="w-full mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="text"
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-md bg-gray-800 border-gray-600 text-white"
            />
          </div>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAgents.map((agent) => (
            <Card key={agent.id} className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white">{agent.name}</CardTitle>
                  {getStatusBadge(agent.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-300">{agent.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.tags.map((tag, index) => (
                      <Badge key={index} className="text-xs border border-gray-600">{tag}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="text-sm text-gray-400">
                    <span className="block">Conversations: {agent.conversations}</span>
                    <span className="block">Success Rate: {agent.successRate}%</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="h-8 w-8 p-0 bg-gray-700 hover:bg-gray-600"
                      onClick={() => handleToggleStatus(agent.id)}
                    >
                      {agent.status === 'active' ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    </Button>
                    <Button size="sm" className="h-8 w-8 p-0 bg-gray-700 hover:bg-gray-600">
                      <Edit className="w-3 h-3" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="h-8 w-8 p-0 bg-red-700 hover:bg-red-600 text-red-400 hover:text-red-300"
                      onClick={() => handleDeleteAgent(agent.id)}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State - Only show if no agents */}
        {filteredAgents.length === 0 && (
          <div className="mt-8 text-center">
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-8">
              <Bot className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">No AI Agents Yet</h3>
              <p className="text-gray-400 mb-4">Create your first AI sales agent to start automating your sales process</p>
              <Button 
                onClick={() => setIsCreateModalOpen(true)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Agent
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Simple Modal */}
      {isCreateModalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setIsCreateModalOpen(false)}
        >
          <div 
            className="bg-gray-900 border border-gray-700 rounded-lg p-6 w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-white text-xl font-semibold mb-4">Create New AI Agent</h2>
            <div className="text-xs text-gray-400 mb-2">
              Debug: {agents.length} agents, Creating: {isCreating ? 'Yes' : 'No'}
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-300 block mb-2">Agent Name</Label>
                <Input
                  id="name"
                  value={newAgent.name}
                  onChange={(e) => setNewAgent({...newAgent, name: e.target.value})}
                  placeholder="e.g., Sales Assistant"
                  className="bg-gray-800 border-gray-600 text-white w-full"
                />
              </div>
              
              <div>
                <Label htmlFor="description" className="text-gray-300 block mb-2">Description</Label>
                <Textarea
                  id="description"
                  value={newAgent.description}
                  onChange={(e) => setNewAgent({...newAgent, description: e.target.value})}
                  placeholder="Describe what this agent does..."
                  className="bg-gray-800 border-gray-600 text-white w-full"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="tags" className="text-gray-300 block mb-2">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={newAgent.tags}
                  onChange={(e) => setNewAgent({...newAgent, tags: e.target.value})}
                  placeholder="Sales, Support, Follow-up"
                  className="bg-gray-800 border-gray-600 text-white w-full"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-6">
              <Button 
                onClick={() => setIsCreateModalOpen(false)}
                className="bg-gray-700 hover:bg-gray-600 text-white"
              >
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  console.log('Button clicked!')
                  handleCreateAgent()
                }}
                disabled={isCreating}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50"
              >
                {isCreating ? 'Creating...' : 'Create Agent'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AiAgentsPage
