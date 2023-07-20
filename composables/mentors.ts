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

  const getSuggestedMentors = (count: number = 3) => {
    if (me.value === null) return []
    const authenticatedInterests = new Set(me.value.interests);
    const commonInterestsUsers = [];

    for (const user of users) {
      if (me.value && user.id !== me.value.id && user.alumni && user.mentor) {
        const commonInterests = new Set(user.interests.filter(interest => authenticatedInterests.has(interest)));
        if (commonInterests.size >= 1) {
          commonInterestsUsers.push(user);
        }
      }
    }

    shuffleArray(commonInterestsUsers);
    return commonInterestsUsers.slice(0, count);
  }

  return {
    getSuggestedMentors
  }
}