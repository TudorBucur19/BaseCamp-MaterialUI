export const ratingCalculator = (ratings) => {
    const ratingsValues = ratings && ratings.map(item => item.rating);
    const arrSum = (accumulator, number) => {
        return accumulator + number;
    };
    const overaAllRating = ratingsValues?.reduce(arrSum, 0) / ratings?.length;
    return overaAllRating;
};