function getWesternAge(birthday) {
  let birth = new Date(birthday);
  let rightNow = new Date();
  let age = rightNow.getFullYear() - birth.getFullYear();

  let birthMonth = birth.getMonth();
  let thisMonth = rightNow.getMonth();

  let birthDate = birth.getDate();
  let thisDate = rightNow.getDate();

  if (birthMonth < thisMonth) {
    return age;
  } else if (birthMonth > thisMonth) {
    return age - 1;
  } else {
    if (birthDate < thisDate) {
      return age;
    } else {
      return age - 1;
    }
  }
}

// console.log(getWesternAge("1993-06-26"));

function getData(salesArr, reviewArr, likeArr) {
  sumAmount = 0;
  sumReview = 0;
  sumLike = 0;

  for (let i = 0; i < salesArr.length; i++) {
    sumAmount += salesArr[i][1];
  }
  for (let i = 0; i < reviewArr.length; i++) {
    sumReview += reviewArr[i][1];
  }
  for (let i = 0; i < likeArr.length; i++) {
    sumLike += likeArr[i][1];
  }

  let objData = {
    //sumAmount: sumAmount,
    // sumReview: sumReview,
    // sumLike: sumLike,
    sumAmount,
    sumReview,
    sumLike,
  };
  return objData;
}

const salesArr = [
  ["20190401", 34],
  ["20190402", 23],
  ["20190403", 29],
];
const reviewArr = [
  ["20190328", 3],
  ["20190401", 0],
  ["20190403", 1],
];
const likeArr = [
  ["20190328", 98],
  ["20190401", 102],
  ["20190403", 125],
];

console.log(getData(salesArr, reviewArr, likeArr));
