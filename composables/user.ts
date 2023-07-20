type User = {
  id: number;
  name: string;
  email: string;
  interests: string[];
  country: string;
  role: string;
  workplace: string;
  alumni: boolean;
  mentor: boolean;
}

export const useUser = () => {

  // Fakes users data
  const users: User[] = [
    {
      id: 234234,
      name: 'Fabien Luçon',
      email: 'fabien.lucon@edu.devinci.fr',
      role: 'Head of Design',
      workplace: 'Airbnb',
      interests: ['Stratégie business', 'Analyse de données', 'Intrapreneuriat et entrepreneuriat', 'Blockchain'],
      country: 'France',
      alumni: true,
      mentor: true
    },
    {
      id: 134884,
      name: 'Aurélien Delicourt',
      email: 'aurelien.delicourt@edu.devinci.fr',
      role: 'Product Designer',
      workplace: 'Engie',
      interests: ['Stratégie business', 'Analyse de données', 'Intrapreneuriat et entrepreneuriat', 'RH'],
      country: 'France',
      alumni: true,
      mentor: false
    },
    {
      id: 237799,
      name: 'Guillaume Comparot',
      email: 'guillaume.comparot@edu.devinci.fr',
      role: 'Ui Designer',
      workplace: 'Passage des plaisirs',
      interests: ['Marketing', 'Analyse de données', 'Intrapreneuriat et entrepreneuriat'],
      country: 'France',
      alumni: true,
      mentor: true
    },
    {
      id: 231797,
      name: 'Franck Lacroix',
      email: 'franck.lacroix@edu.devinci.fr',
      role: 'Ui Designer',
      workplace: 'Veolia',
      interests: ['Marketing', 'Analyse de données', 'Intrapreneuriat et entrepreneuriat', 'Blockchain'],
      country: 'France',
      alumni: false,
      mentor: false
    },
    {
      id: 211797,
      name: 'Pablo Jackson',
      email: 'pablo.jackson@edu.devinci.fr',
      role: 'Ux Designer',
      workplace: 'Inetum',
      interests: ['Cybersécurité', 'Analyse de données', 'Blockchain'],
      country: 'France',
      alumni: false,
      mentor: false
    },
    {
      id: 237497,
      name: 'Pablo Da Costa',
      email: 'pablo.dacosta@edu.devinci.fr',
      role: 'Ux Designer',
      workplace: 'SNCF',
      interests: ['Animation 3D', 'Product Management', 'Blockchain'],
      country: 'France',
      alumni: true,
      mentor: true
    },
    {
      id: 237497,
      name: 'Edouard Donnais',
      email: 'edouard.donnais@edu.devinci.fr',
      role: 'Ux Designer',
      workplace: 'Inetum',
      interests: ['Intelligence artificielle', 'Product Management', 'Blockchain'],
      country: 'France',
      alumni: false,
      mentor: false
    },
    {
      id: 237221,
      name: 'Edouard Chirac',
      email: 'edouard.chirac@edu.devinci.fr',
      role: 'Ux Designer',
      workplace: 'Air France',
      interests: ['Intelligence artificielle', 'Product Management', 'Blockchain'],
      country: 'France',
      alumni: true,
      mentor: false
    },
    {
      id: 234421,
      name: 'Jean Tablis',
      email: 'jean.tablis@edu.devinci.fr',
      role: 'Développeur Web',
      workplace: 'Sopra Steria',
      interests: ['Intelligence artificielle', ' Gestion de projet ', 'Blockchain'],
      country: 'France',
      alumni: true,
      mentor: true
    },
  ]

  const me = useState<User | null>('me')



  const login = (email: string) => {
    const user = users.find(user => user.email === email)
    if (!user) {
      throw new Error(`User with email ${email} not found`)
    }
    me.value = user;
  }

  const logout = () => {
    me.value = null
  }

  const isAuthenticated = computed(() => {
    return !!me.value
  })

  const getUser = (id: number) => {
    return users.find(user => user.id === id)
  }

  return {
    users,
    me,
    login,
    logout,
    isAuthenticated,
    getUser
  }
}