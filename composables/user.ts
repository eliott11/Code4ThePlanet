type User = {
  id: number;
  name: string;
  email: string;
  interests: string[];
  countrty: string;
  role: string;
  workplace: string;
  mentor: boolean;
}

export const useUser = () => {

  // Fakes users data
  const users: User[] = [
    { 
      id: 0, 
      name: 'John Doe', 
      email: 'john.doe@gmail.com', 
      interests: ['music', 'sports'], 
      countrty: 'USA', 
      role: 'Head of Design', 
      workplace: 'Google' ,
      mentor: true
    },
  ]

  const me = useLocalStorage<User>('me', null)

  const login = (email: string) => {
    const user = users.find(user => user.email === email)
    if (!user) {
      throw new Error(`User with email ${email} not found`)
    }
    me.value = user
  }

  const logout = () => {
    me.value = null
  }

  const isAuthenticated = computed(() => {
    return !!me.value
  })

  return {
    users,
    me,
    login,
    logout,
    isAuthenticated
  }
}