// Data model for the FloatingNodeHero.
//
// This is the inside of "Maxi" — the living Second Brain / knowledge system
// (the mind). "Maxi's Anatomy" is the interface that operates it (the body);
// Obsidian is backend only. The hero should read as a living map of Maxi
// floating in the air, not a generic word cloud.
//
// Structured as if it will later hydrate from real vault notes / smart-views /
// tags / projects. The plain-JS shape mirrors the TypeScript contract below:
//
//   type FloatingNode = {
//     id: string
//     label: string
//     type: 'note' | 'node' | 'project' | 'smart-view' | 'tag'
//            | 'concept' | 'agent' | 'research-area' | 'system'
//     route?: string   // placeholder routes for future wiring
//     weight?: number  // 1-10, used to bias size / cloud selection
//     group?: string
//   }
//
// `route` values are placeholders for future routing — they do not need real
// destinations yet. Until those routes exist, the hero wires clicks to a calm
// in-page scroll (see FloatingNodeHero) so nothing 404s.

export const floatingNodes = [
  // The mind itself + its branded surfaces
  { id: 'maxi', label: 'Maxi', type: 'system', route: '/', weight: 10, group: 'maxi' },
  { id: 'maxi-wiki', label: 'Maxi Wiki', type: 'system', route: '/wiki', weight: 9, group: 'maxi' },
  { id: 'maxi-graph', label: 'Maxi Graph', type: 'node', route: '/graph', weight: 9, group: 'maxi' },
  { id: 'maxi-integrity', label: 'Maxi Integrity', type: 'system', route: '/integrity', weight: 8, group: 'maxi' },
  { id: 'maxi-sources', label: 'Maxi Sources', type: 'note', route: '/sources', weight: 7, group: 'maxi' },
  { id: 'maxi-outputs', label: 'Maxi Outputs', type: 'note', route: '/outputs', weight: 7, group: 'maxi' },
  { id: 'maxi-skills', label: 'Maxi Skills', type: 'agent', route: '/skills', weight: 8, group: 'maxi' },

  // Core system identity
  { id: 'second-brain', label: 'Second Brain', type: 'system', route: '/work/second-brain', weight: 10, group: 'system' },
  { id: 'personal-os', label: 'Personal OS', type: 'system', route: '/work/maxisos', weight: 9, group: 'system' },
  { id: 'memory', label: 'Memory', type: 'system', route: '/notes?tag=memory', weight: 9, group: 'system' },
  { id: 'knowledge-graphs', label: 'Knowledge Graphs', type: 'concept', route: '/graph', weight: 9, group: 'thinking' },
  { id: 'obsidian-backend', label: 'Obsidian Backend', type: 'system', route: '/work/second-brain#obsidian', weight: 6, group: 'system' },
  { id: 'markdown-vaults', label: 'Markdown Vaults', type: 'system', route: '/notes?tag=markdown', weight: 6, group: 'system' },

  // The vault — atoms of thought
  { id: 'notes', label: 'Notes', type: 'note', route: '/notes', weight: 8, group: 'vault' },
  { id: 'nodes', label: 'Nodes', type: 'node', route: '/graph', weight: 8, group: 'vault' },
  { id: 'sources', label: 'Sources', type: 'note', route: '/sources', weight: 8, group: 'vault' },
  { id: 'outputs', label: 'Outputs', type: 'note', route: '/outputs', weight: 8, group: 'vault' },
  { id: 'decisions', label: 'Decisions', type: 'note', route: '/decisions', weight: 8, group: 'vault' },
  { id: 'projects', label: 'Projects', type: 'project', route: '/work', weight: 8, group: 'vault' },
  { id: 'people', label: 'People', type: 'note', route: '/notes?tag=people', weight: 6, group: 'vault' },
  { id: 'questions', label: 'Questions', type: 'note', route: '/notes?tag=questions', weight: 6, group: 'vault' },
  { id: 'source-pages', label: 'Source Pages', type: 'note', route: '/sources', weight: 6, group: 'vault' },

  // Intelligence — agents & smart views
  { id: 'ai-agents', label: 'AI Agents', type: 'agent', route: '/notes?tag=ai-agents', weight: 9, group: 'intelligence' },
  { id: 'smart-views', label: 'Smart Views', type: 'smart-view', route: '/smart-views', weight: 8, group: 'intelligence' },
  { id: 'jukan-mode', label: 'Jukan Mode', type: 'smart-view', route: '/notes?mode=jukan', weight: 7, group: 'intelligence' },
  { id: 'knowledge-clusters', label: 'Knowledge Clusters', type: 'concept', route: '/graph?view=clusters', weight: 7, group: 'intelligence' },

  // Integrity — the system keeping itself honest
  { id: 'citations', label: 'Citations', type: 'note', route: '/sources?view=citations', weight: 6, group: 'integrity' },
  { id: 'contradictions', label: 'Contradictions', type: 'note', route: '/integrity?view=contradictions', weight: 6, group: 'integrity' },
  { id: 'stale-claims', label: 'Stale Claims', type: 'note', route: '/integrity?view=stale', weight: 6, group: 'integrity' },

  // Thinking & creative throughput
  { id: 'thought-systems', label: 'Thought Systems', type: 'concept', route: '/notes?tag=thought-systems', weight: 7, group: 'thinking' },
  { id: 'writing-fuel', label: 'Writing Fuel', type: 'tag', route: '/notes?tag=writing-fuel', weight: 6, group: 'thinking' },
  { id: 'action-triggers', label: 'Action Triggers', type: 'tag', route: '/notes?tag=action-triggers', weight: 6, group: 'automation' },
  { id: 'automation', label: 'Automation', type: 'tag', route: '/notes?tag=automation', weight: 7, group: 'automation' },
  { id: 'decision-support', label: 'Decision Support', type: 'concept', route: '/notes?tag=decision-support', weight: 6, group: 'automation' },

  // Work — projects living inside Maxi
  { id: 'kairo', label: 'Kairo', type: 'project', route: '/work/kairo', weight: 8, group: 'work' },
  { id: 'melody', label: 'Melody', type: 'project', route: '/work/melody', weight: 7, group: 'work' },
  { id: 'maxisos', label: 'MaxisOS', type: 'project', route: '/work/maxisos', weight: 8, group: 'work' },

  // Research threads
  { id: 'research', label: 'Research', type: 'research-area', route: '/notes?tag=research', weight: 8, group: 'research' },
  { id: 'healthcare-ai', label: 'Healthcare AI', type: 'research-area', route: '/notes?tag=healthcare-ai', weight: 7, group: 'research' },
  { id: 'nursing-pathway', label: 'Nursing Pathway', type: 'research-area', route: '/notes?tag=nursing', weight: 6, group: 'research' },
  { id: 'market-research', label: 'Market Research', type: 'research-area', route: '/notes?tag=market-research', weight: 7, group: 'markets' },
  { id: 'ai-infrastructure', label: 'AI Infrastructure', type: 'research-area', route: '/notes?tag=ai-infrastructure', weight: 7, group: 'markets' },
  { id: 'semiconductors', label: 'Semiconductors', type: 'research-area', route: '/notes?tag=semiconductors', weight: 6, group: 'markets' },
  { id: 'supply-chains', label: 'Supply Chains', type: 'research-area', route: '/notes?tag=supply-chains', weight: 6, group: 'markets' },
  { id: 'memory-supercycle', label: 'Memory Supercycle', type: 'research-area', route: '/notes?tag=memory-supercycle', weight: 6, group: 'markets' },
  { id: 'cpo', label: 'CPO', type: 'concept', route: '/notes?tag=cpo', weight: 5, group: 'markets' },

  // Craft
  { id: 'product-design', label: 'Product Design', type: 'concept', route: '/notes?tag=product-design', weight: 6, group: 'craft' },
  { id: 'ux-systems', label: 'UX Systems', type: 'concept', route: '/notes?tag=ux-systems', weight: 6, group: 'craft' },
  { id: 'calm-software', label: 'Calm Software', type: 'concept', route: '/notes?tag=calm-software', weight: 6, group: 'craft' }
]

// The active center phrases that cross-fade one at a time in the hero.
// Maxi-centric set leads, with a few of the originals kept for variety.
export const focusPhrases = [
  'Maxi is in the air',
  'Notes are in the air',
  'Nodes are in the air',
  'Knowledge is in the air',
  'Memory is in the air',
  'Research is in the air',
  'Decisions are in the air',
  'Outputs are in the air',
  'Agents are in the air',
  'The graph is in the air',
  'Smart views are in the air',
  'Knowledge graphs are in the air',
  'Second brains are in the air'
]
