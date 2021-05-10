export const getBirthday = (birthdate: any) => {
  const now = new Date().getFullYear();
  const birth = birthdate.substring(0, 4);

  return now - birth;
};
