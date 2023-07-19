export const useMentors = () => {

  const shuffleArray = <T>(array: T[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const { me, users } = useUser()

  const getSuggestedMentors = () => {
    const authenticatedInterests = new Set(me.value.interests);
    const commonInterestsUsers = [];
  
    for (const user of users) {
      if (user.id !== me.value.id && user.mentor) {
        const commonInterests = new Set(user.interests.filter(interest => authenticatedInterests.has(interest)));
        if (commonInterests.size >= 2) {
          commonInterestsUsers.push(user);
        }
      }
    }

    return shuffleArray(commonInterestsUsers); 
  }

  return {
    getSuggestedMentors
  }
}