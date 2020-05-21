
// import faker from 'faker'

const createSchool = (id, name, coverImage = 'https://via.placeholder.com/190', pitch, location) => ({ id, name, coverImage, pitch, location })

export const getFakeSchools = (noOfSchools) => {
  const schools = []
  for (let noOfSchoolsAdded = 0; noOfSchoolsAdded < noOfSchools; noOfSchoolsAdded++) {
    const element = createSchool(
      noOfSchoolsAdded,
      'Test School ' + noOfSchoolsAdded,
      undefined,
      'World class education from experienced teachers aided by world class Artifical Intellenge of Sikshya',
      'Some Location, District'
    )
    schools.push(element)
  }
  return schools
}
